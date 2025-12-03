import PageTemplate from "../../components/PageTemplate";
import AboutCard from "./AboutCard";

export default function AboutPage() {
  return (
    <PageTemplate
      title="About Me"
      helpText="Tap / click the circular profile to expand/collapse the card"
    >
      <div className="flex justify-center items-center min-h-[60vh] sm:min-h-[70vh] px-2 sm:px-4">
        <AboutCard />
      </div>
    </PageTemplate>
  );
}
