import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCss3,
  faFigma,
  faGit,
  faGithub,
  faHtml5,
  faJs,
  faLinkedin,
  faLinux,
  faMdb,
  faNodeJs,
  faNotion,
  faOpenai,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faCode,
  faDatabase,
  faFilePdf,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

// Initialize library with only used icons
library.add(
  // Brands
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faMdb,
  faGit,
  faLinux,
  faOpenai,
  faFigma,
  faNotion,
  faGithub,
  faLinkedin,
  // Solid
  faDatabase,
  faCode,
  faMagnifyingGlass,
  faChevronLeft,
  faFilePdf,
);
