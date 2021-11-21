import styled from "styled-components";

export const SelectContainer = styled.div`
  width: 140px;
  position: relative;
`;

export const SelectListWrapper = styled.div`
  position: absolute;
  width: 140px;
`;

export const SelectHeader = styled.div`
  padding: 7px 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1rem;
  color: #3faffa;
  background: #ffffff;
  cursor: pointer; ;
`;

export const SelectList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: 1px solid #e5e5e5;
  border-bottom: none;
  background: #ffffff;
`;

export const SelectItem = styled.li`
  list-style: none;
  padding: 6px 4px;
  cursor: pointer;
  background: #ffffff;
  &:hover {
    background: grey;
  }
  border-bottom: 1px solid #e5e5e5;
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 10px 5px;
`;

export const SelectTitle = styled.label`
  margin: auto 10px;
`;
