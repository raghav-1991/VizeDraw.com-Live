import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"What Is Drawing Knowledge? | VizeDraw"}
        description={
          "Drawing knowledge is the recorded context around a drawing: changes, questions, responses, decisions and next actions."
        }
        path={"/drawing-knowledge"}
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
      <Header path={"/drawing-knowledge"} />
      <main id={"main"} className={"page-main"}>
        <div className={"wrap page-hero-wrap"}>
          <section
            className={
              "page-hero new-page-hero screen-page-hero hero-drawing-knowledge"
            }
          >
            <div>
              <h1>
                {"Drawing knowledge,"}
                <br />
                {"kept in context."}
              </h1>
              <p>
                {
                  "Keep the drawing, the review conversation, and the recorded explanation connected as the work progresses."
                }
              </p>
              <div className={"actions"}>
                <a
                  className={"button"}
                  href={"/resources/drawing-review-example"}
                >
                  {"See a worked example"}
                </a>
              </div>
            </div>
            <div className={"subpage-screen"}>
              <figure
                className={"workflow-scene unique-inner-scene"}
                data-workflow-scene={""}
              >
                <img
                  className={"workflow-image"}
                  src={"/assets/inner-project-02-pipe.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Process skid pipe support: Confirm the pipe centreline height. Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {
                    "Process skid pipe support. Confirm the pipe centreline height. "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
                <a
                  className={"scene-expand"}
                  href={"/assets/inner-project-02-pipe.svg"}
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
        <div className={"wrap section"}>
          <section className={"feature-row reveal"}>
            <h2>{"The source"}</h2>
            <p>{"The drawing, sheet, detail and applicable revision."}</p>
          </section>
          <section className={"feature-row reveal"}>
            <h2>{"The discussion"}</h2>
            <p>{"The question, reviewer, response and supporting evidence."}</p>
          </section>
          <section className={"feature-row reveal"}>
            <h2>{"The outcome"}</h2>
            <p>
              {"What was clarified, changed, accepted, rejected or left open."}
            </p>
          </section>
          <section className={"feature-row reveal"}>
            <h2>{"The next action"}</h2>
            <p>
              {"Who needs the outcome and which process authorizes the work."}
            </p>
          </section>
          <div className={"stack"}>
            <div>
              <h3>
                {"Fits around the systems"}
                <br />
                {"you already use."}
              </h3>
              <p>
                {
                  "Keep your CAD, PDM, PLM, QMS and production systems. Add a shared place for drawing questions, markups and recorded decisions."
                }
              </p>
            </div>
            <div
              className={"stack-diagram"}
              aria-label={
                "VizeDraw supports drawing collaboration alongside CAD, PDM, PLM, QMS and production systems"
              }
            >
              <div>{"CAD"}</div>
              <div>{"PDM"}</div>
              <div>{"PLM"}</div>
              <div>{"QMS"}</div>
              <div>{"Production"}</div>
              <strong>
                {"VizeDraw"}
                <small>{"QUESTIONS · MARKUPS · DECISIONS"}</small>
              </strong>
            </div>
          </div>
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
