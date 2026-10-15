import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"Drawing Intelligence Workspace for Engineering | VizeDraw"}
        description={
          "A dedicated workspace for PDF drawings, markups, revision review and recorded decisions."
        }
        path={"/product"}
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
      <Header path={"/product"} />
      <main id={"main"}>
        <section className={"workflow-page-intro product-intro"}>
          <div className={"wrap"}>
            <div className={"workflow-intro-copy"}>
              <h1>
                {"The drawing."}
                <br />
                {"The review."}
                <br />
                {"The response."}
              </h1>
              <p>
                {
                  "A shared workspace for engineering drawing review. Mark up a detail, compare revisions, and keep technical clarifications with their source."
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
                  src={"/assets/inner-project-11-shaft.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Mixer spindle: Check the keyway length before machining. Illustrative drawing-review workspace."
                  }
                  loading={"eager"}
                  fetchPriority={"high"}
                />
                <figcaption>
                  {"Mixer spindle. Check the keyway length before machining. "}
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
                <a
                  className={"scene-expand"}
                  href={"/assets/inner-project-11-shaft.svg"}
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
              <h2>{"Ask at the detail."}</h2>
              <p>
                {
                  "A markup gives the question a location. The drawing and review comment stay visible together."
                }
              </p>
              <a
                className={"workflow-link"}
                href={"/use-cases/engineering-drawing-review"}
              >
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
                  src={"/assets/inner-project-12-flange.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Filter vessel nozzle: Check the nozzle fastening pattern. Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {"Filter vessel nozzle. Check the nozzle fastening pattern. "}
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
                <a
                  className={"scene-expand"}
                  href={"/assets/inner-project-12-flange.svg"}
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
          <section className={"workflow-row workflow-reverse"}>
            <div className={"workflow-copy"}>
              <h2>{"See what changed."}</h2>
              <p>
                {
                  "Compare the earlier and revised detail before deciding what the review needs next."
                }
              </p>
              <a
                className={"workflow-link"}
                href={"/use-cases/drawing-revision-review"}
              >
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
                  src={"/assets/inner-project-13-rail.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Sensor carrier beam: What changed in the rail length between Revision A and Revision B? Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {
                    "Sensor carrier beam. What changed in the rail length between Revision A and Revision B? "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
                <a
                  className={"scene-expand"}
                  href={"/assets/inner-project-13-rail.svg"}
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
          <section className={"workflow-row "}>
            <div className={"workflow-copy"}>
              <h2>
                {"Keep the response"}
                <br />
                {"with its source."}
              </h2>
              <p>
                {
                  "Record the clarification with the drawing revision it refers to, ready for the next reviewer."
                }
              </p>
              <a
                className={"workflow-link"}
                href={"/resources/drawing-review-example"}
              >
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
                  src={"/assets/inner-project-14-lug.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Fixture lifting bracket: Clarify the bracket mounting detail. Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {
                    "Fixture lifting bracket. Clarify the bracket mounting detail. "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
              </figure>
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
