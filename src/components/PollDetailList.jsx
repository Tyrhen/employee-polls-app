import PollDetailCard from "./PollDetailCard";

const PollDetailList = ({ polls, isAnswered }) => {
  console.log(polls);
  return (
    <>
      {polls.map((poll) => (
        <PollDetailCard
          key={poll.id}
          author={poll.author}
          isAnswered={isAnswered}
          preview={poll.optionOne.text}
          timestamp={poll.timestamp}
        />
      ))}
    </>
  );
};

export default PollDetailList;
