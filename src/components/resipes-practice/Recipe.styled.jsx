import styled from 'styled-components';

export const Container = styled.section`
 position: relative;
  border: 1px solid black;
  border-radius: 4px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const RecipeInfo = styled.div`
  display: flex;
  gap: 8px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    color: black;
  }
`;

export const RecipeDifficulty = styled.div``;

export const BadgeList = styled.div`
  display: flex;
  gap: 8px;
`;

export const Badge = styled.span`
  padding: 8px 16px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: ${props => {
    if (!props.isActive) {
      return 'white';
    }
    switch (props.value) {
      case 'easy':
        return 'green';
      case 'medium':
        return 'blue';
      case 'hard':
        return 'red';
      default:
        return 'white';
    }
  }};
  color: ${props => {
    return props.isActive ? 'white' : 'black';
  }};
`;

export const Actions = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
`;


