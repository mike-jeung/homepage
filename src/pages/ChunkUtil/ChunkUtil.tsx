import React, { FC, useState } from 'react';
import "./ChunkUtil.scss";
import U01 from "../../components/U01/U01";
import { svcGetEmbeddings } from "../../services/data";

interface ChunkBookData {
    title: string;
    author?: string;
    translator?: string;
    chapters: ChunkChapterData[];
}
interface ChunkChapterData {
    title: string;
    verses: ChunkVerseData[];
    embedding?: number[];
}
interface ChunkVerseData {
    text: string;
    embedding?: number[];
}
const FP: FC = function() {

    const [books,setBooks] = useState<ChunkBookData[]>([]);
    const handleSubmit = async (submission:{e: React.MouseEvent<HTMLButtonElement>, file: any}) => {
        const {e, file} = submission;

        if (file) {
            const fr = new FileReader();
            fr.addEventListener("error",loadError);
            fr.addEventListener("load",loadComplete);
            fr.addEventListener("progress",loadProgress);
            fr.readAsText(file);
        }
    };
    
    const parseFile = async (text:string) => {
        
        const works:ChunkBookData[] = [];
        let currentTitle = "",
            currentTitleIndex = 0,
            currentChapter = "",
            currentChapterIndex = 0,
            firstRun = true,
            chapterFirstRun = true;
        if (text) {
            const lines = text.split(/[\n]+/);
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].startsWith("####")) {
                    currentChapter = lines[i].split("####")[1];
                    if (chapterFirstRun) {
                        chapterFirstRun = false;
                    } else {
                        currentChapterIndex += 1;
                    }
                    works[currentTitleIndex].chapters[currentChapterIndex] = {
                        title: currentChapter,
                        verses: []
                    };
                } else if (lines[i].startsWith("##")) {
                    if (firstRun) {
                        firstRun = false;
                    } else {
                        currentTitleIndex += 1;
                    }
                    currentTitle = lines[i].split("##")[1];
                    works[currentTitleIndex] = {
                        title: currentTitle,
                        chapters: []
                    }
                    currentChapter = "";
                    currentChapterIndex = 0;
                    chapterFirstRun = true;
                } else if (/<[^>]+>[\w \t]+<\/[^>]+>/.test(lines[i])) {
                    const matches = lines[i].match(/<([^>]+)>([\w \t]+)<\/[^>]+>/);
                    if (matches) {
                        works[currentTitleIndex][matches[1]] = matches[2];
                    }
                } else {
                    works[currentTitleIndex].chapters[currentChapterIndex].verses.push({
                        text:lines[i]
                    });
                    // save to file

                }
            }
        }
        console.log("works",works);
        const em = await svcGetEmbeddings("this is a test");
        console.log("em",em.response.embedding)
        setBooks( works );
    };
    const loadComplete = (e) => {
        // console.log("load complete",e.target.result)
        parseFile(e.target.result);
    };
    const loadError = (e) => {
        console.log("load error",e)
    };
    const loadProgress = (e) => {
        console.log(e.loaded, "/", e.total)
    }
    return (
        <section className="chunkutil">
            <div className="chunkutil-w0">
                <div className="chunkutil-w1">
                    <div className="chunkutil-instructions">
                        <h2>Chunk Utility</h2>
                        
                        <p>This utility parses a small text file and returns a JSON representation of the file contents. The file may contain multiple bodies of work. Bodies of work are delimited by '##' on a new line. All content following the '##' is considered part of the same body of work until another instance of '##' is encountered. All content on the same line as the '##' is saved as the title of the body of work.</p>
                        
                        <p>Chapters are delimited by '####' on a new line. All content on the same line as the '####' is saved as the title of the chapter. All content following the '####' is considered part of the chapter until another instance of '####' or '##' is encountered.</p>

                        <p>Paragraphs/verses are delimited by one or more new line characters (\n).</p>
                    </div>
                    <U01 submissionHandler={handleSubmit} />
                </div>
                <div className="chunkutil-w1">
                    
                </div>
            </div>
        </section>
    );
}
export default FP;