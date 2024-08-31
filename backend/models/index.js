var Sequelize = require("sequelize");
var userModel = require("./users");
var locationModel = require("./locations");
var statesModel = require("./states");
var cityModel = require("./cities");
var userpostModel = require("./user_post");
function initModels(sequelize) {
  const Users = userModel(sequelize, Sequelize);
  const Locations = locationModel(sequelize, Sequelize);
  const States = statesModel(sequelize, Sequelize);
  const City = cityModel(sequelize, Sequelize);
  const UserPost = userpostModel(sequelize, Sequelize);
  
  Locations.belongsTo(States, {as : 'States', foreignKey : 'state_id'});
  Locations.belongsTo(City, {as : 'City', foreignKey : 'city_id'});
  return {
    Users,
    Locations,
    States,
    City,
    UserPost
  };
}

const sequelize = new Sequelize('wandermates','root', process.env.MYSQL_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 20,
    min: 5,
    acquire: 60000,
    idle: 10000
  },
  timezone: '+05:30',
});

module.exports = initModels(sequelize);
module.exports.sequelize = sequelize;
