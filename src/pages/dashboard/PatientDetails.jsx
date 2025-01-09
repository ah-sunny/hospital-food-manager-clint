import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";


const PatientDetails = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handleLogIn = (data) => {
        console.log(data)
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
                        <TextField
                            id="outlined-textarea "
                            label="Patient Name"
                            placeholder="Enter Patient Full Name"
                            multiline
                            className="w-1/2  "
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Diseases "
                            placeholder=" Patient Diseases Name"
                            multiline
                            className="w-1/2"
                        />
                    </div>
                    {/* 2nd row */}
                    <div className="flex gap-6 mb-5">
                        <TextField
                            id="outlined-textarea "
                            label="Allergies"
                            placeholder="Yes or No"
                            multiline
                            className="w-1/2"
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Room Number"
                            placeholder="Enter Patient Room Number"
                            multiline
                            className="w-1/2"
                            type="number"
                        />
                    </div>
                    {/* 3rd row */}
                    <div className="flex gap-6 mb-5">
                        <TextField
                            id="outlined-textarea "
                            label="Bed Number"
                            placeholder="Patient Bed Number"
                            multiline
                            className="w-1/2"
                            type="number"
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Floor Number "
                            placeholder="Patient Floor Number"
                            multiline
                            className="w-1/2"
                            type="number"
                        />
                    </div>
                    {/* 4th row */}
                    <div className="flex gap-6 mb-5">
                        <TextField
                            id="outlined-textarea "
                            label="Age "
                            placeholder="Enter Patient Age"
                            multiline
                            className="w-1/2"
                            type="number"
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Patient Gender"
                            placeholder=" Patient Gender"
                            multiline
                            className="w-1/2"
                            
                        />
                    </div>
                    {/* 5th row */}
                    <div className="flex gap-6 mb-5">
                        <TextField
                            id="outlined-textarea "
                            label="Contact Information "
                            placeholder="Enter Patient Age"
                            multiline
                            className="w-1/2"
                            type="number"
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Emergency Contact"
                            placeholder=" Patient Gender"
                            multiline
                            className="w-1/2"
                            
                        />
                    </div>
                    <div className="mx-auto text-center" >
                    <TextField
                            id="outlined-textarea"
                            label="Others"
                            placeholder="Feel Free to say"
                            multiline
                            className="w-1/2 "
                            type="checkbox"
                            
                        />
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