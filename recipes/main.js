import { recipes } from './recipets.mjs';

const recipeContainer = document.getElementById('recipe-container');
const searchInput = document.getElementById('search');

function createStars(rating) {
  const full = '★'.repeat(rating);
  const empty = '☆'.repeat(5 - rating);
  return full + empty;
}

function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.className = 'recipe-card';

  const img = document.createElement('img');
  img.src = recipe.image;
  img.alt = recipe.name;
  img.onerror = () => {
    img.src = 'https://via.placeholder.com/200x150?text=Missing+Image';
  };

  const content = document.createElement('div');
  content.className = 'recipe-card-content';

  const tag = document.createElement('span');
  tag.className = 'tag';
  tag.textContent = recipe.category;

  const title = document.createElement('h2');
  title.textContent = recipe.name;

  const stars = document.createElement('div');
  stars.className = 'stars';
  stars.textContent = createStars(recipe.rating);

  const desc = document.createElement('p');
  desc.textContent = recipe.description;

  content.appendChild(tag);
  content.appendChild(title);
  content.appendChild(stars);
  content.appendChild(desc);

  card.appendChild(img);
  card.appendChild(content);
  return card;
}

function normalize(text) {
  return text.toLowerCase().replace(/\s+/g, '-');
}

function displayRecipes(filter = '') {
  recipeContainer.innerHTML = '';

  const normalizedFilter = normalize(filter);

  const match = recipes.find(recipe =>
    normalize(recipe.name).includes(normalizedFilter)
  );

  if (match) {
    recipeContainer.appendChild(createRecipeCard(match));
  } else if (filter.trim() === '') {
    recipeContainer.innerHTML = '<p>Start typing to find a recipe...</p>';
  } else {
    recipeContainer.innerHTML = '<p>No recipe found.</p>';
  }
}

function getRandomRecipe() {
  const index = Math.floor(Math.random() * recipes.length);
  return recipes[index];
}

document.addEventListener('DOMContentLoaded', () => {
  const random = getRandomRecipe();
  recipeContainer.appendChild(createRecipeCard(random));

  // Enable search after initial random display
  searchInput.addEventListener('input', () => {
    displayRecipes(searchInput.value);
  });
});
