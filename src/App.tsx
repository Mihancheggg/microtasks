import React from 'react';
import './App.css';
//import NewComponent/*, {CarInfo}*/ from './site/NewComponent';
import {Button} from './Components/Button';

function App() {
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


    /*const onClickHandler = (name: string) => {
        console.log(`Hello, I am ${name}!`)
    }*/

    return (
        <div className="App">

            {/*<button onClick={(event) => {*/}
            {/*    console.log('Hello!')*/}
            {/*}}>MyYouTubeChannel-1*/}
            {/*</button>*/}

            {/*<button onClick={(event) => onClickHandler('Vasya')}>"Vasya"</button>
            <button onClick={() => onClickHandler('Ivan')}>"Ivan"</button>*/}

            <Button />

        </div>
    );
}

export default App;

