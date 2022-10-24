import { Container, Title, Space } from "@mantine/core";
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
            userVotedForOption={authUserVote.vote === "optionOne"}
          />
          <Space h="md" />
          <VoteResult
            option={poll?.optionTwo.text}
            optionVotes={optionTwoVotes}
            altOptionVotes={optionOneVotes}
            color="blue"
            icon={<IconAdjustmentsAlt />}
            userVotedForOption={authUserVote.vote === "optionTwo"}
          />
        </div>
      </Container>
    </div>
  );
};

export default AnsweredPollView;
