import './Home.scss';

import left_shoe from './images/left_shoe.png';
import right_shoe from './images/right_shoe.png';
import stroke from './images/brushstroke.png';

export default function Home() {
    return (
        <>
        <main>
            <img src={stroke} alt='brushstroke'/>
            <div className='slogan'>
                <h1>Break through!</h1>
                <h3>with <em>Rhytmnik</em></h3>
            </div>
            <div className='showcase'>
                <img src={right_shoe} alt='right shoe'/>
                <div className='shadows'/>
                <img src={left_shoe} alt='left shoe'/>
                <div className='shadows'/>
            </div>
        </main>
        </>
    );
}