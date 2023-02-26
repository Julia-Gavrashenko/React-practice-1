import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar } from 'react-icons/hi';
import { Image, Container, RecipeInfo, InfoItem, RecipeDifficulty, BadgeList, Badge  } from './Recipe.styled';

export const Recipe = ({
  item: { image, name, time, servings, calories, difficulty },
}) => {
  return (
    <Container>
      <Image src={image} alt={name}/>
      <h2>{name}</h2>
      <RecipeInfo>
        <InfoItem >
          <span>
            <BsAlarm />
          </span>
          {time} min
        </InfoItem >
        <InfoItem >
          <span>
            <AiOutlinePieChart />
          </span>
          {servings} servings
        </InfoItem >
        <InfoItem >
          <span>
            <HiOutlineChartBar />
          </span>
          {calories} calories
        </InfoItem >
      </RecipeInfo>
      <RecipeDifficulty >
        <h3>Difficulty</h3>
        <BadgeList>
                  <Badge isActive={difficulty === 'easy'} value={difficulty}>Easy </Badge>
          <Badge isActive={difficulty === 'medium'} value={difficulty}>Medium</Badge>
          <Badge isActive={difficulty === 'hard'} value={difficulty}>Hard</Badge>
        </BadgeList>
      </RecipeDifficulty >
    </Container>
  );
};

Recipe.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
      difficulty: PropTypes.oneOf(
        ["easy", "medium", "hard"]
    ).isRequired,
  }).isRequired,
};
