export type Profile = {
  id: string;
  name?: string;
  age?: number;
  email: string;
};

export type HttpError = {
  err: { message: string }
};

export const httpError: HttpError = {
  err: { message: 'internal server error'},
};

export function getMyProfile(): Promise<Profile> {
  return fetch("https://myapi.testing.com/my/profile").then(async (res)=> {
    const data = await res.json();
    if (!res.ok) {
      throw data;
    }
    return data;
  });
}