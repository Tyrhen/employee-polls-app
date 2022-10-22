import { Button, Card, Avatar, Group, Badge, Text } from "@mantine/core";
import { useSelector } from "react-redux";

const PollDetailCard = ({ author, isAnswered, preview, timestamp }) => {
  const users = useSelector((state) => state.users.value);
  const avatar = users[author]?.avatarURL;
  const badgeTest = isAnswered ? "Answered" : "Unanswered";
  const badgeColor = isAnswered ? "green" : "pink";
  const date = new Date(timestamp).toLocaleDateString();

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder width={250}>
      <Card.Section>
        <Avatar radius="xl" size="lg" src={avatar} alt="it's me" />
      </Card.Section>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{author}</Text>
        <Text weight={500}>{date}</Text>
        <Badge color={badgeColor} variant="light">
          {badgeTest}
        </Badge>
      </Group>
      <Text size="sm" color="dimmed">
        {preview}
        <br />
        <b> OR 🧐🍿...</b>
      </Text>
      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Show
      </Button>
    </Card>
  );
};

export default PollDetailCard;
