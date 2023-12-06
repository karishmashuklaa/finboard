import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Modal, Button, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import { useData } from "@/state/context";

const Navbar = () => {
  const data = useData();
  const { palette } = useTheme();
  const [selected, setSelected] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCompanyDetailsClick = () => {
    setSelected("company-details");
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelected(null);
    setIsModalOpen(false);
  };

  return (
    <FlexBetween
      mb="0.25rem"
      p="0.5rem 0rem"
      color={palette.grey[300]}
    >
      <FlexBetween
        gap="0.75rem"
      >
        <Link to={'/'} className="logo">
          <Typography
            variant="h4"
            fontSize="20px"
          >
            Hi, {data?.companyName}!
          </Typography>
        </Link>
      </FlexBetween>

      <FlexBetween
        gap="2rem"
      >
        <Box
          sx={{ "&:hover": { color: palette.primary[100] } }}
        >
          <Button
            onClick={handleCompanyDetailsClick}
            style={{
              color: selected === "company-details" ? "inherit" : palette.grey[700],
            }}
          >
            Company Details
          </Button>
        </Box>

        <Typography
          variant="body1"
          sx={{
            border: `1px solid ${palette.primary[500]}`,
            borderRadius: '5px',
            padding: '8px',
            color: palette.primary[500],
          }}
        >
          Acount Status: {data?.accountStatus}
        </Typography>
      </FlexBetween>

      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="company-details-modal"
        aria-describedby="company-details-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="body1">
            Name: {data?.companyName}
          </Typography>
          <Typography variant="body1">
            Address: {data?.address}
          </Typography>
          <Typography variant="body1">
            Registration Date: {data?.registrationDate}
          </Typography>
          <Typography variant="body1">
            Contact Number: {data?.contactNumber}
          </Typography>
          <Typography variant="body1">
            Email: {data?.contactEmail}
          </Typography>
          <Typography variant="body1">
            Website: {data?.companyWebsite}
          </Typography>
        </Box>
      </Modal>
    </FlexBetween>
  );
};

export default Navbar;