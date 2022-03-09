import UserImage from "../../../components/atoms/imgs/UserImage";
import DefaultImage from '../../../assets/img/defaultUser.png'
export default {
    title:'Atoms/Images/UserImage',
    component:UserImage,
}

export const Default = ()=> <UserImage src={DefaultImage}/>
