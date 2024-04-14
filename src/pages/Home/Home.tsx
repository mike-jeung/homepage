import React, { FC } from 'react';
import CL01 from '../../components/CL01/CL01';
import CW01 from '../../components/CW01/CW01';
import CW02 from '../../components/CW02/CW02';
import S01 from '../../components/S01/S01';

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