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
    author?: string;
}

export interface comment {
    id: number;
    postId: number;
    email: string;
    name: string;
    body: string;
}

export interface loggedUser {
    username: string;
    token?: string;
    id?: number | string;
    password?: string;
}

export interface RouteProps {
    children: React.ReactNode;
    path?: string;
    exact?: boolean;
}
