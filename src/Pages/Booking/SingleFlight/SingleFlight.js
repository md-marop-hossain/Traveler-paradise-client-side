import React from 'react';
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleFlight = (props) => {
    const { plane, depart, destination, date, image, price, type } = props.flight || {};
    const notify = () => toast.error('Sorry, work in progress...', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Zoom,
    });

    return (
        <div>
            <Card>
                <CardImage
                    src={image}
                    alt="Card Image"
                />
                <CardBody>
                    <H6 color="gray">{plane}</H6>
                    <Paragraph color="gray">
                        <h5 className="font-bold">Depart From: <span className="text-base ">{depart}</span></h5>
                        <h5 className="font-bold">Day to Fly : <span className="text-base ">{date}</span></h5>
                        <h5 className="font-bold">Class : <span className="text-base ">{type}</span></h5>
                        <h5 className="font-bold">To destination : <span className="text-base ">{destination}</span></h5>
                        <h5 className="font-bold">Ticket price :  <span className="text-base ">${price}</span></h5>
                    </Paragraph>
                </CardBody>
                <CardFooter>
                    <Button onClick={notify} color="lightBlue" size="lg" ripple="light">
                        Book Now
                    </Button>
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </CardFooter>
            </Card>
        </div>
    );
};

export default SingleFlight;