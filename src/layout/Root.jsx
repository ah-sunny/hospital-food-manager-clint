import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import adminImg from "../assets/admin.png";
import panDelImg from "../assets/Pan&del.png";
import { Link } from "react-router-dom";

const Root = () => {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <div className="bg-gray-300 min-h-screen">
      <div>
        <h1 className="text-5xl font-bold mx-auto text-center italic  pt-28 ">
          Hospital Food Management
        </h1>
      </div>

      {/* card */}
      <div className="flex gap-5 justify-center mt-16">
        <Link to="/login">
          <Card className="w-80 h-56  ">
            <CardActionArea
              onClick={() => setSelectedCard(1)}
              data-active={selectedCard === 1 ? "" : undefined}
              sx={{
                height: "100%",
                "&[data-active]": {
                  backgroundColor: "action.selected",
                  "&:hover": {
                    backgroundColor: "action.selectedHover",
                  },
                },
              }}
            >
              <CardContent sx={{ height: "100%" }}>
                <Typography>
                  <img src={adminImg} alt="admin" className="size-36 mx-auto" />
                </Typography>
                <Typography
                  variant="h3 "
                  component="div"
                  className="mx-auto text-center pt-2 font-extrabold text-3xl"
                >
                  Admin
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

        
        {/* delivery man */}
        <Link to="/login">
          <Card className="w-80 h-56 ">
            <CardActionArea
              onClick={() => setSelectedCard(1)}
              data-active={selectedCard === 1 ? "" : undefined}
              sx={{
                height: "100%",
                "&[data-active]": {
                  backgroundColor: "action.selected",
                  "&:hover": {
                    backgroundColor: "action.selectedHover",
                  },
                },
              }}
            >
              <CardContent sx={{ height: "100%" }}>
                <Typography>
                  <img
                    src={panDelImg}
                    alt="admin"
                    className="size-36 mx-auto"
                  />
                </Typography>
                <Typography
                  variant="h3 "
                  component="div"
                  className="mx-auto text-center pt-2 font-extrabold text-2xl"
                >
                  Pantry & Delivery Man
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Root;