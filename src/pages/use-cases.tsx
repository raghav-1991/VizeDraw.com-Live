import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"Engineering Drawing Review Use Cases | VizeDraw"}
        description={
          "Explore engineering review, revision comparison, supplier and customer review, and production and quality handoffs."
        }
        path={"/use-cases"}
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
      <Header path={"/use-cases"} />
      <main id={"main"}>
        <section className={"workflow-page-intro solutions-intro"}>
          <div className={"wrap"}>
            <div className={"workflow-intro-copy"}>
              <h1>
                {"Drawing reviews that"}
                <br />
                {"work across teams."}
              </h1>
              <p>
                {
                  "From engineering feedback to supplier clarification and production handoff, keep the drawing and its review context together."
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
                  src={"/assets/inner-project-33-flange.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Irrigation valve adaptor: Clarify the adapter bore diameter. Illustrative drawing-review workspace."
                  }
                  loading={"eager"}
                  fetchPriority={"high"}
                />
                <figcaption>
                  {
                    "Irrigation valve adaptor. Clarify the adapter bore diameter. "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
                <a
                  className={"scene-expand"}
                  href={"/assets/inner-project-33-flange.svg"}
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
        <section className={"wrap workflow-directory"}>
          <h2>{"Find your review workflow."}</h2>
          <nav aria-label={"Drawing review workflows"}>
            <a href={"#engineering-drawing-review"}>
              {"Engineering drawing review"}
              <svg className={"brand-icon"} aria-hidden={"true"}>
                <use href={"/assets/icons.svg#arrow-right"}></use>
              </svg>
            </a>
            <a href={"#drawing-revision-review"}>
              {"Drawing revision review"}
              <svg className={"brand-icon"} aria-hidden={"true"}>
                <use href={"/assets/icons.svg#arrow-right"}></use>
              </svg>
            </a>
            <a href={"#external-drawing-review"}>
              {"Supplier and customer review"}
              <svg className={"brand-icon"} aria-hidden={"true"}>
                <use href={"/assets/icons.svg#arrow-right"}></use>
              </svg>
            </a>
            <a href={"#production-quality-handoff"}>
              {"Production and quality handoff"}
              <svg className={"brand-icon"} aria-hidden={"true"}>
                <use href={"/assets/icons.svg#arrow-right"}></use>
              </svg>
            </a>
          </nav>
        </section>
        <div className={"wrap workflow-rows"}>
          <div id={"engineering-drawing-review"}>
            <section className={"workflow-row "}>
              <div className={"workflow-copy"}>
                <h2>{"Make feedback specific."}</h2>
                <p>
                  {
                    "Review design intent on the source drawing. Put technical questions beside the detail and keep the response connected to it."
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
                    src={"/assets/inner-project-34-rail.svg"}
                    width={"1600"}
                    height={"900"}
                    alt={
                      "Material testing slide: Check the carriage mounting detail. Illustrative drawing-review workspace."
                    }
                    loading={"lazy"}
                  />
                  <figcaption>
                    {
                      "Material testing slide. Check the carriage mounting detail. "
                    }
                    <span>{"Illustrative tool demonstration"}</span>
                  </figcaption>
                  <a
                    className={"scene-expand"}
                    href={"/assets/inner-project-34-rail.svg"}
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
          <div id={"drawing-revision-review"}>
            <section className={"workflow-row workflow-reverse"}>
              <div className={"workflow-copy"}>
                <h2>{"A changed detail deserves a closer look."}</h2>
                <p>
                  {
                    "Compare the relevant revisions and check how a change affects the question raised in the earlier review."
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
                    src={"/assets/inner-project-35-lug.svg"}
                    width={"1600"}
                    height={"900"}
                    alt={
                      "Transport frame lug: What changed in the lifting-eye bore between Revision A and Revision B? Illustrative drawing-review workspace."
                    }
                    loading={"lazy"}
                  />
                  <figcaption>
                    {
                      "Transport frame lug. What changed in the lifting-eye bore between Revision A and Revision B? "
                    }
                    <span>{"Illustrative tool demonstration"}</span>
                  </figcaption>
                  <a
                    className={"scene-expand"}
                    href={"/assets/inner-project-35-lug.svg"}
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
          <div id={"external-drawing-review"}>
            <section className={"workflow-row "}>
              <div className={"workflow-copy"}>
                <h2>{"Give external feedback a shared home."}</h2>
                <p>
                  {
                    "Keep supplier questions and engineering responses with the package under review, so the drawing remains the point of reference."
                  }
                </p>
                <a
                  className={"workflow-link"}
                  href={"/use-cases/external-drawing-review"}
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
                    src={"/assets/inner-project-36-guard.svg"}
                    width={"1600"}
                    height={"900"}
                    alt={
                      "Dust collection service cover: Check the cover fixing centres. Illustrative drawing-review workspace."
                    }
                    loading={"lazy"}
                  />
                  <figcaption>
                    {
                      "Dust collection service cover. Check the cover fixing centres. "
                    }
                    <span>{"Illustrative tool demonstration"}</span>
                  </figcaption>
                </figure>
              </div>
            </section>
          </div>
          <div id={"production-quality-handoff"}>
            <section className={"workflow-row workflow-reverse"}>
              <div className={"workflow-copy"}>
                <h2>{"Carry the clarification into the handoff."}</h2>
                <p>
                  {
                    "Give downstream teams the applicable drawing revision, the recorded response and any questions that remain."
                  }
                </p>
                <a
                  className={"workflow-link"}
                  href={"/use-cases/production-quality-handoff"}
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
                    src={"/assets/inner-project-37-pipe.svg"}
                    width={"1600"}
                    height={"900"}
                    alt={
                      "Cooling circuit manifold: Confirm the outlet spacing. Illustrative drawing-review workspace."
                    }
                    loading={"lazy"}
                  />
                  <figcaption>
                    {"Cooling circuit manifold. Confirm the outlet spacing. "}
                    <span>{"Illustrative tool demonstration"}</span>
                  </figcaption>
                </figure>
              </div>
            </section>
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
