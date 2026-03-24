// Imports
import styled from "styled-components"
import * as C from "@/styles/Colors"
import * as Styles from "@/styles/Global"

import "@fontsource/bricolage-grotesque/700.css"
import "@fontsource/plus-jakarta-sans/600.css"
import "@fontsource/plus-jakarta-sans/700.css"

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
  font-family: "Plus Jakarta Sans", sans-serif;
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
  color: ${C.Colors.gray};
  text-decoration: none;
`

export const Access = styled.div`
  ${Styles.Center};
  gap: 10px;
`

export const Enter = styled(Items)`
font-weight: 700;
`

export const Register = styled(NavLink)`
  ${Styles.Center};
  gap: 10px;
  font-size: 14px;
  padding: 8px 18px;
  background: ${C.Colors.orange};
  color: ${C.Colors.white};
  border-radius: 18px;
  transition: all 0.55s ease;

  span {
  ${Styles.Center};
  }

  &:hover {
    background: ${C.Colors.orangeHover};
  }
`

export const Main = styled.main`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
height: calc(100dvh - 80px)
background: ${C.Colors.bg};
`

export const MainContent = styled.div`
display: flex;
width: 100%;
height: 100%;
gap: 10px;
background: blue;
`

export const Left = styled.div`
${Styles.Center};
width: 50%;
height: 100%;
background: orange;
`

export const Right = styled.div`
${Styles.Center};
width: 50%;
height: 100%;
background: green;
`
