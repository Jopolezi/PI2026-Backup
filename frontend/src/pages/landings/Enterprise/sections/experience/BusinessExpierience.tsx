import * as S from "./BusinessExperience.styles.js";
import { MapPin } from "lucide-react";

export function BusinessExperience() {
  return (
    <S.Section id="experiencia">
      <S.Wrapper>
        <S.Header>
          <S.LeftHeader>
            <S.Badge>Experiência do cliente</S.Badge>
            <S.Title>
              Seus clientes encontram <br />
              <span>você no mapa.</span>
            </S.Title>
          </S.LeftHeader>

          <S.RightHeader>
            <S.Subtitle>
              Os clientes acessam um mapa interativo, veem os estabelecimentos
              próximos, fotos, avaliações e agendam em segundos.
            </S.Subtitle>
          </S.RightHeader>
        </S.Header>

        <S.MapPlaceholder>
          <MapPin size={32} />
          <span>Mapa interativo</span>
        </S.MapPlaceholder>
      </S.Wrapper>
    </S.Section>
  );
}
