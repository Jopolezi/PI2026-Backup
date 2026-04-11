import Marquee from "react-fast-marquee";
import * as S from "./BusinessSegments.styles.js";
import { segments } from "./BusinessSegments.data.js";

export function BusinessSegments() {
  return (
    <S.Section id="segmentos">
      <S.Wrapper>
        <S.Header>
          <S.Badge>Segmentos</S.Badge>
          <S.Title>
            Para qualquer negócio <br />
            <span>que agenda.</span>
          </S.Title>
        </S.Header>

        <S.MarqueeWrapper>
          <Marquee pauseOnHover speed={50} gradient={false}>
            {segments.map((segment) => (
              <S.Card key={segment.label}>
                <S.CardIcon>
                  <segment.icon size={26} />
                </S.CardIcon>
                <S.CardLabel>{segment.label}</S.CardLabel>
              </S.Card>
            ))}
          </Marquee>
        </S.MarqueeWrapper>
      </S.Wrapper>
    </S.Section>
  );
}
