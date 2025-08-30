// export default function Skills() {
//   return (
//     <section className="min-h-screen p-8">
//       <h1 className="text-4xl font-bold">My Skills</h1>
//       <ul className="mt-4 list-disc list-inside">
//         <li>Skill 1</li>
//         <li>Skill 2</li>
//         <li>Skill 3</li>
//       </ul>
//     </section>
//   );
// }

const Skills = () => {
  return (
    <div className="min-h-screen px-6 py-20 bg-gray-100 text-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>Framer Motion</li>
        </ul>
      </div>
    </div>
  );
};
export default Skills;
