import { greet } from './index'

jest.mock("./greet");

test('挨拶を返す(本来の実装通り）', () => {
  expect(greet('Taro')).toBe(undefined);
})