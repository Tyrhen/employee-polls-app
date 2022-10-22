import PollDetailCard from "./PollCard";

const PollList = ({ polls, isAnswered }) => {
  console.log(polls);
  return (
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
};

export default PollList;