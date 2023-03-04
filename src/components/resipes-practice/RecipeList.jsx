import { Recipe } from './Recipe';
import PropTypes from 'prop-types';
import { List, ListItem } from './RecipeList.styled';

export const RecipeList = ({ items, onDelete }) => {
  return (
    <List style={{ display: 'flex', gap: 16 }}>
      {items.map(item => (
        <ListItem key={item.id}>
          <Recipe item={item} onDelete={onDelete} />
        </ListItem>
      ))}
    </List>
  );
};

RecipeList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired }))
    .isRequired,
  onDelete: PropTypes.func.isRequired,
};
