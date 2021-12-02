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
            <h1>Country details:</h1>
            {
                countryInfo.map((elem) => {
                    return (
                        <div>
                            <img src={elem.flags.svg} height="400px" width="600px"/>
                            <h1>{elem.name.official}</h1>
                            <h3>Capital: {elem.capital}</h3><br/>
                            <h3>Area: {elem.area} km2</h3><br/>                          

                        </div>
                    )
                })
            }
            
            
        </div>
    )
}

export default CountryDetails
