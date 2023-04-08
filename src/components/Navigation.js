import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import header from "../img/header.png";

function Navigation() {
  const navigate = useNavigate();

  return (
    <NavigationStyled>
      <img src={header} alt="ILFLEX" onClick={() => navigate("/")} />
    </NavigationStyled>
  );
}

const NavigationStyled = styled.div`
  width: fit-content;
  font-weight: 700;
  font-size: 18px;
  padding: 20px 0px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;

export default Navigation;
