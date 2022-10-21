import { useSelector } from "react-redux";

export default function Dashboard() {
  const authUser = useSelector((state) => state.authUser.value);
  const polls = useSelector((state) => state.polls.value);
  const pollsArray = Object.keys(polls)
    .map((id) => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  console.log(pollsArray);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{authUser}</h2>
      <ul>
        {pollsArray.map((poll) => (
          <div key={poll.id}>
            <li>{poll.author}</li>
            <li>{poll.optionOne.text}</li>
            <li>{poll.optionTwo.text}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
