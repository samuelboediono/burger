var orm = require('../config/orm.js');

var burger = {

	selectAll: function(cb) {
		orm.selectAll(function(res) {
			callback(res);
		});
	},

	insertOne: function(burger_name, cb) {
		orm.insertOne(burger_name, function(res) {
			callback(res);
		});
	},

	updateOne: function(burger_id, cb) {
		orm.updateOne(burger_id, function(res) {
			callback(res);
		});
	}
};

module.exports = burger;