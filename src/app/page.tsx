import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  const projects = [
    {
      title: "Clinic Database Management System",
      description: "Full-stack appointment scheduling with Flask and SQL.",
      githubLink: "https://github.com/yourgithub/clinic-project",
      demoLink: "https://clinic-demo.vercel.app",
      techStack: ["Flask", "SQL", "Python", "HTML/CSS"],
      image: "/clinic.png",
    },
    {
      title: "VR Gesture Recognition",
      description: "AI model to recognize hand gestures from smart glove data.",
      githubLink: "https://github.com/yourgithub/vr-gesture",
      demoLink: "https://vr-demo.vercel.app",
      techStack: ["Python", "TensorFlow", "Rokoko Studio"],
      image: "/vr-glove.png",
    },
    {
      title: "Real-Time Chat Application",
      description: "Real-time socket programming chat app handling 50+ users.",
      githubLink: "https://github.com/yourgithub/chat-app",
      demoLink: "https://chat-demo.vercel.app",
      techStack: ["Python", "Socket Programming", "Multithreading"],
      image: "/chat.png",
    },
    // Add more projects...
  ];

  return (
    <>
      <Navbar />

      <div className="pt-24 flex flex-col items-center min-h-screen p-8 sm:p-20 gap-20 font-sans">
        
        {/* Profile Section */}
        <section id="about" className="flex flex-col items-center gap-6 text-center">
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

        {/* Academic Projects and Interests Section */}
        <section id="experiences" className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-2xl font-semibold">Academic Projects</h2>
            <ul className="text-gray-700 dark:text-gray-300 text-left list-disc pl-5 space-y-2">
              <li><strong>Clinic Database Management System</strong> – Flask app for patient scheduling and record management.</li>
              <li><strong>VR Gesture Recognition System</strong> – Real-time smart glove gesture detection AI model.</li>
              <li><strong>Real-Time Chat App</strong> – Multi-user socket programming messaging system.</li>
              <li><strong>Algorithm Analysis Project</strong> – Built optimized advanced data structures.</li>
            </ul>
          </div>

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

        {/* Projects Section */}
        <section id="projects" className="flex flex-col items-center w-full max-w-6xl">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl">
            I love building projects that combine software, data, and real-world problem-solving.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={`${project.title} image`}
                    width={200}
                    height={120}
                    className="object-contain rounded mb-4"
                  />
                )}
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                <div className="flex gap-4 mb-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm"
                  >
                    Demo
                  </a>
                </div>

                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {project.techStack.join(", ")}
                </div>
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
