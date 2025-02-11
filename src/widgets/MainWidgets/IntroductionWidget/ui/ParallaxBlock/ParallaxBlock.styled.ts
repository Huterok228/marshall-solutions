import { MouseParallaxContainer } from "react-parallax-mouse";
import styled from "styled-components";

export const CustomMouseParallaxContainer = styled(MouseParallaxContainer)`
  max-width: 920px;
  width: 100%;
  height: 540px;

  overflow: visible;

  @media (max-width: 1000px) {
    height: 200px;

    padding: 0 55px;
  }
`;
export const GroupCircle = styled.img`
  width: 64px;
  height: 61px;

  position: absolute;
  top: 50px;
  left: 100px;

  @media (max-width: 1300px) {
    width: 48px;
    height: 48px;
  }
  @media (max-width: 1000px) {
    width: 17px;
    width: 17px;

    top: 10%;
    left: calc(50% - 30% + 42px);
  }
  /* @media (max-width: 600px) {
    left: 50px;
  } */
`;
export const GroupBigStar = styled.img`
  width: 100px;
  height: 100px;

  position: absolute;
  top: 0px;
  left: 700px;

  @media (max-width: 1300px) {
    width: 70px;
    height: 70px;

    top: 0px;
    left: 600px;
  }
  @media (max-width: 1200px) {
    left: 400px;
  }
  @media (max-width: 1000px) {
    width: 27px;
    height: 27px;

    top: 25px;
    left: calc(50% + 77px);
  }
  /* @media (max-width: 700px) {
    top: 50px;
    left: 500px;
  }
  @media (max-width: 600px) {
    top: 100px;
    left: 500px;
  }
  @media (max-width: 500px) {
    left: 325px;
    top: 75px;
  }
  @media (max-width: 400px) {
    left: 250px;
    top: 75px;
  } */
`;
export const GroupPanel = styled.img`
  width: 730px;
  height: 640px;

  position: absolute;
  top: -50px;
  left: 300px;

  @media (max-width: 1300px) {
    width: 580px;
    height: 500px;

    left: 200px;
  }
  @media (max-width: 1200px) {
    left: 100px;
    top: 0px;
  }
  @media (max-width: 1000px) {
    width: 200px;
    height: 200px;

    left: calc(50% - 50px);
    top: 0px;
  }
  /* @media (max-width: 600px) {
    left: 10%;
    top: 50px;
  }
  @media (max-width: 500px) {
    top: 0px;
  } */
`;
export const GroupRocket = styled.img`
  width: 204px;
  height: 315px;

  position: absolute;
  top: 200px;
  left: 150px;

  @media (max-width: 1300px) {
    width: 155px;
    height: 240px;

    left: 100px;
  }
  @media (max-width: 1200px) {
    left: 50px;
    top: 250px;
  }
  @media (max-width: 1000px) {
    width: 57px;
    height: 90px;

    top: 100px;
    left: calc(50% - 25% + 8px);
  }
  /* @media (max-width: 600px) {
    left: 10%;
    top: 300px;
  }
  @media (max-width: 500px) {
    top: 325px;
    left: 20%;
  } */
`;
export const GroupSmallStar = styled.img`
  width: 74px;
  height: 84px;

  position: absolute;
  top: 400px;
  left: 400px;

  @media (max-width: 1300px) {
    width: 64px;
    height: 72px;

    left: 350px;
    top: 350px;
  }
  @media (max-width: 1200px) {
    left: 250px;
    top: 450px;
  }
  @media (max-width: 1000px) {
    width: 20px;
    height: 24px;

    left: calc(40% + 50px);
    top: 175px;
  }
`;
