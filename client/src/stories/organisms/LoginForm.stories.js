import LoginForm from "../../components/organisms/LoginForm";



export default {
    title:'Organisms/LoginForm',
    component:LoginForm,
}


export const Default = ()=> <LoginForm/>
export const Error = ()=> <LoginForm error={{ok:true,msg:'error'}}/>
export const Active = ()=> <LoginForm email="ivancorlli@gmail.com" password="1234"/>