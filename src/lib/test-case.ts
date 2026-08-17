import { z } from "zod";

export const testCaseSchema = z.object({
  title: z.string().trim().min(1, "O titulo do caso de teste e obrigatorio."),
  precondition: z.string().trim().optional(),
  steps: z
    .array(z.string().trim().min(1, "Cada passo precisa ter uma descricao."))
    .min(1, "O caso de teste precisa ter pelo menos um passo."),
  expectedResult: z
    .string()
    .trim()
    .min(1, "O resultado esperado e obrigatorio."),
});

export type TestCaseInput = z.input<typeof testCaseSchema>;
export type TestCase = z.infer<typeof testCaseSchema>;

export function validateTestCase(input: TestCaseInput): TestCase {
  return testCaseSchema.parse(input);
}
