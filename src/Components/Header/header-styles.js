import styled from "styled-components";
import breakpoints from "../../Styles/breakpoints";

//Header CSS
export const DivHeader = styled.div `
    display: flex;
    height: 75px;
    width: 1280px;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    align-items: center;
    justify-content: center;
    z-index: 2;
    @media (${breakpoints.md}){
        width: 100%;
        height: 50px;
        position: absolute;
    }
    @media (${breakpoints.bg}){
        width: 100%;
    }
    @media (${breakpoints.full}){
        width: 1280px;
    }
`

export const DivHeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 10px;
    @media (${breakpoints.md}){
        display: none;
    }
    @media (${breakpoints.full}){
        justify-content: space-evenly;
    }
`

export const DivHeaderBoxLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #ffffff;
    font-size: 25px;
    font-weight: lighter;
    height: 50px;
    a{
        text-decoration: none;
        color: #ffffff;
    }
    &:hover{
        background-color: white;
        border-radius: 15px;
        height: 50px;
        color: #000000;
        cursor: pointer;
    }
    a:hover{
        color: #000000;
    }
    @media (${breakpoints.bg}){
        font-size: 20px;
    }
    @media (${breakpoints.mg}){
        font-size: 15px;
    }
    @media (${breakpoints.md}){
        font-size: 15px;
    }

`

export const LogoImg = styled.img `
    display: flex;
    width: 50px;
    height: 50px;
    &:hover{
        cursor: pointer;
    }
    @media (${breakpoints.md}){
        width: 35px;
        height: 35px;
    }
`   

export const DivHeaderBoxCell = styled.div `
    display: none;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 0px;
    @media (${breakpoints.md}){
        display: flex;
    }
`