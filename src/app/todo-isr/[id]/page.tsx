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
            <div className={"font-bold"}>ISR</div>
            <h1>{todo.name}</h1>
            <p>{todo.description}</p>
        </div>
    );
}


// ISR Configuration
  // Revalidate the page every 10 seconds
export const revalidate = 10

/** dynamicParams
 * true (default): Dynamic segments not included in generateStaticParams are generated on demand.
 * false: Dynamic segments not included in generateStaticParams will return a 404.
 */

export const dynamicParams = true
