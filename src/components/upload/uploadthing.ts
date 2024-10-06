import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

import type { PDFRouter } from "@/app/api/uploadthing/core";

export const UploadButton = generateUploadButton<PDFRouter>();
export const UploadDropzone = generateUploadDropzone<PDFRouter>();
