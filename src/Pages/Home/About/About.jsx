import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h1 className='text-xl font-bold text-[#FF3811] '>About Us</h1>
                    <h1 className="text-5xl font-bold pr-48">We are qualified & of experience in this field</h1>
                    <p className="pr-24">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="pr-24">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <button className=" bg-[#FF3811] text-white py-2 px-4 font-semibold rounded-md">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;