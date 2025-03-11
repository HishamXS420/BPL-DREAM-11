import banner from '../../assets/banner-main.png'
import crick from '../../assets/bg-shadow.png'


const Claim = ({handleClaimFreeCredit} ) => {
    return (
        <div >
            <div className='flex justify-center'>
            <img className='absolute max-w-6xl  rounded-xl bg-indigo-950' src={crick} alt="" />
            <img className='relative mt-16 w-50' src={banner} alt="" />
            </div>
           <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold text-white relative text-center mt-6'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h1 className="text-2xl text-white relative text-center mt-5">Beyond Boundaries Beyond Limits</h1>
            <button onClick={handleClaimFreeCredit} className="hover:bg-rose-900 hover:text-yellow-300 hover:border-amber-400   border-amber-600 p-2 mt-6 w-1/7 text-center relative font-bold bg-yellow-300 border-4 rounded-xl text-indigo-950">Claim Free Credit</button>
           </div>
            
        </div>
    );
};

export default Claim;