import styled from "styled-components";
import * as Styles from "@/styles/Global";
import * as C from "@/styles/Colors";

import "@fontsource/bricolage-grotesque";
import "@fontsource/plus-jakarta-sans";
import { NavLink } from "react-router";

const bp = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

export const Main = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80dvh;
  padding: 0;
  background: ${C.Colors.bg};
  color: ${C.Colors.black};

  @media (max-width: ${bp.desktop}) {
    height: auto;
    padding: 60px 0;
  }

  @media (max-width: ${bp.tablet}) {
    padding: 40px 0;
  }

  @media (max-width: ${bp.mobile}) {
    padding: 32px 0;
  }
`;

export const Content = styled.div`
  ${Styles.Center};
  width: 100%;
  padding: 0 4%;
  margin-top: 80px;

  @media (max-width: ${bp.tablet}) {
    flex-direction: column;
    gap: 48px;
    padding: 0 6%;
  }

  @media (max-width: ${bp.mobile}) {
    gap: 36px;
    padding: 0 5%;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 50%;

  @media (max-width: ${bp.tablet}) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-family: "Bricolage Grotesque", serif;
  font-size: 72px;
  font-weight: 600;
  color: ${C.Colors.navy};
  line-height: 1;

  span {
    color: ${C.Colors.orange};
    font-weight: 700;
    text-shadow: 0px 0px 4px rgba(255, 74, 28, 0.8);
  }

  @media (max-width: ${bp.desktop}) {
    font-size: 60px;
  }

  @media (max-width: ${bp.tablet}) {
    font-size: 52px;
  }

  @media (max-width: ${bp.mobile}) {
    font-size: 38px;
  }
`;

export const Subtitle = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: ${C.Colors.gray};
  line-height: 1;
  margin-bottom: 30px;

  @media (max-width: ${bp.tablet}) {
    font-size: 16px;
    margin-bottom: 20px;
  }

  @media (max-width: ${bp.mobile}) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: ${bp.tablet}) {
    justify-content: center;
  }

  @media (max-width: ${bp.mobile}) {
    flex-direction: column;
    width: 100%;
    gap: 12px;
  }
`;

export const Account = styled(NavLink)`
  ${Styles.Center};
  width: 180px;
  padding: 18px;
  background: ${C.Colors.navy};
  color: ${C.Colors.white};
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-family: "Plus Jakarta Sans", sans-serif;

  @media (max-width: ${bp.tablet}) {
    width: 160px;
    padding: 15px;
    font-size: 15px;
  }

  @media (max-width: ${bp.mobile}) {
    width: 100%;
    padding: 16px;
    border-radius: 10px;
  }
`;

export const Demo = styled(Account)`
  ${Styles.Center};
  gap: 5px;
  padding: 18px;
  background: ${C.Colors.orange};
  color: ${C.Colors.white};
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-family: "Plus Jakarta Sans", sans-serif;
  box-shadow: 0px 0px 5px 0px rgba(255, 74, 28, 0.79);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(255, 74, 28, 0.79);
  -moz-box-shadow: 0px 0px 5px 0px rgba(255, 74, 28, 0.79);
  transition: all 0.55s ease;

  &:hover {
    background: ${C.Colors.orangeHover};
    box-shadow: 0px 0px 5px 0px rgba(229, 62, 21, 0.79);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(229, 62, 21, 0.79);
    -moz-box-shadow: 0px 0px 5px 0px rgba(229, 62, 21, 0.79);
  }

  svg {
    transform: translateY(1px);
  }

  @media (max-width: ${bp.tablet}) {
    font-size: 16px;
    padding: 15px;
  }

  @media (max-width: ${bp.mobile}) {
    font-size: 16px;
    padding: 16px;
    border-radius: 10px;
  }
`;

export const RightContent = styled.div`
  ${Styles.Center};
  flex-direction: column;
  width: 50%;

  @media (max-width: ${bp.tablet}) {
    display: none;
  }
`;

export const ShapesWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 400px;

  @media (max-width: ${bp.desktop}) {
    max-width: 500px;
    height: 340px;
  }

  @media (max-width: ${bp.tablet}) {
    max-width: 480px;
    height: 300px;
  }

  @media (max-width: ${bp.mobile}) {
    max-width: 100%;
    height: 240px;
  }
`;

export const Shape = styled.div`
  position: absolute;
  width: 280px;
  height: auto;
  border-radius: 44px;
  overflow: hidden;

  @media (max-width: ${bp.desktop}) {
    width: 230px;
  }

  @media (max-width: ${bp.tablet}) {
    width: 210px;
    border-radius: 36px;
  }

  @media (max-width: ${bp.mobile}) {
    width: 160px;
    border-radius: 28px;
  }
`;

export const NavyShape = styled(Shape)`
  background: ${C.Colors.navy};
  top: 0;
  left: 0;
  z-index: 1;
  box-shadow:
    rgba(13, 27, 42, 0.4) -5px 5px,
    rgba(13, 27, 42, 0.3) -10px 10px,
    rgba(13, 27, 42, 0.2) -15px 15px,
    rgba(13, 27, 42, 0.1) -20px 20px,
    rgba(13, 27, 42, 0.05) -25px 25px;

  @media (max-width: ${bp.mobile}) {
    box-shadow:
      rgba(13, 27, 42, 0.4) -3px 3px,
      rgba(13, 27, 42, 0.3) -6px 6px,
      rgba(13, 27, 42, 0.2) -9px 9px,
      rgba(13, 27, 42, 0.1) -12px 12px,
      rgba(13, 27, 42, 0.05) -15px 15px;
  }
`;

export const OrangeShape = styled(Shape)`
  background: ${C.Colors.orange};
  bottom: 0;
  right: 0;
  z-index: 2;
  box-shadow:
    rgba(255, 74, 28, 0.4) 5px 5px,
    rgba(255, 74, 28, 0.3) 10px 10px,
    rgba(255, 74, 28, 0.2) 15px 15px,
    rgba(255, 74, 28, 0.1) 20px 20px,
    rgba(255, 74, 28, 0.05) 25px 25px;

  @media (max-width: ${bp.mobile}) {
    box-shadow:
      rgba(255, 74, 28, 0.4) 3px 3px,
      rgba(255, 74, 28, 0.3) 6px 6px,
      rgba(255, 74, 28, 0.2) 9px 9px,
      rgba(255, 74, 28, 0.1) 12px 12px,
      rgba(255, 74, 28, 0.05) 15px 15px;
  }
`;

export const ShapeImages = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: flex;
`;

export const InvertImage = styled(ShapeImages)`
  transform: scaleX(-1);
`;