var express = require('express');
var router = express.Router();


let screenName = "main.json";

/* GET users listing. */
router.get('/', function(req, res, next) {
	fs = require('fs');
	fs.readFile('./screens/' + screenName, 'utf8', function (err,data) {
 		if (err) {
    		return res.status(500).send(err);
  		}
  		res.send(JSON.parse(data));
	});
});

module.exports = router;
