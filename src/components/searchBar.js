import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark} from "@fortawesome/free-solid-svg-icons";

function SearchBar ({children}){
    return(
        <div className="h-10 w-11/12 pr-2 flex">
            <div className="w-full flex bg-white rounded-md">
                <div className="w-auto m-1 bg-blue-600 text-white rounded-md px-2 flex items-center">
                    <span>"recherhe"</span>
                    <FontAwesomeIcon icon={faXmark}/>
                </div>
                <input type="text" placeholder="Search" className="w-auto h-full  w-full  p-2 focus:outline-none"/>
            </div>
            <div className="w-10 bg-blue-600 hover:bg-blue-500 active:bg-gray-600 text-white rounded-r-md flex justify-center items-center">
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </div>
    )
}

export default SearchBar;