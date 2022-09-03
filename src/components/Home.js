import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <>
      <Container>
        <Section
          title="Model S"
          description="
Order Online for Touchless Delivery"
          backgroundImage="model-s.jpg"
          leftBtn="Custom Order"
          rightBtn="Existing inventory"
        />
        <Section
          title="Model Y"
          description="
Order Online for Touchless Delivery"
          backgroundImage="model-y.jpg"
          leftBtn="Custom Order"
          rightBtn="Existing inventory"
        />
        <Section
          title="Model 3"
          description="
Order Online for Touchless Delivery"
          backgroundImage="model-3.jpg"
          leftBtn="Custom Order"
          rightBtn="Existing inventory"
        />
        <Section
          title="Model X"
          description="
Order Online for Touchless Delivery"
          backgroundImage="model-x.jpg"
          leftBtn="Custom Order"
          rightBtn="Existing inventory"
        />
        <Section
          title="Lowest Cost Solar Panels in America"
          description="Money-back guarantee"
          backgroundImage="solar-panel.jpg"
          leftBtn="Order Now"
          rightBtn="Learn More"
        />
        <Section
          title="Solar for New Roofs"
          description="
Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroundImage="solar-roof.jpg"
          leftBtn="Order Now"
          rightBtn="Learn More"
        />
        <Section
          title="Accessories"
          backgroundImage="accessories.jpg"
          leftBtn="Shop Now"
        />
      </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
