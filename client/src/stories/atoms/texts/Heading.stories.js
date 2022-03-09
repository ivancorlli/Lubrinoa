import Heading from "../../../components/atoms/texts/Heading";


export default {
    title:'Atoms/Texts/Heading',
    component:Heading,
}

export const Default = ()=> <Heading>Texto de ejemplo</Heading>
export const SemiBold = ()=> <Heading weight="semibold">Texto de ejemplo</Heading>
export const Bold = ()=> <Heading weight="bold">Texto de ejemplo</Heading>
export const ExtraBold = ()=> <Heading weight="extrabold">Texto de ejemplo</Heading>
export const H1 = ()=> <Heading size="h1">Texto de ejemplo</Heading>
export const H2 = ()=> <Heading size="h2">Texto de ejemplo</Heading>
export const H3 = ()=> <Heading size="h3">Texto de ejemplo</Heading>
export const H4 = ()=> <Heading size="h4">Texto de ejemplo</Heading>
export const H5 = ()=> <Heading size="h5">Texto de ejemplo</Heading>
export const H6 = ()=> <Heading size="h6">Texto de ejemplo</Heading>

