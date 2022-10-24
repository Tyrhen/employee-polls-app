import PollDetailCard from "../atoms/PollCard";
import { Text } from "@mantine/core";

const PollList = ({ polls, isAnswered }) => {
  const PollListContent = (
    <>
      {polls.map((poll) => (
        <PollDetailCard
          key={poll.id}
          id={poll.id}
          author={poll.author}
          isAnswered={isAnswered}
          preview={poll.optionOne.text}
          timestamp={poll.timestamp}
        />
      ))}
    </>
  );
  return (
    <>
      {polls.length ? (
        PollListContent
      ) : (
        <Text
          component="span"
          align="center"
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          size="xl"
          weight={700}
          style={{ fontFamily: "Greycliff CF, sans-serif" }}
        >
          There are no polls to display
        </Text>
      )}
    </>
  );
};

export default PollList;
