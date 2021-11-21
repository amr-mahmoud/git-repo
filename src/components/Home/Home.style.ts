import styled from "styled-components";

export const Header = styled.header`
  height: 54px;
  display: flex;
  border-bottom: 1px solid #d7d7d7;
  min-height: 54px;
  position: relative;
`;

export const Logo = styled.img`
  margin: auto 16px;
  width: 40px;
  height: 40px;
`;

export const Title = styled.label`
  font-weight: bolder;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
