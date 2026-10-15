import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"AI in engineering drawing review | VizeDraw"}
        description={
          "AI can help people inspect, compare and retrieve information from drawing packages. It should make the review easier to perform, not hide the source or create false confidence."
        }
        path={"/resources/ai-engineering-drawing-review"}
        styles={[
          "/assets/site.css",
          "/assets/redesign.css",
          "/assets/drawing.css",
          "/assets/components.css",
          "/assets/experience.css",
          "/assets/brand.css",
          "/assets/workflows.css",
          "/assets/unique.css",
          "/assets/site-polish.css",
        ]}
      />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header path={"/resources/ai-engineering-drawing-review"} />
      <main id={"main"} className={"page-main"}>
        <div className={"wrap page-hero-wrap"}>
          <section className={"page-hero new-page-hero screen-page-hero"}>
            <div>
              <h1>
                {"AI-assisted"}
                <br />
                {"drawing review."}
              </h1>
              <p>
                {
                  "Use enabled AI tools to find drawing information and assist review. Keep the source drawing available to check each result."
                }
              </p>
            </div>
            <div className={"subpage-screen"}>
              <figure
                className={"workflow-scene unique-inner-scene"}
                data-workflow-scene={""}
              >
                <img
                  className={"workflow-image"}
                  src={"/assets/inner-project-15-guard.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Packaging machine guard: Identify the service access panel. Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {
                    "Packaging machine guard. Identify the service access panel. "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
                <a
                  className={"scene-expand"}
                  href={"/assets/inner-project-15-guard.svg"}
                  target={"_blank"}
                  rel={"noopener"}
                  aria-label={"Open full-size drawing demonstration"}
                >
                  {"View detail "}
                  <svg className={"brand-icon"} aria-hidden={"true"}>
                    <use href={"/assets/icons.svg#arrow-up-right"}></use>
                  </svg>
                </a>
              </figure>
            </div>
          </section>
        </div>
        <div className={"wrap article-layout"}>
          <aside className={"toc"}>
            <a href={"#where-ai-can-help-h"}>{"Where AI can help"}</a>
            <a href={"#what-ai-cannot-establish-by-itself-h"}>
              {"What AI cannot establish by itself"}
            </a>
            <a href={"#a-responsible-review-pattern-h"}>
              {"A responsible review pattern"}
            </a>
            <a href={"#how-vizedraw-positions-ai-h"}>
              {"How VizeDraw positions AI"}
            </a>
          </aside>
          <article className={"article-content visual-article"}>
            <article className={"article__body"}>
              <h2 id={"where-ai-can-help"}>{"Where AI can help"}</h2>
              <ul>
                <li>
                  <span>
                    {
                      "Highlight potential differences between drawing versions."
                    }
                  </span>
                </li>
                <li>
                  <span>
                    {
                      "Assist retrieval of supported text, notes or recorded review information."
                    }
                  </span>
                </li>
                <li>
                  <span>
                    {
                      "Organize information for a qualified reviewer to inspect."
                    }
                  </span>
                </li>
                <li>
                  <span>
                    {
                      "Surface possible open items that still require human disposition."
                    }
                  </span>
                </li>
              </ul>
              <h2 id={"what-ai-cannot-establish-by-itself"}>
                {"What AI cannot establish by itself"}
              </h2>
              <ul>
                <li>
                  <span>
                    {
                      "Why the designer made a change when that reason was never recorded."
                    }
                  </span>
                </li>
                <li>
                  <span>
                    {
                      "Whether every meaningful technical change has been detected."
                    }
                  </span>
                </li>
                <li>
                  <span>
                    {
                      "Which revision is authorized for a particular job or configuration."
                    }
                  </span>
                </li>
                <li>
                  <span>
                    {
                      "Whether a drawing is technically correct, compliant or safe to manufacture."
                    }
                  </span>
                </li>
                <li>
                  <span>
                    {
                      "Whether a person has the authority to approve or release the work."
                    }
                  </span>
                </li>
              </ul>
              <h2 id={"a-responsible-review-pattern"}>
                {"A responsible review pattern"}
              </h2>
              <ol>
                <li>
                  <span aria-hidden={"true"}></span>
                  <p>{"Keep the source drawing and revision visible."}</p>
                </li>
                <li>
                  <span aria-hidden={"true"}></span>
                  <p>
                    {
                      "Present AI output as an aid or suggestion, not as established fact."
                    }
                  </p>
                </li>
                <li>
                  <span aria-hidden={"true"}></span>
                  <p>
                    {
                      "Let the reviewer inspect the relevant detail and supporting evidence."
                    }
                  </p>
                </li>
                <li>
                  <span aria-hidden={"true"}></span>
                  <p>
                    {"Record the human response, disposition and next action."}
                  </p>
                </li>
                <li>
                  <span aria-hidden={"true"}></span>
                  <p>
                    {
                      "Measure usefulness against missed items, false positives and time saved in the real workflow."
                    }
                  </p>
                </li>
              </ol>
              <h2 id={"how-vizedraw-positions-ai"}>
                {"How VizeDraw positions AI"}
              </h2>
              <p>
                <span>
                  {
                    "Core drawing review does not require AI. AI-assisted features and credit allowances depend on the selected plan. The value of any capability should be tested on representative, permitted drawings before it becomes part of a controlled process."
                  }
                </span>
              </p>
              <a className={"btn secondary"} href={"/features"}>
                {"See VizeDraw features"}
              </a>
              <a className={"btn secondary"} href={"/contact"}>
                {"Request an AI workflow demo"}
              </a>
            </article>
          </article>
        </div>
        <section className={"closing"}>
          <div className={"wrap closing-inner"}>
            <div>
              <h2>
                {"Put your next drawing"}
                <br />
                {"in the conversation."}
              </h2>
              <p>{"See how VizeDraw fits the way your team reviews."}</p>
            </div>
            <div className={"actions"}>
              <a
                className={"button prominent"}
                href={"https://app.vizedraw.com/signup"}
              >
                {"Try VizeDraw "}
                <svg className={"brand-icon"} aria-hidden={"true"}>
                  <use href={"/assets/icons.svg#arrow-up-right"}></use>
                </svg>
              </a>
              <a className={"demo-link"} href={"/contact"}>
                {"Book a demo"}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Runtime
        scripts={[
          "/assets/site.js",
          "/assets/experience.js",
          "/assets/brand.js",
          "/assets/workflows.js",
          "/assets/unique.js",
        ]}
      />
    </>
  );
}
