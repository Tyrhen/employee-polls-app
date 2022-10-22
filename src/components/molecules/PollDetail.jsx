import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AvatarProfile from "../atoms/AvatarProfile";

const PollDetail = () => {
  const { id } = useParams();

  const polls = useSelector((state) => state.polls.value);
  const poll = polls[id];

  return (
    <div>
      <h2>Poll by {poll.author}</h2>
      <AvatarProfile name={poll.author} size="lg" alt="it's me" />
      <h3>Would You Rather?</h3>
      <p>{poll.optionOne.text}</p>
      <p>{poll.optionTwo.text}</p>
    </div>
  );
};

export default PollDetail;
