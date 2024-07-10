import {
  enUS as coreEnUS,
  nbNO as coreNbNO,
  daDK as coreDaDX,
} from "@mui/material/locale";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
      yellow: {
        100: "#f7e913",
        200: "#f7df71",
        300: "#FFB700",
      },
      orange: {
        100: "#FFD27F",
        500: "#eba995",
        800: "#FFA500",
      },
      green: {
        100: "#a1cfb5",
        200: "#b0c789",
        500: "#228B22",
      },
      brown: {
        500: "#8B4513",
      },
      gray: {
        500: "#2F4F4F",
      },
      blue: {
        100: "#ADD8E6",
        900: "#00008B",
      },
      primary: {
        100: "#de9a348f",
        200: "#080b12",
        300: "#0c101b",
        400: "#de9a348f", // manually changed
        500: "#de9a348f",
        600: "#1F2A40",
        700: "#727681",
        800: "#a1a4ab",
        900: "#d0d1d5",
      },
    }
    : {
      yellow: {
        100: "#f7e913",
        200: "#f7df71",
        300: "#FFB700",
      },
      orange: {
        100: "#FFD27F",
        500: "#eba995",
        800: "#FFA500",
      },
      green: {
        100: "#a1cfb5",
        200: "#b0c789",
        500: "#228B22",
      },
      brown: {
        500: "#8B4513",
      },
      gray: {
        500: "#2F4F4F",
      },
      blue: {
        100: "#ADD8E6",
        900: "#00008B",
      },
      primary: {
        100: "#de9a348f",
        200: "#080b12",
        300: "#0c101b",
        400: "#de9a348f", // manually changed
        500: "#de9a348f",
        600: "#1F2A40",
        700: "#727681",
        800: "#a1a4ab",
        900: "#d0d1d5",
      },
    }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    overrides: {
      palette: {
        primary: {
          main: colors.gold[500],
        },
        gold: {
          main: colors.gold[500],
        },
      },
      MuiMobileStepperDot: {
        root: {
          color: "#000000", // or 'rgba(0, 0, 0, 1)'
          "&$active": {
            color: "#000000",
          },
          "&$completed": {
            color: "#000000",
          },
        },
      },
    },
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.gold[500],
            },
            secondary: {
              main: colors.mainTheme[500],
            },
            info: {
              main: colors.goldAccent[500],
            },
            error: {
              main: colors.redAccent[400],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
            gold: {
              default: colors.gold[500],
            }
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.gold[500],
            },
            secondary: {
              main: colors.mainTheme[500],
            },
            info: {
              main: colors.goldAccent[500],
            },
            error: {
              main: colors.redAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
            gold: {
              default: colors.gold[500],
            }
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ["Oleo Script", "sans-serif"].join(","),
        fontSize: 40,
        background:
          "linear-gradient(to left, transparent, green, green, transparent)",
      },
      h2: {
        fontFamily: ["Oleo Script", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Oleo Script", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Oleo Script", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Oleo Script", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Oleo Script", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const useMode = () => {
  const [mode, setMode] = useState("light");
  const { _, data: user } = useFetchActiveUser();

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  // Assigns localization for MUI components when language setting from backend changes
  const locale = useMemo(
    () => ({
      dataGrid:
        user?.Company?.LanguageId === "no"
          ? nbNO
          : user?.Company?.LanguageId === "pt"
          ? ptBR
          : enUS,
      datePickers:
        user?.Company?.LanguageId === "no"
          ? pickersNbNO
          : user?.Company?.LanguageId === "pt"
          ? pickersPtBR
          : pickersEnUS,
      core:
        user?.Company?.LanguageId === "no"
          ? coreNbNO
          : user?.Company?.LanguageId === "pt"
          ? corePtBR
          : coreEnUS,
    }),
    [user?.Company?.LanguageId]
  );

  const theme = useMemo(
    () =>
      createTheme(
        themeSettings(mode),
        locale.dataGrid,
        locale.datePickers,
        locale.core
      ),
    [mode, locale]
  );
  return [theme, colorMode];
};
