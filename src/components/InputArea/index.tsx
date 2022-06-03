import { useState } from 'react'
import { categories } from '../../data/categories'
import { Item } from '../../types/Item'
import * as C from './styles'

type Props = {
    onAdd: (item: Item) => void
}

export function InputArea({ onAdd }: Props) {
    const [dateField, setDateField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [titleField, setTitleField] = useState('');
    const [valueField, setValueField] = useState(0);

    let categoryKeys: string[] = Object.keys(categories);

    function handleAddEvent() {
        let newItem: Item = {
            date: new Date(2022, 6, 3),
            category: 'food',
            title: 'Item de teste',
            value: 250.25
        }

        onAdd(newItem)
    }

    return (
        <C.Container>
            <C.InputLabel>
                <C.InputTitle>Date</C.InputTitle>
                <C.Input type="date" />
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>Category</C.InputTitle>
                <C.Select>

                </C.Select>
            </C.InputLabel>
                
            <C.InputLabel>
                <C.InputTitle>Title</C.InputTitle>
                <C.Input type="text" />
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>Value</C.InputTitle>
                <C.Input type="number" />
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>&nbsp;</C.InputTitle>
                <C.Button onClick={handleAddEvent}>Add</C.Button>
            </C.InputLabel>
        </C.Container>
    )
}