import { postMyArticle } from "../../04/fetchers";
import { ArticleInput } from "../../04/fetchers/type";
import * as Features from '../../04/fetchers';
import { httpError } from "../06";
import { checkLength } from "../../04/06";
import { postMyArticleData } from "../../04/fetchers/fixtures";

jest.mock('../../04/fetchers');

function mockPostMyArticle(input: ArticleInput, status = 200) {
  if (status > 299) {
    return jest
      .spyOn(Features, 'postMyArticle')
      .mockRejectedValueOnce(httpError);
  }
  try {
    checkLength(input.title);
    checkLength(input.body);
    return jest
      .spyOn(Features, 'postMyArticle')
      .mockResolvedValue({ ...postMyArticleData, ...input });
  } catch (err) {
    return jest
      .spyOn(Features, 'postMyArticle')
      .mockRejectedValueOnce(httpError);
  }
}

function inputFactory(input?: Partial<ArticleInput>): ArticleInput {
  return {
    tags: ['testing'],
    title: 'TypeScriptを使ったテストの書き方',
    body: 'テストを書くとき、TypeScriptを使うことで、テストの保守性が向上します。',
    ...input,
  };
}

test('バリデーションに成功した場合、成功レスポンスが返る', async () => {
  const input = inputFactory();
  const mock = mockPostMyArticle(input);
  const data = await postMyArticle(input);
  expect(data).toMatchObject(expect.objectContaining(input));
  expect(mock).toHaveBeenCalled();
})

test('バリデーションに失敗した場合,rejectされること', async () => {
  const input = inputFactory({ title: '', body: '' });
  const mock = mockPostMyArticle(input);
  await postMyArticle(input).catch((err) => {
    expect(err).toMatchObject({ err: { message: expect.anything() } });
    expect(mock).toHaveBeenCalled();
  })
})

test('データ取得に失敗した場合、rejectされる', async () => {
  expect.assertions(2);
  const input = inputFactory();
  const mock = mockPostMyArticle(input, 500);
  await postMyArticle(input).catch((err) => {
    expect(err).toMatchObject({ err: { message: expect.anything() } });
    expect(mock).toHaveBeenCalled();
  });
});
