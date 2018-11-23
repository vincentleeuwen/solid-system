const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

/* GET Hello World. */
router.get('/hello-world', (req, res, next) => {
  res.render('helloworld', { title: 'Hello World' });
});

/* GET Userlist page. */
router.get('/userlist', (req, res) => {
  const { db } = req;
  const collection = db.get('usercollection');
  collection.find({}, {}, (e, docs) => {
      res.render('userlist', {
          "userlist" : docs
      });
  });
});

module.exports = router;
