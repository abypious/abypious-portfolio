import PageTemplate from "../../components/PageTemplate";
import AboutCard from "./AboutCard";

export default function AboutPage() {
  return (
    <PageTemplate 
      title="About Me"
      helpText="Click the circular profile to expand/collapse the card">
      <div className="flex justify-center items-center min-h-[70vh] sm:min-h-[80vh] px-4">
        <AboutCard scale={1.2} />
      </div>
    </PageTemplate>
  );
}
