import React, { FC } from 'react';
import CW01 from '../../components/CW01/CW01';
import CW02 from '../../components/CW02/CW02'
import S01 from '../../components/S01/S01'

const Home: FC = function() {

    return (
        <section className="app-home">
          <div className="app-home-w0">
            <CW02 />
            <CW01 columns={4} duration={3} />
            <S01 size="xlg" /><S01 size="xlg" /><S01 size="xlg" /><S01 size="xlg" />
          </div>
        </section>
    );
}
export default Home;