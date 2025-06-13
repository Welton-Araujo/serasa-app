import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Author from './Author';

interface Post {
  id: number;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
}

interface AuthorData {
  id: number;
  name: string;
  email: string;
  bio: string | null;
  posts: Post[];
}

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledSelect = styled.select`
  background-color: #d1fae5; /* verde claro */
  color: #059669; /* verde */
  font-weight: 600;
  padding: 0.5rem 2rem 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  appearance: none;
  cursor: pointer;
`;

const DropdownArrow = styled.span`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #059669;
  pointer-events: none;
`;

const AuthorList: React.FC = () => {
  const [authors, setAuthors] = useState<AuthorData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAuthorId, setSelectedAuthorId] = useState<number | 'all'>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  useEffect(() => {
    axios.get('http://localhost:3000/api/authors?page=1&limit=10')
      .then(res => {
        setAuthors(res.data.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando autores...</p>;

  let filteredAuthors =
    selectedAuthorId === 'all'
      ? authors
      : authors.filter(author => author.id === selectedAuthorId);

  filteredAuthors = [...filteredAuthors].sort((a, b) => {
    const getLatestDate = (posts: Post[]) => {
      if (posts.length === 0) return '';
      return posts
        .map(post => post.createdAt)
        .sort((a, b) =>
          sortOrder === 'asc'
            ? Date.parse(a) - Date.parse(b)
            : Date.parse(b) - Date.parse(a)
        )[0];
    };

    const dateA = getLatestDate(a.posts);
    const dateB = getLatestDate(b.posts);

    return sortOrder === 'asc'
      ? Date.parse(dateA) - Date.parse(dateB)
      : Date.parse(dateB) - Date.parse(dateA);
  });

  return (
    <div>
      <FilterContainer>
        {/* Filtro por autor */}
        <SelectWrapper>
          <StyledSelect
            value={selectedAuthorId}
            onChange={(e) => {
              const value = e.target.value;
              setSelectedAuthorId(value === 'all' ? 'all' : Number(value));
            }}
          >
            <option value="all">Filtrar por autor</option>
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </StyledSelect>
          <DropdownArrow>▼</DropdownArrow>
        </SelectWrapper>

        {/* Ordenar por */}
        <SelectWrapper>
          <StyledSelect
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
          >
            <option value="desc">Ordenar por</option>
            <option value="asc">Mais antigos primeiro</option>
            <option value="desc">Mais recentes primeiro</option>
          </StyledSelect>
          <DropdownArrow>▼</DropdownArrow>
        </SelectWrapper>
      </FilterContainer>

      {filteredAuthors.length > 0 ? (
        filteredAuthors.map((author) => (
          <Author key={author.id} author={author} />
        ))
      ) : (
        <p>Nenhum autor encontrado.</p>
      )}
    </div>
  );
};

export default AuthorList;
