import { Box, Avatar } from "@mui/material";
import { defaultUser } from "../../../assets";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { User } from "../../../Api";
import "./updateAvatar.scss";

const user = new User();

export function UpdateAvatar() {
  const { photoURL } = user.getMe();
  const [avatarUrl, setAvatarUrl] = useState(photoURL || defaultUser);

  const onDrop = useCallback(async (acceptedFile) => {
    const file = acceptedFile[0];
    setAvatarUrl(URL.createObjectURL(file));
  });

  const { getInputProps, getRootProps } = useDropzone({ onDrop });

  return (
    <Box className="avatar" {...getRootProps()}>
      <input type="file" {...getInputProps()} />
      <Avatar className="avatar__img" src={avatarUrl} />
    </Box>
  );
}
