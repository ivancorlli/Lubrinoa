import Button from "../../../components/atoms/buttons/Button";

export default {
    title:'Atoms/Buttons/Button',
    component:Button,
}

export const Primary = ()=> <Button type="primary">Primary</Button>
export const Secondary = ()=> <Button type="secondary">Secondary</Button>
export const Disabled = ()=> <Button type="primary" disabled>Primary</Button>

