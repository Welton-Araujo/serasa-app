import React from 'react';
import Post from '../Post/Post';
import { Container, Name, Email, Bio } from './Author.styles';

interface PostType {
  id: number;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
}

interface AuthorProps {
  author: {
    name: string;
    email: string;
    bio: string | null;
    posts: PostType[];
  };
}

const Author: React.FC<AuthorProps> = ({ author }) => {
  return (
    <Container>
      <Name>{author.name}</Name>
      <Email>{author.email}</Email>
      {author.bio && <Bio>{author.bio}</Bio>}

      {author.posts.length > 0 && (
        <div>
          {author.posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              content={post.content}
              date={post.createdAt}
              author={{ name: author.name }}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Author;
