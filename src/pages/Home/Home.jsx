import { Button } from "@mui/material";
import { Auth } from "../../Api";
import "./home.scss";

const auth = new Auth();
export function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <Button onClick={auth.logout}>Cerrar Sesión</Button>
    </div>
  );
}
