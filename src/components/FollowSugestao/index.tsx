import React from 'react';

import {Container, Avatar, Info, FollowButao} from './styles';

interface Props {
  name:string;
  nickname: string;
}

const FolloSugeste: React.FC<Props> = ({
  name,
  nickname
}) => {
  return(

    <Container>
        <div>
          <Avatar/>

          <Info>
            <strong>{name}</strong>
            <strong>{nickname}</strong>
          </Info>

        </div>
        <FollowButao outlined> Seguir </FollowButao>

    </Container>

  );
}

export default FolloSugeste;