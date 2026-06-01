import styled from "styled-components";
import * as Styles from "@/styles/Global";
import * as C from "@/styles/Colors";
import "@fontsource/bricolage-grotesque";
import "@fontsource/plus-jakarta-sans";
import { Link } from "react-router";

export const Page = styled.div`
  ${Styles.Center};
  width: 100%;
  min-height: 100dvh;
  background: ${C.Colors.navy};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  max-width: 600px;
  padding: 48px 40px;
  border-radius: 28px;
  background: white;
  border: 1.5px solid ${C.Colors.navy}30;
  box-shadow: 0 8px 64px rgba(0, 0, 0, 0.25);
`;

export const LogoRow = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

export const LogoName = styled.span`
  font-family: "Bricolage Grotesque", serif;
  font-size: 20px;
  font-weight: 700;
  color: ${C.Colors.navy};

  span {
    color: ${C.Colors.orange};
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.h1`
  font-family: "Bricolage Grotesque", serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.1;
  color: ${C.Colors.navy};
`;

export const Subtitle = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: ${C.Colors.gray};
`;

export const Hr = styled.hr`
  border: none;
  border-top: 1px solid ${C.Colors.navy}12;
`;

export const FooterText = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${C.Colors.gray};
  text-align: center;

  a {
    color: ${C.Colors.navy};
    font-weight: 600;
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;