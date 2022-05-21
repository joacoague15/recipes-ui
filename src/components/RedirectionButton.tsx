import { useNavigate } from "react-router-dom";

import { Iredirection } from "../types";

const RedirectionButton = (props: Iredirection) => {
    const { redirectTo, text } = props;
    let navigate = useNavigate();

    const redirect = () => {
        navigate(redirectTo);
    }

    return <button onClick={redirect}>{text}</button>
}

export default RedirectionButton;