import ReactMarkdown from "react-markdown";
import intro from "./docs/intro.md?raw";

export default function DocsPage() {
    return (
        <div className="prose max-w-none">
            <ReactMarkdown>{intro}</ReactMarkdown>
        </div>
    );
}
