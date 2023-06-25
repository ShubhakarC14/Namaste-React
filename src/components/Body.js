import { useState } from "react";
import { restaurantList } from "../constants";
import RestrauntCard from "./RestaurantCard";
const Body = () =>{
    const [searchText,setSearchText] = useState("");
    return(
        <>
        <div className="search-container">
        <h1>{searchText}</h1>
            <input type="text" className="search-input" placeholder="search" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button className="search-btn">Search </button>
        </div>
        <div className="restaurant-list">
        {
            restaurantList.map(restaurant=>{
              return  <RestrauntCard {...restaurant.data} key={restaurant.id}/>
            })
        }
        </div>
        </>
    )
}

export default Body;