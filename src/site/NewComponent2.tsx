import React from 'react';
import {FilterType} from '../App';

export type NewComponent2PropsType ={
    onClickHandler: (filter: FilterType) => void;
    currentMoney: Array<MoneyItem>
}

export type MoneyItem = {
    banknots: string;
    value: number;
    number: string;
}

export const NewComponent2 = (props: NewComponent2PropsType) => {
    return(
        <div>
            <ul>
                {props.currentMoney.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>{item.banknots}</span>
                            <span>{item.value}</span>
                            <span>{item.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickHandler('all')}>All</button>
                <button onClick={() => props.onClickHandler('RUBLS ')}>Rubles</button>
                <button onClick={() => props.onClickHandler('Dollars ')}>Dollars</button>
            </div>
        </div>
    )
}