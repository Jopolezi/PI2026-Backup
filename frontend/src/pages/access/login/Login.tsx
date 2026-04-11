import * as S from "./Login.styles.js";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().min(1, "E-mail obrigatório").email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

type LoginForm = z.infer<typeof loginSchema>;

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    console.log(data);
  };

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

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Field>
            <S.Label>E-mail</S.Label>
            <S.InputWrapper error={!!errors.email}>
              <Mail size={16} />
              <S.Input
                type="email"
                placeholder="seu@email.com"
                {...register("email")}
              />
            </S.InputWrapper>
            {errors.email && (
              <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
            )}
          </S.Field>

          <S.Field>
            <S.LabelRow>
              <S.Label>Senha</S.Label>
            </S.LabelRow>
            <S.InputWrapper error={!!errors.password}>
              <Lock size={16} />
              <S.Input
                type="password"
                placeholder="••••••••"
                {...register("password")}
              />
            </S.InputWrapper>
            {errors.password && (
              <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
            )}
          </S.Field>
          <S.ForgotLink href="#">Esqueceu a senha?</S.ForgotLink>
          <S.SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Entrando..." : "Entrar"}
          </S.SubmitButton>
        </S.Form>

        <S.Hr />

        <S.FooterText>
          Não tem uma conta ainda? <Link to="/cadastrar">Crie uma agora</Link>
        </S.FooterText>
      </S.Card>
    </S.Page>
  );
}
