// Imports
import styled from "styled-components"
import * as C from "@/styles/Colors"
import * as Styles from "@/styles/Global"

import "@fontsource/bricolage-grotesque/700.css"
import "@fontsource/plus-jakarta-sans/600.css"

import { NavLink } from "react-router"

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 4%;
  background: ${C.Colors.bg};
  color: ${C.Colors.navy};
`

export const ContainerLogo = styled(NavLink)`
  ${Styles.Center};
  gap: 10px;
`

export const Logo = styled.img`
  width: 40px;
  height: 0 auto;
  object-fit: cover;
`

export const Slogan = styled.p`
font-family: "Bricolage Grotesque", serif;
font-size: 24px;
font-weight: 500;
color: ${C.Colors.navy};

span {
color: ${C.Colors.orange};
}
`

export const Navbar = styled.nav`
  ${Styles.Center};
  gap: 10px;
`

export const Items = styled(NavLink)`
  ${Styles.Center};
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: ${C.Colors.gray};
  text-decoration: none;

  &:last-child {
    font-weight: 800;
    padding: 8px 18px;
    background: ${C.Colors.orange};
    color: ${C.Colors.white};
    border-radius: 18px;
    transition: all .55s ease;

    &:hover {
      background: ${C.Colors.orangeHover};
    }
  }
`
