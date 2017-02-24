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

global.__base = __dirname + "/";

var routes = require("./v2");
var initialize = require(global.__base + "config");
var app = initialize.globalModules();

// Setup Routes
// loads ./v2/index.js
app.use('/api/v2', routes);


//Start the Server 
app.listen('8090');

console.log("Server running...");