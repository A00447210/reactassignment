import territories from '../data/territories-data'
import Province from "./Province"
import Covid19 from "./Covid19"
function Territories()
{
    var p=2;
    
    return(
    <div>
        <img classname="image_container" alt="Canada's Flag" width={800} src="https://upload.wikimedia.org/wikipedia/commons/7/74/Halifax_Harbour_Sunset_Skyline%2C_Nova_Scotia_%2824237034620%29.jpg"  />

        <div className="province-container">
            I live in Halifax, Nova Scotia !!!
 
            </div>
            <div className="province-container_2">
            Halifax is a city situated on the East Coast of Canada in the Maritime province of Nova Scotia.
    
            </div>
            <div>
            <Covid19/>  
            </div>

            

            
    </div>

)
    }

export default Territories;

/**
 * Topics you might also like:
 *      - Functional vs Class Components -> https://programmingwithmosh.com/react/react-functional-components/
 */