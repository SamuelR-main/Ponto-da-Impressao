import styled from "styled-components";
import breakpoints from "../../Styles/breakpoints";

//Footer

export const DivFooter = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #ffffff;
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
        height: 380px;
        h1{
            font-size: 30px;
        }
        h2{
            font-size: 20px;
        }
        p{
            font-size: 15px;
        }
        a{
            font-size: 15px;
        }
    }
    @media (${breakpoints.md}){
        width: 100%;
        max-width: 650px;
        a{
            font-size: 10px;
        }
        h1{
            font-size: 25px;
        }
        h2{
            font-size: 15px;
        }
        p{
            font-size: 10px;
        }
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
    @media (${breakpoints.md}){
        width: 100%;
        max-width: 650px;
        flex-direction: column;
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
    @media (${breakpoints.md}){
        width: 100%;
        max-width: 650px;
        height: 180px;
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
    @media (${breakpoints.md}){
        width: 100%;
        max-width: 650px;
        box-icon:hover{
            transition: none;
            transform: none;
        }
    }
`
export const DivFooterBoxSocial = styled.div `
    display: flex;
    flex-direction: row;
    width: 1280px;
    justify-content: space-between;
    padding: 0px 60px 0px 60px;
    @media (${breakpoints.md}){
        width: 100%;
        max-width: 650px;
        justify-content: center;
    }
    @media (${breakpoints.full}){
        width: 100%;
    }
    @media (${breakpoints.vb}){
        width: 1920px
    }
`
export const ReportBug = styled.div `
    @media (${breakpoints.md}){
        display: none;
    }
`