import {
  purpleDark,
  purple,
  mauveDark,
  mauve,
  green,
  red,
  yellow,
} from "@radix-ui/colors";

export const lightTheme = {
  colors: {
    // Cores primárias
    primary: purple.purple9,
    primaryHover: purple.purple10,

    // Cores secundárias
    secondary: mauve.mauve7,
    secondaryHover: mauve.mauve6,

    // Cores de fundo
    background: mauve.mauve1,
    backgroundHover: mauve.mauve2,

    // Cores de texto
    text: mauve.mauve12,
    textSecondary: mauve.mauve10,

    // Cores de status
    success: green.green7,
    error: red.red7,
    warning: yellow.yellow7,

    // Cores neutras
    neutral1: mauve.mauve3,
    neutral2: mauve.mauve4,
    neutral3: mauve.mauve5,

    logo: {
      filter: 'invert(1)',
    },
  },
};

export const darkTheme = {
  colors: {
    // Cores primárias
    primaryBackground: purpleDark.purple2,
    primaryAccent: purpleDark.purple3,
    primary: purpleDark.purple9,
    primaryHover: purpleDark.purple10,

    primaryImage: `rgba(241, 221, 255, 0.98)`,
    primaryBorder: `rgba(255, 255, 255, 0.1)`,

    // Cores secundárias
    secondary: mauveDark.mauve7,
    secondaryHover: mauveDark.mauve6,

    // Cores de fundo
    background: mauveDark.mauve1,
    backgroundHover: mauveDark.mauve2,

    // Cores de texto
    text: mauveDark.mauve12,
    textSecondary: mauveDark.mauve10,

    // Cores de status
    success: green.green3,
    error: red.red3,
    warning: yellow.yellow3,

    // Cores neutras
    neutral1: mauveDark.mauve3,
    neutral2: mauveDark.mauve4,
    neutral3: mauveDark.mavue5,

    logo: {
      filter: 'invert(0)',
    },
  },
};