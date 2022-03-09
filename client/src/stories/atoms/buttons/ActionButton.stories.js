import ActionButton from "../../../components/atoms/buttons/ActionButton";


export default {
    title:'Atoms/Buttons/ActionButton',
    component:ActionButton,
}

export const Success = ()=> <ActionButton>Guardar</ActionButton>
export const Warning = ()=> <ActionButton type='warning'>Alerta</ActionButton>
export const Danger = ()=> <ActionButton type='danger'>Cerrar</ActionButton>