import React, {ChangeEvent} from 'react';

type InputPropsType = {
    setTitle: (title: string) => void;
    title: string;
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        //console.log(event.currentTarget.value)
        props.setTitle(event.currentTarget.value)
    }
    return (
        <input onChange={onChangeHandler} value={props.title}/>
    );
};

