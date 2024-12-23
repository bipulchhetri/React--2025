import coursedata from '../api/coursedata.json'
export const  Map =()=>{
    const name=coursedata[1]
    console.log(name);
    return (
coursedata.map((course)=>(
    <ul>
        <li>{course.name}</li>
        <li>{course.description}</li>
<img src={course.img} alt=""
style={{width:'200px'}}
/>
    </ul>
))
    )
}