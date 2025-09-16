import { ToolHandler } from "./types.js";

type ListTablesArgs = {
  base_id: string;
};

const listTables: ToolHandler = async (args, { axios }) => {
  const { base_id } = args as ListTablesArgs;
  const response = await axios.get(`/meta/bases/${base_id}/tables`);
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(response.data.tables, null, 2),
      },
    ],
  };
};

export default listTables;
