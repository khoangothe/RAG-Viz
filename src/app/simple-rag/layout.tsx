import { Sidebar } from "@/components/rag-panel/sidebar";
import { getDocuments } from "@/server/queries";

export default async function RootLayout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    const files = await getDocuments()
    return <>
        <Sidebar files={files}/>
        {children}
    </>

  }