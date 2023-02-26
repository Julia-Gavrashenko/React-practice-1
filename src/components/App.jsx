
import { RecipeList } from "./resipes-practice/RecipeList"
import recipes from 'data/recipes.json'
// import { Global } from "@emotion/react"
import { GlobalStyle } from "./GlobalStyle"
import { Layout } from "./Layout"


export const App = () => {
  return <Layout>
    <RecipeList items={recipes} />
    <GlobalStyle/>
  </Layout>
}