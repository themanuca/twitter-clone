import React from 'react';
import {
    Container, 
    Retweeted, 
    Body, 
    Avatar, 
    Descricao,
    Content,
    Header,
    Dot,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles'


export default function index() {
  return (

    <Container>
        <Retweeted>
            Você retweetou
        </Retweeted>

        <Body>
            <Avatar/>
            <Content>
                <Header>
                    <strong>The Manuca</strong>
                    <span>@The_manuca</span>
                    <Dot/>
                    <time>22 de fev</time>
                </Header>
                <Descricao>Foguete não tem ré </Descricao>

                <ImageContent/>

                <Icons>
                    <Status>
                        <CommentIcon/>
                        599
                    </Status>

                    <Status>
                        <RetweetIcon/>
                        325
                    </Status>

                    <Status>
                        <LikeIcon/>
                        20k
                    </Status>
                </Icons>
            </Content>
        </Body>


    </Container>


  );
}
