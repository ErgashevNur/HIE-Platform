import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Heart,
  Send,
  MessageCircle,
  MapPin,
  Building2,
  Clock,
  DollarSign,
  Moon,
  Sun,
} from "lucide-react";

export default function JobListing() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Mock data for demonstration
  useEffect(() => {
    const mockJobs = [
      {
        id: "1",
        title: "Senior Frontend Developer",
        company: "TechCorp",
        location: "San Francisco, CA",
        description:
          "We're looking for an experienced frontend developer to join our team and help build the next generation of web applications.",
        tags: ["React", "TypeScript", "Tailwind CSS"],
        type: "Full-time",
        salary: "$120k - $150k",
        postedAt: "2 days ago",
        liked: false,
      },
      {
        id: "2",
        title: "UX/UI Designer",
        company: "DesignStudio",
        location: "New York, NY",
        description:
          "Join our creative team to design beautiful and intuitive user experiences for our clients across various industries.",
        tags: ["Figma", "Adobe Creative Suite", "Prototyping"],
        type: "Full-time",
        salary: "$90k - $120k",
        postedAt: "1 week ago",
        liked: true,
      },
      {
        id: "3",
        title: "Backend Engineer",
        company: "DataFlow",
        location: "Austin, TX",
        description:
          "Build scalable backend systems and APIs that power our data processing platform used by millions of users.",
        tags: ["Node.js", "PostgreSQL", "AWS"],
        type: "Full-time",
        salary: "$110k - $140k",
        postedAt: "3 days ago",
        liked: false,
      },
      {
        id: "4",
        title: "Product Manager",
        company: "InnovateLab",
        location: "Remote",
        description:
          "Lead product strategy and development for our cutting-edge SaaS platform in the fintech space.",
        tags: ["Product Strategy", "Agile", "Analytics"],
        type: "Full-time",
        salary: "$130k - $160k",
        postedAt: "5 days ago",
        liked: false,
      },
    ];

    // Simulate loading
    setTimeout(() => {
      setJobs(mockJobs);
      setIsLoading(false);
    }, 1500);
  }, []);

  const toggleLike = (jobId) => {
    setJobs(
      jobs.map((job) =>
        job.id === jobId ? { ...job, liked: !job.liked } : job,
      ),
    );
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "dark bg-gray-900" : "bg-gray-900"}`}
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {isLoading
            ? Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700" />
                        <Skeleton className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700" />
                      </div>
                      <Skeleton className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700" />
                    </div>
                    <Skeleton className="h-4 w-full bg-gray-200 dark:bg-gray-700" />
                    <Skeleton className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700" />
                    <div className="flex gap-2">
                      <Skeleton className="h-6 w-16 rounded-full bg-gray-200 dark:bg-gray-700" />
                      <Skeleton className="h-6 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />
                      <Skeleton className="h-6 w-14 rounded-full bg-gray-200 dark:bg-gray-700" />
                    </div>
                    <div className="flex justify-between">
                      <Skeleton className="h-6 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
                      <Skeleton className="h-6 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
                      <Skeleton className="h-6 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Skeleton className="h-10 w-full bg-gray-200 dark:bg-gray-700" />
                      {/* <Skeleton className="h-10 w-20 bg-gray-200 dark:bg-gray-700" /> */}
                    </div>
                  </div>
                </div>
              ))
            : jobs.map((job) => (
                <div
                  key={job.id}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-2xl"
                >
                  {/* Header */}
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex-1">
                      <h2 className="mb-1 text-xl font-semibold text-gray-900 transition-colors group-hover:text-black dark:text-white dark:group-hover:text-gray-100">
                        {job.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Building2 className="h-4 w-4" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleLike(job.id)}
                      className={`transition-all duration-200 ${
                        job.liked
                          ? "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20"
                          : "border-gray-200 hover:border-red-200 dark:border-gray-700 dark:hover:border-red-800"
                      }`}
                    >
                      <Heart
                        className={`h-4 w-4 transition-all duration-200 ${
                          job.liked
                            ? "fill-red-500 text-red-500"
                            : "text-gray-400 group-hover:text-red-400 dark:text-gray-500"
                        }`}
                      />
                    </Button>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    {job.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                    <span>{job.postedAt}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button className="flex-1 bg-black text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100">
                      <Send className="mr-2 h-4 w-4" />
                      Apply
                    </Button>
                    {/* <Button
                      variant="outline"
                      className="flex-1 border-gray-200 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat
                    </Button> */}
                  </div>
                </div>
              ))}
        </div>

        {/* Load More */}
        {!isLoading && (
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-gray-200 px-8 py-3 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              Load more jobs
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
