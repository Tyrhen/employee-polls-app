import { Button, Title, Center, Stack, Space } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconPlanet, IconUfo } from "@tabler/icons";
import "../../css/App.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Center>
        <Stack>
          <Space h="md" />
          <IconUfo className="Alien-logo" size={24} />
          <Title
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
            style={{ fontFamily: "Greycliff CF, sans-serif" }}
            order={2}
          >
            UHOH! Looks like this page doesn't exist yet!{" "}
          </Title>
          <Space h="xl" />
          <Button
            className="magic-text1"
            variant="outline"
            rightIcon={<IconPlanet />}
            onClick={() => navigate("/")}
          >
            Head Back To Reality
          </Button>
        </Stack>
      </Center>
    </>
  );
};

export default NotFound;
