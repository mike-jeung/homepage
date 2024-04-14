import React, { FC } from "react";

import "./CW03.scss";

const CW03:FC = () => {



    return (
        <section className="cw03 cw03v0">
            <div className="cw03w0">
                <h2>Projects</h2>
                <div className="cw03w1">
                    <ul className="cw03w2">
                        <li><article>
                            <h3>Project: Chatbot using Retrieval Augmented Generation</h3>
                            <div>
                                <p><strong>Description:</strong> This project demonstrates a chatbot that uses the Retrieval Augmented Generation (RAG) pattern, which improves chatbot responses by first searching for relevant data based on the provided prompt. The large language model then uses the data as context in conjunction with the prompt to formulate a response.</p>
                                <p><strong>Tech:</strong> React, Next.js, Supabase (PostGres & pgvector)</p>
                            </div>
                            <figure>

                                
                            </figure>
                        </article></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default CW03;