// app/test-page/page.tsx
"use client";

import React, { useState } from "react";

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
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Composant principal
export default function TestPage() {
  const [sum, setSum] = useState(0);
  const [palindromeResult, setPalindromeResult] = useState(false);
  const [count, setCount] = useState(0);
  const [capitalized, setCapitalized] = useState("");

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Page de test des fonctions</h1>

      {/* Additionner */}
      <div>
        <h2 className="text-xl font-semibold">Additionner deux nombres</h2>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setSum(addNumbers(5, 7))}>
          Calculer 5 + 7
        </button>
        <p className="mt-2">Résultat : {sum}</p>
      </div>

      {/* Palindrome */}
      <div>
        <h2 className="text-xl font-semibold">Vérifier un palindrome</h2>
        <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded" onClick={() => setPalindromeResult(isPalindrome("Radar"))}>
          Vérifier "Radar"
        </button>
        <p className="mt-2">Est un palindrome ? {palindromeResult ? "Oui" : "Non"}</p>
      </div>

      {/* Compter objets */}
      <div>
        <h2 className="text-xl font-semibold">Compter des objets</h2>
        <button className="mt-2 px-4 py-2 bg-purple-500 text-white rounded" onClick={() => setCount(countObjects([{ id: 1 }, { id: 2 }, { id: 3 }]))}>
          Compter 3 objets
        </button>
        <p className="mt-2">Nombre d'objets : {count}</p>
      </div>

      {/* Capitaliser */}
      <div>
        <h2 className="text-xl font-semibold">Mettre en majuscule</h2>
        <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded" onClick={() => setCapitalized(capitalizeWords("bonjour le monde"))}>
          Capitaliser "bonjour le monde"
        </button>
        <p className="mt-2">Résultat : {capitalized}</p>
      </div>
    </div>
  );
}
