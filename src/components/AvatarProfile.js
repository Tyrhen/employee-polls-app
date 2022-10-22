import { Avatar } from "@mantine/core";
import { useSelector } from "react-redux";

const AvatarProfile = ({ name, ...props }) => {
  const users = useSelector((state) => state.users.value);
  const avatarUrl = users[name]?.avatarURL;

  return (
    <Avatar
      {...props}
      src={avatarUrl}
      alt={name}
      style={{ width: 50, height: 50 }}
    />
  );
};

export default AvatarProfile;
