import { useState } from "react";
import * as S from "./ConsumerHeader.styles.js";
import { IoArrowForwardCircleOutline, IoMenu, IoClose } from "react-icons/io5";

export function ConsumerHeader() {
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
          <S.Items to="inicio" smooth duration={200}>
            Início
          </S.Items>
          <S.Items to="experiencia" smooth duration={200}>
            Experiência
          </S.Items>
          <S.Items to="funciona" smooth duration={200}>
            Como funciona
          </S.Items>
        </S.Nav>

        <S.MobileGroup>
          <S.ForBusiness to="/empresas">Para empresas</S.ForBusiness>

          <S.Access to="/entrar">
            Entrar <IoArrowForwardCircleOutline size={24} />
          </S.Access>

          <S.Hamburger open={open} onClick={() => setOpen(!open)}>
            {open ? <IoClose size={32} /> : <IoMenu size={32} />}
          </S.Hamburger>
        </S.MobileGroup>
      </S.Header>

      <S.Overlay open={open} onClick={() => setOpen(false)} />

      <S.Sidebar open={open}>
        <S.MobileNav>
          <S.MobileItems
            to="inicio"
            smooth
            duration={200}
            onClick={() => closeMenu()}
          >
            Início
          </S.MobileItems>
          <S.MobileItems
            to="experiencia"
            smooth
            duration={200}
            onClick={() => closeMenu()}
          >
            Experiência
          </S.MobileItems>
          <S.MobileItems
            to="como-funciona"
            smooth
            duration={200}
            onClick={() => closeMenu()}
          >
            Como funciona
          </S.MobileItems>
          <S.ForBusinessMobile to="/empresas">
            Para empresas
          </S.ForBusinessMobile>
        </S.MobileNav>
      </S.Sidebar>
    </>
  );
}
