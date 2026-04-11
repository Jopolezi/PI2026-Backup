import * as S from "./ClientMap.styles.js";
import { MapPin, Star, Clock } from "lucide-react";

const listings = [
  { name: "Barbearia Kings", category: "Barbearia", rating: "4.9", distance: "0.3 km", time: "Hoje, 14h" },
  { name: "Studio Bella", category: "Salão", rating: "4.8", distance: "0.7 km", time: "Hoje, 15h30" },
  { name: "Clínica Vida", category: "Estética", rating: "4.7", distance: "1.1 km", time: "Amanhã, 09h" },
];

export function ClientMap() {
  return (
    <S.Section id="experiencia">
      <S.Wrapper>
        <S.Header>
          <S.LeftHeader>
            <S.Badge>Perto de você</S.Badge>
            <S.Title>
              Encontre serviços <br />
              <span>para você</span> no mapa.
            </S.Title>
          </S.LeftHeader>
          <S.Subtitle>
            Veja estabelecimentos próximos, fotos, avaliações e agende
            em segundos diretamente pelo mapa.
          </S.Subtitle>
        </S.Header>

        <S.Content>
          <S.MapPlaceholder>
            <MapPin size={32} />
            <span>Mapa interativo</span>
          </S.MapPlaceholder>
        </S.Content>
      </S.Wrapper>
    </S.Section>
  );
}