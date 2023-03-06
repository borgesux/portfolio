import { TypeBackground } from "@mui/material";
import { ThemeOptions, TypeText, createTheme,  } from '@mui/material/styles';
// import { TypographyOptions } from '@mui/material/styles';
// import { Variant } from "@mui/material/styles/createTypography";

export interface CustomTypeBackground extends TypeBackground {
  default: string;
  primary: string;
  secondary?: string;
  highlighted?: string;
  backgroundCustom?: string;
  backgroundBorder?: string;
}

export interface customTypographyOptions extends Partial<TypeText> {
  default: string;
  selected?: string;
  primary?: string;
  secondary?: string;
}

declare module '@mui/material/styles' {
  // interface Typography {
  //   letterSpacing?: React.CSSProperties['letterSpacing'];
  // }
  // interface TypographyOptionsCustom extends TypographyOptions {
  //   letterSpacing?: React.CSSProperties['letterSpacing'];
  // }
  interface Palette { // Serve para conseguirmos acessar o atributo personalizado - Ex: theme.palette.backgroundColor?.primary
    backgroundColor: CustomTypeBackground;
    textColor?: customTypographyOptions;
  }
  interface PaletteOptions { // Serve para a variavel Theme Suporte atributos personalizado no body
    backgroundColor?: CustomTypeBackground;
    textColor?: customTypographyOptions;
  }
}

const Theme = createTheme({
    spacing: 10,
    typography: {
      fontFamily: [ 'Poppins', 'Montserrat' ,'sans-serif'].join(','),
      fontSize: 8,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 800,
      //letterSpacing: '0.05em', 
      subtitle1:{
        //color: "#FFDB70",
      }
    },
    palette: {
      primary: {
        main: "#e91e63", 
        contrastText: "#fff",
        light: "#272B2D",
      },
      secondary: {
        main: "#03a9f4", 
        contrastText: "#fff",
      },
      error: {
        main: "#C30C0C",
      },
      success: {
        main: "#5AC45F",
      },
      text: {
        primary: "#e8e6e3",
        // secondary: 'rgba(132, 146, 166, 1)',
        // disabled: 'rgba(60, 72, 88, 0.38)',
      },
      textColor: {
        default: "#e8e6e3",
        selected: "#FFDB70",
      },
      background: {
        default: "#000",
        paper: "#17191A",
      },
      backgroundColor: {
        default: "#0E0F0F",
        primary: "#17191A",
        secondary: "#282829",
        highlighted: "#FFDB70",
        backgroundCustom: '#000',
        backgroundBorder: '#7a7164',
        paper: "#0F0F0F",
      },
    },
  
  });

  export default Theme;