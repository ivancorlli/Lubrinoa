import Tooltip from '../../../components/atoms/icons/Tooltip'


export default {
    title:'Atoms/Iconos/Tooltip',
    component:Tooltip,
}

export const Default =()=> <Tooltip>Ivan</Tooltip>
export const Primary =()=> <Tooltip color="primary">Ivan</Tooltip>
export const Secondary =()=> <Tooltip color="secondary">Ivan</Tooltip>
export const Sm =()=> <Tooltip size="sm">Ivan</Tooltip>
export const Md =()=> <Tooltip size="md">Ivan</Tooltip>
export const Lg =()=> <Tooltip size="lg">Ivan</Tooltip>
export const Xl =()=> <Tooltip size="xl">Ivan</Tooltip>