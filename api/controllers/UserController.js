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

	update: function(req, res, next){
		User.findOne(req.param('id'), function(err, user){
			if(err) return next(err);
			if(!user)return next();
			res.view({
				user:user
			});
		});
	},

	updating: function(req, res, next){
		var n_user = req.allParams();
		console.log(n_user);
		User.findOne(n_user.id, function(err, user){
			if(err)return next(err);
			if(!user)return next();

			user.update({username:n_user.username}, {user_gender:n_user.user_gender}).exec(function result(err, updated){
				//console.log(err);
				console.log(updated.username)
				if(err)return next(err);
				res.redirect('user/index');
			});
		});
	},

};
