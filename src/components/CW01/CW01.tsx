import React, { FC, useEffect, useRef, useState } from 'react';
import CT01 from '../CT01/CT01';
import './CW01.scss';

interface TilePosition {
    row: string;
    col: string;
    styles: React.CSSProperties;
}
interface BackgroundProps {
    columns?: number;
}
const Background: FC<BackgroundProps> = function({ columns = 5 }) {
    const parentWrap = useRef<HTMLDivElement>(null);
    const [parentWidth, setParentWidth] = useState<number>(0);
    const [parentHeight, setParentHeight] = useState<number>(0);
    const [tilePositions, setTilePositions] = useState<TilePosition[]>([]);
    const cols = columns;
    let rows = 0;

    useEffect( () => {
        function handleResize() {
            if (parentWrap.current) {
                setParentWidth(parentWrap.current.offsetWidth);
                setParentHeight(parentWrap.current.offsetHeight);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[]);
  
    useEffect( () => {
        // TODO: debounce
        setTilePositions(adjustTiles());
    },[parentWidth]);
    const adjustTiles = () => {
        const windowWidth = parentWidth;
        const windowHeight = parentHeight;


        // console.log(windowWidth,windowHeight)
        const positions: TilePosition[] = [];
        // Tiles must be adjusted to provide full coverage of the content window.
        // The staggered alignment means that with no adjustment, there will be
        // blank space the width of half of a tile on the edges of every other
        // row.
        // So, n - 2 items must fill the width of the window, where n = number of columns.
        // Adjusted width = w / (n - 2)
        const adjustedCols = cols - 2;
        
        const triW = windowWidth / adjustedCols;
        // Height of an equilateral triangle = s * sqrt(3) / 2
        const ht = (triW) * Math.sqrt(3) / 2;
        // All rows get shifted left at least 1/2 the width of the tile (triangle).
        // Every other row gets shifted the entire width of the tile.
        const leftOffset = triW * -1;
        const leftOffsetShifted = triW / 2 * -1;
        // Top offset should be 25% of the height of a tile.
        const topOffset = ht / 3;
        // Only build enough tiles to fill the content window, which should be
        // the number of rows that can fit in the window + twice the top offset
        rows = Math.round((windowHeight + ht) / ht);
  
        // Do not exceed 20 rows
        if (rows > 20) {
            rows = 20;
            console.log("Warning: max rows exceeded.")
        }

        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            const r = "row" + i;
            const c = "col" + j;
            const rowHt = i * ht - topOffset;
            // Add horizontal offset to every other row to align the hexagons
            const leftVal = (i + 1) % 2 === 0 ? triW * j + leftOffset: triW * j + leftOffsetShifted;
            const styles = {
              top:rowHt + "px",
              left:leftVal + "px",
              width: triW + "px"
            };
            positions.push({row:r,col:c,styles:styles});
          }
        }
        // console.log(positions)
        return positions;
    }
    return (
        <section className="cw01 cw01v0">
            <div className="cw01w0" ref={parentWrap}>
            {tilePositions.map( (p) => <CT01 key={`${p.row}-${p.col}`} row={p.row} col={p.col} styles={p.styles} />
            )}
            </div>
        </section>
    );
}

export default Background;