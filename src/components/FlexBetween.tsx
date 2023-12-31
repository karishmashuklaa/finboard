import { Box } from "@mui/material";
import { styled } from "@mui/system";

const FlexBetween = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  [theme.breakpoints.down("sm")]: {
    flexDirection: 'row',
    marginTop: '-0.2rem',
  },
}));

export default FlexBetween;