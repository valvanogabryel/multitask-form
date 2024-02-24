export function capitalizeFirstLetter(str: string) {
  const firstLetterCap = str.charAt(0).toUpperCase();
  const remainingLetters = str.slice(1);
  return firstLetterCap + remainingLetters;
}
