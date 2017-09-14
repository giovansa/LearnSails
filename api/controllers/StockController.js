/**
 * StockController
 *
 * @description :: Server-side logic for managing stocks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req, res, err) {
		User.findOne(req.param('owner'), function foundUser(err, user){
			if(err) return next(err);
			if(!user)return next();
			res.view('user/new', {
				user:user;
			});
		});
	 },


};
