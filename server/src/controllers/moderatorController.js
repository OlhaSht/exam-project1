const db = require('../models');
const ServerError =require('../errors/ServerError');
const sendModeratorDecision = require('../utils/moderatorMailer'); 

module.exports.getAllOffersForModerator = async (req, res, next) => {
  const { page = 1, limit = 5 } = req.query; 

  try {
    const offset = (page - 1) * limit; 

    console.log('/////////',`Page: ${page}, Limit: ${limit}, Offset: ${offset}`);


    const allOffers = await db.Offers.findAndCountAll({
      limit: parseInt(limit), 
      offset: parseInt(offset), 
      attributes: { exclude: ['userId', 'contestId', 'status'] },
      include: [
        {
          model: db.Users,
          required: true,
          attributes: {
            exclude: ['password', 'role', 'balance', 'accessToken'],
          },
        },
        {
          model: db.Ratings,
          required: false,
          attributes: { exclude: ['userId', 'offerId'] },
        },
      ],
    });

    res.send({
      total: allOffers.count, 
      offers: allOffers.rows, 
      totalPages: Math.ceil(allOffers.count / limit), 
      currentPage: parseInt(page), 
    });
  } catch (error) {
    console.error(error);
    next(new ServerError('Failed to retrieve offers for moderator.'));
  }
};

//-----------------------------------------------------------------------------------------------------------

module.exports.approveOfferByModerator = async (req, res, next) => {
  try {
    const offer = await db.Offers.findByPk(req.params.id, {
      include: [
        {
          model: db.Users, 
          attributes: ['email'],
        },
      ],
    });

    if (!offer) {
      return res.status(404).send({ message: 'Offer not found' });
    }
    
    offer.moderatorStatus = 'approved';
    await offer.save();
    
    const email = offer.User.email; 
    const subject = 'Ваш оффер схвалено';
    const message = `Вітаємо! Ваш оффер с ID ${offer.id} було  схвалено модератором. Дякуємо, що обрали нас!`;

    try {
      await sendModeratorDecision(email, subject, message);
      console.log(`Email успешно отправлен на ${email}`);
    } catch (error) {
      console.error('Ошибка при отправке email:', error);
    }

    res.send({ message: 'Offer approved by moderator and email sent' });
  } catch (error) {
    console.error(error);
    next(new ServerError('Failed to approve the offer.'));
  }
};


//------------------------------------------------------------------------------

module.exports.rejectOfferByModerator = async (req, res, next) => {
  try {
    const offer = await db.Offers.findByPk(req.params.id);
    if (!offer) {
      return res.status(404).send({ message: 'Offer not found' });
    }

    offer.moderatorStatus = 'rejected';
    await offer.save();

    res.send({ message: 'Offer rejected by moderator' });
  } catch (error) {
    console.error(error);
    next(new ServerError('Failed to reject the offer.'));
  }
};



module.exports.sendEmail = async (req, res) => {
  const { email, subject, message } = req.body; 

  try {
    await sendModeratorDecision(email, subject, message);
    res.status(200).json({ success: true, message: 'Email успешно отправлен!' });
  } catch (error) {
    console.error('Ошибка при отправке email:', error);
    res.status(500).json({ success: false, message: 'Ошибка при отправке email', error });
  }
};
