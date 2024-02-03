import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";

interface MyCardProps {
  title: string;
  image: string;
  footer: string;
}

const MyCard: React.FC<MyCardProps> = (props) => {
  const { ...MyCard } = props;
  return (
    <Card className="lg:w-full w-3/4 mx-auto px-auto bg-neutral-300">
      <CardHeader>
        <CardTitle className="text-center font-bold text-3xl">
          {MyCard.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center cursor-pointer">
        <Dialog>
          <DialogTrigger asChild className="w-full">
            <Image
              src={MyCard.image}
              width={1000}
              height={1000}
              alt="profile"
              className="rounded-md"
            />
          </DialogTrigger>
          <DialogContent className="w-full">
            <Image
              src={MyCard.image}
              width={1000}
              height={1000}
              alt="profile"
              className="rounded-md"
            />
          </DialogContent>
        </Dialog>
      </CardContent>
      <CardFooter>
        <p>{MyCard.footer}</p>
      </CardFooter>
    </Card>
  );
};

export default MyCard;
