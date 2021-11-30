import styled from "styled-components";

export const ContentWrapper = styled.main`
  flex: 1;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const RepoList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const OptionsWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const LoadMoreButton = styled.button`
  margin: 20px auto;
  font-weight: bold;
  background: white;
  height: 50px;
  border: none;
  color: #192024;
  font-size: 12px;
  cursor: pointer;
`;

export const ErrorMessageLabel = styled.label`
  margin: auto;
  color: red;
  font-weight: 700;
`;
