import { ToolHandler } from "./types.js";

type DeleteRecordArgs = {
  base_id: string;
  table_name: string;
  record_id: string;
};

const deleteRecord: ToolHandler = async (args, { axios }) => {
  const { base_id, table_name, record_id } = args as DeleteRecordArgs;
  const response = await axios.delete(`/${base_id}/${table_name}/${record_id}`);

  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(response.data, null, 2),
      },
    ],
  };
};

export default deleteRecord;
