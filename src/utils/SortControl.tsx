import React from 'react';

interface SortControlProps {
  sortOrder: 'asc' | 'desc';
  onChange: (order: 'asc' | 'desc') => void;
}

const SortControl: React.FC<SortControlProps> = ({ sortOrder, onChange }) => {
  return (
    <div style={{ marginLeft: '1rem' }}>
      <label>Ordenar por data: </label>
      <select
        value={sortOrder}
        onChange={(e) => onChange(e.target.value as 'asc' | 'desc')}
      >
        <option value="asc">Mais antigos primeiro</option>
        <option value="desc">Mais recentes primeiro</option>
      </select>
    </div>
  );
};

export default SortControl;
