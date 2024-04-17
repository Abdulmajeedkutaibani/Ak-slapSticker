import React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import Box from "@mui/material/Box";

export function StepperComponent({ activeStep, steps }) {
  return (
    <Box sx={{ width: "100%", mb: 6 }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{
          "& .MuiStepIcon-root": {
            fontSize: "30px", // Adjust this value to make the icon bigger
          },
          "& .MuiStepLabel-labelContainer span": {
            fontFamily: "Fredoka",
            fontSize: "medium",
          },
          "& .MuiStepLabel-root .Mui-completed": {
            color: "#040f0f",
          },
          "& .MuiStepLabel-root .Mui-active": {
            color: "#ff006e",
          },
          "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {},

          "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
            fill: "#fdfffc",
          },
          ".MuiStepConnector-root span": {
            borderColor: "transparent",
          },

          ".MuiStepConnector-root span::before": {
            display: "flex",
            justifyContent: "center",
            content: '""',
          },
        }}
      >
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
