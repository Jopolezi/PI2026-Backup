import * as S from "./BusinessFooter.styles.js";
import { Link } from "react-scroll";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Phone, Mail, MapPin } from "lucide-react";
import Wave from "react-wavify";
import * as C from "@/styles/Colors";

export function BusinessFooter() {
  return (
    <>
      <S.WaveWrapper>
        <Wave
          fill={C.Colors.navy}
          paused={false}
          options={{
            height: 20,
            amplitude: 30,
            speed: 0.2,
            points: 4,
          }}
        />
      </S.WaveWrapper>

      <S.FooterWrapper>
        <S.Top>
          <S.Brand>
            <S.LogoRow>
              <S.Logo src="/icon.png" alt="Logo ServMap" />
              <S.Name>Serv<span>Map</span></S.Name>
            </S.LogoRow>
            <S.Tagline>
              A plataforma de agendamento inteligente para negócios que crescem.
            </S.Tagline>
            <S.ContactList>
              <S.ContactItem>
                <Phone size={16} />
                (11) 99999-9999
              </S.ContactItem>
              <S.ContactItem>
                <Mail size={16} />
                suporte@servmap.com.br
              </S.ContactItem>
              <S.ContactItem>
                <MapPin size={16} />
                Itápolis, SP
              </S.ContactItem>
            </S.ContactList>
          </S.Brand>

          <S.Nav>
            <S.NavTitle>Navegação</S.NavTitle>
            <S.NavList>
              <S.NavItem>
                <Link to="recursos" smooth duration={500}>Recursos</Link>
              </S.NavItem>
              <S.NavItem>
                <Link to="como-funciona" smooth duration={500}>Como funciona</Link>
              </S.NavItem>
              <S.NavItem>
                <Link to="planos" smooth duration={500}>Planos</Link>
              </S.NavItem>
            </S.NavList>
          </S.Nav>

          <S.Actions>
            <S.NavTitle>Acesso</S.NavTitle>
            <S.NavList>
              <S.NavItem>
                <S.Login href="#">Entrar</S.Login>
              </S.NavItem>
              <S.NavItem>
                <S.Register href="#">
                  Cadastre-se grátis <IoArrowForwardCircleOutline size={18} />
                </S.Register>
              </S.NavItem>
            </S.NavList>
          </S.Actions>
        </S.Top>

        <S.Hr />

        <S.Bottom>
          <S.BottomText>
            Desenvolvido por Ita<span>Code</span>
          </S.BottomText>
          <S.BottomText>
            <S.Copyright>&copy;</S.Copyright> Todos os direitos reservados
          </S.BottomText>
        </S.Bottom>
      </S.FooterWrapper>
    </>
  );
}