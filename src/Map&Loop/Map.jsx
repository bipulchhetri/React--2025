import coursedata from '../api/coursedata.json'
import '../index.css'
import Card from '../Map&Loop/Card'
export const  Map =()=>{
   
    return (
coursedata.map((course)=>(

    <Card 
    key={course.id} 
    title={course.name} 
    description={course.description} 
    // image={course.image} 
    // duration={course.duration}
  />


))
    )
}