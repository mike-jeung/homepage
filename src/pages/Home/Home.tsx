import React, { FC } from 'react';
import CL01 from '../../components/CL01/CL01';
import S01 from '../../components/S01/S01';
import "./Home.scss";
const Home: FC = function() {

    return (
      <>
        <section className="app-home">
          <div className="app-home-w0">
            <CL01 />
          </div>
        </section>
        <S01 size="sm"></S01>
      </>
    );
}
export default Home;