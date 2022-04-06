export interface PrependHttpOptions {
  https?: boolean;
}

export function prependHttp(
  url: string,
  options: PrependHttpOptions = { https: true }
): string {
  const { https } = options;

  if (typeof url !== 'string') {
    throw new TypeError(
      `Expected \`url\` to be of type \`string\`, got \`${typeof url}\``
    );
  }

  const cleanedUrl = url.trim();

  if (/^\.*\/|^(?!localhost)\w+?:/.test(cleanedUrl)) {
    return cleanedUrl;
  }

  return cleanedUrl.replace(
    /^(?!(?:\w+?:)?\/\/)/,
    https ? 'https://' : 'http://'
  );
}
