
import Hero from '../../components/Navbar/Hero';
import wave from '../../assets/wave.svg'


const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center  min-h-[calc(100vh-116px)] relative'>
            <Hero></Hero>
            <img src={wave} alt="" className='absolute bottom-0 w-full' />
        </div>
    );
};

export default Home;