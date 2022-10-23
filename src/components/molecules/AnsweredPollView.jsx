import { Container, Text, Title, Space } from "@mantine/core";
import { IconAdjustmentsHorizontal, IconAdjustmentsAlt } from "@tabler/icons";
import VoteResult from "../atoms/VoteResult";

const AnsweredPollView = ({
  poll,
  authUser,
  authUserVote,
  optionOneVotes,
  optionTwoVotes,
}) => {
  return (
    <div>
      <Container>
        <Title className="magic-text1" order={1}>
          The People Have Spoken {authUser}!
        </Title>

        <Space h="md" />
        <div>
          <VoteResult
            option={poll?.optionOne.text}
            optionVotes={optionOneVotes}
            altOptionVotes={optionTwoVotes}
            color="green"
            icon={<IconAdjustmentsHorizontal />}
          />
          <Space h="md" />
          <VoteResult
            option={poll?.optionTwo.text}
            optionVotes={optionTwoVotes}
            altOptionVotes={optionOneVotes}
            color="blue"
            icon={<IconAdjustmentsAlt />}
          />
          <Text color="dimmed">
            You voted for{" "}
            {authUserVote.vote === "optionOne"
              ? `option 1: ${poll?.optionOne.text}!`
              : `option 2: ${poll?.optionTwo.text}!`}
          </Text>
        </div>
      </Container>
    </div>
  );
};

export default AnsweredPollView;
