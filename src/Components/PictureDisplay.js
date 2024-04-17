import React, { Fragment } from "react";
import { Box, Button, Typography } from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

export default function PictureDisplay({ picture, handleReset }) {
  return (
    <Fragment>
      {picture ? (
        <div className=" flex flex-col gap-4  justify-center items-center">
          <span className="text-xl font-[Fredoka] font-semibold italic text-[#ff006e]">
            Download this moment and send it to your friends!
          </span>
          <div className="w-2/3 bg-yellow-300 p-1.5 rounded-lg elevation-2">
            <img
              src={picture.dataUri}
              alt="Captured"
              className=" rounded-lg  border-4 border-[#e71d36]"
            />
          </div>
          <a
            className="w-1/3 h-14 bg-[#e71d36] text-yellow-300 flex justify-center items-center rounded-lg elevation-10 hover:border-2 hover:border-yellow-300 "
            href={picture.dataUri}
            download="captured_moment.png"
          >
            <DownloadForOfflineIcon sx={{ width: "50px", height: "50px" }} />
          </a>
        </div>
      ) : (
        <Typography
          sx={{
            mt: 2,
            mb: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "semibold",
            fontFamily: "Fredoka",
            fontSize: "large",
          }}
        >
          No picture captured yet.
        </Typography>
      )}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button
          className="text-white bg-orange-300"
          sx={{
            color: "white",
            background: "green",
            ":hover": { background: "lightblue" },
          }}
          onClick={handleReset}
        >
          Start Over
        </Button>
      </Box>
    </Fragment>
  );
}
