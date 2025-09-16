import { validateField } from "../src/fieldValidation.js";
import { FieldOption } from "../src/types.js";

describe("validateField", () => {
  it("removes options for fields that do not require them", () => {
    const field: FieldOption = {
      name: "Title",
      type: "singleLineText",
      options: { custom: true },
    };

    const result = validateField(field);

    expect(result).toEqual({
      name: "Title",
      type: "singleLineText",
    });
  });

  it("adds default options for number fields when missing", () => {
    const field: FieldOption = {
      name: "Count",
      type: "number",
    };

    const result = validateField(field);

    expect(result.options).toEqual({ precision: 0 });
  });

  it("adds empty choice lists for select fields", () => {
    const singleSelectField: FieldOption = {
      name: "Status",
      type: "singleSelect",
    };

    const multiSelectField: FieldOption = {
      name: "Tags",
      type: "multiSelect",
    };

    expect(validateField(singleSelectField).options).toEqual({ choices: [] });
    expect(validateField(multiSelectField).options).toEqual({ choices: [] });
  });
});
