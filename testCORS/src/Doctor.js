import {useState} from 'react';

export default function Doctor(){
    
    const [doctordata, setDoctordata] = useState([])

    const handleChange = () => {
        fetch('http://localhost:3000/doctor')  //from express
        .then(res=>res.json())
        .then(res=>setDoctordata(res))
    }

    return(<div> 
        <button onClick={handleChange}> Click here</button>
        
        {JSON.stringify(doctordata)}
    </div>

    )
}