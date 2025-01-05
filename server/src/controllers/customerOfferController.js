const db = require('../models');
const ServerError = require('../errors/ServerError');

module.exports.getApprovedOffersForCustomer = async (req, res, next) => {
    try {
      const contestsWithOffers = await db.Contests.findAll({
        where: { userId: req.tokenData.userId },
        include: [
          {
            model: db.Offers,
            required: true,
            where: { moderatorStatus: 'approved' },
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
          },
        ],
      });
  
      res.send(contestsWithOffers);
    } catch (error) {
      console.error(error);
      next(new ServerError('Failed to retrieve approved offers for customer.'));
    }
  };
  