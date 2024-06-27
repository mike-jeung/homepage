import React, { Component, FC, ReactNode, useContext, useEffect, useRef, useState } from "react";
import "./CW06.scss";
import gsap from 'gsap';
import { StatusContext } from "../../App";

interface CW06Props {
    cards: CardData[];
    cols?: number;
}
interface CardData {   
    textArgs:{};
    textCpt:FC<any>;
    graphicScale?:string;
    graphicArgs?:{};
    graphicCpt?:FC<any>;
    graphicExtra?:string;
    demoArgs?:{};
    demoCpt?:FC<any>;
}
interface CW06CardPosition {
    left:number;
    leftR2?:number;
    top:number;
    topR2?:number;
    height?:number;
    heightR2:number;
    width?:number;
    widthR2?:number;
    contentH?:number;
    wrapTop?:number;
}

const CW06:FC<CW06Props> = ({cards, cols = 3}) => {

    const [cardCount, setCardCount] = useState(cards.length),
        [cardPos, setCardPos] = useState<Map<number, CW06CardPosition>>(new Map()),
        [featureCardIdx, setFeatureCardIdx] = useState<number | null>(null),
        [hasInitialPosition, setHasInitialPosition] = useState<boolean>(false),
        [isAnimating, setIsAnimating] = useState<boolean>(false);

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]), 
        containerRef = useRef<HTMLDivElement | null>(null), // cw06w1
        //containerTimelines = useRef<gsap.core.Timeline[]>([]),
        containerTimelinesAr = useRef<gsap.core.Timeline[][]>([]),
        openTimelines = useRef<gsap.core.Timeline[]>([]),
        status = useContext(StatusContext);
        
    const 
        animDelay = 0.25,                       // delay to synch first and second parts of anmation
        animDuration = 0.25,                    // duration of animation
        cardShrinkFactor = 0.22,                // amount card height shrinks when it moves to second row
        defaultScale = 70,
        gapW = 15,                              // pixel gap between each card
        heightFactor = 0.38,                    // multiply this by container width for default container height
        innerTopFactor = 0.45;                    
        
    let cardContent:HTMLDivElement | null | undefined,
        cardContentGraphic:Element | null,
        cardContentWrap:Element | null,         // wrapping container of the card content for getting style info
        cardContentPadding = 0,                 // padding of the card
        cardContentHt = 0,                      // height of the card content when expanded
        cardPosition:CW06CardPosition | undefined,
        cardRef:HTMLDivElement | null,
        col = 0,                                // calculated number of columns in second row 
        containerH:number,                      // default container height
        containerW:number,                      // default container width
        containerExpandedH:number,              // container height when a card is selected
        containerStyles:CSSStyleDeclaration,
        deltaHt = 0,                            // difference between selected and unselected heights of card
        pb:string,                              // container animates to this padding value
        pbClosed:string,                        // container bottom padding closed state
        unitH = 0,                              // default height of a card
        unitH2ndRow = 0,                        // height of unselected card
        unitW = 0,                              // default width of card
        unitW2ndRow = 0,                        // width of unselected card
        unselectedCardTop,
        w4Ht = 0,                               // height of content component that was passed in (closed)
        wContentHt = 0;                         // height of content component that was passed in (open)

        console.log("stat",status);

    useEffect( () => {

        const position:Map<number,CW06CardPosition> = new Map,
            container = containerRef.current;
        setCardCount(cards.length);
        
        if (!hasInitialPosition) {
            // calculate sizing/positioning
            if (container) {
                containerW = container.clientWidth;
                containerH = containerW * heightFactor;
                unitW = (containerW - (gapW * (cols - 1))) / cols;
                unitW2ndRow = cols > 1 ? (containerW - (gapW * (cols - 2))) / (cols - 1) : containerW;
                unitH = containerH;
                unitH2ndRow = containerW * cardShrinkFactor;
                deltaHt = unitH - unitH2ndRow;

                for (let i = 0; i < cards.length; i++) {
                    cardContent = cardRefs.current[i]?.querySelector(".cw06content");
                    position.set(i,{
                        left:(unitW + gapW) * col,
                        top:0,
                        topR2:0,
                        width:unitW,
                        widthR2:unitW2ndRow,
                        height:unitH,
                        heightR2:unitH2ndRow,
                        contentH: cardContent ? cardContent.clientHeight : 0,
                        wrapTop:innerTopFactor * 100,
                    });
                    col = col === cols - 1 ? 0 : col + 1;
                }
                console.log(position)
                setCardPos( position );
                setHasInitialPosition(true);
            }
        }

        if (container) {
            containerStyles = window.getComputedStyle(container);
            pbClosed = parseInt(containerStyles.paddingBottom) + "px";
        }
        
            

        for (let i = 0; i < cardCount; i++) {
            cardRef = cardRefs.current[i];
            cardPosition = position.get(i);

            if (cardRef !== null && cardPos) {
                // customize the bottom padding to accommodate the content, cw06w4 + w06content
                cardContentWrap = cardRef.querySelector(".cw06w3");
                cardContentGraphic = cardRef.querySelector(".cw06img");
                cardContentPadding = 0;
                cardContentHt = 0;
                if (cardContentWrap !== null) {

                    cardContentPadding = parseInt(window.getComputedStyle(cardContentWrap).getPropertyValue("padding-top")) + parseInt(window.getComputedStyle(cardContentWrap).getPropertyValue("padding-bottom"));

                    cardContentHt = (cardRef.querySelector(".cw06w4")?.clientHeight || 0) + (cardRef.querySelector(".cw06content")?.clientHeight || 0);

                }
                // calculate bottom padding of container
                pb = cardContentHt + cardContentPadding > unitH ? cardContentHt + cardContentPadding + unitH2ndRow + gapW + "px" : unitH + unitH2ndRow + gapW + "px";
      
                unselectedCardTop = cardContentHt + cardContentPadding > unitH ? cardContentHt + cardContentPadding : unitH;
            
                // container expansion
                containerTimelinesAr.current[i] = [];
                containerTimelinesAr.current[i][0] = gsap.timeline({paused:true});
                containerTimelinesAr.current[i][0].to(container,{
                    paddingBottom:pb,
                    duration: animDuration,
                    ease:"none"
                })
                .eventCallback("onStart", () => {
                    setIsAnimating(true);
                })
                .eventCallback("onComplete", () => {
                    setIsAnimating(false);
                });

                // container contraction
                
                containerTimelinesAr.current[i][1] = gsap.timeline({paused:true});
                containerTimelinesAr.current[i][1].to(container,{
                    paddingBottom:pbClosed,
                    duration: animDuration,
                    delay: animDelay,
                    ease:"none"},
                )
                .eventCallback("onStart", () => {
                    setTimeout(setFeatureCardIdx.bind(null,null),animDelay * 1000);
                    setIsAnimating(true);
                })
                .eventCallback("onComplete", () => {
                    setIsAnimating(false);
                });

                // Set initial positions
                gsap.set(cardRef,{
                    left:cardPosition?.left,
                    top:0,
                    height: unitH,
                    minWidth:unitW + "px",
                    maxWidth:unitW + "px"
                });
                gsap.set(cardContentWrap,{top: cardPosition?.wrapTop + "%"});
 
                openTimelines.current[i] = gsap.timeline({paused:true});


                
                if (position && cardRefs) {

                    // unpicked card animation

                    for (let j = 0; j < cardCount; j++) {
                        openTimelines.current[i].set(cardRefs.current[j],{
                            left:position.get(j)?.left,
                            top:0,
                            height: unitH,
                            minWidth:unitW + "px",
                            maxWidth:unitW + "px"
                        },0);
                        
                        if (j !== i) {
                            const unpickedCardRef = cardRefs.current[j];
                            const unpickedCardPos = position.get(j);
                            const unpickedCardInnerWrap = unpickedCardRef?.querySelector(".cw06w3");
                            const unpickedCardImg = unpickedCardRef?.querySelector(".cw06img");
                            if (unpickedCardRef && unpickedCardPos) {
                                // Move to 2nd row
                                openTimelines.current[i].to(unpickedCardRef,{
                                    left:unpickedCardPos.left,
                                    // top: unpickedCardRef.offsetHeight + 15 + deltaHt,
                                    top: unselectedCardTop + gapW,
                                    minWidth:unitW + "px",
                                    maxWidth:unitW + "px",
                                    paddingBottom: "22%",
                                    height: unitH2ndRow,
                                    minHeight:0,
                                    duration: animDuration,
                                    ease:"none",
                                },0);
                                unpickedCardInnerWrap && openTimelines.current[i].to(unpickedCardInnerWrap,{top:0,duration:0.25},0);
                                unpickedCardImg && openTimelines.current[i].to(unpickedCardImg,{opacity:0,duration:0.05},0);
                            }
                        }
                    }
                    // expand picked card
                    openTimelines.current[i].to(cardRef,{
                        left:0,
                        top:cardPosition?.top,
                        minWidth:containerW + "px",
                        maxWidth:containerW + "px",
                        duration: animDuration,
                        ease:"circ.inOut"
                    },animDuration)
                    .to(cardRef,{
                        //height: unitH + deltaHt,
                        height: cardContentHt + cardContentPadding,
                        duration: animDuration/2,
                        delay:animDuration/1.9,
                        ease:"none"
                    },0)
                    .to(cardContentWrap,{
                        top: 0,
                        duration: 0.25,
                    },0)
                    .to(cardContentGraphic,{
                        opacity: 0,
                        duration: 0.15,
                    },0);
                }
            }
        }
        // cleanup
        return () => {
            for (let i = 0; i < containerTimelinesAr.current.length; i++) {
                containerTimelinesAr.current[i][0].kill();
                containerTimelinesAr.current[i][1].kill();
                containerTimelinesAr.current[i] = [];
            }
            for (let i = 0; i < openTimelines.current.length; i++) {
                openTimelines.current[i].kill();
            }
            openTimelines.current = [];
        };
    },[cardRefs]);

    const handleClick  = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>,index:number,action:string) => {
        e.preventDefault();
        console.log("index",index)
        if (isAnimating) return 0; // no interruptions
        if (action === "open") {
            if (featureCardIdx !== null) {
                // close current card
                openTimelines.current[featureCardIdx].reverse();
                containerTimelinesAr.current[featureCardIdx][1].play(0);
                // open new card
                setTimeout(() => {
                    setFeatureCardIdx(index);
                    containerTimelinesAr.current[index][0].play(0);
                    openTimelines.current[index].play(0);
                },animDuration * 2000)
            } else {
                setFeatureCardIdx(index);
                containerTimelinesAr.current[index][0].play(0);
                openTimelines.current[index].play(0);
            }
        } else if (action === "close") {
            openTimelines.current[index].reverse();
            containerTimelinesAr.current[index][1].play(0);
        }
    };
    return (
        <section className="cw06 cw06v0">
            <div className="cw06w0">
                <div className={`cw06w1 cw06col${cols}`} ref={containerRef}>
                    { cards.length > 0 && cards.map( (card,index) => {
                        console.log(card.textArgs)
                        return (
                            <div key={index} className={"cw06w2" + (featureCardIdx == index ? " cw06active" : "")} ref={(el) => cardRefs.current[index] = el}>
                                {card.graphicCpt && <div className={`cw06img ${card.graphicScale ? "scale" + card.graphicScale : "scale" + defaultScale} ${card.graphicExtra && card.graphicExtra}`}><card.graphicCpt {...card.graphicArgs} /></div>}
                                <div className="cw06w3">
                                    <div className="cw06w4">{card.textCpt && <card.textCpt {...card.textArgs} />}</div>
                                    <div className="cw06w5">
                                        <a href="#" className="cw06open" onClick={(e) => handleClick(e,index,"open")}>More </a>
                                        <a href="#" className="cw06close" onClick={(e) => handleClick(e,index,"close")}></a>
                                    </div>
                                    {card.demoCpt && <div className="cw06content"><card.demoCpt /></div>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default CW06;
export { CardData };