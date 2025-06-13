import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recentes from './Recentes/Recentes';
import { Heading } from './PostsList.styles';

interface Post {
  id: number;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
  author: {
    id: number;
    name: string;
    email: string;
    bio: string | null;
  };
}

interface PostsResponse {
  data: Post[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<PostsResponse>('http://localhost:3000/api/posts?page=1&limit=5')
      .then((res) => {
        setPosts(res.data.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando posts...</p>;

  return (
    <div>
      <Heading>Últimas notícias</Heading>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Recentes key={post.id} post={post} author={post.author} />
        ))
      ) : (
        <p>Nenhum post encontrado.</p>
      )}
    </div>
  );
};

export default PostsList;
