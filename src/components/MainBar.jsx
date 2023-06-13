
import React, {useState, useEffect} from "react";
import SearchIcon from '@mui/icons-material/Search';
import Card from "./Card"

const MainBody =(prop)=>{

    const [countries, setCountries] = useState([]);
    const [region, setSelectedRegion] = useState('all');
    const [userSearch, setUserSearch]= useState('');
    const [click, setClick]= useState(false)
  
    useEffect(() => {
      let url = 'https://restcountries.com/v3.1/all';
      if (region !== 'all' && region !== "FbR") {
        url = `https://restcountries.com/v3.1/region/${region}`;
      }
      if(userSearch !=="")
      {
        url= `https://restcountries.com/v3.1/name/${userSearch}`

      }
      
  
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setCountries(data);
        })
        .catch(error => {
          console.error(error);
        });
    }, [region, userSearch]);
  
    const handleUserSearch =(event)=>
    {
        try {
        setUserSearch(event.target.value);
         (click === false)? setClick(true): setClick(false)
        } catch (error) {
            console.error(error);
        }

    }

    const handleRegionChange = event =>setSelectedRegion(event.target.value);
    

return<>
    <div className="search">
        <form action="" className="mainForm">
            <div className="innerSearch">
            
            <div className="userInput">
            <SearchIcon sx={{padding: '10px 0 0 10px' }} /><input type="text" placeholder="Search for a country..." value={userSearch}  onChange={handleUserSearch} />
            </div>
            </div>
            <div className="selectPart">
            <select name="Names" id="name" value={region} onChange={handleRegionChange} className="filter">
            <option id='first' value='FbR'>Filter by Region</option>
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
              </select>
            </div>
        </form>
       
    </div>
    <div className="countryDetails">
    {countries.map( (item, index) =>
   
      <Card 
        src={item.flags.png}
        population={item.population}
        key={index}
        Region={item.region}
        name={item.name.common}
        capital={item.capital}
        click={click}
        coat={item.coatOfArms.png}
        official={item.name.official}
        mode={prop.mode}
      />

  )
  }
  </div>
</>
}
export  default MainBody;


