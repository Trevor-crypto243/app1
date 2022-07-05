import React from 'react';
import {useForm} from "react-hook-form";

export default function Form(){
    var items =  [];
    const {register,formState:{errors},handleSubmit,}=useForm();
    const onSubmit = (data) =>console.log(data)
     
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="lat" className="form-label">lattitude</label>
            <input {...register("lat",{required: true,minLength:4})}type="number" className="form-control" id="lat" aria-describedby="emailHelp"></input>
           
          </div>

          <div className="mb-3">
            <label htmlFor="lon" className="form-label">Longitude</label>
            <input  {...register("lon",{required: true,minLength: 4})} type="number" className="form-control" id="lon"></input>
            
          </div>

          <button type='submit' className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Get weather updates
          </button>
        </form>

    )
}






// import React from 'react';
// import {useForm} from "react-hook-form";

// export default function Form(){
//     const {register,formState:{errors},handleSubmit,}=useForm();
//     const onSubmit = (data) =>{
//       console.log(data)
//       //fetch data
//       console.log("The lattitude value is",data.lat);
//       console.log("The longitude value is",data.lon);
//     };
//     return(
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-3">
//             <label htmlFor="lat" className="form-label">lattitude</label>
//             <input {...register("lat",{required: true,minLength:4})}type="number" className="form-control" id="lat" aria-describedby="emailHelp"></input>
//             {/* <error>
//               {errors.lat?.type==="required"&&"latitude value is required"}
//               {errors.lat?.type==="maxLength"&&"Entered value is less than four"}
//             </error> */}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="lon" className="form-label">Longitude</label>
//             <input  {...register("lon",{required: true,minLength: 4})} type="number" className="form-control" id="lon"></input>
//             {/* <error>
//               {errors.lon?.type==="required"&&"longitude value is required is required"}
//               {errors.lat?.type==="maxLength"&&"Entered value is less than four"}
//             </error> */}
//           </div>

//           <button type='submit' className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
//             Get weather updates
//           </button>
//         </form>

//     )
// }
