import userEvent from "@testing-library/user-event";
import { InputAccount } from ".";
import { getByPlaceholderText, getByRole, getByText, render, screen } from "@testing-library/react";

const user = userEvent.setup();

test('メールアドレス入力欄', async () => {
  render(<InputAccount />);

  const textbox = screen.getByRole('textbox', { name: 'メールアドレス' });
  const value = 'taro.tanaka@example.com';
  await user.type(textbox, value);
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
})

test('パスワード入力欄', async () => {
  render(<InputAccount />);

  const passBox = screen.getByPlaceholderText('8文字以上で入力');
  const pass = 'password123';
  await user.type(passBox, pass);
  expect(screen.getByDisplayValue(pass)).toBeInTheDocument();
  expect(() => screen.getByPlaceholderText('8文字以上で入力')).not.toThrow();
  expect(() => screen.getByRole('textbox', { name: 'パスワード'})).toThrow();
})