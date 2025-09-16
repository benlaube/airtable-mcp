import { ToolHandler } from "./types.js";

const listBases: ToolHandler = async (_args, { axios }) => {
  const response = await axios.get("/meta/bases");
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(response.data.bases, null, 2),
      },
    ],
  };
};

export default listBases;
