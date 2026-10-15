import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"Production and quality handoff | VizeDraw"}
        description={
          "VizeDraw helps production and quality reviewers see the applicable drawing, relevant clarification, open issue and recorded outcome before the next stage begins."
        }
        path={"/use-cases/production-quality-handoff"}
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
      <Header path={"/use-cases/production-quality-handoff"} />
      <main id={"main"}>
        <section className={"workflow-page-intro solution-quality"}>
          <div className={"wrap"}>
            <div className={"workflow-intro-copy"}>
              <h1>{"Carry the clarification into the handoff."}</h1>
              <p>
                {
                  "Give downstream teams the applicable drawing revision, the recorded response and any questions that remain."
                }
              </p>
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
            <div className={"intro-workspace"}>
              <figure
                className={"workflow-scene unique-inner-scene"}
                data-workflow-scene={""}
              >
                <img
                  className={"workflow-image"}
                  src={"/assets/inner-project-38-panel.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Operator station enclosure: Check the emergency-stop cut-out. Illustrative drawing-review workspace."
                  }
                  loading={"eager"}
                  fetchPriority={"high"}
                />
                <figcaption>
                  {
                    "Operator station enclosure. Check the emergency-stop cut-out. "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
                <a
                  className={"scene-expand"}
                  href={"/assets/inner-project-38-panel.svg"}
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
          </div>
        </section>
        <div className={"wrap workflow-rows"}>
          <section className={"workflow-row "}>
            <div className={"workflow-copy"}>
              <h2>
                {"A question beside"}
                <br />
                {"the detail."}
              </h2>
              <p>
                {
                  "In the example, a reviewer identifies a specific drawing detail instead of starting a separate conversation without its source."
                }
              </p>
              <a
                className={"workflow-link"}
                href={"/resources/drawing-review-example"}
              >
                {"Follow the review example"}
                <svg className={"brand-icon"} aria-hidden={"true"}>
                  <use href={"/assets/icons.svg#arrow-right"}></use>
                </svg>
              </a>
            </div>
            <div className={"workflow-media"}>
              <figure
                className={"workflow-scene unique-inner-scene"}
                data-workflow-scene={""}
              >
                <img
                  className={"workflow-image"}
                  src={"/assets/inner-project-39-shaft.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Precision winding mandrel: Clarify the mandrel datum location. Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {
                    "Precision winding mandrel. Clarify the mandrel datum location. "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
              </figure>
            </div>
          </section>
          <section className={"workflow-row workflow-reverse"}>
            <div className={"workflow-copy"}>
              <h2>{"Find the clarification before work moves on."}</h2>
              <p>
                {
                  "Recover the question, response and source revision when a detail needs another look."
                }
              </p>
              <a className={"workflow-link"} href={"/product"}>
                {"Explore the workflow"}
                <svg className={"brand-icon"} aria-hidden={"true"}>
                  <use href={"/assets/icons.svg#arrow-right"}></use>
                </svg>
              </a>
            </div>
            <div className={"workflow-media"}>
              <figure
                className={"workflow-scene unique-inner-scene"}
                data-workflow-scene={""}
              >
                <img
                  className={"workflow-image"}
                  src={"/assets/inner-project-40-flange.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Vacuum pump mounting flange: Confirm the circular fixing pattern. Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {
                    "Vacuum pump mounting flange. Confirm the circular fixing pattern. "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
                <a
                  className={"scene-expand"}
                  href={"/assets/inner-project-40-flange.svg"}
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
          <section className={"workflow-next"}>
            <h2>{"Start with one drawing package."}</h2>
            <p>
              {
                "Choose a drawing, identify the applicable revision, and invite the people who need to review it."
              }
            </p>
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
          </section>
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
