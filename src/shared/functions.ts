export function toTitleCase(input: string): string {
  const smallWords = [
    "a",
    "an",
    "and",
    "as",
    "at",
    "but",
    "by",
    "for",
    "in",
    "of",
    "on",
    "or",
    "the",
    "to",
    "with",
  ];

  return input.toLowerCase().replace(/\w+/g, (word, index) => {
    if (index === 0 || !smallWords.includes(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });
}

export function isObjectEmpty<T extends {}>(obj: T): boolean {
  return Object.keys(obj).length === 0;
}

export const createQueryString = (name: string, value: string) => {
  const params = new URLSearchParams();
  params.set(name, value);

  return params.toString();
};
