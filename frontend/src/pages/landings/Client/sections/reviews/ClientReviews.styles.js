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
  align-self: flex-start;
  gap: 64px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 16px;
  text-align: center;
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;

  @media (max-width: ${bp.desktop}) {
    grid-template-columns: 1fr;
    max-width: 480px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  border-radius: 24px;
  border: 1.5px solid ${C.Colors.navy}14;
  background: white;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${C.Colors.orange}50;
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: 4px;
  color: ${C.Colors.orange};
`;

export const ReviewText = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.7;
  color: ${C.Colors.gray};
  flex: 1;
`;

export const Reviewer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 16px;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const ReviewerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Image = styled.img`
object-fit: cover;
width: 60px;
height: 60px;
border-radius: 50%;
`

export const ReviewerName = styled.strong`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: ${C.Colors.navy};
`;

export const ReviewerRole = styled.span`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 13px;
  color: ${C.Colors.gray};
`;
