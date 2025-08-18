// export default function Projects() {
//   return (
//     <section className="min-h-screen p-8">
//       <h1 className="text-4xl font-bold">My Projects</h1>
//       <ul className="mt-4 list-disc list-inside">
//         <li>Project 1</li>
//         <li>Project 2</li>
//         <li>Project 3</li>
//       </ul>
//     </section>
//   );
// }

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-white text-black"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-md shadow">Project 1</div>
          <div className="p-4 border rounded-md shadow">Project 2</div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
