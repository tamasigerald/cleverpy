export interface user {
    id: number;
    name: string;
    email: string;
    username: string;
}

export interface post {
    id: number;
    userId: number;
    title: string;
    body: string;
    author: string;
}
