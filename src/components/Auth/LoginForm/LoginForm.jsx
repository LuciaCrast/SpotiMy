import { Button } from "@mui/material";

export function LoginForm({openRegister, goBack}){
    return (
        <div>
            <h1>Login Form</h1>
            <Button color="secondary" onClick={openRegister}> Registro </Button>
            <Button color="secondary" onClick={goBack}> Atrás </Button>
        </div>
    )
}