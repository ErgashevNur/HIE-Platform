import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "ru", label: "Русский", flag: "🇷🇺" },
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
    { code: "es", label: "Español", flag: "🇲🇽" },
    { code: "zh", label: "普通话", flag: "🇨🇳" },
    { code: "ur", label: "اردو", flag: "🇵🇰" },
    { code: "pk", label: "Pakistan", flag: "🇵🇰" },
    { code: "bn", label: "বাংলা", flag: "🇧🇩" },
    { code: "fil", label: "Filipino", flag: "🇵🇭" },
    { code: "ph", label: "Philippines", flag: "🇵🇭" },
    { code: "uk", label: "Українська", flag: "🇺🇦" },
  ];

  const currentLang = languages.find((lang) => lang.code === i18n.language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="justify-start">
          {currentLang ? currentLang.flag : "🌐"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
          >
            {lang.flag} {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
