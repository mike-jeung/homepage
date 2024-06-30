import React, { FC, ReactElement, ReactNode, useRef } from "react";
import "./CW07.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface CW07Tile {
    args?:Record<string,unknown>;
    cmp?:FC<any>;
    play?: () => void;
    pause?: () => void;
    resume?: () => void;
}
interface CW07Content {
    args:Record<string,unknown>;
    cmp:FC<any>;
}
interface CW07Props {
    tile?: CW07Tile;
    content: CW07Content;
    disp?: string;
}
const CW07:FC<CW07Props> = ({tile,content,disp}) => {
    const isPlaying = useRef<boolean>(true),
        refs = {
            tile: useRef<HTMLDivElement | null>(null),
            content: useRef<HTMLDivElement | null>(null),
            child: useRef<CW07Tile | null>(null)
        }

    const handleClick = (e) => {
        console.log(e);
        e.preventDefault();
        if (refs.child && refs.child.current) {
            if (isPlaying.current) {
                isPlaying.current = false;
                refs.child.current.pause && refs.child.current.pause();
            } else {
                isPlaying.current = true;
                refs.child.current.resume && refs.child.current.resume();

            }
        }
    }
    useGSAP( () => {
        
    });
    return (
        <section className="cw07 cw07v0">
            <div className={`cw07w0 ${disp && disp}`}>
                <div className="cw07w1" onClick={handleClick} ref={refs.tile}>
                    {tile?.cmp && <tile.cmp {...tile.args} ref={refs.child} />}
                </div>
                <div className="cw07w2" ref={refs.content}>
                    <content.cmp {...content.args} />
                </div>
            </div>
        </section>
    );
};

export default CW07;