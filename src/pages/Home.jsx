import { Box, Container } from "@mui/material";
import Calendar from "../components/Calendar";
import MenuApp from "../components/MenuApp";

export default function Home() {
  return (
    <>
      <MenuApp width={1} />
      <Calendar />
    </>
  );
}
