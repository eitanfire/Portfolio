import { Container } from "reactstrap";

// Source of truth: the "Technical Competencies" section of
// public/Eitan-Fire-Resume.pdf. Keep these in sync when the résumé changes.
const competencies = [
  {
    label: "Languages",
    items: "TypeScript, JavaScript, Python, Ruby, Semantic HTML, CSS, SQL",
  },
  {
    label: "Frontend",
    items: "React, React Native, Redux, SolidJS, Mantine UI, Bootstrap, JSX",
  },
  {
    label: "Backend and Data",
    items:
      "Node.js, Express, Ruby on Rails, PostgreSQL, Supabase, Firebase, GraphQL, REST APIs",
  },
  {
    label: "AI and Agents",
    items:
      "Model Context Protocol (MCP), OpenAI API, Google Gemini API, Ollama, whisper.cpp",
  },
  {
    label: "Infrastructure",
    items: "AWS, SST, CI/CD, Git, GitHub",
  },
];

const Technologies = () => {
  return (
    <>
      <h3 className="technologies-utilized-title">Technical Competencies</h3>
      <Container className="technologies p-4">
        {competencies.map(({ label, items }) => (
          <p className="technologies-group" key={label}>
            <span className="technologies-subsection-title">{label}:</span>{" "}
            {items}
          </p>
        ))}
      </Container>
    </>
  );
};

export default Technologies;
