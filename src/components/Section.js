import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({ title, description, backgroundImage, leftBtn, rightBtn }) {
  return (
    <Wrap bgImage={backgroundImage}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <ButtonGroup>
          <Fade left>
            <LeftButton>{leftBtn}</LeftButton>
          </Fade>
          <Fade right>{rightBtn && <RightButton>{rightBtn}</RightButton>}</Fade>
        </ButtonGroup>

        <DownArrow src="/images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  ${"" /* background-image: url("/images/model-s.jpg"); */}
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  text-align: center;
  padding-top: 15vh;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-buttom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: #fff;
  color: #111;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  margin-bottom: 10px;
  height: 40px;
  overflow-x: hidden;
  padding-left: 255px;
  animation: animateDown infinite 1.5s;
  @media (max-width: 768px) {
    padding-left: 115px;
  }
`;

const Buttons = styled.div``;

// const Head = styled.div``;
