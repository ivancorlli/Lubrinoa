import { ThemeProvider} from "styled-components";


export const light = {
    colors:{
        primary:'#4B59F7',
        secondary:'#151A31',
    },
    action:{
        success:'#51B441',
        warning:'#FAFA0F',
        danger:'#E52C2C',
    },
    fontColor:{
        light:'#E5E5E5',
        dark:'#08090A',
        medium:'#C4C4C4',
    },
}

export function colorsFunction(color,theme){
    switch(color){
        // Colors
      case 'primary':
        return color=theme.colors.primary
      case 'secondary':
        return color=theme.colors.secondary
      case 'success':
        //   Action Colors
        return color=theme.action.success
      case 'warning':
        return color=theme.action.warning
      case 'danger':
        return color=theme.action.danger
      case 'fontLight':
        return color=theme.fontColor.light
      case 'white':
        return color= 'white'
      case 'fontDark':
        return color=theme.fontColor.dark
      case 'fontMedium':
        return color=theme.fontColor.medium
        default :
        return color='none'
    }
  }

const Theme = ({children})=>{
    return <ThemeProvider theme={light}>{children}</ThemeProvider>
}

export default Theme