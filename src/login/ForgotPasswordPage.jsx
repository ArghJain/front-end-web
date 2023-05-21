import React, { useContext, useEffect } from "react";
import LoginCard from "./LoginCard";
import background from "./background.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ForgotPasswordCard from "./ForgotPasswordCard";
import { SERVER_URL } from "../config";

const ForgotPasswordPage = () => {

  const{id,token}=useParams();
  const navigate = useNavigate();

  const userValid=async()=>{
        const res = await fetch(`${SERVER_URL}/api/user/forgotpassword/${id}/${token}`,{
            method:"GET",
            headers:{
                "Content-type":"application/json"
            }
        });

        const data = await res.json();

        if(data.status == 201){
            console.log("Valid User");
        }else{
            navigate("*");
        }
  }

  useEffect(()=>{
    userValid()
  },[])

//   useEffect(() => {
//     console.log(user);
//     if (user) {
//       navigate("/dashboard");
//     }
//   }, [user]);

  return (
    <section
      className="bg-stone-900  bg-center bg-cover  min-h-screen"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="w-screen h-screen flex flex-col lg:pt-20 justify-center lg:items-end backdrop-blur-2xl ">
        <div className="flex justify-center items-center lg:!mr-24 ">
          <ForgotPasswordCard id={id} token={token}/>
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordPage;