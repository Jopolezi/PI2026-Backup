import styled, { css } from "styled-components";
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

  background: ${C.Colors.bg};
  color: ${C.Colors.black};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  width: 100%;
  padding: 80px 4%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
`;

export const Title = styled.h2`
  font-family: "Bricolage Grotesque", serif;
  font-size: 46px;
  font-weight: 700;
  line-height: 1;
  color: ${C.Colors.navy};

  @media (max-width: ${bp.tablet}) {
    font-size: 32px;
  }

  @media (max-width: ${bp.mobile}) {
    font-size: 26px;
  }
`;

export const Subtitle = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${C.Colors.gray};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 1100px;

  @media (max-width: ${bp.desktop}) {
    grid-template-columns: 1fr;
    max-width: 480px;
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  border-radius: 24px;
  transition: transform 0.3s ease;

  ${({ highlight }) =>
    highlight
      ? css`
          background: ${C.Colors.navy};
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.18);
          transform: scale(1.04);
          padding-top: 48px;
        `
      : css`
          background: transparent;
          border: 1.5px solid ${C.Colors.navy}22;
        `}

  &:hover {
    transform: ${({ highlight }) =>
      highlight ? "scale(1.06)" : "scale(1.02)"};
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  border-radius: 999px;
  background: ${C.Colors.orange};
  color: white;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 14 px;
  font-weight: 600;
  white-space: nowrap;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const PlanName = styled.h3`
  font-family: "Bricolage Grotesque", serif;
  font-size: 24px;
  font-weight: 700;
  color: ${({ highlight }) => (highlight ? "white" : C.Colors.navy)};
`;

export const PlanDescription = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${({ highlight }) =>
    highlight ? "rgba(255,255,255,0.6)" : C.Colors.gray};
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;
`;

export const Currency = styled.span`
  font-family: "Bricolage Grotesque", serif;
  font-size: 22px;
  font-weight: 700;
  padding-bottom: 6px;
  color: ${({ highlight }) => (highlight ? "white" : C.Colors.orange)};
`;

export const Price = styled.span`
  font-family: "Bricolage Grotesque", serif;
  font-size: 64px;
  font-weight: 700;
  line-height: 1;
  color: ${({ highlight }) => (highlight ? "white" : C.Colors.orange)};
`;

export const Period = styled.span`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  padding-bottom: 10px;
  color: ${({ highlight }) =>
    highlight ? "rgba(255,255,255,0.6)" : C.Colors.gray};
`;

export const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: ${({ highlight }) =>
    highlight ? "rgba(255,255,255,0.85)" : C.Colors.black};
`;

export const CheckIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ highlight }) =>
    highlight ? C.Colors.orange : C.Colors.navy + "18"};
  color: ${({ highlight }) => (highlight ? "white" : C.Colors.navy)};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  background: ${C.Colors.orange};
  color: white;
  transition:
    opacity 0.3s ease,
    transform 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FooterItem = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: ${C.Colors.gray};
`;

export const Dot = styled.span`
  color: ${C.Colors.gray};
`;
