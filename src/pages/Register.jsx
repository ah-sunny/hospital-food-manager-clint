import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import signupImage from "../assets/login.jpg";
import { useForm } from "react-hook-form";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Swal from "sweetalert2";

export default function Register() {
  const { createUser } = useAuth();
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

    const name = data.email.split("@")[0];
    const userDetails = {
      name: name,
      email: data.email,
      password: data?.password,
      role: "admin",
    };
    console.log(userDetails);

    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        //send to server
        axios
          .post("http://localhost:4000/users", userDetails)
          .then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              //   reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });

              navigate("/dashboard");
            }
          })
          .catch((error) => {
            // console.error(error)
            toast.error(`${error.message}`);
          });

        // toast.success("created")
        // navigate("/")
      })
      .catch((error) => {
        toast.error(`${error.message}`);
        // console.error(error)
      });
  };

  return (
    <div className="min-h-screen ">
      <h2 className="text-3xl mt-3 mb-5 text-center italic">
        Log In Your Account
      </h2>
      <div className="flex flex-row gap-6 justify-center border-2 border-black w-fit mx-auto rounded-2xl p-12 mt-10 ">
        <div className="w-[46%]">
          <img
            className="hidden lg:block h-80 w-[100%]"
            src={signupImage}
            alt=""
          />
        </div>

        <div className="flex flex-col lg:w-[46%]  items-center justify-center ">
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
              Register
            </Button>
            <p className="text-base flex justify-evenly">
             <span> Already have an account?</span>
              <Link to="/login" className="text-blue-900 ">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}
