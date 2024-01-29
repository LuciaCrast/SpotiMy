import { Box, Avatar } from "@mui/material";
import { defaultUser } from "../../../assets";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { User, Storage } from "../../../Api";
import "./updateAvatar.scss";

const user = new User();
const storageController = new Storage();

export function UpdateAvatar() {
  const { photoURL, uid } = user.getMe();
  const [avatarUrl, setAvatarUrl] = useState(photoURL || defaultUser);

  const onDrop = useCallback(async (acceptedFile) => {
    const file = acceptedFile[0];
    setAvatarUrl(URL.createObjectURL(file));
    const response = await storageController.uploadFile(file, "avatar", uid);
    console.log(response);
  });

  const { getInputProps, getRootProps } = useDropzone({ onDrop });

  return (
    <Box className="avatar" {...getRootProps()}>
      <input type="file" {...getInputProps()} />
      <Avatar className="avatar__img" src={avatarUrl} />
    </Box>
  );
}
