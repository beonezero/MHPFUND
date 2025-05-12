import React from 'react'
import arrowUp from './img/arrowUp.svg'
import arrowDown from './img/arrowDown.svg'
import arrowUpAndDown from './img/arrowUpAndDown.svg'

// добавить в проект иконки и импортировать
const downIcon = arrowDown
const upIcon = arrowUp
const noneIcon = arrowUpAndDown

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === down) return up
    if (sort === up) return ''
    return down;
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt={"arrow"}
            />
        </span>
    )
}

export default SuperSort
