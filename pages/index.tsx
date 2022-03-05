import type { NextPage } from 'next'
import { useState } from 'react'
import { Slide } from '../components/Slide'
import { Slide2 } from '../components/Slide2'
import { Slide3 } from '../components/Slide3'
import { SlideTest } from '../components/SlideTest'

const Home: NextPage = () => {
  // let [index, setIndex] = useState(0)
  // console.log(index)
  // return (
  //   <>
  //     {index === 0 ? <Slide /> : index === 1 ? <Slide2 /> : <Slide3 />}
  //     <div className="absolute bottom-0 top-32 m-auto flex w-full place-content-between px-5 lg:px-4 xl:left-0 xl:px-24">
  //       <img
  //         src="arrow.svg"
  //         className="w-xs3 cursor-pointer md:w-xs2"
  //         onClick={() => (index !== 0 ? setIndex(index - 1) : setIndex(2))}
  //       />
  //       <img
  //         src="arrow.svg"
  //         className="w-xs3 rotate-180 cursor-pointer bg-sm md:w-xs2"
  //         onClick={() => (index !== 2 ? setIndex(index + 1) : setIndex(0))}
  //       />
  //     </div>
  //   </>
  // )
  return <SlideTest />
}

export default Home
