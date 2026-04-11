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
  max-height: 30dvh;
  background: ${C.Colors.bg};
  overflow-x: clip;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${C.Colors.orange};
  gap: 24px;
  width: 100%;
  padding: 2% 4%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 16px;

  @media (max-width: ${bp.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1.5px solid rgba(255, 255, 255, 0.6);
  color: white;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
  width: fit-content;
`;

export const Title = styled.h2`
  font-family: "Bricolage Grotesque", serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 1;
  color: white;

  @media (max-width: ${bp.tablet}) {
    font-size: 28px;
  }

  @media (max-width: ${bp.mobile}) {
    font-size: 22px;
  }
`;

export const MarqueeWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50px;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, ${C.Colors.orange}, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, ${C.Colors.orange}, transparent);
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 24px;
  margin-right: 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  border: 1.5px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  color: white;
  white-space: nowrap;
  cursor: default;
  transition:
    background 0.3s ease,
    border 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: ${bp.mobile}) {
    padding: 6px 12px;
  }
`;

export const CardIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
`;

export const CardLabel = styled.span`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: white;

  @media (max-width: ${bp.mobile}) {
    font-size: 12px;
  }
`;
