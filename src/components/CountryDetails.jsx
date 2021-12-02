import {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'

function CountryDetails() {

    const {cca3} = useParams()
    
    const [countryInfo, setCountryInfo] = useState([])

    useEffect(() => {
        async function fetchData(){
            let response= await axios.get(`https://restcountries.com/v3.1/alpha/${cca3}`)
            setCountryInfo(response.data)
            
        }

        fetchData()

    }, [cca3])

    return (
        <div>            
            
            {
                countryInfo.map((elem) => {
                    return (
                        <div>
                                                                        
                            <div className="card details" >
                            <img className="card-img-top flags" src={elem.flags.svg} alt="imgFlag" height="100px"/>
                            <div className="card-body">
                               <h1>{elem.name.official}</h1>
                                <h3>Capital: {elem.capital}</h3><br/>
                                <h3>Area: {elem.area} km2</h3><br/>                             
                            </div>
                            </div>
                            </div>
                    )
                })
            }
            
            
        </div>
    )
}

export default CountryDetails
