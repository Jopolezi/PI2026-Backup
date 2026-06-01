import styled from "styled-components";
import * as Styles from "@/styles/Global";
import * as C from "@/styles/Colors";
import "@fontsource/bricolage-grotesque";
import "@fontsource/plus-jakarta-sans";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: ${C.Colors.navy};
`;

export const LabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ForgotLink = styled.a`
  display: flex;
  align-self: flex-end;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: ${C.Colors.orange};
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.75;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 16px;
  border-radius: 12px;
  border: 1.5px solid
    ${({ error }) => (error ? "#E53E3E" : `${C.Colors.navy}18`)};
  background: ${({ error }) => (error ? "#FFF5F5" : C.Colors.bg)};
  color: ${C.Colors.gray};
  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  &:focus-within {
    border-color: ${({ error }) => (error ? "#E53E3E" : C.Colors.orange)};
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 15px;
  color: ${C.Colors.navy};

  &::placeholder {
    color: ${C.Colors.gray};
  }
`;

export const ErrorMessage = styled.span`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #e53e3e;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: ${C.Colors.orange};
  color: white;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 4px;
  transition:
    opacity 0.25s ease,
    transform 0.2s ease;

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: scale(1.01);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;