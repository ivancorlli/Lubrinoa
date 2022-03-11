import { useCallback, useEffect, useState } from 'react'
import AxiosInstance from '../utils/AxiosInstance'

const useFetch = (tag) => {
    const [elements, setElements] = useState([])

    const getData =useCallback(async()=>{
        try{
            let {data} = await AxiosInstance.get(tag);
                setElements(data.response)
        }catch(err){

        }
    },[tag])

    useEffect(()=>{
            getData()
    },[getData])

  return {
      elements,
      getData
  }
}

export default useFetch