import styled from "styled-components";
import * as Styles from "@/styles/Global";
import * as C from "@/styles/Colors";
import "@fontsource/bricolage-grotesque";
import "@fontsource/plus-jakarta-sans";
import { Link } from "react-router";

export const Page = styled.div`
  ${Styles.Center};
  width: 100%;
  min-height: 100dvh;
  background: ${C.Colors.navy};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  max-width: 500px;
  padding: 48px 40px;
  border-radius: 28px;
  background: white;
  border: 1.5px solid ${C.Colors.navy}30;
  box-shadow: 0 8px 64px rgba(0, 0, 0, 0.25);
`;

export const LogoRow = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

export const LogoName = styled.span`
  font-family: "Bricolage Grotesque", serif;
  font-size: 20px;
  font-weight: 700;
  color: ${C.Colors.navy};

  span {
    color: ${C.Colors.orange};
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.h1`
  font-family: "Bricolage Grotesque", serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.1;
  color: ${C.Colors.navy};
`;

export const Subtitle = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: ${C.Colors.gray};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: ${C.Colors.navy};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 16px;
  border-radius: 12px;
  border: 1.5px solid ${({ error }) => (error ? "#E53E3E" : `${C.Colors.navy}18`)};
  background: ${({ error }) => (error ? "#FFF5F5" : C.Colors.bg)};
  color: ${C.Colors.gray};
  transition: border-color 0.2s ease, background 0.2s ease;

  &:focus-within {
    border-color: ${({ error }) => (error ? "#E53E3E" : C.Colors.navy)};
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
  color: #E53E3E;
`;

export const Terms = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const Checkbox = styled.input`
  margin-top: 2px;
  accent-color: ${C.Colors.navy};
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
`;

export const TermsLabel = styled.label`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 13px;
  color: ${C.Colors.gray};
  line-height: 1.5;
  cursor: pointer;

  a {
    color: ${C.Colors.navy};
    font-weight: 600;
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }
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
  background: ${C.Colors.navy};
  color: white;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 4px;
  transition: opacity 0.25s ease, transform 0.2s ease;

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: scale(1.01);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Hr = styled.hr`
  border: none;
  border-top: 1px solid ${C.Colors.navy}12;
`;

export const FooterText = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${C.Colors.gray};
  text-align: center;

  a {
    color: ${C.Colors.navy};
    font-weight: 600;
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;