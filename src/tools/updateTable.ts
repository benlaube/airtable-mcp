import { ToolHandler } from "./types.js";

type UpdateTableArgs = {
  base_id: string;
  table_id: string;
  name?: string;
  description?: string;
};

const updateTable: ToolHandler = async (args, { axios }) => {
  const { base_id, table_id, name, description } = args as UpdateTableArgs;
  const response = await axios.patch(`/meta/bases/${base_id}/tables/${table_id}`, {
    name,
    description,
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

export default updateTable;
