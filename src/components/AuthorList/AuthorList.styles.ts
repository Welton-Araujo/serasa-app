import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledSelect = styled.select`
  background-color: #d1fae5; /* verde claro */
  color: #07A46C; /* verde */
  font-weight: 600;
  padding: 0.5rem 2rem 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  appearance: none;
  cursor: pointer;
`;

export const DropdownArrow = styled.span`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #059669;
  pointer-events: none;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;
