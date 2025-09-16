import { ToolHandler } from "./types.js";

type GetRecordArgs = {
  base_id: string;
  table_name: string;
  record_id: string;
};

const getRecord: ToolHandler = async (args, { axios }) => {
  const { base_id, table_name, record_id } = args as GetRecordArgs;
  const response = await axios.get(`/${base_id}/${table_name}/${record_id}`);

  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(response.data, null, 2),
      },
    ],
  };
};

export default getRecord;
