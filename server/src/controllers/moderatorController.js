const db = require('../models');
const ServerError =require('../errors/ServerError');
const RightsError = require('../errors/RightsError');
const CONSTANTS = require('../constants');

module.exports.getAllOffersForModerator = async (req, res, next) => {
  try {
    if (req.tokenData.role !== CONSTANTS.MODERATOR) {
      return next(new RightsError('Access denied. Only moderators can view offers.'));
    }

    const allOffers = await db.Offers.findAll({
      attributes: { exclude: ['userId', 'contestId'] },
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

module.exports.getAllOffers = async (req, res, next) => {
  try {
    const offers = await db.Offers.findAll({
      include: ['Users', 'Contests'], 
    });
    res.send(offers);
  } catch (err) {
    next(err);
  }
};

module.exports.approveOffer = async (req, res, next) => {
  try {
    const offer = await db.Offers.findByPk(req.params.id);
    if (!offer) return res.status(404).send({ message: 'Offer not found' });

    offer.status = 'approved';
    await offer.save();
    res.send({ message: 'Offer approved' });
  } catch (err) {
    next(err);
  }
};

module.exports.rejectOffer = async (req, res, next) => {
  try {
    const offer = await db.Offers.findByPk(req.params.id);
    if (!offer) return res.status(404).send({ message: 'Offer not found' });

    offer.status = 'rejected';
    await offer.save();
    res.send({ message: 'Offer rejected' });
  } catch (err) {
    next(err);
  }
};
