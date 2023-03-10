var express = require('express');
var router = express.Router();

/* GET home page. */
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Message Board", message: messages } );
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  let aForm = req.body;
  let newMessage = {
    text: aForm.messageText,
    user: aForm.messageUser,
    added: new Date()
  };
  messages.push(newMessage);

  res.redirect('/');
})

module.exports = router;
