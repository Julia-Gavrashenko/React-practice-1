import { RecipeList } from './resipes-practice/RecipeList';
import recipes from 'data/recipes.json';
// import { Global } from "@emotion/react"
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Counter } from './counter-practice/Counter';
import { ColorPicker } from './colorpicker-practice/ColorPicker';




const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export const App = () => {
  return (
    <Layout>
      <ColorPicker options={colorPickerOptions} />
      
      <Counter initialValue={10} />
      <RecipeList items={recipes} />
      <GlobalStyle />
    </Layout>
  );
};


