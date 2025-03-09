import profile from "../../assets/logo.png";
import dollar from "../../assets/—Pngtree—golden dollar coin money_5505816.png";

const Header = ({ credit }) => {
  const creditWidth = Math.min(credit.toString().length * 30, 300);
  const creditWidth2 = Math.min(credit.toString().length * 26, 300);

  return (
    <div className="flex justify-between my-10 ">
      <div>
        <img src={profile} alt="" />
      </div>
      <div className="flex gap-12 items-center">
        <h1>Home</h1>
        <h1>Fixture</h1>
        <h1>Teams</h1>
        <h1>Schedules</h1>
        <div
          className="py-2 flex w-28 border rounded-xl font-semibold items-center gap-2 "
          style={credit === 0 ? {} : credit > 100000 ? { width: `${creditWidth2}px` } : { width: `${creditWidth}px` }}
        >
          <h1 className="ml-3 font-bold">
            
            <span>{credit}</span> Coins
          </h1>
          <img
          style={credit !== 0 ?   {marginRight:'0px'} : {marginRight:'8px'} }
            src={dollar}
            className="text-amber-300 w-8"
            aria-label="coin icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
