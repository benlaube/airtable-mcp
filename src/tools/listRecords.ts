import { ToolHandler } from "./types.js";

type ListRecordsArgs = {
  base_id: string;
  table_name: string;
  max_records?: number;
};

const listRecords: ToolHandler = async (args, { axios }) => {
  const { base_id, table_name, max_records } = args as ListRecordsArgs;
  const response = await axios.get(`/${base_id}/${table_name}`, {
    params: max_records ? { maxRecords: max_records } : undefined,
  });

  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(response.data.records, null, 2),
      },
    ],
  };
};

export default listRecords;
