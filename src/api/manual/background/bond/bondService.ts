import { createTraitModule } from "../trait/traitFactory";
export const { service: bondService, hooks: useBond } = createTraitModule(
  "Bond",
  "bonds",
);
