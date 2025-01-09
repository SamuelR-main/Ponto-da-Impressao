import styled from "styled-components";
import breakpoints from "../../Styles/breakpoints";


export const DivBox = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 1280px;
    justify-content: space-between;
    @media (${breakpoints.full}){
        width: 100%;
    }
    @media (${breakpoints.vb}){
        width: 1920px;
    }
`


//Header CSS
export const DivHeader = styled.div `
    display: flex;
    height: 75px;
    width: 1280px;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    align-items: center;
    justify-content: center;
    z-index: 2;
    @media (${breakpoints.sm}){
        width: 100%;
    }
    @media (${breakpoints.md}){
        width: 100%;
    }
    @media (${breakpoints.bg}){
        width: 100%;
    }
    @media (${breakpoints.full}){
        width: 100%;
    }
    @media (${breakpoints.vb}){
        width: 1920px;
    }
`
export const DivHeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 10px;
    @media (${breakpoints.sm}){
        display: none;
    }
    @media (${breakpoints.md}){
        display: none;
    }
    @media (${breakpoints.full}){
        justify-content: space-evenly;
    }
    @media (${breakpoints.vb}){
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
    &:hover{
        background-color: white;
        color: #000000;
        border-radius: 15px;
        cursor: pointer;
    }
    @media (${breakpoints.bg}){
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
`   

//Container Div
export const DivContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1280px;
    height: 3200px;
    align-content: stretch;
    @media (${breakpoints.sm}){
        width: 100%;
    }
    @media (${breakpoints.md}){
        width: 100%;
    }
    @media (${breakpoints.bg}){
        width: 100%;
    }
    @media (${breakpoints.full}){
        width: 100%;
    }
    @media (${breakpoints.vb}){
        width: 1920px;
    }

`
export const ImgBackground = styled.img `
    display: flex;
    width: 100%;
    height: 100%;
    align-content: stretch;
    filter: opacity(30%);
    z-index: 1;
    `


//Footer
export const DivFooter = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #ffffff;
    padding: 60px 0px 0px 0px;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(58,58,58,1) 15%, rgba(58,58,58,1) 100%);
    height: 400px;
    width: 1280px;
    border: none;
    a{
        color: #ffffff;
        text-decoration: none;
        font-weight: lighter;
        font-size: 20px;
    }
    a:hover{
        text-decoration: underline;
    }
    h1{
        font-size: 50px;
    }
    h2{
        font-size: 30px;
    }
    p{
        font-size: 20px;
        font-weight: lighter;
    }
    @media (${breakpoints.bg}){
        width: 100%;
        h1{
            font-size: 30px;
        }
        h2{
            font-size: 20px;
        }
        p{
            font-size: 15px;
        }
    }
    @media (${breakpoints.bg}){
        height: 380px;
        a{
            font-size: 15px;
        }
    }
    @media (${breakpoints.sm}){
        width: 100%;
    }
    @media (${breakpoints.md}){
        width: 100%;
    }
    @media (${breakpoints.full}){
        width: 100%;
    }
    @media (${breakpoints.vb}){
        width: 1920px;
    }
`
export const DivFooterBox = styled.div `
    display: flex;
    flex-direction: row;
    width: 1280px;
    height: auto;
    padding: 20px 0px 40px 0px;
    justify-content: space-between;
    @media (${breakpoints.sm}){
        width: 100%;
    }
    @media (${breakpoints.md}){
        width: 100%;
    }
    @media (${breakpoints.bg}){
        width: 100%;
        padding: 10px 0px 10px 0px;
    }
    @media (${breakpoints.full}){
        width: 100%;
    }
    @media (${breakpoints.vb}){
        width: 1920px;
    }
`
export const DivFooterBoxDiv = styled.div `
    display: flex;
    flex-direction: column;
    padding: 0px 60px 0px 60px;
    width: 50%;
    height: 100%;
`
export const DivFooterBoxDivAtalhos = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 130px;
    padding: 0px 0px 0px 10px;
    @media (${breakpoints.sm}){
        width: 100%;
    }
    @media (${breakpoints.md}){
        width: 100%;
    }
    @media (${breakpoints.bg}){
       height: 150px;
       width: 100%;
    }
    @media (${breakpoints.full}){
        width: 60%;
    }
    @media (${breakpoints.vb}){
        width: 50%;
    }
`
export const DivFooterAtalhos = styled.div `
    display: flex;
    padding: 5px 0px 0px 0px;
`
export const DivFooterSocial = styled.div `
    display: flex;
    flex-direction: row;
    width: 180px;
    justify-content: space-between;
    box-icon{
        width: 36px;
        height: 36px;
    }
    box-icon:hover{
        transition: ease-in-out 0.5;
        transform: scale(1.2);
    }
`
export const DivFooterBoxSocial = styled.div `
    display: flex;
    flex-direction: row;
    width: 1280px;
    justify-content: space-between;
    padding: 0px 60px 0px 60px;
    @media (${breakpoints.sm}){
        width: 100%;
    }
    @media (${breakpoints.md}){
        width: 100%;
    }
    @media (${breakpoints.full}){
        width: 100%;
    }
    @media (${breakpoints.vb}){
        width: 1920px
    }
`
