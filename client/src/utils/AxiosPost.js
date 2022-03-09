import Axios from 'axios'


const AxiosPost = (url,headers,string)=>{

    return new Promise(async(resolve,reject) =>{
        
        try{
            let {data} =await Axios({
                url:url,
                method:'POST',
                headers:headers,
                data:string
            })
            resolve(data)
        }catch(err){
            if(err){
                if(err && err.response.data){
                    reject(err.response.data)
                }else{
                    reject(err)
                }
            }
        }
    })

}
export default AxiosPost


