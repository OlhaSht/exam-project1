const db = require('../models');
const ServerError =require('../errors/ServerError');

module.exports.getAllOffersForModerator = async (req, res, next) => {
  try {
    const allOffers = await db.Offers.findAll({
      attributes: { exclude: ['userId', 'contestId', 'moderatorStatus'] },
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

    res.send(allOffers);
  } catch (error) {
    console.error(error);
    next(new ServerError('Failed to retrieve offers for moderator.'));
  }
};
//-----------------------------------------------------------------------------------------------------------

module.exports.approveOfferByModerator = async (req, res, next) => {
  try {
    const offer = await db.Offers.findByPk(req.params.id);
    if (!offer) {
      return res.status(404).send({ message: 'Offer not found' });
    }

    offer.moderatorStatus = 'approved';
    await offer.save();

    res.send({ message: 'Offer approved by moderator' });
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

module.exports.updateOfferStatus = async (req, res, next) => {
  try {
    const { offerId, moderatorStatus } = req.body;
    if (![CONSTANTS.OFFER_STATUS_REJECTED].includes(moderatorStatus)) {
      return next(new ServerError('Invalid status'));
    }

//     const updatedOffer = await db.Offers.update(
//       { moderatorStatus },
//       { where: { id: offerId }, returning: true }
//     );

//     if (!updatedOffer[0]) {
//       return next(new ServerError('Offer not found'));
//     }

//     res.send(updatedOffer[1][0]);
//   } catch (err) {
//     next(new ServerError('Failed to update offer status'));
//   }
// };


// // Получение всех оферов для общего использования
// module.exports.getAllOffers = async (req, res, next) => {
//   try {
//     const offers = await db.Offers.findAll({
//       include: ['Users', 'Contests'], 
//     });
//     res.send(offers);
//   } catch (err) {
//     console.error(err);
//     next(new ServerError('Failed to retrieve all offers.'));
//   }
// };
