import React, { useState } from "react";

import {
  Container,
  NavMenu,
  ListMenu,
  Logo,
  Desktop,
  Mobile,
  Button,
} from "./styles";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";

const Header: React.FC = () => {
  const [modeMobile, setModeMobile] = useState(false);

  document.addEventListener("scroll", (e) => {
    if (window.pageYOffset >= 160) {
      document.getElementById("desktop")?.classList.add("fixed");
      document.getElementById("logo")?.classList.add("logo");
    } else {
      document.getElementById("desktop")?.classList.remove("fixed");
      document.getElementById("logo")?.classList.remove("logo");
    }
  });

  return (
    <>
      <Desktop id="desktop">
        <Container>
          <Logo id="logo">
            <a href="/#home">Healthy Food</a>
          </Logo>
          <NavMenu>
            <ListMenu>
              <a href="/#healthy">Healthy Recipes</a>
            </ListMenu>
            <ListMenu>
              <a href="/#blog">Blog</a>
            </ListMenu>
            <ListMenu>
              <a href="/#join">Join</a>
            </ListMenu>
            <ListMenu className="button">
              <a href="/register">Register</a>
            </ListMenu>
          </NavMenu>
        </Container>
      </Desktop>
      <Mobile>
        <Container>
          <Button
            onClick={() => setModeMobile((oldState) => !oldState)}
            display={modeMobile.toString()}
            width={52}
            height={52}
          >
            {(!modeMobile && <FiMenu color="white" size="1.5rem" />) || (
              <RiCloseFill color="white" size="2.5rem" />
            )}
          </Button>
        </Container>
        {modeMobile && (
          <NavMenu>
            <ListMenu>
              <a href="/#healthy">Healthy Recipes</a>
            </ListMenu>
            <ListMenu>
              <a href="/#blog">Blog</a>
            </ListMenu>
            <ListMenu>
              <a href="/#join">Join</a>
            </ListMenu>
            <ListMenu className="button">
              <a href="/register">Register</a>
            </ListMenu>
          </NavMenu>
        )}
      </Mobile>
    </>
  );
};

export default Header;
