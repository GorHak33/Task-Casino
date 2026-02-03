import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import styled from "styled-components";
import type { GeoCode } from "../types";

const GeoSelectContainer = styled.div`
  min-width: 180px;
  width: auto;
  max-width: 300px;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 100%;
  }
`;

interface LanguageSelectorProps {
  geo: GeoCode;
  label: string;
  onChange: (event: SelectChangeEvent<GeoCode>) => void;
}

export const LanguageSelector = ({
  geo,
  label,
  onChange,
}: LanguageSelectorProps) => {
  return (
    <GeoSelectContainer>
      <FormControl fullWidth size="small" variant="outlined">
        <InputLabel sx={{ color: "rgba(255,255,255,0.7)" }}>
          {label}
        </InputLabel>
        <Select<GeoCode>
          value={geo}
          label={label}
          onChange={onChange}
          sx={{
            color: "#ffffff",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255,255,255,0.4)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255,255,255,0.7)",
            },
            ".MuiSelect-icon": {
              color: "#ffffff",
            },
            backgroundColor: "rgba(255,255,255,0.04)",
          }}
        >
          <MenuItem value="default">Default</MenuItem>
          <MenuItem value="tr">Turkey</MenuItem>
          <MenuItem value="en">International</MenuItem>
        </Select>
      </FormControl>
    </GeoSelectContainer>
  );
};
