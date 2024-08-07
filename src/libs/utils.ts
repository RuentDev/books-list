export function capitalizeFirstCharacterInString(string: string): string {

  const arrayString = string.split("");

  if (arrayString.length > 0) {
    arrayString[0] = arrayString[0].toUpperCase();
  }

  const resultString = arrayString.join("");

  return resultString;
}
