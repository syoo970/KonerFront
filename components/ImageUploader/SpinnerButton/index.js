import React, { useState } from "react";
import PropTypes from "prop-types";
import MuiFab from "../../../mui_components/MuiFab";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import DoneIcon from "@mui/icons-material/Done";

import * as S from "./SpinnerButton.style";

const SpinnerButton = React.forwardRef(
  ({ width, height, setImage, ...props }, ref) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const onChange = (e) => {
      if (!loading) {
        setLoading(true);
        setSuccess(false);
        const { files } = e.target;
        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result);
          props.onChange(e);
          setLoading(false);
          setSuccess(true);
        };
        reader.readAsDataURL(files[0]);
      }
    };

    return (
      <S.Wrapper width={width} height={height}>
        <MuiFab color={success ? "success" : "primary"} component="label">
          {success ? <DoneIcon /> : <AddPhotoAlternateIcon />}
          <S.UploadInput
            accept="image/*"
            type="file"
            onChange={onChange}
            ref={ref}
          />
        </MuiFab>
        {loading && <S.ButtonSpinner />}
      </S.Wrapper>
    );
  }
);

SpinnerButton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  setImage: PropTypes.func,
};

SpinnerButton.defaultProps = {
  width: "100%",
  height: "100%",
  setImage: () => {},
};

export default SpinnerButton;
