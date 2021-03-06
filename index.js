var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var nodemailer = require('nodemailer');
var wellknown = require('nodemailer-wellknown');


var config = wellknown('Gmail');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use(express.static(__dirname + '/public/'));




app.post('/contact-form', function(req,res){

	console.log('POST!!!!!!!!!!!!!!!!');
	

	var transport = nodemailer.createTransport({
     service: 'gmail',
     auth: {
     	user: 'turtlesrock10342@gmail.com',
     	pass: process.env.Gpass
     }
});
	var data = req.body;
	transport.sendMail({
		from: data.InputEmail,
		to: 'Business@mediabrothersmarketing.com',
		subject: 'Media Bros question for '+data.InputPhone,
		text: data.InputMessage

	}, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
	});
	res.json(data);
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
});
