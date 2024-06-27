import React, { FC, lazy, ReactNode, Suspense } from "react";
import "./CB01.scss";
import { 
    CB01v0,
    CB01v1,
    CB01v2,
    CB01v4,
} from "./CB01var";
interface CB01Props {
    v:number;
    title: string;
    caption?: string;
    description?: string;
    moreTxt?: string;
    moreLink?: string;
    moreClick?: (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
const CB01:FC<CB01Props> = (props) => {
    const v = props.v;

    const variation = "cb01v" + v;

    const VariationComponent = () => {
        switch (v) {
            case 0:
                return <CB01v0 {...props} />; 
            case 1:
                return <CB01v1 {...props} />;
            case 2:
                return <CB01v2 {...props} />;
            case 3:
                return null;
            case 4:
                return <CB01v4 {...props} />;
            default:
                return null; 
        }
      };

    return (
        <section className={`cb01 ${variation}`}>
            <VariationComponent />
        </section>
    );
}

export default CB01;
export { CB01Props }