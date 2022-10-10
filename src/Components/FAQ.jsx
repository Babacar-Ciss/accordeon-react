import styled from "styled-components";
import Arrow from "../assets/images/icon-arrow-down.svg";
import { useState } from "react";

const FAQStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 16px;
    border-bottom: 1px solid #E8E8EA;
    font-weight: 400;
    margin-bottom: 16px;
    cursor: pointer;

    &:last-child {
        margin-bottom: 0;
    }
`

const Question = styled.p`
    color: ${props => props.isShow ? "#1E1F36" : "#4B4C5F"};
    font-size: 14px;
    line-height: 17px;
    flex-grow: 1;
    font-weight: ${props => props.isShow ? "700" : "400"};   
    
    @media (min-width: 375px) and (max-width: 1439px) {
        font-size : 13px;
        line-height: 16px;
    }
`
const Answer = styled.p`
    color: #787887;
    font-size: 12px;
    line-height: 18px;
    margin-top: 0;
`

const IMG = styled.img`
    width: 10px;
    height: 6px;
    align-self: center;
    margin-right: 15px;
    rotate: ${props => props.isShow ? "180deg" : "0deg"};
    transition: rotate .2s;


    @media (min-width: 375px) and (max-width: 1439px) {
        margin-right: 0;
    }
`


const FAQ = ({question, answer}) => {

    const  [isShow, setIsShow] = useState(false)


    return (
        <FAQStyle onClick={() => setIsShow(!isShow) }>
            <Question isShow = {isShow}> {question}  </Question>
            <IMG src={Arrow} isShow = {isShow} />
            {isShow ? (<Answer>{answer}</Answer>) : null}    
        </FAQStyle>
    );
}

export default FAQ;
