import React from 'react';
import { Hero } from '../Hero/Hero';

const Home = props => {
    return (
        <div>
            <Hero header="Jack Rogers" text="Front End Developer" backgroundImage="https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_960_720.jpg"/>
            <div className="content">
                
            </div>
        </div>
    )
}

export default React.memo(Home)