import { Heart, MessageCircle, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import { Skeleton } from "../components/ui/skeleton";
import { Link } from "react-router-dom";

export default function Jobs() {
  const [job, setJob] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechNova",
      location: "Tashkent, Uzbekistan",
      type: "Full-time",
      salary: "$1000 - $1500",
      postedAt: "2 days ago",
      description:
        "We are looking for a React.js developer with experience in Tailwind CSS and REST APIs.",
      tags: ["React", "Tailwind", "REST API"],
      liked: false,
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "CodeCraft",
      location: "Remote",
      type: "Part-time",
      salary: "$800 - $1200",
      postedAt: "5 days ago",
      description:
        "Looking for a Node.js/Express developer to build scalable backend systems.",
      tags: ["Node.js", "Express", "MongoDB"],
      liked: false,
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "DesignHub",
      location: "Tashkent, Uzbekistan",
      type: "Contract",
      salary: "$700 - $1000",
      postedAt: "1 week ago",
      description:
        "Seeking a creative UI/UX designer familiar with Figma and user-centered design principles.",
      tags: ["Figma", "UX", "Wireframe"],
      liked: false,
    },
    {
      id: 4,
      title: "Mobile Developer",
      company: "Appify",
      location: "Hybrid",
      type: "Full-time",
      salary: "$1200 - $1700",
      postedAt: "3 days ago",
      description:
        "Experienced React Native developer needed to maintain and scale existing applications.",
      tags: ["React Native", "Android", "iOS"],
      liked: false,
    },
    {
      id: 5,
      title: "Data Analyst",
      company: "InsightIQ",
      location: "Remote",
      type: "Full-time",
      salary: "$1100 - $1600",
      postedAt: "Today",
      description:
        "Data-driven individual with strong Excel and SQL skills for reporting and analysis.",
      tags: ["SQL", "Excel", "Data Visualization"],
      liked: false,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setJob(jobs);
      setIsLoading(false);
    }, 1500); // 1.5 soniya yuklanish
  }, []);

  // Heartni bosilganmi yoki yoq shuni aniqlab beradi code written by-CodeNur

  const toggleLike = (id) => {
    const updatedJobs = job.map((j) =>
      j.id === id ? { ...j, liked: !j.liked } : j,
    );
    setJob(updatedJobs);
  };

  //

  return (
    <div className="grid gap-6 p-6 md:grid-cols-2">
      {isLoading
        ? Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="space-y-4 rounded-xl border bg-white p-5 shadow-sm dark:bg-gray-900"
            >
              <Skeleton className="h-6 w-2/3" />
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <div className="flex gap-2">
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-20" />
              </div>
            </div>
          ))
        : job.map((job) => (
            <div
              key={job.id}
              className="space-y-4 rounded-xl border bg-white p-5 shadow-sm dark:bg-gray-900"
            >
              <div>
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-500">
                  {job.company} — {job.location}
                </p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  {job.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-800 dark:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{job.type}</span>
                <span>{job.salary}</span>
                <span>{job.postedAt}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <Button variant="default">
                    <Send size={16} />
                    Apply
                  </Button>
                  <Button variant="outline" className="flex gap-2">
                    <Link to={"/messages"} className="flex gap-2">
                      <MessageCircle size={16} />
                      Chat
                    </Link>
                  </Button>
                </div>

                <Button
                  variant="outline"
                  onClick={() => toggleLike(job.id)} // ✅ faqat shu joyda kerak
                  className={`transition-colors ${
                    job.liked ? "border-red-300 bg-red-100 dark:bg-red-900" : ""
                  }`}
                >
                  <Heart
                    className={`h-5 w-5 transition-colors ${
                      job.liked ? "fill-red-600 text-red-600" : "text-gray-500"
                    }`}
                  />
                </Button>
              </div>
            </div>
          ))}
    </div>
  );
}
