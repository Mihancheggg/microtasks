import React from 'react';

type NewComponentType = {
    cars: Array<CarInfo>
}

type CarInfo = {
    manufacturer: string;
    model: string;
}

const NewComponent = (props: NewComponentType) => {
    return (
        /*<ul>
            {props.cars.map((objectFromCarsArray,index)=>{
                return(
                    <li key={index}>
                        <span>{objectFromCarsArray.manufacturer}</span>
                        <span> {objectFromCarsArray.model}</span>
                    </li>
                )
            })}
        </ul>*/
        <table>
            <thead>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            </thead>
            <tbody>
                    {props.cars.map((carInfoItem, index) => {
                        return (
                            <tr key={index}>
                                <td>{carInfoItem.manufacturer}</td>
                                <td>{carInfoItem.model}</td>
                            </tr>
                        )
                    })}
            </tbody>
            </table>
            )
                ;
            };

export default NewComponent;