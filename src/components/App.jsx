import { RecipeList } from './resipes-practice/RecipeList';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Counter } from './counter-practice/Counter';
import { ColorPicker } from './colorpicker-practice/ColorPicker';
import { Component } from 'react';

import initialRecipes from 'data/recipes.json';
import { RecipeForm } from './RecipeForm/RecipeForm';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export class App extends Component {
  state = {
    recipes: [],
  };

  componentDidMount() {
    const savedRecipes = localStorage.getItem('recipes');
    console.log(savedRecipes)
    if (savedRecipes !== null) {
      const parsedRecipes = JSON.parse(savedRecipes)
      this.setState({ recipes: parsedRecipes })
      return
    }
    this.setState({ recipes: initialRecipes })
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.recipes !== this.state.recipes) {
      localStorage.setItem('recipes', JSON.stringify(this.state.recipes))
    }
  }

  addRecipe = newRecipe => {
    this.setState(prevState => {
      return {
        recipes: [...prevState.recipes, newRecipe],
      };
    });
  };

  deleteRecipe = recipeId => {
    console.log(recipeId);
    this.setState(prevState => {
      return {
        recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
      };
    });
  };

  render() {
    return (
      <Layout>
        <ColorPicker options={colorPickerOptions} />

        <Counter initialValue={10} />

        <RecipeForm onAddRecipe={this.addRecipe} />

        <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} />
        <GlobalStyle />
      </Layout>
    );
  }
}
