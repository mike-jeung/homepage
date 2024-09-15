import React, { FC } from 'react';
import "./Error404.scss";
import CB01 from "../../components/CB01/CB01";
const Error404: FC = function() {

    return <CB01 v={2} title="Error 404" caption="Page not found." />;
}
export default Error404;