var m = require("mithril");

var User = {
	list: [],
	loadList: function() {
		return m.request({
			method: "GET",
			url: "https://rankedcircus.com/api/members/"
		})
		.then(function(result) {
			User.list = result;
		})
	},
}

module.exports = User
