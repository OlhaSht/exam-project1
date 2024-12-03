const db = require('../models');
const ServerError = require('../errors/ServerError');
const RightsError = require('../errors/RightsError');
const CONSTANTS = require('../constants');

module.exports.getAllOffers = async (req, res, next) => {
  try {
    if (req.tokenData.role !== CONSTANTS.MODERATOR) {
      return next(new RightsError('Only moderators can view all offers'));
    }
    const offers = await db.Offers.findAll({
      include: [
        {
          model: db.Users,
          attributes: ['id', 'firstName', 'lastName', 'displayName', 'email'],
        },
        {
          model: db.Contests,
          attributes: ['id', 'title', 'status'],
        },
      ],
    });
    res.send(offers);
  } catch (err) {
    next(new ServerError('Failed to fetch offers'));
  }
};

module.exports.updateOfferStatus = async (req, res, next) => {
  try {
    if (req.tokenData.role !== CONSTANTS.MODERATOR) {
      return next(new RightsError('Only moderators can update offer status'));
    }

    const { offerId, status } = req.body;
    if (![CONSTANTS.OFFER_STATUS_REJECTED].includes(status)) {
      return next(new ServerError('Invalid status'));
    }

    const updatedOffer = await db.Offers.update(
      { status },
      { where: { id: offerId }, returning: true }
    );

    if (!updatedOffer[0]) {
      return next(new ServerError('Offer not found'));
    }

    res.send(updatedOffer[1][0]);
  } catch (err) {
    next(new ServerError('Failed to update offer status'));
  }
};

module.exports.getMyOffers = async (req, res, next) => {
  try {
    const offers = await db.Offers.findAll({
      where: { userId: req.tokenData.userId },
      include: [
        {
          model: db.Contests,
          attributes: ['id', 'title', 'status'],
        },
      ],
    });
    res.send(offers);
  } catch (err) {
    next(new ServerError('Failed to fetch your offers'));
  }
};

module.exports.createOffer = async (req, res, next) => {
  try {
    const { contestId, text, fileName } = req.body;
    const offerData = {
      userId: req.tokenData.userId,
      contestId,
      text: text || null,
      fileName: fileName || null,
      status: CONSTANTS.OFFER_STATUS_PENDING, // Начальный статус
    };

    const newOffer = await db.Offers.create(offerData);
    res.send(newOffer);
  } catch (err) {
    next(new ServerError('Failed to create offer'));
  }
};
