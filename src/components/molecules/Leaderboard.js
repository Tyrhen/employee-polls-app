import { useSelector } from "react-redux";
import { Table, Title, Space } from "@mantine/core";
import AvatarProfile from "../atoms/AvatarProfile";

const Leaderboard = () => {
  const users = useSelector((state) => state.users.value);

  const usersWithTotalScore = Object.values(users).map((user) => {
    const totalScore = Object.keys(user.answers).length + user.questions.length;
    return {
      ...user,
      totalScore,
    };
  });

  const sortedUsers = usersWithTotalScore.sort(
    (a, b) => b.totalScore - a.totalScore
  );

  const rows = sortedUsers.map((user) => {
    return (
      <tr key={user.id}>
        <td>
          <AvatarProfile name={user.id} />
        </td>
        <td>{user.name}</td>
        <td>{user.questions.length}</td>
        <td>{Object.keys(user.answers).length}</td>
        <td>{user.totalScore}</td>
      </tr>
    );
  });

  return (
    <div>
      <Title order={1}>Leaderboard</Title>
      <Space h="lg" />
      <Table highlightOnHover verticalSpacing="md">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Questions Asked</th>
            <th>Questions Answered</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default Leaderboard;
