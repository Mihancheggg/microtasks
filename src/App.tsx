import React, {useState} from 'react';
import './App.css';
import {MoneyItem, NewComponent2} from './site/NewComponent2';
//import NewComponent/*, {CarInfo}*/ from './site/NewComponent';
//import {Button} from './Components/Button';


//function App() {


// метод map

// const TopCars/*: Array<CarInfo>*/ = [
//     {manufacturer: 'BMW', model: 'm5cs'},
//     {manufacturer: 'Mercedes', model: 'e63s'},
//     {manufacturer: 'Audi', model: 'rs6'}
// ]
//
// return (<>
//         <NewComponent cars={TopCars}/>
//     </>
// );


//кнопки

// const onClickHandler = (name: string) => {
//     console.log(`Hello, I am ${name}!`)
// }
//
// const Button1foo = (subscriber: string, age: number) => {
//     console.log(`I am ${subscriber} and I am ${age}`);
// }
//
// const Button2foo = (subscriber: string, age: number) => {
//     console.log(`I am ${subscriber} and I am ${age}`);
// }
//
// const Button3foo = () => {
//     console.log('I am stupid button');
// }
//
// return (
//     <div className="App">
//
//         {/*<button onClick={(event) => {*/}
//         {/*    console.log('Hello!')*/}
//         {/*}}>MyYouTubeChannel-1*/}
//         {/*</button>*/}
//
//         {/*<button onClick={(event) => onClickHandler('Vasya')}>"Vasya"</button>
//         <button onClick={() => onClickHandler('Ivan')}>"Ivan"</button>*/}
//
//         <Button name={'MyYouTubeChannel-1'} callBack={() => Button1foo('Vasya', 21)}/>
//         <Button name={'MyYouTubeChannel-2'} callBack={() => Button2foo('Ivan', 26)}/> //передаем пропс
//         <Button name={'MyYouTubeChannel-3'} callBack={Button3foo}/> //ничего не передаем
//
//     </div>
// );


//хуки

// let [a, setA] = useState(1)
//
// const onClickHandler = () => {
//     setA(++a);
// }
//
// const onClickHandler2 = () => {
//     setA(0);
// }
//
// return (
//     <div className='App'>
//         <h1>{a}</h1>
//         <button onClick={onClickHandler}>Increase</button>
//         <button onClick={onClickHandler2}>To zero</button>
//     </div>
// )

//filter

//}

export type FilterType = 'all' | 'Dollars ' | 'RUBLS ';

function App() {

    const [money, setMoney] = useState<Array<MoneyItem>>([
        {banknots: 'Dollars ', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars ', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS ', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars ', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars ', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS ', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars ', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS ', value: 50, number: ' v1234567890'},
    ])

    let currentMoney = money;

    const [filter, setFilter] = useState<FilterType>('all')

    const onClickHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    if (filter === 'RUBLS ') {
        currentMoney = money.filter(item => item.banknots === 'RUBLS ');
        //setMoney(currentMoney);
    }
    if (filter === 'Dollars ') {
        currentMoney = money.filter(item => item.banknots === 'Dollars ');
        //setMoney(currentMoney);
    }


    return (
        /*<>
            <ul>
                {currentMoney.map((item, index) => {
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
                <button onClick={() => onClickHandler('all')}>All</button>
                <button onClick={() => onClickHandler('RUBLS ')}>Rubles</button>
                <button onClick={() => onClickHandler('Dollars ')}>Dollars</button>
            </div>
        </>*/
        <NewComponent2 onClickHandler={onClickHandler} currentMoney={currentMoney}/>
    );
};

export default App;

