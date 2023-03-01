import { RecipeList } from './resipes-practice/RecipeList';
import recipes from 'data/recipes.json';
// import { Global } from "@emotion/react"
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Counter } from './counter-practice/Counter';

export const App = () => {
  return (
    <Layout>
      <Counter initialValue={10} />
      <RecipeList items={recipes} />
      <GlobalStyle />
    </Layout>
  );
};
