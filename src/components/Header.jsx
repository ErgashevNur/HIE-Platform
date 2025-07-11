import {
  Badge,
  Bell,
  Briefcase,
  FileUser,
  Globe,
  Heart,
  MessageSquare,
  Plus,
  Search,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import path from "path";
import LanguageSelector from "./LanguageSelector";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function Header() {
  const headerIcons = [
    { icon: Briefcase, path: "/home", text: "Ish qidirish" },
    { icon: FileUser, path: "/resumes", text: "Resyumelar" },
    { icon: Badge, path: "/certificates", text: "CV ish e'lonlari" },
    { icon: Plus, path: "/post-job", text: "Vakansiya qo'shish" },
    // { icon: MessageSquare, path: "/messages" },
  ];

  const headerActions = [
    {
      icon: Heart,
      key: "heart",
      path: "/favorites",
    },
    {
      icon: Bell,
      key: "bell",
      path: "/notifications",
    },
  ];

  return (
    <header className="bg-white shadow-sm dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-cyan-600 font-bold text-cyan-600">
              XIE
            </span>
          </div>

          <nav>
            <ul className="flex items-center gap-8">
              {headerIcons.map(({ icon: Icon, path, text }, index) => (
                <li key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Link to={path}>
                          <Icon className="h-8 w-8" />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{text}</p>
                    </TooltipContent>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            <ul className="flex items-center gap-5">
              <li className="flex items-center gap-3">
                <Input
                  className="w-full rounded-md border-2 p-2 hover:bg-gray-100 focus:ring-2 focus:ring-cyan-600 focus:outline-none dark:hover:bg-gray-700"
                  placeholder="Search..."
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Search className="h-6 w-6" />
                </Button>
              </li>

              <LanguageSelector />

              {headerActions.map(({ icon: Icon, key, path }) => (
                <li key={key}>
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Link to={path}>
                      <Icon className="h-6 w-6" />
                    </Link>
                  </Button>
                </li>
              ))}

              <li>
                <ModeToggle />
              </li>
            </ul>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <User className="h-5 w-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
