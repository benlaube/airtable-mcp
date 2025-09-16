import { ToolHandler } from "./types.js";

type UpdateRecordArgs = {
  base_id: string;
  table_name: string;
  record_id: string;
  fields: Record<string, unknown>;
};

const updateRecord: ToolHandler = async (args, { axios }) => {
  const { base_id, table_name, record_id, fields } = args as UpdateRecordArgs;
  const response = await axios.patch(`/${base_id}/${table_name}/${record_id}`, {
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

export default updateRecord;
