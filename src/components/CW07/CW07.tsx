import React, { FC, ReactElement, ReactNode, useCallback, useEffect, useRef } from "react";
import "./CW07.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TimelineCallback } from "../../helpers";
import { SI01TimelineControls as CW07Tile } from "../SI01/SI01"; 
interface CW07TileArgs {
    repeat?:number;
    
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

    const childIsPlaying = useRef<boolean>(true),
        initialRun = useRef<boolean>(true),
        isPlaying = useRef<boolean>(true),
        mouseStatus = useRef<string | null>(null),
        refs = {
            tile: useRef<HTMLDivElement | null>(null),
            content: useRef<HTMLDivElement | null>(null),
            child: useRef<CW07Tile | null>(null)
        };
    
    // const handleClick = (e) => {
    //     console.log(e);
    //     e.preventDefault();
    //     if (refs.child && refs.child.current) {
    //         if (isPlaying.current) {
    //             isPlaying.current = false;
    //             refs.child.current.pause && refs.child.current.pause();
    //         } else {
    //             isPlaying.current = true;
    //             refs.child.current.resume && refs.child.current.resume();
    //         }
    //     }
    // }
    const childCheckpoint = useCallback( () => {
        if (mouseStatus.current === "mouseenter") {
            if (refs.child && refs.child.current) {
                refs.child.current.play && refs.child.current.play("afterIconState");
            }
        } else {
            shrinkTiles();
        }
    },[])
    const childCompletion = useCallback( () => {
        if (mouseStatus.current === "mouseenter") {
            if (refs.child && refs.child.current) {
                refs.child.current.play && refs.child.current.play("loopStart");
            }
        } 
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
            callback: childCheckpoint
        } as TimelineCallback);
    }

    const shrinkTiles = () => {
        if (timeline.current) {
            timeline.current.play();
            initialRun.current = false;
        }
    };
    const animStatus = (label:string) => {
        if (timeline.current) {
            if (timeline.current.reversed()) {
                if (label === "start") {
                    //console.log("backwards end",label)
                    if (mouseStatus.current === "mouseenter") {
                        if (refs.child && refs.child.current) {
                            refs.child.current.play && refs.child.current.play("iconState");
                        }
                    }
                }
            } else {
                if (label === "end") {
                    //console.log("forwards end",label)
                    if (mouseStatus.current === "mouseenter") {
                        if (refs.child && refs.child.current) {
                            refs.child.current.play && refs.child.current.play();
                        }
                    }
                }
            }
        }
    };
    useEffect( () => {
        
        // timeline.current = gsap.timeline({paused:true});
        timeline.current?.addLabel("start")
            .addPause("start")
            .call(animStatus,["start"])
            .fromTo(refs.tile.current,{scale:1},{scale:0.5,duration:0.12,ease:"power1.out"},">")
            .to(refs.tile.current,{y:"-35px",duration:0.25})
            .to(refs.content.current,{opacity:1,top:"32%",duration:0.25},"<")
            .call(animStatus,["end"])
            .addPause("end");
        return (() => {
            if (timeline.current) {
                timeline.current.kill();
            } 
        })
    },[]);
    const mouseEvent = (e) => {
        //console.log(e);
        mouseStatus.current = e.type;

        if (!initialRun.current) {
            if (mouseStatus.current === "mouseenter") {
                timeline.current?.reverse();
            } else if (mouseStatus.current === "mouseleave") {
                timeline.current?.play()
                if (refs.child && refs.child.current) {
                    refs.child.current.pause && refs.child.current.pause("iconState");
                }
            }
        }
    };

    return (
        <section className="cw07 cw07v0">
            <div className={`cw07w0 ${disp && disp}`} onMouseEnter={mouseEvent} onMouseLeave={mouseEvent}>
                <div className="cw07w1" ref={refs.tile}>
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