import * as C from './styles'
import { useState } from 'react'
import { Item } from '../../types/Item'

import { categories } from '../../data/categories'
import { newDateAdjusted } from '../../helpers/dateFilter'

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
        let errors: string[] = [];

        if (isNaN(new Date(dateField).getTime())) {
            errors.push('Invalid date!')
        }
        if (!categoryKeys.includes(categoryField)) {
            errors.push('Invalid category!')
        }
        if (titleField === '') {
            errors.push('Empty title!')
        }
        if (valueField <= 0) {
            errors.push('Invalid value!')
        }

        if (errors.length > 0) {
            alert(errors.join('\n'));
        } else {
            onAdd({
                date: newDateAdjusted(dateField),
                category: categoryField,
                title: titleField,
                value: valueField
            })
            clearFields();
        }
    }

    const clearFields = () => {
        setDateField('');
        setCategoryField('');
        setTitleField('');
        setValueField(0);
    }

    return (
        <C.Container>
            <C.InputLabel>
                <C.InputTitle>Date</C.InputTitle>
                <C.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
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