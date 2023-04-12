import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Game from '../Game';

import "@testing-library/jest-dom/extend-expect"; 

describe('Tests for the Game Component', () => {
  test('can toggle the cheating state by clicking on the robot icon', () => {
    // const something = render(<Game />)
    // console.log(something);

    const {debug, getByTestId} = render(<Game />)
    debug()
    const robotHead = getByTestId('robot-head-icon');
    fireEvent.click(robotHead);
    expect(robotHead).toHaveClass('cheating')
    fireEvent.click(robotHead);
    expect(robotHead).not.toHaveClass('cheating')
  })


  test('create a fake function with jest and returning fake data', () => {
    const fakeFunction = jest.fn();

    fakeFunction()
    fakeFunction()
    fakeFunction(10)
    expect(fakeFunction).toHaveBeenCalled()  
    expect(fakeFunction).toHaveBeenCalledTimes(3)
    expect(fakeFunction).toHaveBeenCalledWith(10)
    const get = jest.fn((url) => {
      if(url === '/api/appointment'){
        
      }
    })
  })
})