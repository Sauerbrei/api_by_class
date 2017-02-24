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

var _ = require('lodash');
var util = require('util');
var EventEmitter = require('events').EventEmitter;


function BaseModel() {
	this.setMaxListeners(0);
	that = this;
}

/**
 * 
 * @param {Error} error
 * @param {Array} rows
 * @param {String} reason
 * @returns {Boolean}
 */
BaseModel.prototype._checkForErrors = function(error, rows, reason) {
	if (error) {
		that.emit('error', error);
		return true;
	} else if (reason) {
		that.emit('failure', reason);
		return true;
	}
	return false;
};

/**
 *
 * @param {Error} error
 * @param {Array} rows
 * @returns {Boolean}
 */
BaseModel.prototype._getData = function(error, rows) {
	if (that._checkForErrors(error, rows)) {
		return false;
	} else {
		that.emit('success', rows);
		return true;
	}
};
	
/**
 * 
 * @param {Error} error
 * @param {Array} rows
 * @returns {Boolean}
 */
BaseModel.prototype._getDataIfNotEmpty = function(error, rows) {
	if (rows.length < 1) {
		that._checkForErrors(error, rows, 'Nothing found.');
	} else {
		that._getData(error, rows);
	}
};


/**
 * 
 * @param {ServerResponse} res
 * @param {Object} obj
 * @returns {ServerResponse}
 */
BaseModel.prototype.sendResponse = function(res, obj) {
	if (!res.getHeader('Content-Type')) {
		res.header('Content-Type', 'application/json');
	}
	obj.on('error', function(err) {
		return res.status(400).end(JSON.stringify({code: 901, message: err, data: null}));
	});
	obj.on('failure', function(fail) {
		return res.status(400).end(JSON.stringify({code: 902, message: fail, data: null}));
	});
	obj.on('success', function(result) {
		return res.status(200).end(JSON.stringify({code: 200, message: 'OK', data: result}));
	});
};

util.inherits(BaseModel, EventEmitter);
module.exports = BaseModel;

