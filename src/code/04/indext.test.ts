import { greet, sayGoodBye } from './index'

jest.mock("./index", () => ({
  ...jest.requireActual("./index"),
  sayGoodBye: (name: string) => `Good bye, ${name}.`,
}));

test('挨拶を返す(本来の実装通り）', () => {
  expect(greet('Taro')).toBe('Hello! Taro.');
})

test('sayGoodbyeを上書き', () => {
  const message = `${sayGoodBye("Taro")} See you.`
  expect(message).toBe('Good bye, Taro. See you.')
})

test('greet関数はundefined', () => {
  expect(greet).toBe(undefined);
})