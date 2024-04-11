import {render, screen, within} from "@testing-library/react";
import React from "react";
import NavBar from "../common/NavBar";
import {BrowserRouter} from "react-router-dom";

describe('NavBar component', () => {

    test('renders Login button if the user is not logged in', () => {
        //GIVEN
        render(<NavBar isLogged={false}/>, {wrapper: BrowserRouter})

        //WHEN
        // do nothing

        //THEN
        const navItems = screen.getByTestId('navigation-items');
        const logInButton = within(navItems).getByText('Daxil ol');
        const myPageButton = within(navItems).queryByText('Mənim Səhifəm');


        expect(logInButton).toBeInTheDocument();
        expect(myPageButton).not.toBeInTheDocument();
    })

    test('renders My Page button if the user is logged in', () => {
        //GIVEN
        render(<NavBar isLogged={true}/>, {wrapper: BrowserRouter})

        //WHEN
        // do nothing

        //THEN
        const navItems = screen.getByTestId('navigation-items');
        const myPageButton = within(navItems).getByText('Mənim Səhifəm');
        const logInButton = within(navItems).queryByText('Daxil ol');

        expect(myPageButton).toBeInTheDocument();
        expect(logInButton).not.toBeInTheDocument();
    })
})