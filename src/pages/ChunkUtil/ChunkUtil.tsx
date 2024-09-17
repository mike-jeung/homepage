import React, { FC, useState } from 'react';
import "./ChunkUtil.scss";
import U01 from "../../components/U01/U01";
import { svcGetEmbeddings, svcGetEmbeddingsAndInsert } from "../../services/data";

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
        let allVerses = "",
            body_id = 0,
            currentTitle = "",
            currentTitleIndex = 0,
            currentChapter = "",
            currentChapterIndex = 0,
            firstRun = true,
            chapterFirstRun = true;
        if (text) {
            const lines = text.split(/[\n]+/);
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].startsWith("####")) {
                    if (chapterFirstRun) {
                        chapterFirstRun = false;
                        currentChapter = lines[i].split("####")[1];

                        // insert body of work
                        /*
                        const result = await svcGetEmbeddingsAndInsert(
                            0,                                          //verse_num,
                            0,                                          //chapter_num,
                            0,                                          //body id,
                            "",                                         //verse_text,
                            "",                                         //chapter_text,
                            "",                                         //chapter_title_text
                            currentTitle || "",                         //work_title
                            works[currentTitleIndex].author || "",      //work_author
                            works[currentTitleIndex].translator || ""   //work_translator
                        );
                        console.log("#### results",result)
                        */

                    } else {
                        // insert/embed previous chapter
                        /*
                        await svcGetEmbeddingsAndInsert(
                            0,                        //verse_num,
                            currentChapterIndex + 1,  //chapter_num,
                            currentTitleIndex + 1,    //body id,
                            "",                       //verse_text,
                            allVerses,                //chapter_text,
                            currentChapter,           //chapter_title_text
                            "",                       //work_title
                            "",                       //work_author
                            ""                        //work_translator
                        );
                        */
                        // prep new chapter
                        allVerses = "";
                        currentChapterIndex += 1;
                        currentChapter = lines[i].split("####")[1];
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
                    allVerses = "";
                    currentChapter = "";
                    currentChapterIndex = 0;
                    chapterFirstRun = true;
                } else if (/<[^>]+>[\w \t]+<\/[^>]+>/.test(lines[i])) {
                    // extract xml-ish tags and values
                    const matches = lines[i].match(/<([^>]+)>([\w \t]+)<\/[^>]+>/);
                    if (matches) {
                        works[currentTitleIndex][matches[1]] = matches[2];
                    }
                } else {
                    works[currentTitleIndex].chapters[currentChapterIndex].verses.push({
                        text:lines[i]
                    });

                    /*
                    allVerses = allVerses + "\n" + lines[i];
                    const len = works[currentTitleIndex].chapters[currentChapterIndex].verses.length;
                    await svcGetEmbeddingsAndInsert(
                        len,                        //verse_num,
                        currentChapterIndex + 1,    //chapter_num,
                        currentTitleIndex + 1,      //body id,
                        lines[i],                   //verse_text,
                        "",                         //chapter_text,
                        "",                         //chapter_title_text
                        "",                         //work_title
                        "",                         //work_author
                        ""                          //work_translator
                    );
                    */
                }
            }
            // insert/embed last chapter
            /*
            await svcGetEmbeddingsAndInsert(
                0,                        //verse_num,
                currentChapterIndex + 1,  //chapter_num,
                currentTitleIndex + 1,    //body id,
                "",                       //verse_text,
                allVerses,                //chapter_text,
                currentChapter,           //chapter_title_text
                "",                       //work_title
                "",                       //work_author
                ""                        //work_translator
            );
            */
        }
        console.log("works",works);
        // const em = await svcGetEmbeddings("this is a test");
        // console.log("em",em.response)
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
                        <h2>Chunk &amp; Embed Utility</h2>
                        
                        <p>This utility parses a small text file. The file may contain multiple bodies of work. Bodies of work are delimited by '##' on a new line. All content following the '##' is considered part of the same body of work until another instance of '##' is encountered. All content on the same line as the '##' is saved as the title of the body of work.</p>
                        
                        <p>Chapters are delimited by '####' on a new line. All content on the same line as the '####' is saved as the title of the chapter. All content following the '####' is considered part of the chapter until another instance of '####' or '##' is encountered.</p>

                        <p>Paragraphs are delimited by one or more new line characters (\n).</p>

                        <p>The utility uses OpenAI's embedding api to embed each chapter in its entirety and inserts an entry into a vector database on Supabase. It also embeds and inserts each paragraph of each chapter individually. The database and embedding functionality is currently disabled.</p>
                    </div>
                    <U01 submissionHandler={handleSubmit} />
                </div>
            </div>
        </section>
    );
}
export default FP;