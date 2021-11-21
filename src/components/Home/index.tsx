import React from "react";
import { Header, Logo, Title } from "./Home.style";
import Content from "../Content";
import logo from "../../assets/images/gityIcon.png";

const Home: React.FC = () => (
  <>
    <Header>
      <Logo src={logo} />
      <Title>Gity</Title>
    </Header>
    <Content />
  </>
);

export default Home;
