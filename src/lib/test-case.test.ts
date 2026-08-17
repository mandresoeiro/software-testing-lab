import { describe, expect, it } from "vitest";
import { validateTestCase } from "./test-case";

describe("validateTestCase", () => {
  it("aceita um caso de teste valido", () => {
    const testCase = validateTestCase({
      title: "Login com senha correta",
      precondition: "Usuario cadastrado",
      steps: ["Informar email", "Informar senha", "Confirmar login"],
      expectedResult: "Usuario acessa a area logada.",
    });

    expect(testCase.title).toBe("Login com senha correta");
    expect(testCase.steps).toHaveLength(3);
  });

  it("rejeita um caso de teste sem titulo", () => {
    expect(() =>
      validateTestCase({
        title: "",
        steps: ["Informar email e senha"],
        expectedResult: "Usuario acessa a area logada.",
      }),
    ).toThrow("O titulo do caso de teste e obrigatorio.");
  });

  it("rejeita um caso de teste sem passos", () => {
    expect(() =>
      validateTestCase({
        title: "Login com senha correta",
        steps: [],
        expectedResult: "Usuario acessa a area logada.",
      }),
    ).toThrow("O caso de teste precisa ter pelo menos um passo.");
  });

  it("rejeita um caso de teste sem resultado esperado", () => {
    expect(() =>
      validateTestCase({
        title: "Login com senha correta",
        steps: ["Informar email e senha"],
        expectedResult: "",
      }),
    ).toThrow("O resultado esperado e obrigatorio.");
  });
});
