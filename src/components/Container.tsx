import { Box } from "@mui/material";
import { styled } from "@mui/system";

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  height: '100%',
  margin: '1rem',
  marginTop: '-1.5rem',
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(1), 
    marginTop: `-${theme.spacing(1)}`, 
  },
}));

export default Container;