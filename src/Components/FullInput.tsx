import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';

type FullInputPropsType = {
    addMessage: (title: string) => void;
}

export const FullInput = (props: FullInputPropsType) => {

    let [title, setTitle] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        //console.log(event.currentTarget.value)
        setTitle(event.currentTarget.value)
    }

    const onClickHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input onChange={onChangeHandler} value={title}/>
            <button onClick={onClickHandler}>+</button>
        </div>

    );
}