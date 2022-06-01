import * as C from './App.styles'
import { useState } from 'react';
import { Item } from './types/Item'
import { Category } from './types/Category'
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth } from './helpers/dateFilter';

export function App() {
  const [list, setList] = useState(items)
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Finance System</C.HeaderText>
      </C.Header>
      <C.Body>
        
      </C.Body>
    </C.Container>
  );
}