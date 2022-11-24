/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time) {
  if (time > 0) {
    return "Not done, please wait.";
  } else if (time === 0) {
    return "Lasagna is done.";
  } else {
    return "You forgot to set the timer.";
  }
}
cookingStatus(12);
cookingStatus();

const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];
export const preparationTime = (layers, time = 2) => {
  return layers.length * time;
}
preparationTime(layers, 3);

// for each layer, we will need 50g of noodles and 0.2L of sauce
export function quantities(layers) {
  const quantities = {};
  let sumNoodles = 0, sumSauce = 0;
  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === 'noodles') {
      sumNoodles += 50;
    } else if (layers[i] === 'sauce') {
      sumSauce += 0.2;
    }
  }
  quantities['noodles'] = sumNoodles;
  quantities['sauce'] = Number(sumSauce.toFixed(1)); // Tengo error de 0.00000...1
  quantities;
  return quantities;
}
quantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']);
quantities(['sauce', 'béchamel', 'sauce', 'meat', 'sauce']);

const friendsList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper'];
const myList = ['noodles', 'meat', 'sauce', 'mozzarella'];
export const addSecretIngredient = (friendsList, myList) => {
  myList.push(friendsList[friendsList.length - 1]);
}
addSecretIngredient(friendsList, myList);

// Recipe tiene porciones para dos personas
const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};
export const scaleRecipe = (recipe, scale) => {
  const newRecipe = {...recipe};
  for (const ingredient in recipe) {
    newRecipe[ingredient] = newRecipe[ingredient] * scale / 2;
  }
  return newRecipe;
}
scaleRecipe(recipe, 4);