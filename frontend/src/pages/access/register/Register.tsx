import * as S from "./Register.styles.js";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { RegisterForm } from "../../../features/auth/register.feature";
import { useAuth } from "../../../context/auth.context.js";

export function Register() {
  const navigate = useNavigate();

  const { isAuthenticated, isLoadingUser } = useAuth();

  if (isLoadingUser) return null;

  if (isAuthenticated) return <Navigate to="/" replace />;

  const handleSuccess = () => navigate("/", { replace: true });

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
          <S.Title>Crie sua conta</S.Title>
          <S.Subtitle>Comece a agendar gratuitamente hoje</S.Subtitle>
        </S.Header>

        <RegisterForm onSuccess={handleSuccess} />

        <S.Hr />

        <S.FooterText>
          Já tem uma conta? <Link to="/entrar">Faça login</Link>
        </S.FooterText>
      </S.Card>
    </S.Page>
  );
}
