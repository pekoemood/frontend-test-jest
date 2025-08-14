export function greet(name: string, callback?: (message: string) => void) {
  callback?.(`Hello! ${name}`);
}

const config = {
  mock: true,
  feature: { spy: true },
};

export function checkConfig(callback?: (payload: object) => void) {
  callback?.(config);
}