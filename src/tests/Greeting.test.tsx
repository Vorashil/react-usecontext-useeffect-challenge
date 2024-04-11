import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from "../Greeting";

describe('Greeting component', () => {
  test('renders learn react link', () => {
    render(<Greeting name={"test 1"}/>);
    const linkElement = screen.getByText(/salam, test 1/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders greeting message for logged in user', () => {

    //GIVEN
    render(<Greeting name={"Test User"}/>)

    //WHEN
    // do nothing

    //THEN
    const linkElement = screen.getByText('salam, Test User', {exact: false});
    expect(linkElement).toBeInTheDocument();
  });

  test('renders generic greeting message if user is not logged in', () => {

        //GIVEN
        render(<Greeting name={undefined}/>)

        //WHEN
        // do nothing

        //THEN
        const linkElement = screen.getByText('Salam, dost!', {exact: true});
        expect(linkElement).toBeInTheDocument();
  });


});