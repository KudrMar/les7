import { Validator } from "../../js/Validator.js";

const name = new Validator;
let nameResult = name.validateUsername("va3sia");
test('validateUsername correct', () => {
  expect(nameResult).toBeTruthy();
});

let nameResultFirstSymbol = name.validateUsername("3vasia");
test('validateUsername FirstSymbol', () => {
  expect(nameResultFirstSymbol).toBeFalsy();
});

let nameResultLastSymbol = name.validateUsername("vasia4");
test('validateUsername LastSymbol', () => {
  expect(nameResultLastSymbol).toBeFalsy();
});

let nameResultNumbersInRow = name.validateUsername("va4343sia");
test('validateUsername numbersInRow', () => {
  expect(nameResultNumbersInRow).toBeFalsy();
});

let nameResultSymbolsAlowed = name.validateUsername("va+sia");
test('validateUsername symbolsAlowed', () => {
  expect(nameResultSymbolsAlowed).toBeFalsy();
});

let nameResultEmpty = name.validateUsername("");
test('validateUsername symbolsAlowed', () => {
  expect(nameResultEmpty).toBeFalsy();
});


