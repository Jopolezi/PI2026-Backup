import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas/auth.schema";
import { authService } from "@/services/auth.service";
import { User, Mail, Lock, CheckCircle2 } from "lucide-react";
import * as S from "./register.form.style";

export function RegisterForm({ onSuccess }) {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await authService.register(data);

      onSuccess();
    } catch (err) {
      const status = err.response?.status;
      const message = err.response?.data?.message;

      if (status === 409) {
        setError("email", {
          message: "Este e-mail já está cadastrado",
        });
      } else {
        setError("email", {
          message: message ?? "Erro ao criar conta",
        });
      }
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <S.Field>
        <S.Label>Nome completo</S.Label>
        <S.InputWrapper error={!!errors.name}>
          <User size={16} />
          <S.Input type="text" placeholder="Seu nome" {...register("name")} />
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
        {errors.email && (
          <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
        )}
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
          {errors.password && (
            <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
          )}
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
          {errors.confirmPassword && (
            <S.ErrorMessage>{errors.confirmPassword.message}</S.ErrorMessage>
          )}
        </S.Field>
      </S.Row>

      <S.Field>
        <S.Terms>
          <S.Checkbox type="checkbox" id="terms" {...register("terms")} />
          <S.TermsLabel htmlFor="terms">
            Concordo com os <a href="#">Termos de uso</a> e a{" "}
            <a href="#">Política de privacidade</a>
          </S.TermsLabel>
        </S.Terms>
        {errors.terms && (
          <S.ErrorMessage>{errors.terms.message}</S.ErrorMessage>
        )}
      </S.Field>

      <S.SubmitButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Criando conta..." : "Criar conta grátis"}
      </S.SubmitButton>
    </S.Form>
  );
}
