import Axios from 'axios'
import jwt from 'jsonwebtoken'

    let token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : '';
    let AxiosInstance;

    AxiosInstance = Axios.create({
        baseURL: '/api/',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    



    AxiosInstance.interceptors.request.use(async req => {
        try{

            let token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : '';
            let data = await jwt.decode(token);
            
            if(data && data.exp > Date.now()/1000){

                let string = new URLSearchParams();
                string.append("token", `${token}`);
                let {data} = await Axios({
                    url:'/api/token/refresh',
                    method:'POST',
                    headers:{ 
                        "content-type": "application/x-www-form-urlencoded",
                        "Accept": "application/json",
                    },
                    data:string
                })
                if(data && data.newToken){
                    localStorage.setItem('token', JSON.stringify(data.newToken));
                }
                
                req.headers.Authorization = `Bearer ${data.newToken}`
                
            }else{
                localStorage.removeItem('token')
            }
            return req
        }catch(err){
            return err
        }
    })

export default AxiosInstance
