import Icon from "../../../components/atoms/icons/IconContainer";



export default {
    title:'Atoms/Iconos/IconContainer',
    component:Icon,
}

export const Default =()=> <Icon>Ejemplo</Icon>;
export const Primary =()=> <Icon color="secondary">Ejemplo</Icon>;
export const Sm =()=> <Icon size="sm">Ejemplo</Icon>;
export const Md =()=> <Icon size="md">Ejemplo</Icon>;
export const Lg =()=> <Icon size="lg">Ejemplo</Icon>;
export const Xl =()=> <Icon size="xl">Ejemplo</Icon>;