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
    leftR2?:number;
    top:number;
    topR2?:number;
    height?:number;
    heightR2:number;
    width?:number;
    widthR2?:number;

}

const CW06:FC<CW06Props> = ({cards, cols = 3}) => {

    const [cardCount, setCardCount] = useState(cards.length),
        [cardPos, setCardPos] = useState<Map<number, CW06Pos>>(new Map()),
        [cardPosEnd, setCardPosEnd] = useState<Map<number, CW06Pos>>(new Map()),
        [featureCardIdx, setFeatureCardIdx] = useState<number | null>(null),
        [hasInitialPosition, setHasInitialPosition] = useState<boolean>(false),
        [isAnimating, setIsAnimating] = useState<boolean>(false);

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]),
        containerRef = useRef<HTMLDivElement | null>(null),
        containerTimelines = useRef<gsap.core.Timeline[]>([]),
        timelines = useRef<gsap.core.Timeline[]>([]),
        openTimelines = useRef<gsap.core.Timeline[]>([]),
        closeTimelines = useRef<gsap.core.Timeline[]>([]),
        topTimeline = useRef<gsap.core.Timeline>(gsap.timeline({paused:true})),
        timelineMap = useRef<Map<string,gsap.core.Timeline>>(new Map());
    const 
        { contextSafe } = useGSAP(),
        animDelay = 0.5,
        animDuration = 0.5,
        gapW = 15;
        
    let col = 0,
        containerW:number,
        unitH:number = 0,
        unitH2ndRow:number = 0,
        unitW:number = 0,
        unitW2ndRow:number = 0;

    useEffect( () => {
        const containerSize = () => {

        }
    },[]);

    useEffect( () => {

        const closedPos:Map<number,CW06Pos> = new Map,
            container = containerRef.current;
        setCardCount(cards.length);
        
        if (!hasInitialPosition) {
            // calculate and execute positioning
            if (container) {
                containerW = container.clientWidth;
                unitW = (containerW - (gapW * (cols - 1))) / cols;
                unitW2ndRow = cols > 1 ? (containerW - (gapW * (cols - 2))) / (cols - 1) : containerW;

                for (let i = 0; i < cards.length; i++) {
                    closedPos.set(i,{
                        left:(unitW + gapW) * col,
                        top:0,
                        topR2:0,
                        width:unitW,
                        widthR2:unitW2ndRow,
                        height:container.children[0].clientHeight,
                        heightR2:container.children[0].clientHeight * 0.6}
                    );
                    col = col === cols - 1 ? 0 : col + 1;
                }
                setCardPos( closedPos );
                setHasInitialPosition(true);
            }
        }

        if (container) {
            const containerStyles = window.getComputedStyle(container);
            const pbClosed = parseInt(containerStyles.paddingBottom) + "px";
            const pb = parseInt(pbClosed) * 2 + 15 + "px";
            

            containerTimelines.current.push(gsap.timeline({paused:true}));
            containerTimelines.current[0].to(container,{
                paddingBottom:pb,
                duration: animDuration,
                ease:"circ.inOut"
            })
            .eventCallback("onStart", () => {
                setIsAnimating(true);
            })
            .eventCallback("onComplete", () => {
                setIsAnimating(false);
            });
            containerTimelines.current.push(gsap.timeline({paused:true}));
            containerTimelines.current[1].to(container,{
                paddingBottom:pbClosed,
                duration: animDuration,
                delay: animDelay,
                ease:"circ.inOut"},
            )
            .eventCallback("onStart", () => {
                setTimeout(setFeatureCardIdx.bind(null,null),animDelay * 1000);
                setIsAnimating(true);
            })
            .eventCallback("onComplete", () => {
                setIsAnimating(false);
            });
        }

        for (let i = 0; i < cardCount; i++) {
            let cardRef = cardRefs.current[i];
            let cardPos = closedPos.get(i);

             if (cardRef !== null && cardPos) {
                // Set initial positions
                gsap.set(cardRef,{
                    left:cardPos.left,
                    top:0,
                    minWidth:unitW + "px",
                    maxWidth:unitW + "px"
                });
 
                openTimelines.current[i] = gsap.timeline({paused:true});

                if (closedPos && cardRefs) {

                    for (let j = 0; j < cardCount; j++) {
                        openTimelines.current[i].set(cardRefs.current[j],{
                            left:closedPos.get(j)?.left,
                            top:0,
                            minWidth:unitW + "px",
                            maxWidth:unitW + "px"
                        },0);
                        
                        if (j !== i) {
                            const unpickedCardRef = cardRefs.current[j];
                            const unpickedCardPos = closedPos.get(j);

                            if (unpickedCardRef && unpickedCardPos) {
                                // Move to 2nd row
                                openTimelines.current[i].to(unpickedCardRef,{
                                    left:unpickedCardPos.left,
                                    top: unpickedCardRef.offsetHeight + 15,
                                    minWidth:unitW + "px",
                                    maxWidth:unitW + "px",
                                    paddingBottom: "22%",
                                    minHeight:0,
                                    duration: animDuration,
                                    ease:"circ.inOut",
                                },0)
                            }
                        }
                    }
                    // expand picked card
                    openTimelines.current[i].to(cardRef,{
                        left:0,
                        top:cardPos.top,
                        minWidth:containerW + "px",
                        maxWidth:containerW + "px",
                        duration: animDuration,
                        ease:"circ.inOut"
                    },animDuration);
                }
            }
        }
        // cleanup
        return () => {
            containerTimelines.current[0].kill();
            containerTimelines.current[1].kill();
            for (let i = 0; i < openTimelines.current.length; i++) {
                openTimelines.current[i].kill();
            }
            openTimelines.current = [];
        };
    },[cardRefs]);

    const handleClick  = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>,index:number,action:string) => {
        e.preventDefault();
        if (isAnimating) return 0; // no interruptions
        console.log(openTimelines)
        if (action === "open") {
            if (featureCardIdx !== null) {
                openTimelines.current[featureCardIdx].reverse();
                containerTimelines.current[1].play(0);
                setTimeout(() => {
                    setFeatureCardIdx(index);
                    containerTimelines.current[0].play(0);
                    openTimelines.current[index].play(0);
                },1000)
            } else {
                setFeatureCardIdx(index);
                containerTimelines.current[0].play(0);
                openTimelines.current[index].play(0);
            }
        } else if (action === "close") {
            openTimelines.current[index].reverse();
            containerTimelines.current[1].play(0);
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