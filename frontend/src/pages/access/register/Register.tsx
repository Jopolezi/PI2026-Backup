import * as S from "./Register.styles.js";
import { Link } from "react-router-dom";
import { User, Mail, Lock, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "Nome deve ter no mínimo 2 caracteres"),
    email: z
      .string()
      .min(1, "E-mail obrigatório")
      .email("E-mail inválido"),
    password: z
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z
      .string()
      .min(1, "Confirme sua senha"),
    terms: z
      .boolean()
      .refine((val) => val === true, "Você deve aceitar os termos"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type RegisterForm = z.infer<typeof registerSchema>;

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    console.log(data);
  };

  return (
    <S.Page>
      <S.Card>
        <S.LogoRow to="/">
          <S.Logo src="/icon.png" alt="ServMap" />
          <S.LogoName>Serv<span>Map</span></S.LogoName>
        </S.LogoRow>

        <S.Header>
          <S.Title>Crie sua conta</S.Title>
          <S.Subtitle>Comece a agendar gratuitamente hoje</S.Subtitle>
        </S.Header>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Field>
            <S.Label>Nome completo</S.Label>
            <S.InputWrapper error={!!errors.name}>
              <User size={16} />
              <S.Input
                type="text"
                placeholder="Seu nome"
                {...register("name")}
              />
            </S.InputWrapper>
            {errors.name && <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>}
          </S.Field>

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
            {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
          </S.Field>

          <S.Row>
            <S.Field>
              <S.Label>Senha</S.Label>
              <S.InputWrapper error={!!errors.password}>
                <Lock size={16} />
                <S.Input
                  type="password"
                  placeholder="••••••••"
                  {...register("password")}
                />
              </S.InputWrapper>
              {errors.password && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}
            </S.Field>

            <S.Field>
              <S.Label>Confirmar senha</S.Label>
              <S.InputWrapper error={!!errors.confirmPassword}>
                <CheckCircle2 size={16} />
                <S.Input
                  type="password"
                  placeholder="••••••••"
                  {...register("confirmPassword")}
                />
              </S.InputWrapper>
              {errors.confirmPassword && <S.ErrorMessage>{errors.confirmPassword.message}</S.ErrorMessage>}
            </S.Field>
          </S.Row>

          <S.Field>
            <S.Terms>
              <S.Checkbox
                type="checkbox"
                id="terms"
                {...register("terms")}
              />
              <S.TermsLabel htmlFor="terms">
                Concordo com os{" "}
                <a href="#">Termos de uso</a> e a{" "}
                <a href="#">Política de privacidade</a>
              </S.TermsLabel>
            </S.Terms>
            {errors.terms && <S.ErrorMessage>{errors.terms.message}</S.ErrorMessage>}
          </S.Field>

          <S.SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Criando conta..." : "Criar conta grátis"}
          </S.SubmitButton>
        </S.Form>

        <S.Hr />

        <S.FooterText>
          Já tem uma conta?{" "}
          <Link to="/entrar">Faça login</Link>
        </S.FooterText>
      </S.Card>
    </S.Page>
  );
}