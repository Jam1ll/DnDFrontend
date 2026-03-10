import { createTraitModule } from "../trait/traitFactory";
export const { service: idealService, hooks: useIdeal } = createTraitModule(
  "Ideal",
  "ideals",
);
