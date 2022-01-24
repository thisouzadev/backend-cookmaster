const Joi = require('@hapi/joi');
const { create, findAll } = require('../models/recipes.model');
const errorConstructor = require('../utils/functions/errorHandling');
const { badRequest } = require('../utils/dictionary/statusCode');

const recipesSchema = Joi.object({
  name: Joi.string().required(),
  ingredients: Joi.string().required(),
  preparation: Joi.string().required(),
});

const createRecipes = async (name, ingredients, preparation, userId) => {
  const { error } = recipesSchema.validate({
    name, ingredients, preparation,
  });

  if (error) throw errorConstructor(badRequest, 'Invalid entries. Try again.');
  const id = await create(name, ingredients, preparation, userId);
  return id;
};
const findAllRecipes = async () => {
const showAllRecipes = await findAll();
return showAllRecipes;
};
module.exports = {
  createRecipes,
  findAllRecipes,
};