import { createTraitModule } from "../trait/traitFactory";
export const { service: defectService, hooks: useDefect } = createTraitModule(
  "Defect",
  "defects",
);
