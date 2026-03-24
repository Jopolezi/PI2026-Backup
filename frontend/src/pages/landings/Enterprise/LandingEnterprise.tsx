// Imports 
import * as S from "./LandingEnterprise.styles.js"

import { MdArrowCircleRight } from "react-icons/md";

export default function LandingEnterprise() {

    return ( <>
    
    <S.Header>
        <S.ContainerLogo>
            <S.Logo src="../../../../public/icon.png" alt="Enterprise icon"/>

            <S.Slogan>Serv<span>Map</span></S.Slogan>
        </S.ContainerLogo>


        <S.Navbar>
            <S.Items>Recursos</S.Items>
            <S.Items>Como funciona</S.Items>
            <S.Items>Empresas</S.Items>
            <S.Items>Planos</S.Items>
        </S.Navbar>

        <S.Access>
            <S.Enter>Entrar</S.Enter>
            <S.Register>Comece grátis <span><MdArrowCircleRight size={20}/></span></S.Register>
        </S.Access>
    </S.Header>

    <S.Main>
        <S.MainContent>
            <S.Left>

            </S.Left>

            <S.Right>

            </S.Right>
        </S.MainContent>
    </S.Main>
    </>)
}