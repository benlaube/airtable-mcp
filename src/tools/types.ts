import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { AxiosInstance } from "axios";
import { FieldOption } from "../types.js";

export interface ToolContext {
  axios: AxiosInstance;
  validateField: (field: FieldOption) => FieldOption;
}

export type ToolHandler = (
  args: unknown,
  context: ToolContext
) => Promise<CallToolResult>;
