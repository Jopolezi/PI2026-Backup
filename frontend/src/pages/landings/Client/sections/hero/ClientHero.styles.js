import styled from "styled-components";
import * as Styles from "@/styles/Global";
import * as C from "@/styles/Colors";
import "@fontsource/bricolage-grotesque";
import "@fontsource/plus-jakarta-sans";

const bp = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

export const Section = styled.section`
  position: relative;
  ${Styles.Center};
  width: 100%;
  padding: 2% 4%;
  background: ${C.Colors.bg};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  width: 100%;
  padding: 0 4%;
  max-width: 780px;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1.5px solid ${C.Colors.orange};
  color: ${C.Colors.orange};
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  width: fit-content;
`;

export const Title = styled.h1`
  font-family: "Bricolage Grotesque", serif;
  font-size: 64px;
  font-weight: 700;
  line-height: 1.05;
  color: ${C.Colors.navy};

  span {
    color: ${C.Colors.orange};
  }

  @media (max-width: ${bp.tablet}) {
    font-size: 44px;
  }

  @media (max-width: ${bp.mobile}) {
    font-size: 34px;
  }
`;

export const Subtitle = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  color: ${C.Colors.gray};
  max-width: 520px;

  @media (max-width: ${bp.mobile}) {
    font-size: 15px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 680px;
  background: white;
  border: 1.5px solid ${C.Colors.navy}22;
  border-radius: 999px;
  padding: 6px 6px 6px 20px;
  gap: 8px;
  box-shadow: 0 4px 32px ${C.Colors.navy}0A;

  @media (max-width: ${bp.tablet}) {
    flex-direction: column;
    border-radius: 20px;
    padding: 16px;
    align-items: stretch;
  }
`;

export const SearchField = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  color: ${C.Colors.gray};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 15px;
  color: ${C.Colors.navy};
  width: 100%;

  &::placeholder {
    color: ${C.Colors.gray};
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 28px;
  background: ${C.Colors.navy}18;

  @media (max-width: ${bp.tablet}) {
    width: 100%;
    height: 1px;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: ${C.Colors.orange};
  color: white;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
  transition: opacity 0.25s ease, transform 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }

  @media (max-width: ${bp.tablet}) {
    width: 100%;
    border-radius: 12px;
  }
`;

export const Suggestions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SuggestionsLabel = styled.span`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 13px;
  color: ${C.Colors.gray};
`;

export const SuggestionPill = styled.button`
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid ${C.Colors.navy}18;
  background: transparent;
  cursor: pointer;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 13px;
  color: ${C.Colors.navy};
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: ${C.Colors.navy}08;
    border-color: ${C.Colors.navy}40;
  }
`;