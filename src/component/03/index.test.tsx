import { render, screen } from "@testing-library/react";
import InvalidAgreements, { Agreement } from ".";

test('fieldsetのアクセシブルネームは、legendを引用している', () => {
  render(<Agreement />);

  expect(screen.getByRole('group', { name: '利用規則の同意' })).toBeInTheDocument();
})

test('チェックボックスはチェックが入っていない', () => {
  render(<Agreement />);
  expect(screen.getByRole("checkbox")).not.toBeChecked();
})