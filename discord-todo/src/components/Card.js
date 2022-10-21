import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function Example() {
  return (
    <Card className="w-80 mt-20 bg-white bg-opacity-50 shadow-lg rounded-3xl p-8 hover:rounded-lg hover:rotate-1 group hover:scale-110 duration-150">
      <CardHeader className="relative h-56 shadow-lg group-hover:rounded-lg rounded-3xl group-hover:rotate-1 mb-5 bg-opacity-50">
        {/* <Molang3D /> */}
      </CardHeader>
      <CardBody className="text-center rounded-3xl">
        <Typography variant="h1" className="mb-2">
          Lorem ipsum
        </Typography>
        <Typography className="rounded-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-transparent outline rounded-xl">
          <span className="w-0 h-full rounded-xl bg-lightmodeendbg dark:bg-darkmodeendbg absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <span className="w-full text-black transition-colors duration-300 ease-in-out z-10">
            <Typography variant="small" className="p-2 rounded-xl">
              Lorem
            </Typography>
          </span>
        </button>
        <Typography
          variant="small"
          color="gray"
          className="flex gap-1 outline p-2 rounded-xl"
        >
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Lorem, ipsum
        </Typography>
      </CardFooter>
    </Card>
  );
}
