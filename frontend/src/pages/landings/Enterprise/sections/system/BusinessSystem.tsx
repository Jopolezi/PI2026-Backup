import * as S from "./BusinessSystem.styles.js";
import { tabs } from "./BusinessSystem.data.js";
import Section from "../../../../../assets/images/enterprise/section.png";
import {
  CalendarClock,
  Users,
  HeartHandshake,
  Smartphone,
  LayoutGrid,
} from "lucide-react";

export function BusinessSystem() {
  return (
    <S.System id="recursos">
      <S.Wrapper>
        <S.Root defaultValue="tab1">
          <S.LeftContent>
            <S.WrapperShape>
              <S.Shape />
              <S.Image src={Section} />
            </S.WrapperShape>

            <S.List>
              {tabs.map((tab) => (
                <S.Trigger key={tab.value} value={tab.value}>
                  <tab.triggerIcon size={20} />
                  {tab.trigger}
                </S.Trigger>
              ))}
            </S.List>
          </S.LeftContent>

          <S.RightContent>
            {tabs.map((tab) => (
              <S.Content key={tab.value} value={tab.value} forceMount>
                <S.TabTitle>{tab.title}</S.TabTitle>
                <S.TabSubtitle>{tab.subtitle}</S.TabSubtitle>
                <S.TopicsList>
                  {tab.topics.map((topic) => (
                    <S.TopicItem key={topic.topicTitle}>
                      <S.TopicIcon>
                        <topic.icon size={22} />
                      </S.TopicIcon>
                      <S.TopicText>
                        <S.TopicTitle>{topic.topicTitle}</S.TopicTitle>
                        <S.TopicSubtitle>{topic.topicSubtitle}</S.TopicSubtitle>
                      </S.TopicText>
                    </S.TopicItem>
                  ))}
                </S.TopicsList>
              </S.Content>
            ))}
          </S.RightContent>
        </S.Root>
      </S.Wrapper>
    </S.System>
  );
}
