import { useSelector } from "react-redux";
import { Tabs, Title, Space } from "@mantine/core";
import { IconCircleDashed, IconCircleCheck } from "@tabler/icons";
import PollList from "./PollList";

export default function Dashboard() {
  const authUser = useSelector((state) => state.authUser.value);
  const polls = useSelector((state) => state.polls.value);

  const pollsArray = Object.keys(polls)
    .map((id) => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  //seperate polls into answered and unanswered
  const answeredPolls = pollsArray.filter(
    (poll) =>
      poll.optionOne.votes.includes(authUser) ||
      poll.optionTwo.votes.includes(authUser)
  );

  //seperate polls into answered and unanswered
  const unansweredPolls = pollsArray.filter(
    (poll) =>
      !poll.optionOne.votes.includes(authUser) &&
      !poll.optionTwo.votes.includes(authUser)
  );

  return (
    <div>
      <Title order={1}>Welcome, {authUser}!</Title>
      <Space h="lg" />
      <Tabs defaultValue="unanswered">
        <Tabs.List>
          <Tabs.Tab value="unanswered" icon={<IconCircleDashed size={14} />}>
            Unanswered
          </Tabs.Tab>
          <Tabs.Tab value="answered" icon={<IconCircleCheck size={14} />}>
            Answered
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="answered" pt="xs">
          <PollList polls={answeredPolls} isAnswered={true} />
        </Tabs.Panel>
        <Tabs.Panel value="unanswered" pt="xs">
          <PollList polls={unansweredPolls} isAnswered={false} />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
