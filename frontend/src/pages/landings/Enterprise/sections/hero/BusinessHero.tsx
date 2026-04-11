import * as S from "./BusinessHero.styles.js";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import ctaImg  from '../../../../../assets/images/enterprise/cta.png'
import cta2Img from '../../../../../assets/images/enterprise/cta2.png'

export function BusinessHero() {
  return (
    <>
      <S.Main id="hero">
        <S.Content>
          <S.LeftContent>
            <S.Title>
              Sua agenda <span>cheia</span> começa aqui.
            </S.Title>
            <S.Subtitle>
              A plataforma de agendamento mais completa para barbearias, salões,
              estéticas e clínicas. Mais clientes, menos faltas, gestão simples
              e eficiente.
            </S.Subtitle>

            <S.Buttons>
              <S.Account to="/entrar">Criar conta agora</S.Account>
              <S.Demo to="/planos">
                <IoArrowForwardCircleOutline size={20} /> Demo
              </S.Demo>
            </S.Buttons>
          </S.LeftContent>

          <S.RightContent>
            <S.ShapesWrapper>
              <S.NavyShape>
                <S.ShapeImages
                  src={cta2Img}
                  alt="Woman"
                />
              </S.NavyShape>

              <S.OrangeShape>
                <S.InvertImage
                  src={ctaImg}
                  alt="Woman"
                />
              </S.OrangeShape>
            </S.ShapesWrapper>
          </S.RightContent>
        </S.Content>
      </S.Main>
    </>
  );
}
