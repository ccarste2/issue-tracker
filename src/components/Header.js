import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { useAuth0 } from "@auth0/auth0-react";
import UserGreeting from "./UserGreeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { isAuthenticated } = useAuth0();

  const loginOrLogoutButton = () => {
    if (isAuthenticated) {
      return <LogoutButton />;
    }

    return <LoginButton />;
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">issue-tracker</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/ccarste2/issue-tracker">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavbarText>Text</NavbarText>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    UserName
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                    Profile
                    </DropdownItem>
                    <DropdownItem>
                    Settings
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    Log Out
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
                <UserGreeting />
                {loginOrLogoutButton()}
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
