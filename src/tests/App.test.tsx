import React from 'react';
import {render, screen, within} from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import {BrowserRouter, MemoryRouter as Router} from "react-router-dom";

describe('App component', () => {

    describe('Navigation Bar', () => {
        test('renders navigation items', () => {
            //GIVEN
            render(<App RouterComponent={Router}/>)

            //WHEN
            // do nothing

            //THEN
            // get all list items in the document
            const orderedListWithNavItems = screen.getByTestId('navigation-items');
            const listItems = within(orderedListWithNavItems).queryAllByRole('listitem');


            // Assert the correct number of items are found
            expect(listItems.length).toBe(3);

            // Additional assertions as needed, for example, checking the content of the list items
            expect(listItems[0]).toHaveTextContent('Əsas Səhifə');
            expect(listItems[1]).toHaveTextContent('Mənim Səhifəm');
            expect(listItems[2]).toHaveTextContent('Daxil ol');
        })

    })

    describe('Router', () => {
        test('renders navigation to the home page', () => {
            //GIVEN
            render(<App RouterComponent={BrowserRouter}/>)

            //WHEN
            // do nothing

            //THEN
            // get button elements in the document
            const homeLink = screen.getByText('Əsas Səhifə');
            userEvent.click(homeLink);

            expect(screen.getByText('React Biliklərini yoxla!')).toBeInTheDocument();
        })

        test('renders navigation to the my page', async () => {
            render(<App RouterComponent={BrowserRouter}/>)


            const myPageLink = screen.getByText('Mənim Səhifəm');
            userEvent.click(myPageLink);

            expect(await screen.findByText('My Page')).toBeInTheDocument();
        });

        test('renders navigation to the login page', async () => {
            render(<App RouterComponent={BrowserRouter}/>)

            const loginLink = screen.getByText('Daxil ol');
            userEvent.click(loginLink);

            expect(await screen.findByText('Login Page')).toBeInTheDocument();
        })

        test('renders navigation to the lessons page', async () => {
            render(<App RouterComponent={BrowserRouter}/>)

            const lessonsLink = screen.getByText('Testlərə başla!');
            userEvent.click(lessonsLink);

            expect(await screen.findByText('Testlər')).toBeInTheDocument();
        })

    })
})