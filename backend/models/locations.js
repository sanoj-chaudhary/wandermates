const sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('locations', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'cities',
          key: 'id'
        }
    },
    state_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'states',
          key: 'id'
        }
    },
    images : {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_active: {
      type: DataTypes.TINYINT(1),
      defaultValue: '0'
    },
  }, {
    sequelize,
    tableName: 'locations',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name : 'fk_locations_cities1_idx',
        using: "BTREE",
        fields: [
          { name: "city_id"}
        ]
      },
      {
        name : 'fk_locations_states1_idx',
        using: "BTREE",
        fields: [
          { name: "state_id"}
        ]
      }
    ]
  });
};
