import React from "react";
import { styled, connect } from "frontity";

const description404 = (
  <>
    That page can't be found{" "}
    <span role="img" aria-label="confused face">
      😕
    </span>
  </>
);

const description = (
  <>
    Don't panic! Seems like you encountered an error. If this persists,
    <a href="https://divaksh.me/contact"> let us know </a> or try refreshing
    your browser.
  </>
);

// The 404 page component
const Page404 = ({ state }) => {
  const data = state.source.get(state.router.link);

  // Get the theme color.
  const { themeColor } = state.theme.colors;

  const title = "Oops! Something went wrong";
  const title404 = "Oops! 404";

  return (
    <Container color={themeColor}>
      <Title>{data.is404 ? title404 : title}</Title>
      <Description>{data.is404 ? description404 : description}</Description>
    </Container>
  );
};

export default connect(Page404);

const Container = styled.div`
  height: 100%;
  margin: 0;
  padding: 24px;
  text-align: center;
  color: ${(props) => props.color};
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 4em;
`;

const Description = styled.div`
  line-height: 1.6em;
  margin: 24px 0;
`;
