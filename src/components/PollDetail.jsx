import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar } from "@mantine/core";
import AvatarProfile from "./AvatarProfile";
const PollDetail = () => {
  //grab the polls from the redux store using the useSelector hook
  const location = useLocation();
  const navigate = useNavigate();
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
