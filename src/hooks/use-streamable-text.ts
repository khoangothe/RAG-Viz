import { StreamableValue, readStreamableValue } from "ai/rsc";
import { useEffect, useState } from "react";

export const useStreamableText = (
  content: string | StreamableValue<string>,
) => {
  const [rawContent, setRawContent] = useState(
    typeof content === "string" ? content : "",
  );

  useEffect(() => {
    const fetchData = async () => {
      if (typeof content === "object") {
        let value = "";
        try {
          for await (const delta of readStreamableValue(content)) {
            if (typeof delta === "string") {
              setRawContent((value = value + delta));
            }
          }
        } catch (error) {
          console.error("Error reading streamable value:", error);
        }
      }
    };

    fetchData().catch((error) =>
      console.error("Error in useEffect async function:", error),
    );
  }, [content]);

  return rawContent;
};
