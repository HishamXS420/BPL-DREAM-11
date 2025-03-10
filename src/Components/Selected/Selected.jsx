import Select from "../Select/Select";
import PropTypes from "prop-types";

const Selected = ({setShowAvailable, showSelected,handleRemovePlayer}) => {
    return (
        <div>
             <div className=" mt-24">
            <div className="flex flex-row justify-between">
                <div>
                <h1 className="text-3xl font-bold">{
                    `Selected Players (${showSelected.length}/6)`
                    
                    }
                    </h1>
                </div>
                <div>
                    <button  className="font-bold rounded-l-2xl bg-slate-200 text-black p-4 " onClick={() => setShowAvailable(true)} >Available</button>
                    <button className="font-bold rounded-r-2xl text-indigo-100 bg-blue-900 p-4">{`Selected (${showSelected.length})`}</button>
                </div>
            </div>
            
            <div className=" flex flex-col items-baseline mt-4 gap-4">
                
                {
                    showSelected.map(select => <Select 
                        key={select.id} 
                        select={select}
                        handleRemovePlayer={handleRemovePlayer}
                        ></Select>)
                }

            </div>
            
        </div>
        </div>
    );
};

Selected.propType = {
    setShowAvailable: PropTypes.func.isRequired,
    showSelected: PropTypes.array
}

export default Selected;