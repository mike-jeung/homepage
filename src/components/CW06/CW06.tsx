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
    height?:number;
    width?:number;
}

const CW06:FC<CW06Props> = ({cards, cols = 3}) => {

    const [cardCount, setCardCount] = useState(cards.length),
        [cardPos, setCardPos] = useState<Map<number, CW06Pos>>(new Map()),
        [cardPosEnd, setCardPosEnd] = useState<Map<number, CW06Pos>>(new Map()),
        [featureCardIdx, setFeatureCardIdx] = useState<number | null>(null),
        [hasInitialPosition, setHasInitialPosition] = useState<boolean>(false);

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]),
        containerRef = useRef<HTMLDivElement | null>(null),
        containerTl = useRef<gsap.core.Timeline>(gsap.timeline({paused:true})),
        timelines = useRef<gsap.core.Timeline[]>([]),
        topTimeline = useRef<gsap.core.Timeline>(gsap.timeline({paused:true}));

    const 
        { contextSafe } = useGSAP(),
        gapW = 15;
        
        
        

    let col = 0,
        containerW:number,
        unitW:number = 0,
        unitW2ndRow:number = 0;

    useEffect( () => {
        const containerSize = () => {

        }
    },[]);

    useEffect( () => {
        console.log("useeffect")
        const closedPos:Map<number,CW06Pos> = new Map,
            container = containerRef.current;
        setCardCount(cards.length);
        
        if (!hasInitialPosition) {
            // calculate and execute positioning
            if (container) {
                containerW = container.clientWidth;
                unitW = (containerW - (gapW * (cols - 1))) / cols;
                unitW2ndRow = (containerW - (gapW * (cols - 1))) / col;

                for (let i = 0; i < cards.length; i++) {
                    // TO-DO: calculate top position of cards.
                    closedPos.set(i,{left:(unitW + gapW) * col,top:0});
                    col = col === cols - 1 ? 0 : col + 1;
                }
                setCardPos( closedPos );
                setHasInitialPosition(true);
            }
        }

        if (container) {
            const containerStyles = window.getComputedStyle(container);
            const pb = parseInt(containerStyles.paddingBottom) * 2 + 15 + "px";
            const pbClosed = parseInt(containerStyles.paddingBottom) + "px";

            containerTl.current?.addLabel("containerExpand",0);
            containerTl.current?.add(
                gsap.to(container,{
                    paddingBottom:pb,
                    duration:0.5,
                    ease:"circ.inOut"
                })
            );
            
            containerTl.current?.addPause();
            containerTl.current?.addLabel("containerClose", "+=2");
            containerTl.current?.add(gsap.to(container,{paddingBottom:pbClosed,duration:0.5,delay:0.5,ease:"circ.inOut"}),"containerClose");
        }

        for (let i = 0; i < cardCount; i++) {
            const cardRef = cardRefs.current[i];
            const cardPos = closedPos.get(i);

            if (cardRef !== null && cardPos) {
                timelines.current[i] = gsap.timeline({paused:true});
                timelines.current[i].addLabel("pick" + i);
                
                // Expand picked card after unpicked cards move

                timelines.current[i].fromTo(cardRef,{
                    left:cardPos.left,
                    minWidth:unitW + "px",
                    maxWidth:unitW + "px"
                },{
                    left:0,
                    minWidth:containerW + "px",
                    maxWidth:containerW + "px",
                    delay:0.5,
                    duration:0.5,
                    ease:"circ.inOut"
                },"pick" + i);

                timelines.current[i].addPause();
                timelines.current[i].addLabel("unpick" + i, "+=2");

                // Set initial unpicked positions
                
                timelines.current[i].to(cardRef,{
                    left:cardPos.left,
                    minWidth:unitW + "px",
                    maxWidth:unitW + "px",
                    duration:0
                },"unpick" + i);
                
                // Move unpicked card down to second "row"
                
                timelines.current[i].to(cardRef,{
                    top:cardRef.offsetHeight + 15,
                    duration:0.5,
                    ease:"circ.inOut",
                },"unpick" + i);
                
                
                // Shrink expanded card
                timelines.current[i].addPause();
                timelines.current[i].addLabel("pickClose" + i, "+=2");

                timelines.current[i].to(cardRef,{
                    left:"0px",
                    minWidth:containerW + "px",
                    maxWidth:containerW + "px",
                    top:"0px",
                    duration:0
                },"pickClose" + i);

                timelines.current[i].to(cardRef,{
                    left:cardPos.left,
                    minWidth:unitW + "px",
                    maxWidth:unitW + "px",
                    top:"0px",
                    duration:0.5,
                    ease:"circ.inOut"
                },"pickClose" + i);

                timelines.current[i].addPause();
                timelines.current[i].addLabel("unpickClose" + i, "+=2");
                
                timelines.current[i].to(cardRef,{
                    top:cardRef.offsetHeight + 15,
                    duration:0
                },"unpickClose" + i);

                timelines.current[i].to(cardRef,{
                    top:"0px",
                    delay:0.5,
                    duration:0.5,
                    ease:"circ.inOut"
                },"unpickClose" + i);

                timelines.current[i].addPause();
                

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

    const handleClick  = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>,index:number,action:string) => {
        e.preventDefault();
        if (action === "open") {
            setFeatureCardIdx(index);
            containerTl.current?.play("containerExpand");
            for (let i = 0; i < cardCount; i++) {
                if (i === index) {
                    timelines.current[i].play("pick" + i);
                } else {
                    timelines.current[i].play("unpick" + i);
                }
            }
        } else if (action === "close") {
            setTimeout(setFeatureCardIdx.bind(null,null),500);
            for (let i = 0; i < cardCount; i++) {
                if (i === index) {
                    timelines.current[i].play("pickClose" + i);
                } else {
                    timelines.current[i].play("unpickClose" + i);
                }
            }
            containerTl.current?.play("containerClose");
        }
        
    };
    return (
        <section className="cw06 cw06v0">
            <div className="cw06w0">
                <div className={`cw06w1 cw06col${cols}`} ref={containerRef}>
                    { cards.length > 0 && cards.map( (card,index) => {
                        return <div key={index} className={"cw06w2" + (featureCardIdx == index ? " cw06active" : "")} ref={(el) => cardRefs.current[index] = el}><div className="cw06w3">{card}<a href="#" className="cw06open" onClick={(e) => handleClick(e,index,"open")}>More </a><a href="#" className="cw06close" onClick={(e) => handleClick(e,index,"close")}></a></div></div>
                    }) }
                </div>
            </div>
        </section>
    )
}

export default CW06;