'use server'

import {getDocument} from "@/server/queries";
import {Box} from '@radix-ui/themes';
import {notFound } from 'next/navigation';

export default async function Document({doc_id} : {doc_id : string}){

    const file = await getDocument(doc_id);
    if (!file){
        notFound()
    }
    return (
        <Box className="bg-green-400" width="64px" height="64px">
            {file.file_name}
        </Box>
    )
}