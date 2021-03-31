import React, { useEffect } from 'react'
import { useInputs } from '../hook/useInputs'
// import { InputPassword } from './InputPassword'
import { InputText } from './InputText'

export const Form = () => {
    const {data, parseInput, inputOk} = useInputs();
    const hadleSubmit = (event)=>{
        event.preventDefault();
        console.log(data)
    }


    return (
        <form className="form" onSubmit={hadleSubmit}>
            <InputText name="name" label="Ingrese su nombre" parseInput={parseInput} type="text"/>
            <InputText name="lastname" label="Ingrese su apelllido" parseInput={parseInput} type="text"/>
            {/* <InputText name="phone" label="Ingrese su telefono" parseInput={parseInput} type="number"/> */}
            <InputText name="email" label="Ingrese su email" parseInput={parseInput} type="email"/>
            <InputText name="password" label="Ingrese su contraseña" parseInput={parseInput} type="password"/>
            {/* <InputPassword name="password" label="Ingrese su contraseña" message='Contraseña debe tener Mayuculas, minuscular y numeros' parseInput={parseInput} /> */}
            <button  type={'submit'} disabled={!inputOk}>Registrarse</button>
        </form>
    )
}
