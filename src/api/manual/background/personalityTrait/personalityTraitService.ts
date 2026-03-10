import { createTraitModule } from "../trait/traitFactory";

export const { service: personalityTraitService, hooks: usePersonalityTrait } =
  createTraitModule("PersonalityTrait", "personalityTraits");
