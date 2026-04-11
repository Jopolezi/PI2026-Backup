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
  gap: 64px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  gap: 16px;
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

export const Title = styled.h2`
  font-family: "Bricolage Grotesque", serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  color: ${C.Colors.navy};

  span {
    color: ${C.Colors.orange};
  }

  @media (max-width: ${bp.tablet}) {
    font-size: 36px;
  }

  @media (max-width: ${bp.mobile}) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  color: ${C.Colors.gray};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;

  @media (max-width: ${bp.tablet}) {
    grid-template-columns: 1fr;
    max-width: 480px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  border-radius: 24px;
  border: 1.5px solid ${C.Colors.gray};
  background: ${C.Colors.gray}80;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${C.Colors.orange}50;
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
`;

export const StepNumber = styled.span`
  font-family: "Bricolage Grotesque", serif;
  font-size: 13px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 999px;
  background: ${C.Colors.navy};
  color: white;
  width: fit-content;
`;



export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: ${C.Colors.navy};
  color: white;
`;

export const CardTitle = styled.h3`
  font-family: "Bricolage Grotesque", serif;
  font-size: 24px;
  font-weight: 700;
  color: ${C.Colors.navy};
`;

export const CardDescription = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.7;
  color: ${C.Colors.navy};
`;