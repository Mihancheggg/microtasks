import React, {useState} from 'react';
import './App.css'
import {FullInput} from './Components/FullInput';
import {Input} from './Components/Input';
import {Button} from './Components/Button';
import {Button2} from './Components/Button2';

export const App2 = () => {
    let [message, setMessage] = useState(
        [
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
        ]
    )

    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        setMessage([{message: title}, ...message])
        setTitle('')
    }

    const callBackButtonHandler = () => {
        addMessage(title)
    }


    return (
        <div className="App">
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button2 name={'+'} callBack={callBackButtonHandler}/>
            {message.map((item, index) => {
                return (
                    <div key={index}>
                        {item.message}
                    </div>
                )
            })}

        </div>
    );
};

