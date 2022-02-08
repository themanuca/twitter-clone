import React from 'react';
import ProfilePage from "../ProfilePage/index";
import {
    Container, 
    Header, 
    BackIcon, 
    ProfileInfo, 
    BottomMenu, 
    HomeIcon,
    BellIcon, 
    EmailIcon,
    SearchIcon
} from "./styles"


export default function index() {
  return (
  
    <Container>
        <Header>
            <button>
                <BackIcon/>
            </button>

            <ProfileInfo>
                <strong>Sergio Manuca</strong>
                <span>612 Tweets</span>
            </ProfileInfo>

        </Header>

        <ProfilePage/>

        <BottomMenu>
            <HomeIcon className="active"/>
            <SearchIcon/>
            <BellIcon/>
            <EmailIcon/>
        </BottomMenu> 
    </Container>

  );
}
