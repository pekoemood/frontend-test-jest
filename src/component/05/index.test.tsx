import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { Form } from ".";

const user = userEvent.setup();
test('サインアップボタンは非活性', async () => {
  render(<Form />);
  expect(screen.getByRole('button', { name: 'サインアップ' })).toBeDisabled();
});

test('[利用規則の同意]チェックボックスを押下するとサインアップボタンは活性化', async () => {
  render(<Form />);
  await user.click(screen.getByRole('checkbox'));
  expect(screen.getByRole('button', { name: 'サインアップ'})).toBeEnabled();
});

test('formのアクセシブルネームは、見出しを引用している', () => {
  render(<Form />);
  expect(screen.getByRole('form', { name: '新規アカウント登録' })).toBeInTheDocument();
})