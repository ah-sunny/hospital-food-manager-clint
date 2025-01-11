import {
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
  } from "@mui/material";
  import signupImage from "../assets/admin.png";
  import { useForm } from "react-hook-form";
  import React from "react";
  import Visibility from "@mui/icons-material/Visibility";
  import VisibilityOff from "@mui/icons-material/VisibilityOff";
  import {  useNavigate } from "react-router-dom";
  import useAuth from "../hooks/useAuth";
  import { toast, ToastContainer } from "react-toastify";
  
  
  
  export default function AdminLogin() {
    const { LogInUser,logOut } = useAuth();
    const navigate = useNavigate();
  
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const handleMouseUpPassword = (event) => {
      event.preventDefault();
    };
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const handleLogIn = (data) => {
      console.log(data);
      //LogIn
      LogInUser(data.email, data.password)
         
      .then((result)=>{
          console.log(result.user)
          toast.success("user log in succesfully")
          navigate('/dashboard')
      })
         .catch(error => {
          logOut()
             // console.error(error)
             toast.error(`${error.message}`)
         })
  
      
    };
  
    return (
      <div className="min-h-screen ">
        <h2 className="text-3xl mt-3 mb-5 text-center italic">
          Log In Your Account
        </h2>
        <div className="flex flex-col gap-6 justify-center border-2 border-black w-fit mx-auto rounded-2xl p-12 mt-10 ">
          <div className="">
            <img
              className="hidden lg:block h-80 w-[100%]"
              src={signupImage}
              alt=""
            />
          </div>
  
          <div className="flex flex-col  items-center justify-center ">
            <form
              onSubmit={handleSubmit(handleLogIn)}
              className=" w-full space-y-5"
            >
              {/* <Input {...register("email", { required: true })} type="email" id="email" placeholder="Enter Your Email" /> */}
              <TextField
                id="outlined-basic"
                label="Enter Your Email"
                variant="outlined"
                className="text-2xl w-full"
                {...register("email", { required: true })}
              />{" "}
              {errors.email && (
                <span className="text-red-500 text-xs">Email is required</span>
              )}
              <br />
              {/*  */}
              <FormControl variant="outlined" className="text-2xl w-full">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  {...register("password", { required: true, minLength: 6 })}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                {errors.password?.type == "required" && (
                  <span className="text-red-500 text-xs">
                    Password is required
                  </span>
                )}
                {errors.password?.type == "minLength" && (
                  <span className="text-red-500 text-xs">
                    Password must have at least 6 characters
                  </span>
                )}
              </FormControl>
              <Button
                type="submit"
                variant="outlined"
                size="large"
                className="font-bold text-lg bg-primary w-full mt-2"
              >
                Login
              </Button>
              {/* <p className="text-base flex justify-evenly">
                <span>Create new account</span>
                <Link to="/register" className="text-blue-900 ">
                  {" "}
                  Register
                </Link>
              </p> */}
            </form>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    );
  }
  