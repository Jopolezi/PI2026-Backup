import * as S from "./ClientHero.styles.js";
import { Search, MapPin } from "lucide-react";

export function ClientHero() {
  return (
    <S.Section id="inicio">
      <S.Wrapper>
        <S.Badge>Agendamento online</S.Badge>
        <S.Title>
          Encontre profissionais <br />
          <span>perto de você.</span>
        </S.Title>
        <S.Subtitle>
          Salões, clínicas, academias e muito mais. Agende em segundos,
          sem precisar ligar.
        </S.Subtitle>

        <S.SearchWrapper>
          <S.SearchField>
            <MapPin size={18} />
            <S.Input placeholder="Sua localização..." />
          </S.SearchField>
          <S.Divider />
          <S.SearchField>
            <Search size={18} />
            <S.Input placeholder="Segmento ou profissional..." />
          </S.SearchField>
          <S.SearchButton>Buscar</S.SearchButton>
        </S.SearchWrapper>

        <S.Suggestions>
          <S.SuggestionsLabel>Popular:</S.SuggestionsLabel>
          {["Barbearia", "Salão", "Clínica", "Pet Shop", "Academia"].map((s) => (
            <S.SuggestionPill key={s}>{s}</S.SuggestionPill>
          ))}
        </S.Suggestions>
      </S.Wrapper>
    </S.Section>
  );
}