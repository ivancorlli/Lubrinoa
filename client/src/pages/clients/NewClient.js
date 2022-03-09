import React, {useState} from 'react'
import NewClientTemplate from '../../components/templates/clients/NewClientTemplate'
import { useNotification } from '../../hooks/useNotification';
import AxiosInstance from '../../utils/AxiosInstance';

const initialForm = {
  name:'',
  surname:'',
  phone:'',
  email:'',
}

const NewClient = () => {
  const [form, setForm] = useState(initialForm); 
  const {handleMessage} = useNotification()

// Funciones 
  function handleForm(e){
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  async function handleSubmit(e){
    e.preventDefault();
    let string = new URLSearchParams();
    string.append('name',`${form.name}`)
    string.append('surname',`${form.surname}`)
    string.append('phone',`${form.phone}`)
    string.append('email',`${form.email}`)
    let {data} = await AxiosInstance.post('client',string)
    if(data){
      setForm(initialForm)
      handleMessage(data?.ok,data?.msg)
    }
  }

  return (
    <>
        <NewClientTemplate
        form={form}
        handleForm={handleForm}
        handleSubmit={handleSubmit}
        />
    </>
  )
}

export default NewClient