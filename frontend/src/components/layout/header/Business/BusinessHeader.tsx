import { useState } from "react";
import * as S from "./BusinessHeader.styles.js";
import { IoArrowForwardCircleOutline, IoMenu, IoClose } from "react-icons/io5";

export function BusinessHeader() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <S.Header>
        <S.ContainerLogo to="/">
          <S.Logo src="/icon.png" alt="Logo ServMap" />
          <S.Name>
            Serv<span>Map</span>
          </S.Name>
        </S.ContainerLogo>

        <S.Nav>
          <S.Items to="recursos" smooth duration={200}>
            Recursos
          </S.Items>
          <S.Items to="experiencia" smooth duration={200}>
            Experiência
          </S.Items>
          <S.Items to="planos" smooth duration={200}>
            Planos
          </S.Items>
        </S.Nav>

        <S.MobileGroup>
          <S.Access to="/entrar">
            Comece grátis <IoArrowForwardCircleOutline size={24} />
          </S.Access>

          <S.Hamburger open={open} onClick={() => setOpen(!open)}>
            {open ? <IoClose size={32} /> : <IoMenu size={32} />}
          </S.Hamburger>
        </S.MobileGroup>
      </S.Header>

      <S.Overlay open={open} onClick={() => setOpen(false)} />

      <S.Sidebar open={open}>
        <S.MobileNav>
          <S.MobileItems to="recursos" onClick={() => closeMenu()}>Recursos</S.MobileItems>
          <S.MobileItems to="experiencia" onClick={() => closeMenu()}>Experiência</S.MobileItems>
          <S.MobileItems to="planos" onClick={() => closeMenu()}>Planos</S.MobileItems>
        </S.MobileNav>
      </S.Sidebar>
    </>
  );
}
