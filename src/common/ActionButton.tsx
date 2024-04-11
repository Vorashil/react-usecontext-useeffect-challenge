import {FaArrowAltCircleRight} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
export default function ActionButton({text}: { text: string }) {

    const navigate = useNavigate();

    return (
        <button onClick={()=> navigate('/tests')} className={"bg-blue-500 text-white p-2 m-2 rounded-md hover:bg-blue-700 flex"}>
            <div>

                {text}
            </div>
            <div className={"m-1 ml-3"}>

                <FaArrowAltCircleRight/>
            </div>

        </button>
    )
}