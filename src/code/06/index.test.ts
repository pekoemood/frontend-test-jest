import * as Fetchers from './fetch'
import { getMyArticleLinksByCategory, getMyArticlesData, httpError } from './index';

jest.mock('./fetch');

function mockGetMyArticles(status = 200) {
  if (status > 299) {
    return jest.spyOn(Fetchers, 'getMyArticles').mockRejectedValueOnce(httpError);
  }
  return jest.spyOn(Fetchers, 'getMyArticles').mockResolvedValueOnce(getMyArticlesData);
}

test('指定したタグを持つ記事が一見もない場合、nullが返る', async() => {
  mockGetMyArticles()
  const data = await getMyArticleLinksByCategory('playwright');
  expect(data).toBeNull();
});

test('指定したタグを持つ記事が１件以上ある場合、リンク一覧が返る', async() => {
  mockGetMyArticles();
  const data = await getMyArticleLinksByCategory('testing');
  expect(data).toMatchObject([
    {
      title: 'TypeScriptを使ったテストの書き方',
      link: `/articles/howto-testing-with-typescript`,
    },
    {
      title: 'JestではじめるReactのコンポーネントテスト',
      link: '/articles/react-component-testing-with-jest'
    },
  ]);
});

test('データ取得に失敗した場合、rejectされる', async () => {
  mockGetMyArticles(500);
  await getMyArticleLinksByCategory('testing').catch((err) => {
    expect(err).toMatchObject({
      err: { message: 'internal server error'}
    });
  });
});