/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'new': function(req, res) {
		return res.view('user/new');
	},

	create: function(req, res, next){
		User.create(req.params.all(), function userCreated(err, user){
			if(err)return next(err);

			res.redirect('/user/show/'+user.id);
		});
	},

	show: function(req, res, next){
		User.findOne(req.param('id'), function(err, user){
			if(err)return next(err);
			if(!user)return next();
			res.view({
				user: user
			});
		});
	},

	index: function(req, res, next){
		User.find(function foundUser(err, users){
			if(err)return next(err);

			res.view('user/index',{
				users:users
			});
		});
	},


};
