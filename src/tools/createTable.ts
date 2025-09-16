import { FieldOption } from "../types.js";
import { ToolHandler } from "./types.js";

type CreateTableArgs = {
  base_id: string;
  table_name: string;
  description?: string;
  fields?: FieldOption[];
};

const createTable: ToolHandler = async (args, { axios, validateField }) => {
  const { base_id, table_name, description, fields } = args as CreateTableArgs;
  const validatedFields = fields?.map((field) => validateField(field));
  const response = await axios.post(`/meta/bases/${base_id}/tables`, {
    name: table_name,
    description,
    fields: validatedFields,
  });

  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(response.data, null, 2),
      },
    ],
  };
};

export default createTable;
