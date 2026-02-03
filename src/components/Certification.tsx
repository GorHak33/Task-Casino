import { Typography } from "@mui/material";
import styled from "styled-components";
import licenseIcon from "../assets/licenseLogo.png";

const CertificationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: auto;
`;

const LicenseIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

interface CertificationProps {
  text: string;
}

export const Certification = ({ text }: CertificationProps) => {
  return (
    <CertificationContainer>
      <LicenseIcon src={licenseIcon} alt="Certified" />
      <Typography
        variant="body2"
        sx={{
          color: "rgba(255, 255, 255, 0.8)",
          fontSize: "0.875rem",
        }}
      >
        {text}
      </Typography>
    </CertificationContainer>
  );
};
