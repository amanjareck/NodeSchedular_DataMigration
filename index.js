/*var express = require("express"),
    app = express(),
    server = require('http').createServer(app),
    port = process.env.PORT || 8080;
    debug = require('debug')('index.js');
    io = require('socket.io')(server);
    schedule = require('node-schedule');
    CronJob = require('cron').CronJob;

/*var j = schedule.scheduleJob('* * * * * *', function(){
  console.log("Testing");
});*/
/*new CronJob('2 * * * * *', function() {
  console.log('Testing 2');
}, null, true);


var Client = require('ftp');

var c = new Client();

console.log('Tesing Schedular...')

var connectionProperties = {
    host: "amandevnotes.com",
    user: "myuser",
    password: "mypwd"
};

c.on('ready', function () {
    console.log('Connecting...');
    c.list(function (err, list) {
        if (err) throw err;
        list.forEach(function (element, index, array) {
            //Ignore directories
            if (element.type === 'd') {
                console.log('ignoring directory ' + element.name);
                return;
            }
            //Ignore non zips
            if (path.extname(element.name) !== '.zip') {
                console.log('ignoring file ' + element.name);
                return;
            }
            //Download files
            c.get(element.name, function (err, stream) {
                if (err) throw err;
                stream.once('close', function () {
                    c.end();
                });
                stream.pipe(fs.createWriteStream(element.name));
            });
        });
    });
});
c.on('error', function(){
   console.log('Could not connect');
});


c.connect(connectionProperties);

//server.listen(port, function() {
//    console.log("server listening at port %d", port);
//    debug("server listening at port %d", port);
//});
//
//app.get("/student/:id", function(req, res){
//   res.end (req.params.id + " rocks!"); 
//});
//
//app.use(express.static(__dirname + '/www/'));
*/

var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP", {
  service: "Gmail",
  auth: {
    XOAuth2: {
      user: "aman.jareck@gmail.com",
      clientId: "",
      clientSecret: "",
      refreshToken: ""
    }
  }
});

var mailOptions = {
  from: "Dream",
  to: "",
  subject: "Test",
  generateTextFromHTML: true,
  html: "<b>Sent as a test from App!</b>"
};

smtpTransport.sendMail(mailOptions, function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
  smtpTransport.close();
});
