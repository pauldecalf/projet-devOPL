// vitest.d.ts
import "@testing-library/jest-dom";

import { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

declare module "vitest" {
  interface Assertion<T = any> extends TestingLibraryMatchers<T, void> {}
  interface AsymmetricMatchersContaining {
    toBeInTheDocument(): void;
    toHaveTextContent(expected: string | RegExp): void;
    toBeVisible(): void;
    // (tu peux en rajouter d'autres si besoin plus tard)
  }
}
