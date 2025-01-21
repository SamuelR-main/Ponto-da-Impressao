import styled from "styled-components";
import breakpoints from "../../Styles/breakpoints";

export const DivBox = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 1280px;
    height: 2700px;
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
    height: 2700px;
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
    height: 2700px;
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

//Conteudo

export const ContainerSubDiv = styled.div`
    display: flex;
    padding: 165px 0px 20px 0px;
    width: 100%;
    justify-content: center;
    h1{
        font-size: 55px;
    }
    @media (${breakpoints.mg}){
        h1{
            font-size: 45px;
        }
    }
    @media (${breakpoints.md}){
        padding: 125px 0px 20px 0px;
        h1{
            font-size: 35px;
        }
    }
    @media (${breakpoints.sm}){
        padding: 105px 0px 20px 0px;
        h1{
            font-size: 25px;
        }
    }
`
export const ContainerThirdDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`
export const ContainerThirdDivImg = styled.div`
    display: flex;
    width: 30%;
    justify-content: center;
    img{
        width: 80%;
    }
`
export const ContainerThirdDivTexto = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;

`
export const ContainerThirdDivTextoBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 0px 0px 50px;
    h2{
        font-size: 30px;
    }
    p{
        font-size: 25px;
        padding: 0px 0px 0px 40px;
    }
    ul{
        list-style-type: none;
    }
    @media(${breakpoints.mg}){
        padding: 0px 0px 0px 40px;
        h2{
            font-size: 25px;
        }
        p{
            font-size: 20px;
            padding: 0px 0px 0px 30px;
        }
    }
    @media(${breakpoints.md}){
        padding: 0px 0px 0px 30px;
        h2{
            font-size: 20px;
        }
        p{
            font-size: 15px;
            padding: 0px 0px 0px 20px;
        }
    }
    @media(${breakpoints.sm}){
        padding: 0px 0px 0px 20px;
        h2{
            font-size: 18px;
        }
        p{
            font-size: 12px;
            padding: 0px 0px 0px 10px;
        }
    }
`