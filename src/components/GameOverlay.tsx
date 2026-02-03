import styled from "styled-components";

const GameOverlayContainer = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(3px);
  z-index: 1200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const GameFrameWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.9);

  @media (max-width: 768px) {
    border-radius: 8px;
  }
`;

const GameCloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
  width: 32px;
  height: 32px;
  border-radius: 999px;
  border: none;
  background: rgba(0, 0, 0, 0.65);
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition:
    background 0.15s ease,
    transform 0.15s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.85);
    transform: translateY(-1px);
  }
`;

const GameFrame = styled.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

interface GameOverlayProps {
  gameUrl: string;
  onClose: () => void;
}

export const GameOverlay = ({ gameUrl, onClose }: GameOverlayProps) => {
  return (
    <GameOverlayContainer>
      <GameFrameWrapper>
        <GameCloseButton
          type="button"
          onClick={onClose}
          aria-label="Close game"
        >
          ×
        </GameCloseButton>
        <GameFrame src={gameUrl} title="Casino game" allowFullScreen />
      </GameFrameWrapper>
    </GameOverlayContainer>
  );
};
