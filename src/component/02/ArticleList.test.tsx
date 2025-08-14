import { render, screen, within } from "@testing-library/react";
import { items } from "../../05/04/fixture";
import { ArticleList } from "./ArticleList";
import { ArticleListItem, ItemProps } from "../../05/04/ArticleListItem";

test('itemsの数だけ一覧表示される', () => {
  render(<ArticleList items={items} />);
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
});

test('一覧が表示される', () => {
  render(<ArticleList items={items} />)
  const list = screen.getByRole('list');
  expect(list).toBeInTheDocument();
  expect(within(list).getAllByRole('listitem')).toHaveLength(3);
});

test('一覧アイテムが空のとき、「投稿記事がありません」が表示される', () => {
  render(<ArticleList items={[]} />)
  const list = screen.queryByRole('list');
  expect(list).not.toBeInTheDocument();
  expect(list).toBeNull();
  expect(screen.getByText('投稿記事がありません')).toBeInTheDocument();
})

const item: ItemProps = {
  id: 'howto-testing-with-typescript',
  title: 'TypeScriptを使ったテストの書き方',
  body: 'テストを書くとき、TypeScriptを使うことで、テストの保守性が向上します...'
}

test('IDに紐づいたリンクが表示される', () => {
  render(<ArticleListItem {...item} />)
  expect(screen.getByRole('link',  { name: 'もっと見る' })).toHaveAttribute(
    'href',
    '/articles/howto-testing-with-typescript'
  );
})