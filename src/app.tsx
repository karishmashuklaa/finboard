import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/components/layout/RootLayout";
import Dashboard from "@/scenes/dashboard";
import { DataProvider } from "./state/context";
import { creditData } from "./data";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
    ]
  }
]);

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <div className="app">
      <DataProvider value={creditData}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <CssBaseline />
      </ThemeProvider>
      </DataProvider>
    </div>
  )
}

export default App;
