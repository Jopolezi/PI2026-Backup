import styled from "styled-components";
import * as Tabs from "@radix-ui/react-tabs";
import * as Styles from "@/styles/Global";
import * as C from "@/styles/Colors";
import "@fontsource/bricolage-grotesque";
import "@fontsource/plus-jakarta-sans";

const bp = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

export const System = styled.section`
  position: relative;
  ${Styles.Center};
  width: 100%;
  background: ${C.Colors.bg};
  color: ${C.Colors.black};
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 4rem 4%;
`;

export const Root = styled(Tabs.Root)`
  display: flex;
  width: 100%;
  gap: 40px;

  @media (max-width: ${bp.desktop}) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 30%;

  @media (max-width: ${bp.desktop}) {
    width: 100%;
    gap: 24px;
  }
`;

export const RightContent = styled.div`
  display: grid;
  width: 70%;
  align-items: start;

  @media (max-width: ${bp.desktop}) {
    width: 100%;
  }
`;

export const WrapperShape = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

  @media (max-width: ${bp.tablet}) {
    width: 260px;
    height: 260px;
  }

  @media (max-width: ${bp.mobile}) {
    width: 200px;
    height: 200px;
  }
`;

export const Shape = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #ff4a1c;
  background: radial-gradient(
    circle,
    rgba(255, 74, 28, 1) 0%,
    rgba(229, 62, 21, 1) 100%
  );
  overflow: hidden;
  z-index: 0;
`;

export const Image = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 1;
`;

export const List = styled(Tabs.List)`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${bp.desktop}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
  }
`;

export const Trigger = styled(Tabs.Trigger)`
  display: flex;
  align-items: center;
  gap: 5px;
  align-self: flex-start;
  width: 300px;
  padding: 12px;
  border: none;
  background: none;
  cursor: pointer;
  color: ${C.Colors.gray};
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 22px;
  font-weight: 500;
  transition: color 0.35s ease;

  &[data-state="active"] {
    color: ${C.Colors.navy};
  }

  @media (max-width: ${bp.desktop}) {
    font-size: 16px;
    gap: 8px;
  }

  @media (max-width: ${bp.mobile}) {
    font-size: 14px;
    padding: 6px;
    border-radius: 8px;
  }
`;

export const TriggerIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 22px;
  background: ${C.Colors.orange};
  color: ${C.Colors.white};
  transition: background 0.35s ease;

  ${Trigger}[data-state="active"] & {
    background: ${C.Colors.navy};
  }

  @media (max-width: ${bp.desktop}) {
    width: 36px;
    height: 36px;
    border-radius: 12px;
  }
`;

export const Content = styled(Tabs.Content)`
  grid-area: 1 / 1;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &[data-state="inactive"] {
    visibility: hidden;
    pointer-events: none;
  }
`;

export const TabTitle = styled.h2`
  font-family: "Bricolage Grotesque", serif;
  font-size: 42px;
  font-weight: 600;
  line-height: 1;
  color: ${C.Colors.navy};

  @media (max-width: ${bp.tablet}) {
    font-size: 32px;
  }

  @media (max-width: ${bp.mobile}) {
    font-size: 26px;
  }
`;

export const TabSubtitle = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-align: justify;
  line-height: 1.6;
  color: ${C.Colors.gray};
  max-width: 800px;

  @media (max-width: ${bp.tablet}) {
    font-size: 16px;
  }
`;

export const TopicsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: ${bp.tablet}) {
    gap: 24px;
  }
`;

export const TopicItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const TopicIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${C.Colors.navy};
  color: ${C.Colors.white};

  @media (max-width: ${bp.mobile}) {
    width: 38px;
    height: 38px;
    border-radius: 10px;
  }
`;

export const TopicText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TopicTitle = styled.strong`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: ${C.Colors.navy};

  @media (max-width: ${bp.tablet}) {
    font-size: 18px;
  }
`;

export const TopicSubtitle = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  color: ${C.Colors.gray};
  max-width: 600px;

  @media (max-width: ${bp.tablet}) {
    font-size: 15px;
  }
`;
