// Fonction 1 : additionner deux nombres
export function addNumbers(a: number, b: number): number {
  return a + b;
}

// Fonction 2 : vérifier un palindrome
export function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

// Fonction 3 : compter le nombre d'objets dans une liste
export function countObjects<T>(list: T[]): number {
  return list.length;
}

// Fonction 4 : mettre en majuscule chaque mot
export function capitalizeWords(sentence: string): string {
  return sentence
    .trim() // supprime les espaces au début et à la fin
    .split(/\s+/) // split sur un ou plusieurs espaces
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
