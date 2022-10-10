import styled from "styled-components";
import FAQ from "./FAQ";

const FAQContainerStyle = styled.div`
    width: 39%;
    margin-left: 36px;
    padding-top: 65px;
    padding-right: 95px;

    & > * {
        padding: 0;
        margin: 0;
    }

    @media (min-width: 375px) and (max-width: 1439px) {
        padding: 0;
        margin: 0;
        width: 85%;
    }


`
const H1 = styled.div`
    font-size: 32px;
    color: #1E1F36;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 21px;

    @media (min-width: 375px) and (max-width: 1439px) {
        text-align: center;
    }

`

const datas = [
            {question : "How many team members can I invite?",
             answer : "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."},

             {question : "What is the maximum file upload size?",
             answer : "No more than 2GB. All files in your account must fit your allotted storage space."},

             {question : "How do I reset my password?",
             answer : "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."},

             {question : "Can I cancel my subscription?",
             answer : "Yes! Send us a message and we’ll process your request no questions asked."},
            
             {question : "Do you provide additional support?",
             answer : "Chat and email support is available 24/7. Phone lines are open during normal business hours."},  
            ]

const FAQContainer = () => {

    return (
        <FAQContainerStyle>
            <H1>FAQ</H1>
            {
                datas.map((data,index) => (
                    <FAQ question={data.question}
                         answer={data.answer} 
                         key={data.question+index}
                         />
                ))
            }
        </FAQContainerStyle>
    );
}

export default FAQContainer;
