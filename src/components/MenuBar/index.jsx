import React from 'react';
import Button from '../button/index.tsx';

// 
import {
  Container, 
  TopSide, 
  Logo, 
  MenuButton, 
  HomeIcon,
  BellIcon, 
  EmailIcon, 
  FavoriteIcon,
  ProfileIcon,
  BotSide,
  ProfileData,
  Avatar,
  ExitIcon
} from './styles'

export default function index() {
  return (
  
    <Container>
      <TopSide>
        <Logo/>
        <MenuButton>
          <HomeIcon/>
          <span>Pagina Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon/>
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon/>
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon/>
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className='active'>

          <ProfileIcon/>
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>

      </TopSide>

      <BotSide>

        <Avatar/>

        <ProfileData>
          <strong> Sergio Manuca</strong>
          <span>@sergio_manuca</span>
        </ProfileData>

        <ExitIcon/>
      </BotSide>


    </Container>
  
  
    );
}
