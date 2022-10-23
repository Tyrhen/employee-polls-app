import { Alert, Text } from "@mantine/core";

const VoteResult = ({ option, optionVotes, altOptionVotes, color, icon }) => {
  return (
    <Alert icon={icon} title={option} color={color}>
      <Text>{optionVotes} votes for this option! </Text>
      <Text>
        Thats{" "}
        {(optionVotes / (optionVotes + altOptionVotes)).toPrecision(2) * 100}%
        of the votes!
      </Text>
    </Alert>
  );
};

export default VoteResult;
