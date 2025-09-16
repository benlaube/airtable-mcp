import createField from "./createField.js";
import createRecord from "./createRecord.js";
import createTable from "./createTable.js";
import deleteRecord from "./deleteRecord.js";
import getRecord from "./getRecord.js";
import listBases from "./listBases.js";
import listRecords from "./listRecords.js";
import listTables from "./listTables.js";
import searchRecords from "./searchRecords.js";
import updateField from "./updateField.js";
import updateRecord from "./updateRecord.js";
import updateTable from "./updateTable.js";
import { ToolHandler } from "./types.js";

export const toolHandlers: Record<string, ToolHandler> = {
  list_bases: listBases,
  list_tables: listTables,
  create_table: createTable,
  update_table: updateTable,
  create_field: createField,
  update_field: updateField,
  list_records: listRecords,
  create_record: createRecord,
  update_record: updateRecord,
  delete_record: deleteRecord,
  search_records: searchRecords,
  get_record: getRecord,
};

export * from "./types.js";
