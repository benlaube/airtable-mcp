import { FieldOption } from "../types.js";
import { ToolHandler } from "./types.js";

type UpdateFieldArgs = {
  base_id: string;
  table_id: string;
  field_id: string;
  updates: Partial<FieldOption>;
};

const updateField: ToolHandler = async (args, { axios }) => {
  const { base_id, table_id, field_id, updates } = args as UpdateFieldArgs;
  const response = await axios.patch(
    `/meta/bases/${base_id}/tables/${table_id}/fields/${field_id}`,
    updates
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

export default updateField;
