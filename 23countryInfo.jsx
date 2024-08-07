import * as React from "react";

export default function CountryInfo() {
  //Neeed to preserve these values and update the UI when they change

  const [countryCode,setCountryCode] = React.useState("AU") ;
  const [data, setData] = React.useState (null);
  const [isLoading,setIsLoading] = React.useState(true);
  const [error,setError] = React.useState (null);



    //Create an async function inside effect that sets loading
    //to true, fetch the data then update error, data and loadin
    //depending on the result of the fetch
    React.useEffect(() =>{
      let ignore = false

      const fetchCountry = async () => {
      const url = `https://restcountries.com/v2/alpha/${countryCode}`
      setIsLoading(true)

      try {         
        const response = await fetch (url)
        const data = await response.json()
     
      //Ignore responses from stales requests
      if(ignore === false){
        setData(data)
        setError(null)
        setIsLoading(false)
      }
      } catch (error) {
        if(ignore === false){
        setData(null)
        setError(error)
        setIsLoading(false)
        }
      }
    }
    fetchCountry()

    //Use cleanup function to ignore requests that are made when another country has been selected  
    return () => {
      ignore = true
    }
    //We include the country code because we're synchronizing
    //the result of fetching the data with the countrycode state
  }, [countryCode]);

  //Update countrycode whenerver handlechange is invoked
  const handleChange = (e) => {
    setCountryCode(e.target.value)
  }

  return (
    <section>
      <header>
        <h1>Country Info:</h1>

        <label htmlFor="country">Select a country:</label>
        <div>
          <select id="country" value={countryCode} onChange={handleChange}>
            <option value="AU">Australia</option>
            <option value="CA">Canada</option>
            <option value="CN">China</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="IN">India</option>
            <option value="IE">Ireland</option>
            <option value="JP">Japan</option>
            <option value="MX">Mexico</option>
            <option value="GB">United Kingdom</option>
            <option value="US">United States of America</option>
          </select>
          {isLoading && <span>Loading...</span>}
          {error && <span>{error.message}</span>}
        </div>
      </header>

      {data && (
        <article>
<h2>{data.name}</h2>
          <table>
            <tbody>
              <tr>
                <td>Capital:</td>
                <td>{data.capital}</td>
              </tr>
              <tr>
                <td>Region:</td>
                <td>{data.region}</td>
              </tr>
              <tr>
                <td>Population:</td>
                <td>{data.population}</td>
              </tr>
              <tr>
                <td>Area:</td>
                <td>{data.area}</td>
              </tr>
              <tr>
                //Added native name
                <td>Native Name:</td>
                <td>{data.nativeName}</td>
              </tr>
              <tr>
                //Added flags
                <td>Flag:</td>
                <td> <img alt="{data.name}" src={data.flags.png} /></td>
              </tr>
            </tbody>
          </table>
        </article>
      )}
    </section>
  );
}
