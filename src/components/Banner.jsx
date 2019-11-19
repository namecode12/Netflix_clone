import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    width: 100vw;
    height: 68px;
    display: flex;
    padding: 13px 58px;
    box-sizing:border-box;
`;
const Logo = styled.img`
    height: 35px;
    width: 128px;
    margin-right: 30px;
`;
const NavText = styled.ul`
    display: flex;
    list-style: none;
    flex: 1;
`;
const NavTextItem = styled.li`
    display:flex;
    color: white;
    margin-right: 8px;
    margin-left: 8px;
    font-size: 12px; 
    align-items: center;
    &:hover{
        font-weight:normal;
        color: #b3b3b3;
    }
`;
const NavIcon = styled.ul`
    display: flex;
`;
const NavIconItem = styled.li`
    width: fit-content;
    margin-right:36px;
    &> img{
        width: 18px;
        height: 18px;
    }
`;
const Banner = props => {
    return(<Wrapper>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/128px-Netflix_2015_logo.svg.png"/>
        <NavText>
            <NavTextItem>홈</NavTextItem>
            <NavTextItem>TV 프로그램</NavTextItem>
            <NavTextItem>최신 등록 콘텐츠</NavTextItem>
            <NavTextItem>내가 지정한 콘텐츠</NavTextItem>
        </NavText>
        <NavIcon>
            <NavIconItem><img src="/search.svg"></img></NavIconItem>
            <NavIconItem><img src="/gift.svg"></img></NavIconItem>
            <NavIconItem><img src="/bell.svg"></img></NavIconItem>
        </NavIcon>
    </Wrapper>)
}

export default Banner