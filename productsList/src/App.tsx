import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {map} from '../src/arrayFunctions/map'


function App() {
  let url = `https://dummyjson.com/products`;

  const [data, setData] = useState <any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
    .then((response) => {
      if(!response.ok) {
        throw new Error (`This is an HTTP error: Status is ${response.status}`)
      }
      return response.json()})
    .then((actualData) => {
      setData(actualData.products);
      setError(null)})
    .catch((error) => {
      setError(error.message)
      setData([])
      console.log(error.message);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className='products-block'>
      <h1>products prices</h1>
      {loading && <div> Loading of the products... </div>}
      {error && (
        <div>{`There is some problem with fetching the products - ${error}`}</div>
      )}

        {data.length && map(data, ({id, price, title}) => (
          <div key={id} className="product-card">
            <h3>{title}</h3>
            <h3>{`Price: ${price}`}</h3>
          </div>
        ))
      }
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
