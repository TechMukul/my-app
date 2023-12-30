
  import React from "react";
  import { getUsers} from "./api";
  import { useEffect,useState } from "react";
  
  
  // import { Link } from "react-router-dom";
  
  // const Styledtable=styled(Table)`
  // width:90%,
  // margin:50px auto 0px auto,
  // `
  // const Thead=styled(TableRow)`
  // backgound:#000,
  
  // `
  
  function AllUser() {
    const [users,setusers]=useState([]);
  
    const getUsersdetails=async()=>{
      let response  =await getUsers();
      console.log(response);
      setusers(response.data);
    }
  
    // const deleteUserdata=async(id)=>{
    //   await deleteUser(id);
    //   getUsers();
    // }
  
    useEffect(() => {
      getUsersdetails();
    }, []);
  
  
    return (
      <div className="abc" style={{width:"0%", height:"0.1vh"}}>

          {
            users.map((user,index)=>(
              <div key={index} >
                
                {/* <div className="abc"> */}
               
                <img src={user.download_url} alt="pic" />
                </div>
               
              // </div>
            ))
          }
        
       
      </div>
    );
  }
  
  export default AllUser;
  