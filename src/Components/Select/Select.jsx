import { BsTrashFill } from "react-icons/bs";
import PropTypes from "prop-types";

const Select = ({handleRemovePlayer,select}) => {
    const {id,picture,name,role} = select;
    return (
        <div className="flex flex-row justify-between items-center gap-6 mb-2 w-full">
            <div className="flex flex-row gap-6">
            <img className="rounded-full w-20 h-17" src={picture} alt="" />
            <div className="flex flex-col items-baseline justify-items-start">
            <h1 className="text-2xl font-bold">{name}</h1>
            <h1 className="rounded-2xl font-semibold mt-2 bg-slate-200 p-1.5 ">{role}</h1>
            </div>

            </div>
           
            
            <BsTrashFill onClick={() => handleRemovePlayer(id)} className="w-8 text-red-500 "/>
        </div>
    );
};

Select.propTypes = {
    select: PropTypes.array,
    handleRemovePlayer: PropTypes.func
}

export default Select;