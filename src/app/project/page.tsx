import Core from "@/components/core";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ProjectPage = () => {
  return (
    <div className="z-10 relative">
      <h1 className="lg:text-5xl text-3xl font-bold text-center text-white mb-8">
        My Project
      </h1>
      <div className="mb-[98px] lg:mb-0 lg:grid-cols-3 gap-4 grid grid-cols-1 flex justify-center items-center my-4 ">
        <Core.MyCard
          title="Aniweb"
          image="/images/projects/aniweb.png"
          footer=""
        />
        <Core.MyCard
          title="Aniweb"
          image="/images/projects/aniweb.png"
          footer=""
        />
        <Core.MyCard
          title="Aniweb"
          image="/images/projects/aniweb.png"
          footer=""
        />
      </div>
      <Pagination className="mt-8 text-white mx-auto">
        <PaginationContent className="flex grid lg:grid-cols-12 items-center">
          <PaginationItem className="col-start-3">
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem className="col-start-10">
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProjectPage;
