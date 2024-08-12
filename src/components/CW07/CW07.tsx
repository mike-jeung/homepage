import React, { FC, useContext, useEffect, useRef } from "react";
import "./CW07.scss";
import gsap from "gsap";
import { SI01TimelineControls as CW07Tile } from "../SI01/SI01"; 
import { StatusContext } from "../../App";
import { SETTINGS } from "../../constants";
import { TimelineCallback } from "../../helpers/applyTimelineCallbacks";
import getBreakpoint from "../../helpers/getBreakpoint";
// import useContextRef from "../../hooks/useContextRef";

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
    const status = useContext(StatusContext);
    const bp = status.bp;
    let mm = gsap.matchMedia();


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
    
    
    
    // continue playing after icon state
    const childCheckpoint = () => {
        if (mouseStatus.current === "mouseenter" && getBreakpoint() !== "mobile") {
            if (refs.child && refs.child.current) {
                refs.child.current.play && refs.child.current.play("afterIconState");
            }
        } else {
            shrinkTiles();
        }
    };
    const childCompletion = () => {

        if (mouseStatus.current === "mouseenter" && getBreakpoint() !== "mobile") {
            if (refs.child && refs.child.current) {
                refs.child.current.play && refs.child.current.play("loopStart");
            }
        }
        
    };
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
        if (timeline.current && getBreakpoint() !== "mobile") {
            timeline.current.play("start");
            initialRun.current = false;
        }
    };
    const animStatus = (label:string) => {
        const bp = getBreakpoint();
        if (timeline.current) {
            if (timeline.current.reversed()) {
                if (label === "start") {
                    if (mouseStatus.current === "mouseenter" && bp !== "mobile") {
                        if (refs.child && refs.child.current) {
                            refs.child.current.play && refs.child.current.play("iconState");
                        }
                    }
                }
            } else {
                if (label === "end") {
                    if (mouseStatus.current === "mouseenter" && bp !== "mobile") {
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
        const s = tile?.args && tile.args.shrink ? tile.args.shrink : 0.5;

        mm.add(
            `(min-width: ${SETTINGS.breakpoints.tablet + 1}px)`, () => {

                timeline.current?.addLabel("start",0)
                    .addPause("start")
                    .call(animStatus,["start"])
                    .fromTo(refs.tile.current,{scale:1},{scale:s,duration:0.12,ease:"power1.out"},">")
                    .fromTo(refs.tile.current,{y:0},{y:"-35px",duration:0.25});
                
                timeline.current?.fromTo(refs.content.current,{opacity:0,top:"50%"},{opacity:1,top:"32%",duration:0.25},"<");
                timeline.current?.addLabel("end",">");

                timeline.current?.call(animStatus,["end"])
                    .addPause("end");

                
            }
        );
        mm.add(
            `(max-width: ${SETTINGS.breakpoints.tablet}px)`, () => {

                if (initialRun.current === true) {
                    initialRun.current = false;
                }
            }
        );
        
        
        return (() => {
            if (timeline.current) {
                timeline.current.kill();
            } 
        })
    },[]);
    useEffect( () => {
        // if animation is interrupted by a breakpoint change, short circuit to icon configuration        
        if (status.bp === "desktop" && status.bpChanged === true) {
            if (refs.child && refs.child.current) {
                refs.child.current.pause && refs.child.current.pause("iconState");
            }
            timeline.current?.play("start");
        }
        
    },[status.bp]);
    const mouseEvent = (e) => {
        mouseStatus.current = e.type;
        if (!initialRun.current) {
            if (mouseStatus.current === "mouseenter" && bp !== "mobile") {
                timeline.current?.reverse("end");
            } else if (mouseStatus.current === "mouseleave" && bp !== "mobile") {
                timeline.current?.play("start")
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