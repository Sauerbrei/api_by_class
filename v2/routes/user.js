/*
 *  	                                 _                  _
 *  	                                | |                (_)
 *  	  ___   __ _  _   _   ___  _ __ | |__   _ __   ___  _
 *  	 / __| / _` || | | | / _ \| '__|| '_ \ | '__| / _ \| |
 *  	 \__ \| (_| || |_| ||  __/| |   | |_) || |   |  __/| |
 *  	 |___/ \__,_| \__,_| \___||_|   |_.__/ |_|    \___||_|
 *  			     	          _
 *  			     	         | |
 *  			 ___  _   _  ___ | |_   ___  _ __ ___   ___
 *  		 	/ __|| | | |/ __|| __| / _ \| '_ ` _ \ / __|
 *  		 _	\__ \| |_| |\__ \| |_ |  __/| | | | | |\__ \
 *  	 	(_)	|___/ \__, ||___/ \__| \___||_| |_| |_||___/
 *  	   	  	       __/ |
 *  			      |___/
 *   ================================================================
 *   this Software is not for resale purposes.
 *   It is licensed under the Apache License 2.0
 *   ================================================================
 *
 */

/**
 *    @author Sören Sauerbrei
 *    @copyright Copyright (c) 2017. All rights reserved.
 *    @version 1.0 (created on 24.02.2017)
 *    @description
 *    @example
 */

var util = require('util');
var BaseModel = require('./__base');
var initialize = require(global.__base + "/config");
var db = initialize.db();


function UserModel () {
	BaseModel.apply(this, arguments);
	that = this;
}
		
/**
 * 
 * @returns {Boolean}
 */
UserModel.prototype.getAll = function() {
	db.query("SELECT * FROM user", that._getData);
};
	
/**
 * 
 * @param {int} userID
 * @returns {Boolean}
 */
UserModel.prototype.get = function( userID ) {
	db.query('SELECT * FROM user WHERE userid = ?', [userID], that._getDataIfNotEmpty);
};

	
/**
 * 
 * @param {Object} userObject
 * @returns {Boolean}
 */
UserModel.prototype.save = function( userObject ) {
	// ToDo
	//handle multiple inserts
	db.query("INSERT INTO user SET ?", userObj, that._getData);
};
	
/**
 * 
 * @param {Object} userObject
 * @returns {Boolean}
 */
UserModel.prototype.update = function( userObject ) {

};
	
/**
 * 
 * @param {int} userID
 * @returns {Boolean}
 */
UserModel.prototype.remove = function( userID ) {

};

util.inherits(UserModel, BaseModel);
module.exports = UserModel;
