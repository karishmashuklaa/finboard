import Navbar from "@/scenes/navbar/index";
import { Typography, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const RootLayout = () => {
  const { palette } = useTheme();

  return (
    <>
      <header>
        <Box
          width='100%'
          height='100%'
          p={{ xs: '1rem', md: '1rem 2rem 4rem 2rem' }}
        >
          <Navbar />
        </Box>
      </header>
      <main
        style={{
          padding: '0 1rem',
          minHeight: 'calc(100vh - 10rem)',
        }}
      >
        <Outlet />
      </main>
      <footer
        style={{
          padding: '1rem',
          backgroundColor: palette.grey[200],
          marginTop: '2rem',
        }}
      >
        <Typography
          variant='body2'
          align='center'
          color={palette.grey[800]}
          component='p'
        >
          &copy; {new Date().getFullYear()} - All rights reserved
        </Typography>
      </footer>
    </>
  );
};

export default RootLayout;