import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function NavbarMenu(props) {
  const [dropdownOpenL, setDropdownOpenL] = React.useState(false);
  const [dropdownOpenT, setDropdownOpenT] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    setNavbarColor("");
  });
  const toggleL = () => setDropdownOpenL(!dropdownOpenL);
  const toggleT = () => setDropdownOpenT(!dropdownOpenT);
  React.useEffect(() => {
    setNavbarColor("");
  }, [navbarColor]);
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/"
            target="_blank"
            title="Teretana"
            tag={Link}
          >
            Teretana
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink to="/" tag={Link}>
                Pocetna
              </NavLink>
            </NavItem>

            <Dropdown nav isOpen={dropdownOpenT} toggle={toggleT}>
              <DropdownToggle nav caret>
                Usluge
              </DropdownToggle>
              <DropdownMenu className="menuBarDropdown">
                <DropdownItem to="/traning" tag={Link}>
                  Treninzi
                </DropdownItem>
                <DropdownItem to="/nutritionist" tag={Link}>
                  Nutricinista
                </DropdownItem>
                <DropdownItem to="/massages" tag={Link}>
                  Masaze
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <NavItem>
              <NavLink to="/traning" tag={Link}>
                Zakazivanje Treninga
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/profile" tag={Link}>
                Moj nalog
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/o-nama" tag={Link}>
                O nama
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/kontakt" tag={Link}>
                Kontakt
              </NavLink>
            </NavItem>

            <Dropdown nav isOpen={dropdownOpenL} toggle={toggleL}>
              <DropdownToggle nav caret>
                Jezik
              </DropdownToggle>
              <DropdownMenu className="menuBarDropdown">
                <DropdownItem
                  tag={Link}
                  onClick={() => {
                    props.setLanguage(true);
                  }}
                >
                  Srpski
                </DropdownItem>
                <DropdownItem
                  tag={Link}
                  onClick={() => {
                    props.setLanguage(false);
                  }}
                >
                  Engleski
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
