import React, {useEffect, useState} from 'react'
import NewVehicleTemplate from '../../components/templates/clients/NewVehicleTemplate';
import { useNotification } from '../../hooks/useNotification';
import AxiosInstance from '../../utils/AxiosInstance';

const initialForm = {
  patent:'',
  owner:'',
  mark:'',
  model:'',
  km:'',
  year:'',
}

const NewClient = () => {
  const [form, setForm] = useState(initialForm); 
  const [clients, setClients] = useState([])
  const [owner, setOwner] = useState({owner:''})
  const {handleMessage} = useNotification()

  useEffect(()=>{
      async function getClietns(){
        let {data} = await AxiosInstance.get('clients');
        if(data){
          let clients = data.response.clients;
          clients = clients.map(el=>{
              return{
                value:el._id,
                label:`${el.surname} ${el.name}`
              }
          })
          setClients(clients)
        }
      }
      getClietns()
  },[])

// Funciones 
  function handleForm(e){
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  function handleSelect(e){
    setOwner({
        [e.name]:e.value,
    })
    setForm({
        ...form,
        owner:e.value,
    })
}

  async function handleSubmit(e){
    e.preventDefault();
    let string = new URLSearchParams();
    string.append(`patent`,`${form.patent}`)
    string.append(`owner`,`${form.owner}`)
    string.append(`mark`,`${form.mark}`)
    string.append(`model`,`${form.model}`)
    string.append(`year`,`${form.year}`)
    string.append(`km`,`${form.km}`)
    try{

      let {data} = await AxiosInstance.post('vehicle',string);
      if(data){
        setForm(initialForm)
        setOwner({owner:''})
        handleMessage(data?.ok,data?.msg)
      }
    }catch(err){
      if(err && err?.response?.data){
        handleMessage(err?.response?.data?.ok,err?.response?.data?.msg)
        
      }
      setOwner({owner:''})
      setForm(initialForm)
    }
  }
  return (
    <>
        <NewVehicleTemplate
        form={form}
        owner={owner.owner}
        handleForm={handleForm}
        handleSubmit={handleSubmit}
        handleSelect={handleSelect}
        options={clients}
        />
    </>
  )
}

export default NewClient