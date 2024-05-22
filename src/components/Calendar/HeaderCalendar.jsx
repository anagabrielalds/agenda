import { TableCell } from "@mui/material";

export default function WeekDaysHeader() {
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  return (
    <>
      {weekDays.map((day, index) => (
        <TableCell key={index} align="center">
          {day}
        </TableCell>
      ))}
    </>
  );
}
