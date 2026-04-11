import styled from "styled-components";
import * as Styles from "@/styles/Global";
import * as C from "@/styles/Colors";
import { NavLink } from "react-router";
import { Link } from "react-scroll";

import "@fontsource/bricolage-grotesque";
import "@fontsource/plus-jakarta-sans";

const bp = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

export const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  margin: 0;
  width: 100%;
  height: 80px;
  background: ${C.Colors.bg};
  color: ${C.Colors.black};
  z-index: 999;
`;

export const ContainerLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: default;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

export const Name = styled.p`
  font-family: "Bricolage Grotesque", serif;
  font-size: 18px;
  font-weight: 700;
  color: ${C.Colors.navy};

  span {
    color: ${C.Colors.orange};
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: ${bp.tablet}) {
    display: none;
  }
`;

export const Items = styled(Link)`
  text-decoration: none;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: ${C.Colors.gray};
  transition: all 0.55s ease;
  line-height: 1;

  &:hover {
    color: ${C.Colors.navy};
  }

  &:active {
    color: ${C.Colors.orange};
  }
`;

export const MobileGroup = styled.div`
  @media (max-width: ${bp.tablet}) {
    ${Styles.Center};
    gap: 10px;
  }
`;

export const Access = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 6px 12px;
  line-height: 1;
  background: ${C.Colors.orange};
  color: ${C.Colors.white};
  border-radius: 18px;
  transition: all 0.55s ease;
  box-shadow: 0px 0px 5px 0px rgba(255, 74, 28, 0.79);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(255, 74, 28, 0.79);
  -moz-box-shadow: 0px 0px 5px 0px rgba(255, 74, 28, 0.79);

  &:hover {
    background: ${C.Colors.orangeHover};
    box-shadow: 0px 0px 5px 0px rgba(229, 62, 21, 0.79);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(229, 62, 21, 0.79);
    -moz-box-shadow: 0px 0px 5px 0px rgba(229, 62, 21, 0.79);
  }

  svg {
    transform: translateY(1.5px);
    font-weight: 500;
  }

  @media (max-width: ${bp.tablet}) {
    font-size: 12px;
  }
`;

export const Hamburger = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  transform: translateY(2px);

  @media (max-width: ${bp.tablet}) {
    display: block;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 997;
  pointer-events: ${({ open }) => (open ? "all" : "none")};
  animation: ${({ open }) => (open ? "fadeIn" : "fadeOut")} 0.3s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const Sidebar = styled.div`
  display: none;
  position: fixed;
  top: 80px;
  bottom: 0;
  width: 100%;
  height: 200px;
  background: ${C.Colors.bg};
  color: ${C.Colors.black};
  padding: 20px 4%;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
  z-index: 998;
  animation: ${({ open }) => (open ? "slideIn" : "slideOut")} 0.35s ease
    forwards;

  @keyframes slideIn {
    from {
      transform: translateY(-110%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-110%);
    }
  }

  @media (max-width: ${bp.mobile}) {
    display: block;
  }
`;

export const MobileNav = styled.nav`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

export const MobileItems = styled(Items)`
  color: ${C.Colors.navy};
`;
