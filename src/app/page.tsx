import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  const projects = [
    {
      title: "Clinic Database Management System",
      description: "Full-stack appointment scheduling with Flask and SQL",
    },
    {
      title: "VR Gesture Recognition",
      description: "AI model to recognize hand gestures from smart glove data",
    },
    {
      title: "Chat Application",
      description: "Real-time socket programming chat app handling 50+ users",
    },
    {
      title: "Algorithm Analysis",
      description: "Optimized advanced data structures and algorithms",
    },
    {
      title: "Immersive Reality Research",
      description: "Exploring VR/AR applications for human-computer interaction",
    },
    {
      title: "Robotic Hand Control System",
      description: "Smart glove-controlled robotic arm using live gesture detection",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-24 flex flex-col items-center min-h-screen p-8 sm:p-20 gap-20 font-sans">
        {/* Profile Section */}
        <section className="flex flex-col items-center gap-6 text-center" id="about">
          <Image
            src="/Pusheen.jpg"
            alt="Chris Hoang profile picture"
            width={120}
            height={120}
            className="rounded-full border-2 border-gray-300 dark:border-gray-700"
            priority
          />
          <h1 className="text-4xl font-bold">Hi, I'm Chris Hoang</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            I'm a Computer Science senior passionate about building efficient data systems, scalable software, and meaningful tech solutions.
          </p>
        </section>

        {/* Academic Projects and Interests */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl" id="experiences">
          {/* Academic Projects */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-2xl font-semibold">Academic Projects</h2>
            <ul className="text-gray-700 dark:text-gray-300 text-left list-disc pl-5 space-y-2">
              <li><strong>Clinic Database Management System</strong> – Flask app for scheduling and patient record management.</li>
              <li><strong>VR Gesture Recognition System</strong> – Smart glove-based real-time gesture AI model.</li>
              <li><strong>Real-Time Chat App</strong> – Socket programming handling 50+ concurrent users.</li>
              <li><strong>Algorithm Analysis Project</strong> – Built optimized data structures and sorting algorithms.</li>
            </ul>
          </div>

          {/* Interests */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-2xl font-semibold">Interests</h2>
            <ul className="text-gray-700 dark:text-gray-300 text-left list-disc pl-5 space-y-2">
              <li>Data Engineering and Big Data Pipelines</li>
              <li>Software Architecture and Backend Systems</li>
              <li>Gesture Recognition in Robotics</li>
              <li>Mixed Reality (VR/AR) Technology</li>
              <li>Machine Learning Applications in HCI</li>
            </ul>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="flex flex-col items-center w-full max-w-6xl" id="projects">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl">
            I love building projects that combine software, data, and real-world problem-solving.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg hover:shadow-lg transition text-left"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-sm text-gray-500 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} Chris Hoang. All rights reserved.
        </footer>
      </div>
    </>
  );
}
