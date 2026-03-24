// Imports
import * as S from "./Header.styles.js"


export default function Header() {

    return ( <>
        <S.Header>
            <S.ContainerLogo to="/">
                <S.Logo src="../../../../public/icon.png" alt="Enterprise icon" />

                <S.Slogan>Serv<span>Map</span></S.Slogan>
            </S.ContainerLogo>

            <S.Navbar>
                <S.Items to="/empresas">Para empresas</S.Items>
                <S.Items to="/entrar">Entrar</S.Items>
            </S.Navbar>
        </S.Header>
    </>)
}