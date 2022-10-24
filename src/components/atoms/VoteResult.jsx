import { Alert, Text } from "@mantine/core";
import { IconUserCheck } from "@tabler/icons";

const VoteResult = ({
  option,
  optionVotes,
  altOptionVotes,
  color,
  icon,
  userVotedForOption,
}) => {
  return (
    <Alert icon={icon} title={option} color={color}>
      <Text>{optionVotes} votes for this option! </Text>
      <Text>
        Thats{" "}
        {(optionVotes / (optionVotes + altOptionVotes)).toPrecision(2) * 100}%
        of the votes!
      </Text>
      {userVotedForOption && (
        <Text>
          <IconUserCheck />
          You voted for this option!
        </Text>
      )}
    </Alert>
  );
};

export default VoteResult;
