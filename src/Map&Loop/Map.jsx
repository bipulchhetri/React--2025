import coursedata from '../api/coursedata.json'

import Card from '../Map&Loop/Card'
export const  Map =()=>{
   
    return (
coursedata.map((course)=>(

    <Card 
    key={course.id} 
    title={course.name} 
    description={course.description} 
    img={course.img} 
    button={course.button}
    // duration={course.duration}
  />


))
    )
}