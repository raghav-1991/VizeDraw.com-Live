import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"Supplier and customer review | VizeDraw"}
        description={
          "VizeDraw helps teams review drawings with suppliers and customers without separating the package, question, response and outcome across unrelated messages."
        }
        path={"/use-cases/external-drawing-review"}
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
      <Header path={"/use-cases/external-drawing-review"} />
      <main id={"main"}>
        <section className={"workflow-page-intro solution-supplier"}>
          <div className={"wrap"}>
            <div className={"workflow-intro-copy"}>
              <h1>{"Give external feedback a shared home."}</h1>
              <p>
                {
                  "Keep supplier questions and engineering responses with the package under review, so the drawing remains the point of reference."
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
                  src={"/assets/inner-project-30-pipe.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Steam condensate support: Check the support location on the line. Illustrative drawing-review workspace."
                  }
                  loading={"eager"}
                  fetchPriority={"high"}
                />
                <figcaption>
                  {
                    "Steam condensate support. Check the support location on the line. "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
                <a
                  className={"scene-expand"}
                  href={"/assets/inner-project-30-pipe.svg"}
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
                  src={"/assets/inner-project-31-panel.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Telemetry instrument panel: Clarify the display cut-out size. Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {
                    "Telemetry instrument panel. Clarify the display cut-out size. "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
              </figure>
            </div>
          </section>
          <section className={"workflow-row workflow-reverse"}>
            <div className={"workflow-copy"}>
              <h2>{"Close the loop with the source in view."}</h2>
              <p>
                {
                  "Connect the engineering response to the drawing and revision discussed with the supplier."
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
                  src={"/assets/inner-project-32-shaft.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Rotary indexing spindle: Confirm the stepped journal dimensions. Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {
                    "Rotary indexing spindle. Confirm the stepped journal dimensions. "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
                <a
                  className={"scene-expand"}
                  href={"/assets/inner-project-32-shaft.svg"}
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
