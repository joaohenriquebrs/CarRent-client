import React from 'react';
import Image from 'next/image';
import {
  FooterContainer,
  BlockHeaderFooter,
  TitleFooter,
  SocialMedias,
  BlockInsta,
  BlockFace,
  ContentFooterContainer,
  LeftContent,
  RightContent,
  Location1,
  Location2,
  TitleLocation1,
  EmailDiv1,
  TitleLocation2,
  EmailDiv2,
  FooterBase,
  RightsContainer,
  ContentFooterBase,
  TermsDiv,
  Privacy,
  MapStyle,
  Degrade,
  Infos,
  IconInfo,
  BlockContentBase,
  AdjustFooter
} from './styles';
import {
  AutoConf,
  EmailIcon,
  FaceIcon,
  InstaIcon,
  LocaltionIcon,
  TeleIcon,
  WppFooterIcon
} from 'assets';

export default function Footer() {
  return (
    <FooterContainer>
      <BlockHeaderFooter>
        <TitleFooter>Nossas redes sociais</TitleFooter>
        <SocialMedias>
          <BlockInsta href="#">
            <Image
              src={InstaIcon}
              alt="Imagem da logo do instagram"
              layout="responsive"
            />
          </BlockInsta>
          <BlockFace href="#">
            <Image
              src={FaceIcon}
              alt="Imagem da logo do facebook"
              layout="responsive"
            />
          </BlockFace>
        </SocialMedias>
        <Degrade></Degrade>
      </BlockHeaderFooter>
      <ContentFooterContainer>
        <LeftContent>
          <MapStyle src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41371.06017374711!2d-46.619072601987064!3d-23.578510318473604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2ea7889029%3A0x4082ce660c9f6a4!2sShopping%20Metr%C3%B4%20Santa%20Cruz!5e0!3m2!1spt-BR!2sbr!4v1706821258681!5m2!1spt-BR!2sbr"></MapStyle>
        </LeftContent>
        <RightContent>
          <Location1>
            <TitleLocation1>GRUPO AUTOS</TitleLocation1>
            <Infos href="#">
              <IconInfo>
                <Image
                  src={LocaltionIcon}
                  alt="Imagem de um ponto de localização"
                />
              </IconInfo>
              Avenida Marechal Paulo - Pina - São Paulo/SP - CEP 61010000
            </Infos>
            <Infos href="#">
              <IconInfo>
                <Image src={TeleIcon} alt="Imagem de um telefone" />
              </IconInfo>
              &#40;11&#41;3690-2653
            </Infos>
            <Infos href="#">
              <IconInfo>
                <Image src={WppFooterIcon} alt="Imagem da logo do whatsapp" />
              </IconInfo>
              &#40;11&#41;998325-1154
            </Infos>
            <EmailDiv1 href="#">
              <IconInfo>
                <Image src={EmailIcon} alt="Imagem de email" />
              </IconInfo>
              contato1@grupo.com.br
            </EmailDiv1>
          </Location1>
          <Location2>
            <TitleLocation2>Grupo AUTOS SHOPPING</TitleLocation2>
            <Infos href="#">
              <IconInfo>
                <Image
                  src={LocaltionIcon}
                  alt="Imagem de um ponto de localização"
                />
              </IconInfo>
              Avenida Goés Terceiro - Imbiribeira - São Paulo/SP - CEP 61172000
            </Infos>
            <Infos href="#">
              <IconInfo>
                <Image src={TeleIcon} alt="Imagem de um telefone" />
              </IconInfo>
              &#40;11&#41;3320-2653
            </Infos>
            <Infos href="#">
              <IconInfo>
                <Image src={WppFooterIcon} alt="Imagem da logo do whatsapp" />
              </IconInfo>
              &#40;11&#41;99759-2233
            </Infos>
            <EmailDiv2 href="#">
              <IconInfo>
                <Image src={EmailIcon} alt="Imagem de email" />
              </IconInfo>
              contato2@grupo.com.br
            </EmailDiv2>
          </Location2>
        </RightContent>
      </ContentFooterContainer>
      <FooterBase>
        <AdjustFooter>
          <RightsContainer>
            © 2024 Autoconf. Todos os direitos reservados.
          </RightsContainer>
          <ContentFooterBase>
            <TermsDiv href="#">Termos</TermsDiv>
            <Privacy href="#">Privacidade</Privacy>
          </ContentFooterBase>
          <BlockContentBase href='#'>
            <Image
              src={AutoConf}
              alt="Imagem da logo da empresa autoconf"
              layout="responsive"
            />
          </BlockContentBase>
        </AdjustFooter>
      </FooterBase>
    </FooterContainer>
  );
}
