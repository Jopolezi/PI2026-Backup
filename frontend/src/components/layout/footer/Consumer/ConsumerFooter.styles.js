import styled from "styled-components";
import * as Styles from "@/styles/Global";
import * as C from "@/styles/Colors";
import "@fontsource/bricolage-grotesque";
import "@fontsource/plus-jakarta-sans";
import { Link } from "react-router";

const bp = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

export const FooterWrapper = styled.footer`
  width: 100%;
  background: ${C.Colors.navy};
  color: white;
  padding: 64px 4% 32px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const WaveWrapper = styled.div`
  width: 100%;
  line-height: 0;
  background: ${C.Colors.bg};

  svg {
    display: block;
    width: 100%;
    height: 80px;
  }
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
  align-items: flex-start;

  @media (max-width: ${bp.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${bp.tablet}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
`;

export const Name = styled.span`
  font-family: "Bricolage Grotesque", serif;
  font-size: 22px;
  font-weight: 700;
  color: white;

  span {
    color: ${C.Colors.orange};
  }
`;

export const Tagline = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.55);
  max-width: 320px;
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);

  svg {
    flex-shrink: 0;
    color: ${C.Colors.orange};
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NavTitle = styled.span`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  a {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    cursor: pointer;
    transition: color 0.25s ease;

    &:hover {
      color: white;
    }
  }
`;

export const Login = styled(Link)`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.25s ease;

  &:hover {
    color: white;
  }
`;

export const Register = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: ${C.Colors.orange};
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.25s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const Hr = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: ${bp.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BottomText = styled.span`
  display: flex;
  align-items: center;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: ${C.Colors.gray};
  pointer-events: none;

  span {
    color: ${C.Colors.cyan};
    font-weight: 600;
  }

  &:last-child {
    gap: 5px;
  }
`;

export const Copyright = styled.p`
  font-size: 15px;
  color: ${C.Colors.gray};
`;
