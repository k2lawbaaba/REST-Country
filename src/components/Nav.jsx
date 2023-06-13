import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Button } from "@mui/material";
const Navbar=(prop)=>{


 

    return <header>
       <h3>Where in the world?</h3>
             <Button onClick={prop.click} color='inherit'><DarkModeIcon /> Dark Mode</Button>

    </header>
    

}
export default Navbar;