import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/auth.schema";
import { authService } from "@/services/auth.service";
import { useAuth } from "@/context/auth.context";
import { Mail, Lock } from "lucide-react";
import * as S from "./login.form.style";

export function LoginForm({ onSuccess }) {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data) => {
    try {
      const { token, user } = await authService.login(data);

      signIn(token, user);

      onSuccess();
    } catch (err) {
      const status = err.response?.status;
      const message = err.response?.message;

      if (status === 401) {
        setError("password", { message: "E-mail ou senha incorreta." });
      } else if (status === 429) {
        setError("email", {
          message: "Muitas tentativas. Tente em alguns minutos.",
        });
      } else
        setError("email", {
          message: message ?? "Erro inesperado. Tente novamente.",
        });
    }
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)} noValidate>
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
    </>
  );
}
