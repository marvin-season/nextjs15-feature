export interface Todo {
    id: number;
    documentId: string;
    description: string;
    complete: boolean | null;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}