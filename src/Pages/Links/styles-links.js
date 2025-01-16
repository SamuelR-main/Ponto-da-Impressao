import styled from "styled-components";
import breakpoints from "../../Styles/breakpoints";

export const DivBox = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 1280px;
    height: 2000px;
    justify-content: space-between;
    @media (${breakpoints.mg}){
        height: 2500px;
    }
    @media (${breakpoints.bg}){
        width: 100%;
    }
    @media (${breakpoints.full}){
        width: 1280px;
    }
    @media (${breakpoints.md}){
        height: 2000px;
    }
`

//Background
export const Backgrounder = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1280px;
    height: 2000px;
    z-index: 0;
    border-style: none;
    @media (${breakpoints.md}){
        width: 100%;
    }
    @media (${breakpoints.bg}){
        width: 100%;
    }
    @media (${breakpoints.full}){
        width: 1280px;
    }
`
export const ImgBackground = styled.img `
    display: flex;
    width: 100%;
    height: 100%;
    background-size: cover;
    filter: opacity(30%);
    z-index: 0;
    border-style: none;
`

//Container Div
export const ContainerDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 1280px;
    height: 2000px;
    position: absolute;
    align-items: center;
    font-size: 30px;
    z-index: 1;
    @media (${breakpoints.mg}){
        height: 600px;
    }
    @media (${breakpoints.md}){
        width: 100%;
    }
    @media (${breakpoints.bg}){
        width: 100%;
    }
    @media (${breakpoints.full}){
        width: 1280px;
    }
    @media (${breakpoints.sm}){
        height: 300px;
    }
`
export const ContainerDivTitle = styled.div`
    display: flex;
    padding: 165px 0px 0px 0px;
`
export const ContainerDivBlackLine = styled.div`
    display: flex;
    background-color: #000000;
    border: 1px;
    border-style: solid;
    width: 85%;
    height: 10px;
`
export const ContainerDivWhiteBoard = styled.div`
    display: flex;
    background-color: #ffffff;
    border: 1px;
    border-style: solid;
    border-color: #000000;
    width: 85%;
    height: 600px;
`
export const ContainerDivTexto = styled.div`
    display: flex;
    padding: 30px 30px 30px 60px;
    width: 90%;
    height: 90%;
    ul{
        list-style-type: circle;
    }
    a{
        text-decoration: none;
        color: #000000;
    }
`