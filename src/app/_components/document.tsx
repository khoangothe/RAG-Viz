'use client'

import Diagram, { useSchema, createSchema } from 'beautiful-react-diagrams';

import { useCallback } from 'react';
import {
ReactFlow,
MiniMap,
Controls,
Background,
useNodesState,
useEdgesState,
addEdge,
} from '@xyflow/react';

import {getDocument} from "@/server/queries";
import {Box} from '@radix-ui/themes';
import {notFound } from 'next/navigation';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  ];

  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

function Flow() {
const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

const onConnect = useCallback((params : any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

return (
  <ReactFlow
    nodes={nodes}
    edges={edges}
    onNodesChange={onNodesChange}
    onEdgesChange={onEdgesChange}
    onConnect={onConnect}
  >
    <Controls />
    <Background />
  </ReactFlow>
);
}

export default async function Document({doc_id} : {doc_id : string}){

    // const file = await getDocument(doc_id);
    // if (!file){
    //     notFound()
    // }
    return (
      <Flow/>
    )
}