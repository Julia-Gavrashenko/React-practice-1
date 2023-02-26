import { Recipe } from "./Recipe"
import PropTypes from 'prop-types';
import { List, ListItem } from "./RecipeList.styled";

export const RecipeList = ({items}) => {
    return <List style={{display: 'flex', gap: 16}}>
      {items.map(item => 
     (  <ListItem key={item.id}>
           <Recipe item={item} />
            </ListItem>)
      )}
    </List>
}

RecipeList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape(
       {id: PropTypes.number.isRequired}
   )).isRequired
}