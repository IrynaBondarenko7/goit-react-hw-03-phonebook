import { StyledFiltrWrap } from './Filter.styled';

export const Filter = ({ filter, searchContact }) => {
  return (
    <StyledFiltrWrap>
      <span>Find contacts by name</span>

      <input type="text" value={filter} onChange={searchContact} />
    </StyledFiltrWrap>
  );
};
