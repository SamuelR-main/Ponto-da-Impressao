import styled from "styled-components";
import breakpoints from "../../Styles/breakpoints";

export const DivBox = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 1280px;
    height: 2700px;
    justify-content: space-between;
    @media (${breakpoints.bg}){
        width: 100%;
    }
    @media (${breakpoints.full}){
        width: 1280px;
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
    z-index: 1;
    @media (${breakpoints.mg}){
        height: 600px;
    }
    @media (${breakpoints.md}){
        width: 100%;
        height: 400px;
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
export const ContainerLogo = styled.div`
display: flex;
justify-content: center;
padding: 120px 0px 100px 0px;
img{
    width: 550px;
    height: 400px;
}
@media (${breakpoints.mg}){
    img{
        width: 420px;
        height: 300px;
    }
}
@media (${breakpoints.md}){
    img{
        width: 320px;
        height: 220px;
    }
}
@media (${breakpoints.sm}){
    img{
        width: 240px;
        height: 160px;
    }
}
`
export const ContainerResumo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: justify;
    font-size: 35px;
    padding: 0px 55px 0px 55px;
    img{
        width: 480px;
        height: 540px;
    }
    p{
        width: 620px;
        height: 320px;
    }
`
//Container Rapido

export const ContainerRapido = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 120px 55px 0px 55px;
    height: 850px;
    h1{
        font-size: 55px;
        font-weight: bolder;
    }
`
export const ContainerRapidoDiv = styled.div`
    display: flex;
    height: 850px;
    justify-content: space-between;
    flex-direction: column;
`
export const ContainerRapidoSubDiv = styled.div`
    display: flex;
    flex-direction: column;
    h2{
        font-size: 40px;
        font-weight: normal;
    }

`
export const ContainerRapidoSubDivBox = styled.div`
    display: flex;
    height: 10px;
    width: 1100px;
    background-color:rgb(2, 2, 4, 50%);
`
export const ContainerRapidoThirdDiv = styled.div`
    display: flex;
    height: 220px;
    width: 1155px;
    justify-content: space-evenly;
    align-items: center;
    background-color: #F7F7F7;
    border-style: solid;
    border-color: #000000;
    border-width: 1px;
.Ferramentas{
    border-style: solid;
    border-color:rgb(221, 221, 221);
    border-width: 1px;
}
#PGMEI{
    border-style: solid;
    border-color: #80B342;
    border-width: 1px;
}
#Detran{
    border-style: solid;
    border-color: #1E7BB6;
    border-width: 1px;
}
#PIX{
    border-style: solid;
    border-color: #32BCAD;
    border-width: 1px;
}
`
export const LogoLinksImg = styled.img`
width: 150px;
height: 150px;
border-radius: 10px;
&:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: ease-in-out;
}
`