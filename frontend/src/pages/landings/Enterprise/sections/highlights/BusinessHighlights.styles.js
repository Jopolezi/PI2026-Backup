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
  background: ${C.Colors.bg};
  color: ${C.Colors.black};
`;

export const Highlight = styled.div`
  ${Styles.Center};
  gap: 30px;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${C.Colors.navy};
  padding: 20px 0;

  @media (max-width: ${bp.tablet}) {
    gap: 20px;
    padding: 20px;
    border-top-right-radius: 22px;
  }

  @media (max-width: ${bp.mobile}) {
    gap: 15px;
    padding: 20px;
    border-top-right-radius: 22px;
  }
`;

export const Textbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const What = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 24px;
  font-weight: 600;
  background: #ff491c40;
  color: ${C.Colors.orange};
  padding: 6px 12px;
  border: none;
  border-radius: 22px;
  text-transform: uppercase;

  @media (max-width: ${bp.tablet}) {
    font-size: 20px;
    padding: 5px 10px;
  }

  @media (max-width: ${bp.mobile}) {
    font-size: 16px;
    padding: 4px 8px;
    border-radius: 14px;
  }
`;

export const Text = styled.p`
  font-family: "Bricolage Grotesque", serif;
  font-size: 48px;
  font-weight: 600;
  color: ${C.Colors.white};
  line-height: 1;

  span {
    color: ${C.Colors.orange};
  }

  @media (max-width: ${bp.tablet}) {
    font-size: 32px;
  }

  @media (max-width: ${bp.mobile}) {
    font-size: 20px;
    line-height: 1.2;
  }
`;
