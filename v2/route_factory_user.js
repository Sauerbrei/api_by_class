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

var UserModel = require("./routes/user.js");
var user = new UserModel();
var route = require('express').Router();


route.get("/", function(req, res) {
	user.getAll();
	user.sendResponse(res, user);
});


route.get("/:userID", function(req, res) {
	user.get(req.params.userID);
});
	
//	app.get("/api/v2/user/:userID", user.get);
//	app.get("/api/v2/user/:userID/orders", user.getOrders);
//	app.post("/api/v2/user/", user.add);
//	app.put("/api/v2/user/:userID", user.update);
//	app.delete("/api/v2/user/:userID", user.remove);

route.use('*', function(req, res) {
	res.status(404).json({code: 404, message: 'Unknown target within user.'});
});

module.exports = route;