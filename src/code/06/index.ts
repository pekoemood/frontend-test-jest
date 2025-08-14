import { Article, getMyArticles, Articles } from "./fetch";

export const getMyArticlesData: Articles = {
  articles: [
    {
      id: "howto-testing-with-typescript",
      createdAt: "2022-07-19T22:38:41.005Z",
      tags: ["testing"],
      title: "TypeScriptを使ったテストの書き方",
      body: "テストを書く時、TypeScript を使うことで、テストの保守性が向上します…",
    },
    {
      id: "nextjs-link-component",
      createdAt: "2022-07-19T22:38:41.005Z",
      tags: ["nextjs"],
      title: "Next.js の Link コンポーネント",
      body: "Next.js の画面遷移には、Link コンポーネントを使用します…",
    },
    {
      id: "react-component-testing-with-jest",
      createdAt: "2022-07-19T22:38:41.005Z",
      tags: ["testing", "react"],
      title: "JestではじめるReactのコンポーネントテスト",
      body: "Jest は単体テストとして、UIコンポーネントのテストが可能です…",
    },
  ],
};

export async function getMyArticleLinksByCategory(category: string) {
  const data = await getMyArticles();

  const articles = data.articles.filter((article) => 
  article.tags.includes(category));
  if (!articles.length) {
    return null;
  }
  return articles.map((article) => ({
    title: article.title,
    link: `/articles/${article.id}`,
  }));
}

export type HttpError = {
  err: { message: string }
};

export const httpError: HttpError = {
  err: { message: 'internal server error'},
};

