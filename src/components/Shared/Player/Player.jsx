import { Box, LinearProgress } from "@mui/material";
import { PauseCircleFilled } from "@mui/icons-material";
import { PlayCircleFilled } from "@mui/icons-material";
import "./player.scss";
export function Player() {
  const playing = false;

  return (
    <Box className="player">
      {playing ? (
        <PauseCircleFilled fontSize="large" />
      ) : (
        <PlayCircleFilled fontSize="large" />
      )}

      <LinearProgress
        className="player__linearProgress"
        variant="determinate"
        value={20}
      />
    </Box>
  );
}
