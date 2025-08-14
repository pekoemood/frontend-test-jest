import { ArticleListItem, ItemProps } from "../../05/04/ArticleListItem";

type Props = {
  items: ItemProps[];
}

export function ArticleList({ items }: Props) {
  return (
    <div>
      <h2>記事一覧</h2>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <ArticleListItem {...item} key={item.id} />
          ))}
        </ul>
      ) : (
        <p>投稿記事がありません</p>
      )}
    </div>
  );
};