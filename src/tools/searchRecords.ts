import { ErrorCode, McpError } from "@modelcontextprotocol/sdk/types.js";
import { ToolHandler } from "./types.js";

type SearchRecordsArgs = {
  base_id: string;
  table_name: string;
  field_name: string;
  value: string;
};

const sanitizeFieldName = (fieldName: string): string => {
  const trimmed = fieldName.trim();
  if (!trimmed) {
    throw new McpError(ErrorCode.InvalidParams, "Field name cannot be empty");
  }
  if (/[{}`\\]/.test(trimmed)) {
    throw new McpError(
      ErrorCode.InvalidParams,
      "Field name contains invalid characters"
    );
  }
  return trimmed;
};

const sanitizeFormulaValue = (value: string): string =>
  value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

const searchRecords: ToolHandler = async (args, { axios }) => {
  const { base_id, table_name, field_name, value } = args as SearchRecordsArgs;
  const sanitizedField = sanitizeFieldName(field_name);
  const sanitizedValue = sanitizeFormulaValue(value);
  const filterByFormula = `{${sanitizedField}} = "${sanitizedValue}"`;

  const response = await axios.get(`/${base_id}/${table_name}`, {
    params: {
      filterByFormula,
    },
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

export default searchRecords;
