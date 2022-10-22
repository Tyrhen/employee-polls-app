import DetermineAuthUserVote from "./DetermineAuthUserVote";

export default function CalculatePollVotes(poll, authUser) {
  const optionOneVotes = Object.values(poll.optionOne.votes).reduce(
    (acc, vote) => {
      acc[vote] = acc[vote] ? acc[vote] + 1 : 1;
      acc.total = acc.total ? acc.total + 1 : 1;
      return acc;
    },
    {}
  );

  const optionTwoVotes = Object.values(poll.optionTwo.votes).reduce(
    (acc, vote) => {
      acc[vote] = acc[vote] ? acc[vote] + 1 : 1;
      acc.total = acc.total ? acc.total + 1 : 1;
      return acc;
    },
    {}
  );

  const authUserVote = DetermineAuthUserVote(
    authUser,
    optionOneVotes,
    optionTwoVotes
  );

  return { optionOneVotes, optionTwoVotes, authUserVote };
}
