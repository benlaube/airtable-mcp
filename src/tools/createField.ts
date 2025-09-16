import { FieldOption } from "../types.js";
import { ToolHandler } from "./types.js";

type CreateFieldArgs = {
  base_id: string;
  table_id: string;
  field: FieldOption;
};

const createField: ToolHandler = async (args, { axios, validateField }) => {
  const { base_id, table_id, field } = args as CreateFieldArgs;
  const validatedField = validateField(field);
  const response = await axios.post(
    `/meta/bases/${base_id}/tables/${table_id}/fields`,
    validatedField
  );

  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(response.data, null, 2),
      },
    ],
  };
};

export default createField;
