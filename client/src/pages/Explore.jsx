import React from 'react'

import ExploreCard from '../components/ExploreCard'


const Explore = () => {

  const ExploreCategories = [
    {
      Title: "Gaming",
      Url: "/main/explore/gaming",
      Icon: "",
      color: "red"
    },
    {
      Title: "Fun",
      Url: "/main/explore/fun",
      Icon: "",
      color: "blue"
    },
    {
      Title: "Sport",
      Url: "/main/explore/sport",
      Icon: "",
      color: "yellow"
    },
    {
      Title: "Educational",
      Url: "/main/explore/educational",
      Icon: "",
      color: "yellow"
    },
  ]

  return (
    <div className='h-full py-10'>
      <div className="h-56 my-11 items-centr w-full flex flex-wrap justify-center">
        {ExploreCategories.map((category) => {
          return (
            <ExploreCard title={category.Title} url={category.Url} icon={category.Icon} color={category.color}/>
          )
        })}
        
      </div>
    </div>
  )
}

export default Explore