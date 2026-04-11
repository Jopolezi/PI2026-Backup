import * as S from "./BusinessPlans.styles.js";
import { plans, footerPerks } from "./BusinessPlans.data.js";
import { Check } from "lucide-react";

export function BusinessPlans() {
  return (
    <S.Section id="planos">
      <S.Wrapper>
        <S.Header>
          <S.Title>Planos para todos tamanhos de negócio</S.Title>
          <S.Subtitle>Sem contratos longos. Cancele quando quiser.</S.Subtitle>
        </S.Header>

        <S.Grid>
          {plans.map((plan) => (
            <S.Card key={plan.id} highlight={plan.highlight}>
              {plan.badge && <S.Badge>{plan.badge}</S.Badge>}

              <S.CardHeader>
                <S.PlanName highlight={plan.highlight}>{plan.name}</S.PlanName>
                <S.PlanDescription highlight={plan.highlight}>
                  {plan.description}
                </S.PlanDescription>
              </S.CardHeader>

              <S.PriceRow>
                <S.Currency highlight={plan.highlight}>R$</S.Currency>
                <S.Price highlight={plan.highlight}>{plan.price}</S.Price>
                <S.Period highlight={plan.highlight}>/mês</S.Period>
              </S.PriceRow>

              <S.FeatureList>
                {plan.features.map((feature) => (
                  <S.FeatureItem key={feature} highlight={plan.highlight}>
                    <S.CheckIcon highlight={plan.highlight}>
                      <Check size={14} strokeWidth={3} />
                    </S.CheckIcon>
                    {feature}
                  </S.FeatureItem>
                ))}
              </S.FeatureList>

              <S.Button highlight={plan.highlight}>{plan.trialLabel}</S.Button>
            </S.Card>
          ))}
        </S.Grid>

        <S.Footer>
          {footerPerks.map((perk, i) => (
            <S.FooterItem key={perk}>
              {perk}
              {i < footerPerks.length - 1 && <S.Dot>·</S.Dot>}
            </S.FooterItem>
          ))}
        </S.Footer>
      </S.Wrapper>
    </S.Section>
  );
}