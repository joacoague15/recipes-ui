import  { Link } from 'react-router-dom';

import { Iredirection } from "../types/HomeTypes";

const RedirectionButton = (props: Iredirection) => {
    const { redirectTo, text } = props;

    return <Link to={redirectTo}><button>{text}</button></Link>
}

export default RedirectionButton;


// import { Link } from 'react-router-dom';
//
// const PricingButton = () => {
//     return <Link to="/pricing"><button>See price</button></Link>
// }
//
// export default PricingButton;