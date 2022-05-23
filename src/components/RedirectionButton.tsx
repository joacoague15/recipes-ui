import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import { Iredirection } from "../types";

const RedirectionButton = (props: Iredirection) => {
    const { redirectTo, text } = props;
    let navigate = useNavigate();

    const redirect = () => {
        navigate(redirectTo);
    }

    return <Button onClick={redirect} variant="contained">{text}</Button>
}

export default RedirectionButton;