import styled from "styled-components";

export const ItemStarImage = styled.img`
  width: 20px;
  height: 20px;
  margin: auto 10px;
  cursor: pointer;
`;
export const ItemTitleWrapper = styled.div`
  display: flex;
`;
export const ItemContent = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px 10px 0 10px;
  padding: 20px;
  box-shadow: 0px -1px 4px 0px rgba(25, 32, 36, 0.04),
    0 3px 6px 0 rgba(25, 32, 36, 0.16);
  border-radius: 8px;
`;

export const ItemTitle = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FieldLabel = styled.label`
  font-weight: bold;
  white-space: nowrap;
  margin-right: 5px;
`;

export const FieldText = styled.label``;

export const FieldWrapper = styled.div`
  margin: 10px 0 0 0;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
