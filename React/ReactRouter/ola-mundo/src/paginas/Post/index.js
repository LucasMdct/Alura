
import { Routes, Route, useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import posts from 'json/posts.json';
import PostModelo from "componentes/PostModelo";

import style from  "./Post.module.css";
import './Post.css';
import NaoEcontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";


const Post = (id) => {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })
    if (!post) {
        return <NaoEcontrada />
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== parametros.id)
        .sort((a,b) => b.id - a.id)
        .slice(0, 4);

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                        
                        <h2 className={style.tituloOutrosPosts}>
                            Outros posts que voce pode gostar:
                        </h2>

                        <ul className={style.postsRecomendados}>
                                {postsRecomendados.map((post) => (
                                    <li key={post.id}>
                                        <PostCard post={post} />
                                    </li>
                                ))}
                        </ul>

                    </PostModelo>
                } />
            </Route>
        </Routes>
    );
}

export default Post;