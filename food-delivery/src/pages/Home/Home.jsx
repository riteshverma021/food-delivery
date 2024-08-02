import React ,{useState}from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/Exploremenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
const Home = () => {
  const [category, setcategory] = useState('All');
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setcategory={setcategory}  />
        <FoodDisplay category={category} />
        <AppDownload/>
    </div>
  )
}

export default Home