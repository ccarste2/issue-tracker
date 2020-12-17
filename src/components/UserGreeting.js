import React from "react";
import { NavItem, NavbarText } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";

const UserGreeting = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        isAuthenticated && (
            <NavItem>
                <NavbarText>Welcome, {user.name}!</NavbarText>
            </NavItem>
        )
    );
}

export default UserGreeting;