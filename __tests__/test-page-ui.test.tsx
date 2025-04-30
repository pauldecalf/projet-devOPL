// __test__/test-page-ui.test.tsx

import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import TestPage from "../app/test-page/page";

// Nettoyage du DOM après chaque test 👇
afterEach(() => {
  cleanup();
});

describe("TestPage UI", () => {
  it("additionne 5 + 7 quand on clique sur le bouton", () => {
    render(<TestPage />);
    const button = screen.getByRole("button", { name: /calculer 5 \+ 7/i });
    fireEvent.click(button);
    expect(screen.getByText(/résultat : 12/i)).toBeInTheDocument();
  });

  it("affiche Oui quand le texte est un palindrome", () => {
    render(<TestPage />);
    const button = screen.getByRole("button", { name: /vérifier \"radar\"/i });
    fireEvent.click(button);
    expect(screen.getByText(/est un palindrome \? oui/i)).toBeInTheDocument();
  });

  it("affiche Non avant de cliquer sur Vérifier", () => {
    render(<TestPage />);
    expect(screen.getByText(/est un palindrome \? non/i)).toBeInTheDocument();
  });

  it("compte 3 objets quand on clique sur le bouton", () => {
    render(<TestPage />);
    const button = screen.getByRole("button", { name: /compter 3 objets/i });
    fireEvent.click(button);
    expect(screen.getByText(/nombre d'objets : 3/i)).toBeInTheDocument();
  });

  it("met en majuscule chaque mot de la phrase", () => {
    render(<TestPage />);
    const button = screen.getByRole("button", { name: /capitaliser \"bonjour le monde\"/i });
    fireEvent.click(button);
    expect(screen.getByText(/résultat : bonjour le monde/i)).toBeInTheDocument();
  });
});
