const db = require('../models');
const ServerError =require('../errors/ServerError');

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
