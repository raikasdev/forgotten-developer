import React from "react";
import { connect, styled } from "frontity";


const Footer = () => {
    return (
        <Container>
            <FooterText>
              Copyright &copy; 2022 Roni Äikäs. All rights reserved. <a href="https://github.com/raikasdev/forgotten-developer">Theme licensed under GPLv2</a>.
            </FooterText>
        </Container>
      );
    };
    
export default connect(Footer);

const Container = styled.div`
    display: grid;
    gap: 5px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "colorchoice textarea";
        @media screen and (max-width: 768px) {
            grid-template-areas:
                "colorchoice colorchoice"
                "textarea textarea";
            align-items: center;
            justify-content: center;
        }
    }
`;

const FooterText = styled.div`
    grid-area: textarea / textarea / textarea / textarea;
    width: 100%;
    font-size: 16px;
    margin: auto;
    padding: 2px 12px 2px 2px;
    text-align: right;
    @media screen and (max-width: 768px) {
        padding: 0;
        text-align: center;
    }
`;