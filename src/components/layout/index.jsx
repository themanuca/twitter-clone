import React from 'react';
import {Container, Wrapper} from './styles';
import Main from '../Main';
import SideBar from '../SideBar'
import MenuBar from '../MenuBar';

export default function index() {
  return (
  
    <Container>
        <Wrapper>
            <MenuBar/>
            <Main/>
            <SideBar/>
        </Wrapper>
    </Container>

  
  
  );
}
