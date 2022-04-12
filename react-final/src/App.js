import './App.css';
import { useEffect, useState } from 'react'
import MovieContainer from './components/MovieContainer';

const App = () => {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for a Movie!')
  let [data, setData] = useState([])

  const API_URL = 'https://imdb-api.com/en/API/SearchMovie/k_354mppya/'
  
  // useEffect(() => {
  //   if(search) {
        //     const fetchData = async () => {
        //         document.title = `${search}`
        //         const response = await fetch(API_URL + search)
        //         const resData = await response.json()
        //         console.log(resData)
        //         if (resData.results.length > 0) {
        //             return setData(resData.results)
        //         } else {
        //             return setMessage('Not Found.')
        //         }
        //     }
        //     fetchData()
        // }
  //   }, [search])


  // const handleSubmit = (e, term) => {
  //   e.preventDefault();
  //   if(!search) return;
  //   setSearch(term)
  //   }

  const handleSubmit = (e) => {
      e.preventDefault();
      if(!search) return;
      
      const fetchData = async () => {
        document.title = `${search}`
        const response = await fetch(API_URL + search)
        const resData = await response.json()
        console.log(resData)
        if (resData.results.length > 0) {
            return setData(resData.results)
        } else {
            return setMessage('Not Found.')
        }
    }
    fetchData()
  }
 
  return (
    <div className="App">
      <h1>World of Movies</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <label>
          {message} <br />
          <input
            type="text"
            placeholder="ex. Fight Club"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="Submit"/>
      </form>
      <MovieContainer data={data}/>
    </div>
  );
}

export default App;
