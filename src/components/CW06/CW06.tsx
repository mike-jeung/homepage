import React, { Component, FC, ReactNode, useEffect, useRef, useState } from "react";
import "./CW06.scss";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
interface CW06Props {
    cards: ReactNode[];
    cols?: number;
}
interface CW06Pos {
    left:number;
    top:number;
}
const CW06:FC<CW06Props> = ({cards, cols = 3}) => {

    const [cardCount, setCardCount] = useState(cards.length),
        [cardPos, setCardPos] = useState<Map<number, CW06Pos>>(new Map()),
        [hasInitialPosition, setHasInitialPosition] = useState<boolean>(false);

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]),
        containerRef = useRef<HTMLDivElement | null>(null),
        containerTl = useRef<gsap.core.Timeline>(gsap.timeline({paused:true})),
        timelines = useRef<gsap.core.Timeline[]>([]),
        topTimeline = useRef<gsap.core.Timeline>(gsap.timeline({paused:true}));

    const 
        { contextSafe } = useGSAP(),
        gapW = 15;
        
        
        

    let unitW:number = 0;
    let containerW:number;
    let col = 0;

    useEffect( () => {
        const containerSize = () => {

        }
    },[]);

    useEffect( () => {
        console.log("useeffect")
        const pos:Map<number,CW06Pos> = new Map,
            container = containerRef.current;
        setCardCount(cards.length);
        
        if (!hasInitialPosition) {
            // execute positioning
            if (container) {
                containerW = container.clientWidth;
                unitW = (containerW - (gapW * (cols - 1))) / cols;
                
                for (let i = 0; i < cards.length; i++) {
                    pos.set(i,{left:(unitW + gapW) * col,top:0});
                    col = col === cols - 1 ? 0 : col + 1;
                }
                setCardPos( pos );
                setHasInitialPosition(true);
            }
        }

        if (container) {
            console.log("container exists")
            const containerStyles = window.getComputedStyle(container);
            const pb = parseInt(containerStyles.paddingBottom) * 2 + 15 + "px";
            console.log("container styles",container)
            
            containerTl.current?.addLabel("containerStart",0);
            containerTl.current?.addLabel("containerUnpick");
            containerTl.current?.add(gsap.to(container,{paddingBottom:pb,duration:0.5,ease:"circ.inOut"}));
        }
        for (let i = 0; i < cardCount; i++) {
            const cardRef = cardRefs.current[i];
            const cardPos = pos.get(i);

            if (cardRef !== null && cardPos) {
                timelines.current[i] = gsap.timeline({paused:true}).addLabel("start" + i,0);
                
                timelines.current[i].addPause();
                
                timelines.current[i].addLabel("expand" + i);
                timelines.current[i].add(gsap.set(cardRef,{left:cardPos.left,minWidth:unitW + "px",maxWidth:unitW + "px"}),"expand" + i);
                timelines.current[i].add(gsap.to(cardRef,{left:0,minWidth:containerW + "px",maxWidth:containerW + "px",delay:0.5,duration:0.5,ease:"circ.inOut"}),"expand" + i);
                
                timelines.current[i].addPause();

                timelines.current[i].addLabel("unpick" + i, "+=0.5");
                timelines.current[i].add(gsap.to(cardRef,{left:cardPos.left,minWidth:unitW + "px",maxWidth:unitW + "px",duration:0}),"unpick" + i);
                timelines.current[i].add(gsap.to(cardRef,{top:cardRef.offsetHeight + 15,duration:0.5,ease:"circ.inOut"}),"unpick" + i);
                
                timelines.current[i].addPause();

                //cardRef.style.left = cardPos.left + "px";
            }
        }
        // cleanup
        return () => {
            containerTl.current?.kill();
            for (let i = 0; i < timelines.current.length; i++) {
                timelines.current[i].kill();
            }
            timelines.current = [];
        };
    },[cardRefs]);

    const cardClick = (target: React.MouseEvent<HTMLDivElement, MouseEvent>, index:number) => {

        console.log(containerTl); // Logs the timeline
        console.log("pos",cardPos); // Logs the timeline
        containerTl.current?.play("containerUnpick");
        // containerTl.add(gsap.to(containerRef.current,{paddingBottom:"50%",opacity:0,duration:1}))
        for (let i = 0; i < cardCount; i++) {
            if (i !== index) {
                console.log("playing unpick" + i)
                timelines.current[i].play("unpick" + i);
            } else {
                console.log("playing expand" + i)
                timelines.current[i].play("expand" + i);
            }
            
        }
    };
    const handleClick = () => {
        console.log("click")
    }
    return (
        <section className="cw06 cw06v0">
            <div className="cw06w0">
                <div className={`cw06w1 cw06col${cols}`} ref={containerRef}>
                    { cards.length > 0 && cards.map( (card,index) => {
                        return <div key={index} className="cw06w2" ref={(el) => cardRefs.current[index] = el} onClick={(el) => cardClick(el,index)} ><div className="cw06w3">{card}</div></div>
                    }) }
                </div>
            </div>
        </section>
    )
}

export default CW06;