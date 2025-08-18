// export default function Contact() {
//   return (
//     <section className="min-h-screen p-8">
//       <h1 className="text-4xl font-bold">Contact</h1>
//       <ul className="mt-4 list-disc list-inside">
//         <li>Contact</li>
//       </ul>
//     </section>
//   );
// }

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 bg-gray-100 text-black"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <form className="flex flex-col space-y-4">
          {/* <input
            className="border p-2 rounded"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="border p-2 rounded"
            type="email"
            placeholder="Your Email"
          /> */}
          <textarea
            className="border p-2 rounded"
            rows={5}
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
