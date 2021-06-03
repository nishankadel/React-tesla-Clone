import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <>
      <Container>
        <a>
          <img src="/images/logo.svg" alt="logo" />
        </a>
        <Menu>
          <a href="#">Model S</a>
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
          <a href="#">Model Y</a>
          <a href="#">Solar Roof</a>
          <a href="#">Solar Panel</a>
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <CustomMenu onClick={() => setBurgerStatus(true)} />
        </RightMenu>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-In</a>
          </li>
          <li>
            <a href="#">CyberTruck</a>
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
          <li>
            <a href="#">semi</a>
          </li>
          <li>
            <a href="#">charging</a>
          </li>
          <li>
            <a href="#">powerwall</a>
          </li>
          <li>
            <a href="#">commercial energy</a>
          </li>
          <li>
            <a href="#">utilities</a>
          </li>
          <li>
            <a href="#">utilities</a>
          </li>
          <li>
            <a href="#">test drive</a>
          </li>
          <li>
            <a href="#">find us</a>
          </li>
          <li>
            <a href="#">support</a>
          </li>
          <li>
            <a href="#">united states</a>
          </li>
        </BurgerNav>
      </Container>
    </>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  padding: 15px;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 15px;
    flex-wrap: nowrap;
  }

  @media (max-width: 1129px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled(MenuIcon)``;

const BurgerNav = styled.div`
  list-style: none;
  a {
    text-transform: uppercase;
    font-weight: 600;
  }
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  z-index: 16;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: start;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  overflow: auto;
  transition: transform 0.2s ease-in;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

// const Menu = styled.div``;
