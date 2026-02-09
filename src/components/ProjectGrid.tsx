import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "ALPINE TIMBER HOUSE",
    image: "/projects/placeholder-1.jpg",
  },
  {
    title: "LAKESIDE PAVILION",
    image: "/projects/placeholder-2.jpg",
  },
  {
    title: "MOUNTAIN LODGE",
    image: "/projects/placeholder-3.jpg",
  },
  {
    title: "VALLEY RETREAT",
    image: "/projects/placeholder-4.jpg",
  },
  {
    title: "COURTYARD HOUSE",
    image: "/projects/placeholder-5.jpg",
  },
  {
    title: "LAKESIDE CABIN",
    image: "/projects/placeholder-6.jpg",
  },
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ProjectGrid() {
  return (
    <section className="bg-neutral-950 py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={`${project.title}-${project.image}`}
              title={project.title}
              image={project.image}
              slug={slugify(project.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
