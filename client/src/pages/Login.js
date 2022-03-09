import React, { useState } from 'react'
import { useTokenContext } from '../hooks/useTokenContext'
import LoginTemplate from '../components/templates/LoginTemplate'
import { useNotification } from '../hooks/useNotification'

const initialForm={
    email:'',
    password:'',
}

const Login = () => {
    const [form, setForm] = useState(initialForm)
    const {logIn} = useTokenContext();
    const {message} = useNotification()

    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }
    async function handleSubmit(e){
        e.preventDefault();
        await logIn(form.email,form.password);
        setForm(initialForm);
    }


    return (
        <>
            <LoginTemplate
            form={form}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            error={message}
            />
        </>
    )
}

export default Login
