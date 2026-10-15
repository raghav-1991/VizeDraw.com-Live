import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"Drawing revision review | VizeDraw"}
        description={
          "Drawing comparison can reveal a difference. The team still needs to understand its effect, identify who must respond and decide whether an earlier answer remains valid."
        }
        path={"/use-cases/drawing-revision-review"}
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
      <Header path={"/use-cases/drawing-revision-review"} />
      <main id={"main"}>
        <section className={"workflow-page-intro solution-compare"}>
          <div className={"wrap"}>
            <div className={"workflow-intro-copy"}>
              <h1>{"A changed detail deserves a closer look."}</h1>
              <p>
                {
                  "Compare the relevant revisions and check how a change affects the question raised in the earlier review."
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
                  src={"/assets/inner-project-24-panel.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Drive cabinet backplate: What changed in the panel width between Revision A and Revision B? Illustrative drawing-review workspace."
                  }
                  loading={"eager"}
                  fetchPriority={"high"}
                />
                <figcaption>
                  {
                    "Drive cabinet backplate. What changed in the panel width between Revision A and Revision B? "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
                <a
                  className={"scene-expand"}
                  href={"/assets/inner-project-24-panel.svg"}
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
                  src={"/assets/inner-project-25-shaft.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Feed screw drive spindle: What changed in the overall length between Revision A and Revision B? Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {
                    "Feed screw drive spindle. What changed in the overall length between Revision A and Revision B? "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
                <a
                  className={"scene-expand"}
                  href={"/assets/inner-project-25-shaft.svg"}
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
              <h2>{"Keep the explanation with the update."}</h2>
              <p>
                {
                  "Record which revision answers the question so another reviewer can recover the same context."
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
                  src={"/assets/inner-project-26-flange.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Heat exchanger connection: Confirm the mating bolt-hole pattern. Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {
                    "Heat exchanger connection. Confirm the mating bolt-hole pattern. "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
                <a
                  className={"scene-expand"}
                  href={"/assets/inner-project-26-flange.svg"}
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
