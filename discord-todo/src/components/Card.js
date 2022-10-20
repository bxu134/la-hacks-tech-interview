import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Spline from "@splinetool/react-spline";
export default function Example() {
  return (
    <Card className="w-80 mt-20 bg-white bg-opacity-50 shadow-lg rounded-3xl p-8 hover:rounded-lg hover:rotate-1 hover:scale-110 duration-150">
      <CardHeader color="blue" className="relative h-56 shadow-none">
        <Spline
          scene="https://prod.spline.design/tmi2yvOj4huVRqGb/scene.splinecode"
          className="rounded-3xl"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          Lorem ipsum
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">$899/night</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Barcelona, Spain
        </Typography>
      </CardFooter>
    </Card>
  );
}
