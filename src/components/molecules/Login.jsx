import { Button, Select, TextInput, Stack, Grid } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  IconAdjustmentsHorizontal,
  IconAdjustmentsAlt,
  IconMasksTheater,
} from "@tabler/icons";
import { useGetUsersQuery } from "../../redux/reducers/apiReducer";
import { loginUser } from "../../redux/reducers/authUserReducer";
import "../../css/App.css";

export default function Login() {
  const { data: users, isLoading } = useGetUsersQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectValue, setSelectValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);

  if (isLoading) return <div>Loading...</div>;

  const options = Object.keys(users).map((user) => ({
    label: users[user].name,
    value: users[user].id,
  }));

  const handlePasswordValidation = () => {
    if (passwordValue === users[selectValue].password) {
      dispatch(loginUser(selectValue));
      navigate("/");
    } else {
      alert("Wrong password");
    }
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  return (
    <>
      <Grid justify="center">
        <Grid.Col span={2}>
          <IconAdjustmentsHorizontal className="App-logo" size={60} />
        </Grid.Col>
        <Grid.Col span={2}>
          <IconMasksTheater className="App-logo" size={60} />
        </Grid.Col>
        <Grid.Col span={2}>
          <IconAdjustmentsAlt className="App-logo" size={60} />
        </Grid.Col>
      </Grid>

      <Stack
        spacing="xl"
        justify="space-between"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          height: 300,
        })}
      >
        <Select
          label="Username"
          value={selectValue}
          onChange={setSelectValue}
          data={options}
        />
        <TextInput
          placeholder="Your name"
          disabled={selectValue === null}
          onChange={handlePasswordChange}
          label="Password"
          withAsterisk
        />
        <Button
          variant="gradient"
          onClick={handlePasswordValidation}
          padding="xl"
          width={150}
          gradient={{ from: "indigo", to: "cyan" }}
        >
          Login
        </Button>
      </Stack>
    </>
  );
}