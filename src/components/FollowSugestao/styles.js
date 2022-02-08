import styled from "styled-components";
import Button from '../button/index.tsx';



export const Container = styled.div`

display:flex;
align-items:center;
justify-content:space-between;

>div{
    display: flex;
    align-items:center;
}

`;
export const Avatar = styled.div`

    width:49px;
    height:49px;
    background:var(--gray);

    border-radius:50%;
    margin-right:10px;


`;
export const Info = styled.div`

display: flex;
flex-direction:column;

font-size:14px;
>strong {
    font-size:14px;
}

>span{
    font-size:14px;
    color:var(--gray);
}
`; 
export const FollowButao = styled(Button)`

    padding:6px 17px;

`;