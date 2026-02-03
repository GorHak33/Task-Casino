import styled from "styled-components";
import mascotImage from "../assets/personImg.png";

const MascotPlaceholder = styled.div`
  width: 100%;
  max-width: 260px;
  height: 235px;
  border-radius: 32px;
  margin-inline: auto;

  background-image: url(${mascotImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Mascot = () => {
  return <MascotPlaceholder />;
};
