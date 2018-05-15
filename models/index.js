	"use strict";
 
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
// var sequelize = new Sequelize(config.database, config.username, config.password, config); // where it says config, per the doc, this needs to be set to { operatorsAliases: false }  I've put this in the config file that it's reading from.
var sequelize = new Sequelize(process.env.dbn, process.env.dbu, process.env.dbp, config);
var db = {};
 
 
fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });
 
Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});
 
 
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require('../models/user.js')(sequelize, Sequelize);  
db.loginLog = require('../models/loginLog.js')(sequelize,Sequelize);
 
module.exports = db;