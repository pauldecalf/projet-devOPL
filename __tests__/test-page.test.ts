// __tests__/test-page.test.ts
import { addNumbers, isPalindrome, countObjects, capitalizeWords } from "../app/test-page/page";
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
  });

  describe("countObjects", () => {
    it("compte correctement les objets dans un tableau", () => {
      expect(countObjects([{ id: 1 }, { id: 2 }])).toBe(2);
    });

    it("retourne 0 pour un tableau vide", () => {
      expect(countObjects([])).toBe(0);
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
  });
});
