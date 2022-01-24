const express = require('express');
const { addUsers } = require('../controllers/users.controllers');
const { login } = require('../controllers/login.controllers');
const { addRecipes, getAllRecipes } = require('../controllers/recipes.controllers');
const { authValidate } = require('../middlewares/auth');

const router = express.Router();

router.post('/users', addUsers);
router.post('/login', login);
router.post('/recipes', authValidate, addRecipes);
router.get('/recipes', getAllRecipes);
module.exports = router;
