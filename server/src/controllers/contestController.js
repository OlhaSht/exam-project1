const db = require('../models');
const ServerError = require('../errors/ServerError');
const contestQueries = require('./queries/contestQueries');
const UtilFunctions = require('../utils/functions');
const CONSTANTS = require('../constants');

module.exports.dataForContest = async (req, res, next) => {
  const response = {};
  try {
    const {
      body: { characteristic1, characteristic2 },
    } = req;
    console.log(req.body, characteristic1, characteristic2);
    const types = [characteristic1, characteristic2, 'industry'].filter(
      Boolean
    );

    const characteristics = await db.Selects.findAll({
      where: {
        type: {
          [db.Sequelize.Op.or]: types,
        },
      },
    });
    if (!characteristics) {
      return next(new ServerError());
    }
    characteristics.forEach((characteristic) => {
      if (!response[characteristic.type]) {
        response[characteristic.type] = [];
      }
      response[characteristic.type].push(characteristic.describe);
    });
    res.send(response);
  } catch (err) {
    console.log(err);
    next(new ServerError('cannot get contest preferences'));
  }
};

module.exports.getContestById = async (req, res, next) => {
  try {
    let contestInfo = await db.Contests.findOne({
      where: { id: req.headers.contestid },
      order: [[db.Offers, 'id', 'asc']],
      include: [
        {
          model: db.Users,
          required: true,
          attributes: {
            exclude: ['password', 'role', 'balance', 'accessToken'],
          },
        },
        {
          model: db.Offers,
          required: false,
          where:
            req.tokenData.role === CONSTANTS.CREATOR
              ? { userId: req.tokenData.userId }
              : {},
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
              where: { userId: req.tokenData.userId },
              attributes: { exclude: ['userId', 'offerId'] },
            },
          ],
        },
      ],
    });

    if (!contestInfo) {
      throw new Error('Contest not found');
    }

    contestInfo = contestInfo.get({ plain: true });

    contestInfo.Offers = contestInfo.Offers.filter(
      (offer) => offer.moderatorStatus === 'approved'
    );

    contestInfo.Offers.forEach((offer) => {
      if (offer.Rating) {
        offer.mark = offer.Rating.mark;
      }
      delete offer.Rating;
    });

    res.send(contestInfo);
  } catch (e) {
    next(new ServerError());
  }
};

module.exports.downloadFile = async (req, res, next) => {
  const file = CONSTANTS.CONTESTS_DEFAULT_DIR + req.params.fileName;
  res.download(file);
};

module.exports.updateContest = async (req, res, next) => {
  if (req.file) {
    req.body.fileName = req.file.filename;
    req.body.originalFileName = req.file.originalname;
  }
  const contestId = req.body.contestId;
  delete req.body.contestId;
  try {
    const updatedContest = await contestQueries.updateContest(req.body, {
      id: contestId,
      userId: req.tokenData.userId,
    });
    res.send(updatedContest);
  } catch (e) {
    next(e);
  }
};

module.exports.getCustomersContests = (req, res, next) => {
  db.Contests.findAll({
    where: { status: req.query.status, userId: req.tokenData.userId },
    limit: Number(req.query.limit),
    offset: req.query.offset ? Number(req.query.offset) : 0,
    order: [['id', 'DESC']],
    include: [
      {
        model: db.Offers,
        required: false,
        attributes: ['id'],
      },
    ],
  })
    .then((contests) => {
      contests.forEach(
        (contest) =>
          (contest.dataValues.count = contest.dataValues.Offers.length)
      );
      let haveMore = true;
      if (contests.length === 0) {
        haveMore = false;
      }
      res.send({ contests, haveMore });
    })
    .catch((err) => next(new ServerError(err)));
};

// module.exports.getContests = (req, res, next) => {
//   const predicates = UtilFunctions.createWhereForAllContests(
//     req.query.typeIndex,
//     req.query.contestId,
//     req.query.industry,
//     req.query.awardSort
//   );
//   console.log('predicates from getContests====', predicates);
//   db.Contests.findAll({
//     where: predicates.where,
//     order: predicates.order,
//     limit: req.query.limit,
//     offset: req.query.offset ? req.query.offset : 0,
//     include: [
//       {
//         model: db.Offers,
//         required: req.query.ownEntries,
//         where: req.query.ownEntries ? { userId: req.tokenData.userId } : {},
//         attributes: ['id'],
//       },
//     ],
//   })
//     .then((contests) => {
//       console.log('contests from then getContests////', contests);
//       contests.forEach(
//         (contest) =>
//           (contest.dataValues.count = contest.dataValues.Offers.length)
//       );
//       let haveMore = true;
//       if (contests.length === 0) {
//         haveMore = false;
//       }
//       res.send({ contests, haveMore });
//       console.log('{ contests, haveMore }from then getContests////', {
//         contests,
//         haveMore,
//       });
//     })
//     .catch((err) => {
//       next(new ServerError());
//     });
// };

module.exports.getContests = (req, res, next) => {
  const predicates = UtilFunctions.createWhereForAllContests(
    req.query.typeIndex,
    req.query.contestId,
    req.query.industry,
    req.query.awardSort
  );

  db.Contests.findAll({
    where: predicates.where,
    order: predicates.order,
    limit: req.query.limit,
    offset: req.query.offset ? req.query.offset : 0,
    include: [
      {
        model: db.Offers,
        required: req.query.ownEntries === 'true',
        where:
          req.query.ownEntries === 'true'
            ? { userId: req.tokenData.userId }
            : {},
        attributes: ['id'],
      },
    ],
  })
    .then((contests) => {
      contests.forEach(
        (contest) =>
          (contest.dataValues.count = contest.dataValues.Offers.length)
      );

      res.send({
        contests,
        haveMore: contests.length !== 0,
      });
    })
    .catch((err) => next(new ServerError()));
};
