import {Todo} from "@/types";

export async function fetchTodos() {
    const res = await fetch('http://localhost:2337/api/to-dos');
    if (!res.ok) throw new Error('Failed to fetch todos');

    const data = await res.json();
    return data.data;
}


export async function fetchTodo(documentId: string) {
    const res = await fetch(`http://localhost:2337/api/to-dos/${documentId}`)
    if (!res.ok) throw new Error('Failed to fetch todos');
    const data = await res.json();
    return data.data;
}