import styled from "styled-components";
import HeroPictureDesktop from '../assets/images/illustration-woman-online-desktop.svg';
import HeroPictureMobile from '../assets/images/illustration-woman-online-mobile.svg';
import LeftPatternDesktop from '../assets/images/bg-pattern-desktop.svg';
import LeftPatternMobile from '../assets/images/bg-pattern-mobile.svg';

import BoxImage from "../assets/images/illustration-box-desktop.svg"

const LeftStyle = styled.div`
    overflow: hidden;
    position: relative;
    background-image: url(${LeftPatternDesktop});
    background-position: 111% 67%;
    background-size: 210%;
    background-repeat: no-repeat;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;

    @media (min-width: 375px) and (max-width: 1439px) {
        justify-content: center;
        width: 100%;
        /* margin-bottom: 60px; */
        height: 132px;
        overflow: visible;
        background-image: url(${LeftPatternMobile});
        background-position: 48% -3%;
        background-size: 75%;
    }


`

const HeroImageDesktop = styled.img`
    margin-left: -80px;

    @media (min-width: 375px) and (max-width: 1439px) {
        display: none;
    }
`

const HeroImageMobile = styled.img`
    display: none;

    @media (min-width: 375px) and (max-width: 1439px) {
        display: block;
        width: 237px;
        height: 180px;
        margin-top : -168px;
    }
`

const BoxImageStyle = styled.img`
    z-index: 1000;
    position: fixed;
    top: 210px;
    left: -90px;

    @media (min-width: 375px) and (max-width: 1439px) {
        display: none;
    }
`


const Left = () => {
    return (
        <LeftStyle>
            <HeroImageDesktop src={HeroPictureDesktop} alt="Hero Picture Desktop" /> 
            <HeroImageMobile src={HeroPictureMobile} alt="Hero Picture Mobile" /> 
            <BoxImageStyle src={BoxImage} alt="Box Image" /> 
        </LeftStyle>
    );
}

export default Left;
