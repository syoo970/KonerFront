import { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import MuiFab from "../mui_components/MuiFab";
import Spinner from "../mui_components/Spinner";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";

export default {
  title: "mui/MuiFab",
  component: MuiFab,
};

export const Default = () => {
  return (
    <MuiFab>
      <AddIcon />
    </MuiFab>
  );
};

const FabWrapper = styled.div`
  display: inline-flex;
  position: relative;
`;

const FabSpinner = styled(Spinner)`
  position: absolute;
  top: -3px;
  left: -3px;
  z-index: 1;
`;

export const WithSpinner = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef();

  const handleClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 10000);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <FabWrapper>
      <MuiFab onClick={handleClick} color={success ? "secondary" : "primary"}>
        {success ? <CheckIcon /> : <AddIcon />}
      </MuiFab>
      {loading && <FabSpinner color="secondary" size="115%" />}
    </FabWrapper>
  );
};
