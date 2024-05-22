import { Grid, Typography, IconButton} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function ChangeYear({anoAtual, setAnoAtual}) {
  const anoAnterior = () => {
    setAnoAtual(anoAtual - 1);
  };

  const proximoAno = () => {
    setAnoAtual(anoAtual + 1);
  };
  return (
    <>
      <Grid>
        <IconButton aria-label="Ano Anterior" onClick={anoAnterior}>
          <KeyboardDoubleArrowLeftIcon />
        </IconButton>
        <Typography variant="span" align="center">
          Ano
        </Typography>
        <IconButton aria-label="Próximo ano" onClick={proximoAno}>
          <KeyboardDoubleArrowRightIcon />
        </IconButton>
      </Grid>
    </>
  );
}
