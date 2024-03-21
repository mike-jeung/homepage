import React from 'react';
import './CT01.scss';

export default function CT01(props) {
    const r = props.row === undefined ? "" : props.row;
    const c = props.col === undefined ? "" : props.col;
    const styles = props.styles;
    return (
        <svg viewBox="0 0 552 638" className={`ct01 ct01v0 ${r} ${c}`} style={styles}>
            <g className="hex">
                <polyline className="ot6" points="275.68 -.35 -.58 159.15 275.68 318.65" />
                <line className="ot5" x1="-.58" y1="478.15" x2="275.68" y2="318.65" />
                <line className="ot4" x1="275.68" y1="637.65" x2="275.68" y2="318.65" />
                <line className="ot3" x1="551.95" y1="478.15" x2="275.68" y2="318.65" />
                <polyline className="ot2" points="551.95 478.15 551.95 159.15 275.68 318.65" />
                <polyline className="ot1" points="551.95 159.15 275.68 -.35 275.68 318.65" />
            </g>
            <g className="tri-up">
                <line className="tri-up3-1" x1="-.58" y1="478.15" x2="137.55" y2="238.9" />
                <line className="tri-up3-2" x1="275.68" y1="478.15" x2="-.58" y2="478.15" />
                <line className="tri-up2-1" x1="551.95" y1="478.15" x2="275.68" y2="478.15" />
                <line className="tri-up2-2" x1="413.82" y1="238.9" x2="551.95" y2="478.15" />
                <line className="tri-up1-1" x1="275.68" y1="-.35" x2="413.82" y2="238.9" />
                <line className="tri-up1-2" x1="137.55" y1="238.9" x2="275.68" y2="-.35" />
            </g>
            <g className="tri-down">
                <line className="tri-down3-2" x1="275.68" y1="637.65" x2="138" y2="398.5" />
                <line className="tri-down3-1" x1="413.82" y1="398.4" x2="275.68" y2="637.65" />
                <line className="tri-down2-2" x1="551.95" y1="159.15" x2="413.82" y2="398.4" />
                <line className="tri-down2-1" x1="275.68" y1="159.15" x2="551.95" y2="159.15" />
                <line className="tri-down1-2" x1="-.58" y1="159.15" x2="275.68" y2="159.15" />
                <line className="tri-down1-1" x1="137.55" y1="398.4" x2="-.58" y2="159.15" />
            </g>
        </svg>
        
    );
}