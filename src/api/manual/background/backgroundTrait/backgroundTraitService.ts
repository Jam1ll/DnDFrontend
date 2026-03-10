import { createTraitModule } from "../trait/traitFactory";
export const { service: backgroundTraitService, hooks: useBackgroundTrait } =
  createTraitModule("BackgroundTrait", "backgroundTraits");
