import { createRouteHandler } from "uploadthing/next";
 
import { pdfRouter } from "./core";
 
export const { GET, POST } = createRouteHandler({
  router: pdfRouter,
});
