const sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('locations', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    state_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
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
      }
    ]
  });
};
