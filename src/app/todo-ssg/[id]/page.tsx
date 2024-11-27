import {fetchTodo, fetchTodos} from '@/lib/fetchTodos';
import {Todo} from '@/types';

// Fetch the static parameters
export async function generateStaticParams() {
    const todos = await fetchTodos();
    return todos.map((todo: Todo) => ({
        id: `${todo.documentId}`,
    }));
}


// Define the page component
export default async function TodoDetail({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params
    const todo = await fetchTodo(id);
    if (!todo) {
        return <div>Todo not found</div>;
    }

    return (
        <div>
            <div className={"SSG"}></div>
            <h1>{todo.name}</h1>
            <p>{todo.description}</p>
        </div>
    );
}