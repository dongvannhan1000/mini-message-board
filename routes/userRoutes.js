const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.index);

router.get('/new', userController.newMessageForm);

router.post('/new', userController.createMessage);

module.exports = router;