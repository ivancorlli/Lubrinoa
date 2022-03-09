import { IoLogoReact } from "react-icons/io5";
import InpuTooltip from "../../../components/molecules/inputs/InpuTooltip";


export default {
    title:'Molecules/Inputs/InpuTooltip',
    component:InpuTooltip,
}

export const Default = ()=> <InpuTooltip><IoLogoReact/></InpuTooltip>;
export const Primary = ()=> <InpuTooltip color="primary"><IoLogoReact/></InpuTooltip>;
export const Secondary = ()=> <InpuTooltip color="secondary"><IoLogoReact/></InpuTooltip>;
export const Xs = ()=> <InpuTooltip color="primary" width="1/5"><IoLogoReact/></InpuTooltip>;
export const Sx = ()=> <InpuTooltip color="primary" width="1/4"><IoLogoReact/></InpuTooltip>;
export const Sm = ()=> <InpuTooltip color="primary" width="2/5"><IoLogoReact/></InpuTooltip>;
export const Md = ()=> <InpuTooltip color="primary" width="2/4"><IoLogoReact/></InpuTooltip>;
export const Lg = ()=> <InpuTooltip color="primary" width="3/5"><IoLogoReact/></InpuTooltip>;
export const Xl = ()=> <InpuTooltip color="primary" width="3/4"><IoLogoReact/></InpuTooltip>;
export const Xxl = ()=> <InpuTooltip color="primary" width="4/5"><IoLogoReact/></InpuTooltip>;