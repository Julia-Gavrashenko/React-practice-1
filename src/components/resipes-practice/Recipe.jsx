import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar, HiTrash, HiZoomIn  } from 'react-icons/hi';
import { Component } from 'react';
import {
  Image,
  Container,
  RecipeInfo,
  InfoItem,
  RecipeDifficulty,
  BadgeList,
  Badge,
  Actions,
} from './Recipe.styled';
import { Modal } from 'components/Modal/Modal';

export class Recipe extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    const {
      item: { id, image, name, time, servings, calories, difficulty },
      onDelete,
    } = this.props;

    return (
      <Container>
        <Image src={image} alt={name} />
        <h2>{name}</h2>
        <RecipeInfo>
          <InfoItem>
            <span>
              <BsAlarm />
            </span>
            {time} min
          </InfoItem>
          <InfoItem>
            <span>
              <AiOutlinePieChart />
            </span>
            {servings} servings
          </InfoItem>
          <InfoItem>
            <span>
              <HiOutlineChartBar />
            </span>
            {calories} calories
          </InfoItem>
        </RecipeInfo>

        <RecipeDifficulty>
          <h3>Difficulty</h3>
          <BadgeList>
            <Badge isActive={difficulty === 'easy'} value={difficulty}>
              Easy
            </Badge>
            <Badge isActive={difficulty === 'medium'} value={difficulty}>
              Medium
            </Badge>
            <Badge isActive={difficulty === 'hard'} value={difficulty}>
              Hard
            </Badge>
          </BadgeList>
        </RecipeDifficulty>

        <Actions>
          <button onClick={() => onDelete(id)} aria-label="Delete">
            <HiTrash />
          </button>
       
          <button onClick={this.openModal} aria-label="Zoom">
            <HiZoomIn />
          </button>
          
        </Actions>

        {this.state.isOpen && <Modal image={image} onClose={this.closeModal} />}
        
      </Container>
    );
  }
}

Recipe.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};
