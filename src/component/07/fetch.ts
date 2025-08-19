import * as Fetchers from '.';
import { httpError, postMyAddressMock } from '../../05/07/fetchers/fixtures';

export function mockPostMyAddress(status = 200) {
  if (status > 299) {
    return jest.spyOn(Fetchers, 'postMyAddress').mockRejectedValueOnce(httpError);
  }
  return jest.spyOn(Fetchers, 'postMyAddress').mockResolvedValueOnce(postMyAddressMock);
}