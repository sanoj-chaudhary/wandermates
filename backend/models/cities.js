const sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('cities', {
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
    state_id : {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    is_active: {
      type: DataTypes.TINYINT(1),
      defaultValue: '0'
    },
  }, {
    sequelize,
    tableName: 'cities',
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
