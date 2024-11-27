import {fetchTodo} from "@/lib/fetchTodos";


// Define the page component, running server-side on every request
export default async function TodoDetail({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params
    const todo = await fetchTodo(id);
    if (!todo) {
        return <div>Todo not found</div>;
    }

    return (
        <div>
            <div className={"font-bold"}>SSR</div>
            <h1>{todo.name}</h1>
            <p>{todo.description}</p>
        </div>
    );
}