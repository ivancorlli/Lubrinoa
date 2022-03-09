import Paragraph from "../../../components/atoms/texts/Paragraph";


export default {
    title:'Atoms/Texts/Paragraph',
    component:Paragraph,
}

export const Default = ()=> <Paragraph>Texto de ejemplo</Paragraph>
export const Primary = ()=> <Paragraph color="primary">Texto de ejemplo</Paragraph>
export const Secondary = ()=> <Paragraph color="secondary">Texto de ejemplo</Paragraph>
export const Success = ()=> <Paragraph color="success">Texto de ejemplo</Paragraph>
export const Warning = ()=> <Paragraph color="warning">Texto de ejemplo</Paragraph>
export const Danger = ()=> <Paragraph color="danger">Texto de ejemplo</Paragraph>
export const BgPrimary = ()=> <Paragraph color="bgPrimary">Texto de ejemplo</Paragraph>
export const BgSecodnary = ()=> <Paragraph color="bgSecondary">Texto de ejemplo</Paragraph>
export const FontLight = ()=> <Paragraph color="fontLight">Texto de ejemplo</Paragraph>
export const FontDark = ()=> <Paragraph color="fontDark">Texto de ejemplo</Paragraph>


