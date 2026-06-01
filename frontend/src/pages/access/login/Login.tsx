import * as S from "./Login.styles.js";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { LoginForm } from "../../../features/auth/login.feature";
import { useAuth } from "../../../context/auth.context.js";


export function Login() {
 
  const navigate = useNavigate()

  const { isAuthenticated, isLoadingUser } = useAuth()

  if (isLoadingUser) return null

  if (isAuthenticated) return <Navigate to="/" replace />

  const handleSuccess = () => navigate("/", { replace: true})

  return (
    <S.Page>
      <S.Card>
        <S.LogoRow to="/">
          <S.Logo src="/icon.png" alt="ServMap" />
          <S.LogoName>
            Serv<span>Map</span>
          </S.LogoName>
        </S.LogoRow>

        <S.Header>
          <S.Title>Bem-vindo de volta</S.Title>
          <S.Subtitle>Entre na sua conta para continuar</S.Subtitle>
        </S.Header>

        <LoginForm onSuccess={handleSuccess} />

        <S.Hr />

        <S.FooterText>
          Não tem uma conta ainda? <Link to="/cadastrar">Crie uma agora</Link>
        </S.FooterText>
      </S.Card>
    </S.Page>
  );
}
