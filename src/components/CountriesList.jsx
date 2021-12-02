import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function CountriesList() {

    const [countries, setCountries] = useState([]) //can't use null here

    useEffect(() => {
        async function fetchData(){
            let response= await axios.get('https://restcountries.com/v3.1/all')
            setCountries(response.data)
        }

        fetchData()

    }, [])    

    // console.log(countries)
    return (
        <div>
        
        {
        countries.map((elem, i) => {
            return (
                <div>                   
                    <div className="card" >
                    <img className="card-img-top flags" src={elem.flags.svg} alt="imgFlag" height="100px"/>
                    <div className="card-body">
                    <Link className="btn btn-primary" to={`/countries/${elem.cca3}`}>{elem.name.official}</Link>                        
                    </div>
                    </div>
                </div>
            )
        })
            
        }
           
        </div>



    )
}

export default CountriesList
