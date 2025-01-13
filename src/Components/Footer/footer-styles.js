import styled from "styled-components";
import breakpoints from "../../Styles/breakpoints";

//Footer
export const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    width: 1280px;
    height: 450px;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(58,58,58,1) 15%, rgba(58,58,58,1) 100%);

    @media(${breakpoints.mg}){
        height: 480px;
    }
    @media (${breakpoints.bg}){
        width: 100%;
    }
    @media (${breakpoints.full}){
        width: 1280px;
    }
    @media(${breakpoints.md}){
        height: 450px;
    }
`
export const FooterSubDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 110px 60px 50px 60px;
    @media (${breakpoints.mg}){
        flex-direction: column;
        padding: 110px 60px 20px 60px;
    }
`
export const FooterSubDivTexto = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    color: #ffffff;
    p{
        font-weight: lighter;
    }
    a{
        text-decoration: none;
        color: #ffffff;
        font-weight: lighter;
    }
    a:hover{
        text-decoration: underline;
    }
    h1{
        font-size: 50px;
        font-weight: bolder;
    }
    @media(${breakpoints.mg}){
        p{
            font-size: 15px;
        }
        h1{
            font-size: 30px;
        }
    }
    @media(${breakpoints.md}){
        p{
            font-size: 10px;
        }
        h1{
            font-size: 15px;
        }
    }
    @media(${breakpoints.sm}){
        h1{
            font-size: 10px;
        }
        p{
            font-size: 8px;
        }
    }
`
export const FooterSubDivAtalhos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 50%;
    height: 150px;
    color: #ffffff;
    h2{
        font-size: 30px;
        font-weight: bolder;
        color: #ffffff;
        padding: 5px 0px 0px 0px;
    }
    @media(${breakpoints.mg}){
        h2{
            font-size: 20px;
        }
    }
    @media(${breakpoints.md}){
        h2{
            font-size: 13px;
        }
    }
    @media(${breakpoints.sm}){
        h2{
            font-size: 10px;
        }
    }
`
export const FooterSubDivAtalhosElements = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;    
    height: 120px;
    padding: 0px 0px 0px 10px;
    a{
        font-size: 20px;
        color: #ffffff;
        text-decoration: none;
        padding: 5px 0px 0px 0px;
    }
    a:hover{
        text-decoration: underline;
    }
    @media(${breakpoints.mg}){
        a{
            font-size: 10px;
        }
    }
    @media(${breakpoints.sm}){
        a{
            font-size: 8px;
        }
    }
`
export const FooterSocialDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 75px;
    padding: 0px 60px 0px 60px;
    hr{
        border-style: solid; 
        border-color: #ffffff;
    }
`
export const FooterSocialSubDiv = styled.div`
    padding: 10px 0px 0px 0px;
    display: flex;
    justify-content: space-between;
    a{
        font-size: 20px;
        font-weight: lighter;
        text-decoration: none;
        color: #ffffff;
    }
    a:hover{
        text-decoration: underline;
    }
    @media(${breakpoints.mg}){
        justify-content: center;
        #report{
            display: none;
        }
    }
`
export const FooterSocialIcons = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-between;
    box-icon{
        width: 35px;
        height: 35px;
    }
    box-icon:hover{
        transition: ease 0.5s;
        transform: scale(1.3);
    }
    #bug{
        display: none;
    }
    @media(${breakpoints.mg}){
        #bug{
            display: flex;
        }
    }
    @media(${breakpoints.sm}){
        box-icon{
            width: 20px;
            height: 20px;
        }
    }
`
