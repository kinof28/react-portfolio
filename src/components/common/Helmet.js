import React from "react";
import { Helmet as HelmetR } from "react-helmet";


const Helmet = () => {
    return (<>
        <HelmetR>
            <title>Abdelwahab Portfolio</title>
            <meta charSet="utf-8" />
            <meta name="description" content="this is Hamadouche Abdelwahab Personal Web site a full stack developer" />
        </HelmetR>
    </>);
}
export default Helmet;