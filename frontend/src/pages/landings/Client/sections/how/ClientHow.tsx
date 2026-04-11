import * as S from "./ClientHow.styles.js";
import { howSteps } from "./ClientHow.data.js";

export function ClientHow() {
  return (
    <S.Section id="funciona">
      <S.Wrapper>
        <S.Header>
          <S.Badge>Como funciona</S.Badge>
          <S.Title>
            Agende em <span>3 passos simples</span>
          </S.Title>
          <S.Subtitle>
            Sem ligações, sem espera. Do início ao fim, tudo pelo celular ou
            computador.
          </S.Subtitle>
        </S.Header>

        <S.Grid>
          {howSteps.map((step, index) => (
            <S.Card key={step.number}>
              <S.CardTop>
                <S.StepNumber>{step.number}</S.StepNumber>
              </S.CardTop>
              <S.IconWrapper>
                <step.icon size={24} />
              </S.IconWrapper>
              <S.CardTitle>{step.title}</S.CardTitle>
              <S.CardDescription>{step.description}</S.CardDescription>
            </S.Card>
          ))}
        </S.Grid>
      </S.Wrapper>
    </S.Section>
  );
}
