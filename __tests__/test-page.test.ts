// __tests__/test-page.test.ts
import { addNumbers, isPalindrome, countObjects, capitalizeWords } from "../components/functions";
import { describe, expect, it } from "vitest";

describe("Fonctions de TestPage", () => {
  describe("addNumbers", () => {
    it("additionne correctement deux nombres positifs", () => {
      expect(addNumbers(2, 3)).toBe(5);
    });

    it("additionne correctement un nombre positif et négatif", () => {
      expect(addNumbers(5, -2)).toBe(3);
    });

    it("additionne deux zéros", () => {
      expect(addNumbers(0, 0)).toBe(0);
    });

    it("additionne deux nombres négatifs", () => {
      expect(addNumbers(-4, -6)).toBe(-10);
    });

    it("additionne un nombre à zéro", () => {
      expect(addNumbers(7, 0)).toBe(7);
    });
  });

  describe("isPalindrome", () => {
    it("reconnaît un palindrome simple", () => {
      expect(isPalindrome("Radar")).toBe(true);
    });

    it("reconnaît un non-palindrome", () => {
      expect(isPalindrome("Chat")).toBe(false);
    });

    it("ignore la casse et les caractères spéciaux", () => {
      expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    });

    it("détecte correctement un mot palindrome avec chiffres", () => {
      expect(isPalindrome("12321")).toBe(true);
    });

    it("ignore les espaces et ponctuations", () => {
      expect(isPalindrome("No 'x' in Nixon")).toBe(true);
    });

    it("retourne true pour une chaîne vide", () => {
      expect(isPalindrome("")).toBe(true);
    });

    it("retourne true pour un caractère unique", () => {
      expect(isPalindrome("a")).toBe(true);
    });
  });

  describe("countObjects", () => {
    it("compte correctement les objets dans un tableau", () => {
      expect(countObjects([{ id: 1 }, { id: 2 }])).toBe(2);
    });

    it("retourne 0 pour un tableau vide", () => {
      expect(countObjects([])).toBe(0);
    });

    it("compte correctement avec un seul objet", () => {
      expect(countObjects([{ name: "test" }])).toBe(1);
    });

    it("compte correctement avec des objets de types différents", () => {
      expect(countObjects([{ id: 1 }, { name: "a" }, { active: true }])).toBe(3);
    });
  });

  describe("capitalizeWords", () => {
    it("met en majuscule le premier caractère de chaque mot", () => {
      expect(capitalizeWords("bonjour tout le monde")).toBe("Bonjour Tout Le Monde");
    });

    it("fonctionne même avec des majuscules existantes", () => {
      expect(capitalizeWords("BONJOUR le MONDE")).toBe("Bonjour Le Monde");
    });

    it("gère une chaîne vide", () => {
      expect(capitalizeWords("")).toBe("");
    });

    it("ignore les espaces supplémentaires entre les mots", () => {
      expect(capitalizeWords("  hello   world ")).toBe("Hello World");
    });

    it("gère les mots composés", () => {
      expect(capitalizeWords("bon-jovi est cool")).toBe("Bon-jovi Est Cool");
    });

    it("garde les chiffres intacts", () => {
      expect(capitalizeWords("le 1er test est ok")).toBe("Le 1er Test Est Ok");
    });

    it("gère les caractères spéciaux", () => {
      expect(capitalizeWords("l'été à l'hôtel")).toBe("L'été À L'hôtel");
    });
  });
});
