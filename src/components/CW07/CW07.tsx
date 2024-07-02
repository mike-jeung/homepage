import React, { FC, ReactElement, ReactNode, useCallback, useEffect, useRef } from "react";
import "./CW07.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TimelineCallback } from "../../helpers";
interface CW07TileArgs {
    repeat?:number;
    
}
interface CW07Tile {
    args?:Record<string,any>;
    cmp?:FC<any>;
    play?: () => void;
    pause?: () => void;
    resume?: () => void;
    goto?: () => void;
}
interface CW07Content {
    args:Record<string,any>;
    cmp:FC<any>;
}
interface CW07Props {
    tile?: CW07Tile;
    content: CW07Content;
    disp?: string;
}
const CW07:FC<CW07Props> = ({tile,content,disp}) => {

    // this timeline controls cw07 animations of content and tile
    const timeline = useRef<gsap.core.Timeline | null>(gsap.timeline({paused:true}));

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
    const childCompletion = useCallback( () => {
        console.log(" &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& childCompletion");
        // debugger;
        shrinkTiles();
    }, []);

    // send function(s) to child component timelines
    if (tile && tile.args) {
        tile.args["timelineCallbacks"] = [] as TimelineCallback[];
        tile.args["timelineCallbacks"].push({
            callbackType:"onComplete",
            callback: childCompletion
        } as TimelineCallback);
        tile.args["timelineCallbacks"].push({
            position:"iconState",
            callback: childCompletion
        });
    }

    const shrinkTiles = () => {
        if (timeline.current) {
            timeline.current.play();
        }
    };
    useGSAP( () => {
        
    });
    useEffect( () => {
        
        // timeline.current = gsap.timeline({paused:true});
        timeline.current?.addPause(0);
        timeline.current?.fromTo(refs.tile.current,{scale:1},{scale:0.5,duration:0.5,ease:"power1.out"},">")
            .to(refs.tile.current,{y:"-35px",duration:0.25})
            .to(refs.content.current,{opacity:1,top:"32%",duration:0.25},"<")
    },[]);
    const mouseEvent = (e) => {
        console.log(e);
        const mode = e.type;


        if (mode === "mouseenter") {
            console.log("enter")
        } else if (mode === "mouseleave") {
            console.log("leave")
        }

    };

    // console.log("tile args",tile?.args);
    return (
        <section className="cw07 cw07v0">
            <div className={`cw07w0 ${disp && disp}`} onMouseEnter={mouseEvent} onMouseLeave={mouseEvent}>
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