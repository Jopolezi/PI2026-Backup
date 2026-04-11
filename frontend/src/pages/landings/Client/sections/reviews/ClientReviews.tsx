import * as S from "./ClientReviews.styles.js";
import { Star } from "lucide-react";
import { testimonials } from "./Testimonials.data.js";

export function ClientReviews() {
  return (
    <S.Section id="reviews">
      <S.Wrapper>
        <S.Header>
          <S.Badge>Avaliações</S.Badge>
          <S.Title>
            Quem usa, <span>recomenda.</span>
          </S.Title>
        </S.Header>

        <S.Grid>
          {testimonials.map((review) => (
            <S.Card key={review.name}>
              <S.Reviewer>
                <S.Avatar>
                  <S.Image src={review.image}></S.Image>
                </S.Avatar>
                <S.ReviewerInfo>
                  <S.ReviewerName>{review.name}</S.ReviewerName>
                  <S.ReviewerRole>{review.role}</S.ReviewerRole>
                </S.ReviewerInfo>
              </S.Reviewer>

              <S.Stars>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </S.Stars>
              <S.ReviewText>"{review.text}"</S.ReviewText>
            </S.Card>
          ))}
        </S.Grid>
      </S.Wrapper>
    </S.Section>
  );
}
