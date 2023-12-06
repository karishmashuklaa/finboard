export const tokens = {
  grey: {
    // shades between black and dark gray
    100: "#1C1C1C",
    200: "#262626",
    300: "#303030",
    400: "#3A3A3A",
    500: "#444444",
    600: "#575757",
    700: "#6A6A6A",
    800: "#7D7D7D",
    900: "#909090",
  },
  primary: {
    // dark blue
    100: "#12263F",
    200: "#1E3D5B",
    300: "#295377",
    400: "#346A93",
    500: "#3F81AF",
    600: "#4F92C3",
    700: "#60A3D6",
    800: "#70B5EA",
    900: "#81C6FD"
  },
  secondary: {
    // orange
    100: "#fefdcc",
    200: "#fefa99",
    300: "#fdf866",
    400: "#fdf533",
    500: "#FF8811",
    600: "#cac200",
    700: "#979200",
    800: "#656100",
    900: "#323100"
  },
  tertiary: {
    // bright green
    100: "#E3FFEA",
    200: "#C1FFC6",
    300: "#9EFFA2",
    400: "#7BFF7E",
    500: "#58FF5A",
    600: "#40D040",
    700: "#2EA12E",
    800: "#1C711C",
    900: "#0B410B"
  },
  background: {
    light: "#fcfcff",
    main: "#0726e0",
  },
};

// mui theme settings
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200],
    },
    h4: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300],
    },
    h5: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500],
    },
    h6: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
      fontSize: 10,
      color: tokens.grey[700],
    },
  },
};