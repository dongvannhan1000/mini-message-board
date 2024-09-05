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

exports.index = (req, res) => {
  res.render('index', { title: "Mini Messageboard", messages: messages });
};

exports.newMessageForm = (req, res) => {
  res.render('form', { title: "New Message" });
};

exports.createMessage = (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date()
  });
  res.redirect('/');
};