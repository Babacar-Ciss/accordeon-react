import styled from "styled-components";
import FAQContainer from "./FAQContainer";
import Left from "./Left";

const MainStyle = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 920px;
    height: 509px;
    background: #FFFFFF;
    box-shadow: 0px 50px 50px -20px rgba(53, 18, 122, 0.497159);
    border-radius: 23px;

    @media (min-width: 375px) and (max-width: 1439px) {
        width: 327px;
        height: 535px;
        flex-direction: column;
        align-items: center;
    }


`

const Main = () => {
    return (
        <MainStyle>
            <Left />
            <FAQContainer />
        </MainStyle>
    );
}

export default Main;
