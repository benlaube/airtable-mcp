import { FieldOption, fieldRequiresOptions, getDefaultOptions } from "./types.js";

export const validateField = (field: FieldOption): FieldOption => {
  if (!fieldRequiresOptions(field.type)) {
    const { options, ...rest } = field;
    return rest;
  }

  if (!field.options) {
    return {
      ...field,
      options: getDefaultOptions(field.type),
    };
  }

  return field;
};
