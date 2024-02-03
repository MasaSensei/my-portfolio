import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselProps {
  children: React.ReactNode;
}

const MyCarousel: React.FC<CarouselProps> = (props) => {
  const { children } = props;
  return (
    <div className="mb-[98px] lg:mb-0 flex justify-center items-center my-4 ">
      <Carousel className="w-full">
        <CarouselContent>{children}</CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MyCarousel;
