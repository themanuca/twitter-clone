import React from 'react';
import {Container , 
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon, 
    CakeIcon, 
    Followage,
    EditarButton
} from "./styles";
import Feed from "../Feed"



export default function index() {
  return (

    <Container>
        <Banner>
            <Avatar/>
        </Banner>

        <ProfileData>
            <EditarButton outlined>Editar Perfil</EditarButton>
            <h1>Sergio Manuca</h1>
            <h2>@sergio_manuca</h2>
            <p>
                Developer at <a href="www.github/themanuca">@GitHub</a>
            </p>

            <ul>
                <li>
                    <LocationIcon/>
                    São luis, Brasil
                </li>

                
                <li>
                    <CakeIcon/>
                    Nascido (a) em 17 de maio de 1999
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>10</strong>
                </span>

                <span>
                    <strong>95k </strong> seguidores 
                </span>

            </Followage>

        </ProfileData>


        <Feed/>
    </Container>


  );
}
