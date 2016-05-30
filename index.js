var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public/'));

app.post('/contact-form', function(req,res){

	var data = req.body;
	transporter.sendmail({
		from: data.InputEmail,
		to: 'reciever@address',
		subject: 'Media Bros question',
		text: data.InputMessage

	});
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
});
