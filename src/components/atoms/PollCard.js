import { Button, Card, Group, Badge, Text, Space } from "@mantine/core";
import { Link } from "react-router-dom";
import AvatarProfile from "./AvatarProfile";

const PollCard = ({ id, author, isAnswered, preview, timestamp }) => {
  const badgeTest = isAnswered ? "Answered" : "Unanswered";
  const badgeColor = isAnswered ? "green" : "pink";
  const date = new Date(timestamp).toLocaleDateString();

  return (
    <>
      <Space h="md" />
      <Card shadow="sm" p="lg" radius="md" withBorder width={250}>
        <Card.Section>
          <AvatarProfile name={author} size="lg" alt="it's me" />
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

        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          component={Link}
          to={`/questions/${id}`}
        >
          Show
        </Button>
      </Card>
      <Space h="md" />
    </>
  );
};

export default PollCard;
