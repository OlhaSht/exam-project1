
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const sequelizerc = require(path.resolve(__dirname, '..', '..', '.sequelizerc'));
const configPath = sequelizerc.config;
const config = require(configPath)[ env ];
const db = {};

const sequelize = new Sequelize(config.database, config.username,
  config.password, config);

  console.log('Path to config:', sequelizerc.config);
  console.log('Loaded config:', config);

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) &&
      (file.slice(-3) === '.js');
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[ model.name ] = model;
  });

db[ 'Contests' ].belongsTo(db[ 'Users' ],
  { foreignKey: 'userId', sourceKey: 'id' });
db[ 'Contests' ].hasMany(db[ 'Offers' ],
  { foreignKey: 'contestId', targetKey: 'id' });

db[ 'Users' ].hasMany(db[ 'Offers' ],
  { foreignKey: 'userId', targetKey: 'id' });
db[ 'Users' ].hasMany(db[ 'Contests' ],
  { foreignKey: 'userId', targetKey: 'id' });
db[ 'Users' ].hasMany(db[ 'Ratings' ],
  { foreignKey: 'userId', targetKey: 'id' });
db[ 'Users' ].hasMany(db[ 'Message' ],
  { foreignKey: 'sender', targetKey: 'id' });  

db[ 'Offers' ].belongsTo(db[ 'Users' ],
  { foreignKey: 'userId', sourceKey: 'id' });
db[ 'Offers' ].belongsTo(db[ 'Contests' ],
  { foreignKey: 'contestId', sourceKey: 'id' });
db[ 'Offers' ].hasOne(db[ 'Ratings' ],
  { foreignKey: 'offerId', targetKey: 'id' });

db[ 'Ratings' ].belongsTo(db[ 'Users' ],
  { foreignKey: 'userId', targetKey: 'id' });
db[ 'Ratings' ].belongsTo(db[ 'Offers' ],
  { foreignKey: 'offerId', targetKey: 'id' });

// Устанавливаем связи для модели Conversation
db['Conversation'].hasMany(db['Message'], 
  { foreignKey: 'conversationId' });
db['Conversation'].belongsToMany(db['Catalog'], {
  through: 'CatalogConversations',
  foreignKey: 'conversationId',
  otherKey: 'catalogId',
});

// Устанавливаем связи для модели Message
db['Message'].belongsTo(db['Users'],
   { foreignKey: 'sender' });
db['Message'].belongsTo(db['Conversation'], 
  { foreignKey: 'conversationId' });

// Устанавливаем связи для модели Catalog
db['Catalog'].belongsToMany(db['Conversation'], {
  through: 'CatalogConversations',
  foreignKey: 'catalogId',
  otherKey: 'conversationId',
});
db['Catalog'].belongsTo(db['Users'], 
  { foreignKey: 'userId' });

// Устанавливаем связи для модели CatalogConversations
db['CatalogConversations'].belongsTo(db['Catalog'], 
  { foreignKey: 'catalogId' });
db['CatalogConversations'].belongsTo(db['Conversation'],
   { foreignKey: 'conversationId' });

db['RefreshToken'].belongsTo(db['Users'], 
  { foreignKey: 'userId', as: 'user',});
db['Users'].hasMany(db['RefreshToken'], 
  {foreignKey: 'userId',});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
