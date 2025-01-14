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
    font-size: 25px;
    padding: 0px 55px 0px 55px;
    img{
        width: 540px;
        height: 540px;
    }
    p{
        width: 620px;
        height: 220px;
    }
    @media (${breakpoints.bg}){

    }
    @media (${breakpoints.mg}){
        font-size: 20px;
        img{
            width: 360px;
            height: 360px;
        }
        p{
        padding: 60px 0px 0px 0px;
        width: 330px;
        height: 330px;
        }
    }
    @media (${breakpoints.md}){
        flex-direction: column-reverse;
        font-size: 25px;
        justify-content: space-evenly;
        p{
            padding: 0px 0px 0px 0px;
        }
        img{
            width: 300px;
            height: 300px;
        }
    }
    @media (${breakpoints.sm}){
        font-size: 20px;
        img{
            width: 280px;
            height: 280px;
        }
    }
`
//Container Rapido
export const ContainerRapido = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 120px 0px 0px 0px;
    height: 850px;
    width: 100%;
    h1{
        font-size: 55px;
        font-weight: bolder;
    }
    @media (${breakpoints.md}){
        h1{
            font-size: 35px;
        }
        padding: 60px 0px 0px 0px;
    }
`
export const ContainerRapidoDiv = styled.div`
    display: flex;
    height: 850px;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
    @media (${breakpoints.md}){
    #Ferramentas{
        display: none;
    }
    #Modelos{
        display: none;
    }
    }
`
export const ContainerRapidoSubDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    h2{
        font-size: 40px;
        font-weight: normal;
    }
    @media (${breakpoints.md}){
    h2{
        font-size: 25px;
    }
}
`
export const ContainerRapidoSubDivBox = styled.div`
    display: flex;
    height: 10px;
    width: 85%;
    background-color:rgb(2, 2, 4, 50%);
`
export const ContainerRapidoThirdDiv = styled.div`
    display: flex;
    height: 220px;
    width: 90%;
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
#PIX{
    border-style: solid;
    border-color: #32BCAD;
    border-width: 1px;
}
@media (${breakpoints.md}){
    height: 300px;
}
`

//Imagens Links Externos
export const LogoLinksImg = styled.img`
width: 125px;
height: 125px;
border-radius: 10px;
&:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: ease-in-out;
}
@media (${breakpoints.mg}){
    width: 90px;
    height: 90px;
}
@media (${breakpoints.md}){
    display: none;
}
`
export const ContainerRapidoFourDiv = styled.div`
    display: none;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    #DivEquatorial{
        background-color:rgb(55, 85, 152);
    }
    #DivBRK{
        background-color: #75affc;
    }
    #DivUnimed{
        background-color:rgb(0, 152, 93);
    }
    #DivHapvida{
        background-color:rgb(33, 86, 162);
    }
    #DivIPTU{
        background-color:rgb(0, 82, 159);
    }
    #DivPGMEI{
        background-color:rgb(255, 255, 255);
        border-style: solid;
        border-color: #80B342;
        border-width: 1px;
        a{
            color: #80B342;
        }
    }
    @media (${breakpoints.md}){
    display: flex;
}
`
export const ContainerRapidoFiveDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 40px;
    border-radius: 10px;
    color: #ffffff;
    a{
        text-decoration: none;
        color: #ffffff;
    }

`