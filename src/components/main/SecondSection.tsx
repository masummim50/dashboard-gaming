
import Profile from './Profile';
import Profits from './Profits';

const SecondSection = () => {
    return (
        <div className='grid grid-cols-3 gap-3 mt-4'>
            <Profile/>
            <Profits/>
        </div>
    );
};

export default SecondSection;