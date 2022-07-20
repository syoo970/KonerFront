import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./ImageUploader.style";
import SpinnerButton from "./SpinnerButton";
import useHover from "../../hooks/useHover";

const ImageUploader = React.forwardRef(
  (
    { position, width, height, border, buttonWidth, buttonHeight, ...props },
    ref
  ) => {
    const [isHovering, buttonRef] = useHover();
    const [image, setImage] = useState(null);

    return (
      <S.Wrapper
        position={position}
        width={width}
        height={height}
        border={border}
        ref={buttonRef}
      >
        {image && <S.PreviewImage src={image} alt="thumbnail" />}
        {isHovering && (
          <SpinnerButton
            width={buttonWidth}
            height={buttonHeight}
            setImage={setImage}
            {...props}
            ref={ref}
          />
        )}
      </S.Wrapper>
    );
  }
);

ImageUploader.propTypes = {
  position: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
  buttonWidth: PropTypes.string,
  buttonHeight: PropTypes.string,
};

ImageUploader.defaultProps = {
  position: "center",
  width: "100%",
  height: "100%",
  border: "1px dashed #ccc",
  buttonWidth: "50px",
  buttonHeight: "50px",
};

export default ImageUploader;
