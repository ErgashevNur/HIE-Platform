import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Navbar */}
      <header className="flex items-center justify-between bg-white px-8 py-6 shadow-sm dark:bg-gray-900">
        <h1 className="text-2xl font-bold">HIE</h1>
        <div className="ml-5 flex gap-2">
          <Link to={"/login"} variant="outline" size="sm">
            Login
          </Link>
          <Link to={"/register"} variant="default" size="sm">
            Register
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gray-50 px-4 py-24 text-center dark:bg-gray-800">
        <h2 className="mb-4 text-4xl leading-tight font-bold sm:text-5xl">
          Find Your <span className="text-primary">Dream Job</span>
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-base text-gray-600 sm:text-lg dark:text-gray-300">
          Explore thousands of job listings from top companies. Start your
          career today!
        </p>
        <div className="mx-auto flex max-w-2xl flex-col justify-center gap-4 sm:flex-row">
          <Input
            placeholder="Search job title or keyword..."
            className="w-full sm:flex-1"
          />
          <Button size="sm" className="w-full sm:w-auto">
            Search
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 py-20 text-center">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-primary text-3xl font-bold">5,000+</h3>
            <p className="text-gray-600 dark:text-gray-400">Jobs Available</p>
          </div>
          <div>
            <h3 className="text-primary text-3xl font-bold">1,200+</h3>
            <p className="text-gray-600 dark:text-gray-400">Companies</p>
          </div>
          <div>
            <h3 className="text-primary text-3xl font-bold">10,000+</h3>
            <p className="text-gray-600 dark:text-gray-400">Active Users</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-100 px-4 py-20 dark:bg-gray-900">
        <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">
          Popular Categories
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            "IT",
            "Marketing",
            "Logistics",
            "Finance",
            "Education",
            "Healthcare",
            "Retail",
            "HR",
          ].map((cat) => (
            <div
              key={cat}
              className="cursor-pointer rounded-lg bg-white p-5 text-center shadow hover:shadow-md dark:bg-gray-800"
            >
              <h4 className="text-lg font-semibold">{cat}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* For Employers */}
      <section className="bg-primary text-primary-foreground px-4 py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold">Are You Hiring?</h2>
        <p className="mx-auto mb-6 max-w-xl text-base sm:text-lg">
          Post your job and connect with thousands of talented professionals.
        </p>
        <Button variant="secondary">Post a Job</Button>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} JobFinder. All rights reserved.
      </footer>
    </div>
  );
}
