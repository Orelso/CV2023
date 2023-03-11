import Intro from "./Intro";
import MediaCard from "./DigitalWork/DigitalWork";
import Contact from "./ContactSection";
import CvReferences from "./CvRecLetters";
export const navItems = [
  { elementId: "intro", title: "Intro", Component: <Intro /> },
  {
    elementId: "digital-work",
    title: "Digital Work",
    Component: <MediaCard />,
  },
  { elementId: "cv", title: "CV", Component: <CvReferences /> },
  { elementId: "contact", title: "Contact", Component: <Contact /> },
];
