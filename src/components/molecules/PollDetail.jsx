import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AvatarProfile from "../atoms/AvatarProfile";
import { Button } from "@mantine/core";
import { Loader } from "@mantine/core";
import CalculatePollVotes from "../../utils/CalculatePollVotes";
import { recordPollAnswer } from "../../redux/reducers/pollReducer";
import { updateQuestionsAnswered } from "../../redux/reducers/userReducer";

const PollDetail = () => {
  const { id } = useParams();
  const polls = useSelector((state) => state.polls.value);
  const authUser = useSelector((state) => state.authUser.value);
  //use dispatch to dispatch an action to the store
  const dispatch = useDispatch();

  const handlePollVote = (event) => {
    //grab the id of the button clicked
    const answer = event.currentTarget.id;
    const payload = { authedUser: authUser, qid: id, answer };

    dispatch(recordPollAnswer(payload));
    dispatch(updateQuestionsAnswered(payload));
  };

  if (Object.keys(polls).length === 0) return <Loader />;
  const poll = polls[id] ? polls[id] : undefined;
  if (poll === undefined) return <>404</>;

  const { optionOneVotes, optionTwoVotes, authUserVote } = CalculatePollVotes(
    poll,
    authUser
  );

  return (
    <div>
      <h2>Poll by {poll?.author}</h2>
      <AvatarProfile name={poll?.author} size="lg" alt="it's me" />
      <h3>Would You Rather?</h3>
      <Button id="optionOne" onClick={handlePollVote}>
        {poll?.optionOne.text}
      </Button>
      <Button id="optionTwo" onClick={handlePollVote}>
        {poll?.optionTwo.text}
      </Button>
      <p>optionOneVotesCount: {optionOneVotes.total ?? 0}</p>
      <p>optionTwoVotesCount: {optionTwoVotes.total ?? 0}</p>
      {authUserVote.vote && <p>You voted for {authUserVote.vote}</p>}
    </div>
  );
};

export default PollDetail;
