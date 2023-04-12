import { announceResult, chooseRobotItem } from '../helpers'
import "@testing-library/jest-dom/extend-expect"; 

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('chooseRobotItem', () => {
  test('returns the winning options if the cheating is true', () => {
    const cheating = true
    const playerSelection = 'Axe'
    const actual = chooseRobotItem(playerSelection, cheating)
    const expected = 'Moai';

    expect(actual).toBe(expected)
  })

  test('if cheating is not on, play a normal game of rock, paper, scissors', () => {
    const cheating = false
    const playerSelection = ''
    const actual = chooseRobotItem(playerSelection, cheating)
    const options = ['Moai', 'Axe', 'Tree'];
    expect(options).toContain(actual)
  })
})