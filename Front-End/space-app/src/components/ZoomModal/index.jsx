import Image from "../Gallery/Image";
import styled from "styled-components";
import IconButton from "../IconButton";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const StyledDialog = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
`;

export default function ZoomModal({ picture, onClose }) {
  return (
    <>
      {picture && (
        <>
          <Overlay />
          <StyledDialog open={!!picture} onClose={onClose}>
            <Image picture={picture} expand={true} />
            <form method="dialog">
              <IconButton formMethod="dialog">
                <img src="/icons/fechar.png" alt="Close Icon" />
              </IconButton>
            </form>
          </StyledDialog>
        </>
      )}
    </>
  );
}
