import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const PatientDetails = () => {
    const [Gender, setGender] = useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const handleLogIn = (data) => {
        // console.log(data)
        const patientDetails = {
            patientName: data?.patientName,
            diseases: data.diseases,
            allergies: data.allergies,
            age: data.age,
            bedNumber: data.bedNumber,
            roomNumber: data.roomNumber,
            contact: data.contact,
            emContact: data.emContact,
            others: data.others,
            floorNumber: data.floorNumber,
            Gender: Gender

        };
        console.log(patientDetails);


        axios.post('http://localhost:4000/addPatientDetais', patientDetails)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "success",
                        text: "Patient added !",
                        icon: "success",
                        button: "okay!",
                    });
                    
                    reset();
                }
            })
            .catch(error=>{
                console.error(error)
            })

    }


    return (
        <div>
            <h1 className="text-5xl font-bold mx-auto text-center uppercase mt-12 border-b-2 pb-4 border-gray-500">Patient Entry</h1>

            <div className="my-10">
                <form
                    onSubmit={handleSubmit(handleLogIn)}
                    className=" w-full space-y-14">
                    {/* 1st row */}
                    <div className="flex gap-6 mb-5">
                       <div className="w-1/2">
                       
                       <TextField
                            id="outlined-textarea "
                            label="Patient Name"
                            placeholder="Enter Patient Full Name"
                            multiline
                            className="w-full  "
                            {...register("patientName", { required: true })}
                        />
                        {errors.patientName && (
                            <span className="text-red-500 text-xs">Patient Name is required</span>
                        )}
                        </div>
                       <div className="w-1/2">
                       <TextField
                            id="outlined-textarea"
                            label="Diseases "
                            placeholder=" Patient Diseases Name"
                            multiline
                            className="w-full"
                            {...register("diseases", { required: true })}
                        />
                        {errors.diseases && (
                            <span className="text-red-500 text-xs">diseases is required</span>
                        )}
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="flex gap-6 mb-5">
                        <div className="w-1/2">
                            <TextField
                                id="outlined-textarea "
                                label="Allergies"
                                placeholder="Yes or No"
                                multiline
                                className="w-full"
                                {...register("allergies", { required: true })}
                            />
                        {errors.allergies && (
                            <span className="text-red-500 text-xs">allergies  is required</span>
                        )}
                        </div>
                        <div className="w-1/2">
                            <TextField
                                id="outlined-textarea"
                                label="Room Number"
                                placeholder="Enter Patient Room Number"
                                multiline
                                className="w-full"
                                type="number"
                                {...register("roomNumber", { required: true })}
                            />
                            {errors.roomNumber && (
                                <span className="text-red-500 text-xs">room Number is required</span>
                            )}
                        </div>
                    </div>
                    {/* 3rd row */}
                    <div className="flex gap-6 mb-5">
                        <div className="w-1/2">
                            <TextField
                                id="outlined-textarea "
                                label="Bed Number"
                                placeholder="Patient Bed Number"
                                multiline
                                className="w-full"
                                type="number"
                                {...register("bedNumber", { required: true })}
                            />
                            {errors.bedNumber && (
                                <span className="text-red-500 text-xs">bed Number is required</span>
                            )}
                        </div>
                        <div className="w-1/2">
                            <TextField
                                id="outlined-textarea"
                                label="Floor Number "
                                placeholder="Patient Floor Number"
                                multiline
                                className="w-full"
                                type="number"
                                {...register("floorNumber", { required: true })}
                            />
                            {errors.floorNumber && (
                                <span className="text-red-500 text-xs">floor Number is required</span>
                            )}
                        </div>
                    </div>
                    {/* 4th row */}
                    <div className="flex gap-6 mb-5 w-full">
                        <div className="w-1/2">
                            <TextField
                                id="outlined-textarea "
                                label="Age "
                                placeholder="Enter Patient Age"
                                multiline
                                className="w-full"
                                type="number"
                                {...register("age", { required: true })}
                            />
                            {errors.age && (
                                <span className="text-red-500 text-xs">Age is required</span>
                            )}
                        </div>
                        <div className="w-1/2">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={Gender}
                                    label="Gender"
                                    onChange={handleChange}
                                // {...register("gender", { required: true })}
                                >
                                    <MenuItem value='Male'>Male</MenuItem>
                                    <MenuItem value="Female">Female</MenuItem>
                                    <MenuItem value="Other">Other</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    {/* 5th row */}
                    <div className="flex gap-6 mb-5">
                        <div className="w-1/2">
                            <TextField
                                id="outlined-textarea "
                                label="Contact Information "
                                placeholder="Contact"
                                multiline
                                className="w-full"
                                type="number"
                                {...register("contact", { required: true })}
                            />
                            {errors.contact && (
                                <span className="text-red-500 text-xs">contact is required</span>
                            )}
                        </div>
                        <div className="w-1/2">
                            <TextField
                                id="outlined-textarea"
                                label="Emergency Contact"
                                placeholder="Em. Contact "
                                multiline
                                className="w-full"
                                type="number"
                                {...register("emContact", { required: true })}

                            />
                            {errors.emContact && (
                                <span className="text-red-500 text-xs">Emergency Contact is required</span>
                            )}
                        </div>
                    </div>
                    <div className="mx-auto text-center" >
                        <TextField
                            id="outlined-textarea"
                            label="Others"
                            placeholder="Feel Free to say"
                            multiline
                            className="w-1/2 "
                            {...register("others", { required: true })}

                        />
                        <div className="mx-auto text-left  w-1/2 pt-2">
                            {errors.others && (
                                <span className="text-red-500 text-sm ">Field is required</span>
                            )}
                        </div>
                    </div>














                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        className="font-bold text-lg bg-primary w-full mt-2"
                    >
                        Login
                    </Button>
                </form>


            </div>
        </div>
    );
};

export default PatientDetails;