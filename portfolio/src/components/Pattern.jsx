import styled from "styled-components";

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="client-pattern" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -1;

  .client-pattern {
    width: 100%;
    height: 100%;
    background-color: #050505;

    background-image:
      radial-gradient(circle at top, rgba(0, 255, 255, 0.06), transparent 35%),
      radial-gradient(
        circle at bottom right,
        rgba(255, 0, 255, 0.04),
        transparent 30%
      );

    background-size:
      100% 100%,
      100% 100%;
  }
`;

export default Pattern;
