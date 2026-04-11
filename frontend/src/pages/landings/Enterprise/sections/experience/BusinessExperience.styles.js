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
  color: ${C.Colors.black};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  padding: 0 4%;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: ${bp.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const LeftHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 800px;
`;

export const RightHeader = styled.div`
  max-width: 560px;

  @media (max-width: ${bp.tablet}) {
    max-width: 100%;
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  background: ${C.Colors.cyan}50;
  border-radius: 999px;
  border: 1.5px solid ${C.Colors.cyan};
  color: ${C.Colors.cyan};
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
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
    color: ${C.Colors.cyan};
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
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: ${C.Colors.gray};
`;

export const MapPlaceholder = styled.div`
  ${Styles.Center};
  flex-direction: column;
  width: 100%;
  gap: 6px;
  border-radius: 24px;
  background: ${C.Colors.gray}40;
  min-height: 600px;
  color: ${C.Colors.gray};
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 15px;

  @media (max-width: ${bp.desktop}) {
    min-height: 280px;
  }
`;