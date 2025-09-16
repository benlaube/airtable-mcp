import { ToolHandler } from "./types.js";

type CreateRecordArgs = {
  base_id: string;
  table_name: string;
  fields: Record<string, unknown>;
};

const createRecord: ToolHandler = async (args, { axios }) => {
  const { base_id, table_name, fields } = args as CreateRecordArgs;
  const response = await axios.post(`/${base_id}/${table_name}`, {
    fields,
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

export default createRecord;
