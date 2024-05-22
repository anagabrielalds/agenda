import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import WeekDaysHeader from "./Calendar/HeaderCalendar";
import {
  getMonthName,
  getDaysOfMonth,
  getFirstDayOfWeek,
  getWeeksInMonth,
} from "./Calendar/CalendarFunctions";
import ChangeYear from "./Calendar/ChangeYear";
import ChangeMonth from "./Calendar/ChangeMonth";

function Calendar() {
  const [mesAtual, setMesAtual] = useState(new Date().getMonth());
  const [anoAtual, setAnoAtual] = useState(new Date().getFullYear());

  // Função para renderizar a matriz com os dias do mês
  const renderMatriz = (month, year) => {
    const diasDoMes = getDaysOfMonth(month, year);
    const primeiroDiaSemana = getFirstDayOfWeek(month, year);
    const semanasNoMes = getWeeksInMonth(month, year);
    const matriz = [];

    let contadorDias = 1;
    for (let i = 0; i < semanasNoMes; i++) {
      const linha = [];
      for (let j = 0; j < 7; j++) {
        if (
          (i === 0 && j < primeiroDiaSemana) ||
          contadorDias > diasDoMes.length
        ) {
          // Preenche com espaço em branco antes do primeiro dia do mês e após o último dia do mês
          linha.push(<TableCell key={`${i}-${j}`} align="center" />);
        } else {
          // Preenche com o dia do mês
          linha.push(
            <TableCell key={`${i}-${j}`} align="center">
              {diasDoMes[contadorDias - 1]}
            </TableCell>
          );
          contadorDias++;
        }
      }
      matriz.push(<TableRow key={i}>{linha}</TableRow>);
    }
    return matriz;
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ margin: "auto", marginTop: 2, maxWidth: 600 }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={7}>
              <ChangeMonth
                anoAtual={anoAtual}
                setAnoAtual={setAnoAtual}
                mesAtual={mesAtual}
                setMesAtual={setMesAtual}
              />
              <Typography variant="h5" align="center">
                {getMonthName(mesAtual)} {anoAtual}
              </Typography>
              <ChangeYear anoAtual={anoAtual} setAnoAtual={setAnoAtual} />
            </TableCell>
          </TableRow>
          <TableRow>
            <WeekDaysHeader />
          </TableRow>
        </TableHead>
        <TableBody>{renderMatriz(mesAtual, anoAtual)}</TableBody>
      </Table>
    </TableContainer>
  );
}

export default Calendar;
