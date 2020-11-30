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

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
