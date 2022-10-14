import { Post } from "../types/Post";

type Props = {
    data: Post;
}

export const PostItem = ( { data }: Props ) => {
    return (
        <article>
            <h3>{data.title}</h3>
            <small>#{data.id} - Usuário: {data.userId}</small>
            <p>{data.body}</p>
        </article>
    );
}