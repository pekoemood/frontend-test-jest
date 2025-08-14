export function getMyArticles(): Promise<Articles> {
  return fetch(host("/my/articles")).then(handleResponse);
}

export type Article = {
  id: string;
  createdAt: string;
  tags: string[],
  title: string,
  body: string;
};

export type Articles = {
  articles: Article[];
};

const host = (path: string) => `https://myapi.testing.com${path}`;

async function handleResponse(res: Response) {
  const data = await res.json();
  if (!res.ok) {
    throw data;
  }
  return data;
}

