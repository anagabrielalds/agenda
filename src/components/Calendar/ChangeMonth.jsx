import { Grid, Typography, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function ChangeMonth({mesAtual, setMesAtual, anoAtual, setAnoAtual}) {
  const mesAnterior = () => {
    if (mesAtual === 0) {
      setMesAtual(11);
      setAnoAtual(anoAtual - 1);
    } else {
      setMesAtual(mesAtual - 1);
    }
  };

  const proximoMes = () => {
    if (mesAtual === 11) {
      setMesAtual(0);
      setAnoAtual(anoAtual + 1);
    } else {
      setMesAtual(mesAtual + 1);
    }
  };

  return (
    <>
      <Grid item>
        <IconButton aria-label="Mês Anterior" onClick={mesAnterior}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <Typography variant="span" align="center">
          Mês
        </Typography>
        <IconButton aria-label="Próximo mês" onClick={proximoMes}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </Grid>
    </>
  );
}
