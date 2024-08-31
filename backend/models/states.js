const sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('states', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_active: {
      type: DataTypes.TINYINT(1),
      defaultValue: '0'
    },
  }, {
    sequelize,
    tableName: 'states',
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
