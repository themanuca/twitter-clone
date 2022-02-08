import React from 'react';
import StickyBox from  'react-sticky-box';

import List from '../List/index.tsx'
import FollowSugestao from '../FollowSugestao/index.tsx';
import News from '../News/index.tsx';


import {
    Container, 
    SearchWrapper,
    SearchInput, 
    SearchIcon,
    Body} 
    from "./styles"


export default function index() {
  return (
    
    <Container>
        <SearchWrapper>
            <SearchInput placeholder = "Buscar no twitter"/>
            <SearchIcon/>
        </SearchWrapper>

        <StickyBox>
            <Body>
                
                <List
                    title="Talvez você curta"
                    elements={[
                        <FollowSugestao
                            name="Sergio Manuca"
                            nickname="@sergio_manuca"
                        
                        />,

                        <FollowSugestao
                            name="Camila Estevan"
                            nickname="@camila_manuca"
                        
                        />,

                        <FollowSugestao
                            name="Kakaroto"
                            nickname="@kakaroto_manuca"
                        
                        />


                    ]}

                />
            
            <List
                    title="Talvez você curta"
                    elements={[ <News/>]}

                />
                <List
                    title="Talvez você curta"
                    elements={[ <News/>]}

                />
                <List
                    title="Talvez você curta"
                    elements={[ <News/>]}

                />
                <List
                    title="Talvez você curta"
                    elements={[ <News/>]}

                />

            
            </Body>
        </StickyBox>
    </Container>
  
  
  
    );
}
