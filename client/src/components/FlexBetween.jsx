// const { default: styled } = require("@emotion/styled");
// const { Box } = require("@mui/material");
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
