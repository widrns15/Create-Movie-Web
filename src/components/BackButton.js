import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return <BackButtonStyled onClick={() => navigate(-1)}></BackButtonStyled>;
};

const BackButtonStyled = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  left: 40px;
  top: 30px;
  border-left: 2px solid white;
  border-top: 2px solid white;
  cursor: pointer;
  transform: rotate(-45deg);
`;

export default BackButton;
