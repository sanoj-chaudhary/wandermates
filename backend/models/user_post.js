const sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user_posts', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id : {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    images : {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    description : {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    likes : {
        type: DataTypes.BIGINT,
        allowNull: false,
    }
  }, {
    sequelize,
    tableName: 'user_posts',
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
