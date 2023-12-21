const config = require("./config.js");
const { Sequelize, DataTypes } = require("sequelize");

// create a database connection in your application using a Sequelize instance and the config file
const connection = new Sequelize(
  "marketplace",
  "root",
  "407000",
  {
    host: "localhost",
    dialect: "mysql",
    define: {
      timestamps: false,
    }
  }
);

//verify your connection here !
connection.authenticate();

//  create your table using sequilize
const User = connection.define('users', {
  idu: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rols: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = User;

