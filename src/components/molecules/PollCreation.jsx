import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "@mantine/form";
import { Group, Button, TextInput, Box } from "@mantine/core";
import { createNewPoll } from "../../redux/reducers/pollReducer";
import { fetchUsers } from "../../redux/reducers/userReducer";

const PollCreation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser.value);
  const form = useForm({
    initialValues: {
      optionOne: "",
      optionTwo: "",
    },
  });

  const handleSubmit = (values) => {
    const payload = {
      optionOneText: values.optionOne,
      optionTwoText: values.optionTwo,
      author: authUser,
    };

    dispatch(createNewPoll(payload));
    dispatch(fetchUsers());

    navigate("/");
  };

  return (
    <Box>
      <h1>Would You Rather</h1>
      <h2>Create New Poll</h2>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          withAsterisk
          label="Option One"
          placeholder="Option 1"
          {...form.getInputProps("optionOne")}
        />
        <TextInput
          withAsterisk
          label="Option Two"
          placeholder="option 2"
          {...form.getInputProps("optionTwo")}
        />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};

export default PollCreation;
