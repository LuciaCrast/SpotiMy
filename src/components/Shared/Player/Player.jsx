import { Box, LinearProgress } from "@mui/material";
import { PlayCircleFilled, PauseCircleFilled } from "@material-ui/icons";
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
