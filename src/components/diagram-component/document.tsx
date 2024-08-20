'use client'

import { useCallback} from 'react';
import {
ReactFlow,
Controls,
useNodesState,
useEdgesState,
addEdge,
} from '@xyflow/react';

import {FileType} from "@/server/queries";


function Flow({label}: {label : string}) {
  const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: label } },
    ];
  
    const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
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
  </ReactFlow>
);
}

export default async function Document({file} : {file : FileType}){
    return (
      <Flow label={file?.file_name + ""}/>
    )
}