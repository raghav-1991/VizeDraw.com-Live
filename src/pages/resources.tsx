import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"Engineering Drawing Review Guides and Resources | VizeDraw"}
        description={
          "Find drawing readiness checklists, revision control guides, supplier review guidance and a worked drawing review example."
        }
        path={"/resources"}
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
      <Header path={"/resources"} />
      <main id={"main"} className={"page-main"}>
        <div className={"wrap page-hero-wrap"}>
          <section className={"page-hero new-page-hero text-hero"}>
            <div>
              <h1>
                {"Practical guidance."}
                <br />
                {"Better drawing reviews."}
              </h1>
              <p>
                {
                  "Practical guides, checklists, and worked examples for engineering drawing review."
                }
              </p>
            </div>
          </section>
        </div>
        <div className={"wrap"} data-library={""}>
          <div className={"resource-tools"}>
            <label className={"searchbox"}>
              <span aria-hidden={"true"}>{"⌕"}</span>
              <input
                type={"search"}
                placeholder={"Search resources"}
                aria-label={"Search resources"}
              />
            </label>
            <div
              className={"filter-buttons"}
              aria-label={"Filter resources by type"}
            >
              <button data-filter={"All"} aria-pressed={"true"}>
                {"All"}
              </button>
              <button data-filter={"Guides"} aria-pressed={"false"}>
                {"Guides"}
              </button>
              <button data-filter={"Checklist"} aria-pressed={"false"}>
                {"Checklist"}
              </button>
              <button data-filter={"Comparison"} aria-pressed={"false"}>
                {"Comparison"}
              </button>
              <button data-filter={"Worked example"} aria-pressed={"false"}>
                {"Worked example"}
              </button>
            </div>
          </div>
          <p
            className={"resource-count"}
            data-resource-count={""}
            aria-live={"polite"}
          >
            {"6 resources"}
          </p>
          <div className={"resource-grid all-resources"}>
            <a
              className={"resource-card"}
              href={"/resources/drawing-readiness-checklist"}
              data-resource-type={"Checklist"}
            >
              <div className={"editorial-art resource-tool-art"}>
                <figure
                  className={"workflow-scene unique-inner-scene"}
                  data-workflow-scene={""}
                >
                  <img
                    className={"workflow-image"}
                    src={"/assets/inner-project-18-shaft.svg"}
                    width={"1600"}
                    height={"900"}
                    alt={
                      "Roller transmission shaft: Confirm the shoulder location. Illustrative drawing-review workspace."
                    }
                    loading={"lazy"}
                  />
                  <figcaption>
                    {
                      "Roller transmission shaft. Confirm the shoulder location. "
                    }
                    <span>{"Illustrative tool demonstration"}</span>
                  </figcaption>
                </figure>
              </div>
              <h3>{"Manufacturing drawing readiness checklist"}</h3>
              <p>
                {
                  "Check the drawing, revision, open items and authority before the next action."
                }
              </p>
              <span className={"read"}>{"Read the checklist"}</span>
            </a>
            <a
              className={"resource-card"}
              href={"/resources/engineering-drawing-revision-control"}
              data-resource-type={"Guides"}
            >
              <div className={"editorial-art resource-tool-art"}>
                <figure
                  className={"workflow-scene unique-inner-scene"}
                  data-workflow-scene={""}
                >
                  <img
                    className={"workflow-image"}
                    src={"/assets/inner-project-19-flange.svg"}
                    width={"1600"}
                    height={"900"}
                    alt={
                      "Exhaust duct flange: What changed in the outside diameter between Revision A and Revision B? Illustrative drawing-review workspace."
                    }
                    loading={"lazy"}
                  />
                  <figcaption>
                    {
                      "Exhaust duct flange. What changed in the outside diameter between Revision A and Revision B? "
                    }
                    <span>{"Illustrative tool demonstration"}</span>
                  </figcaption>
                </figure>
              </div>
              <h3>{"Engineering drawing revision control guide"}</h3>
              <p>
                {
                  "Keep version identity, review context and authorization clear."
                }
              </p>
              <span className={"read"}>{"Read the guide"}</span>
            </a>
            <a
              className={"resource-card"}
              href={"/resources/supplier-drawing-review-guide"}
              data-resource-type={"Guides"}
            >
              <div className={"editorial-art resource-tool-art"}>
                <figure
                  className={"workflow-scene unique-inner-scene"}
                  data-workflow-scene={""}
                >
                  <img
                    className={"workflow-image"}
                    src={"/assets/inner-project-20-rail.svg"}
                    width={"1600"}
                    height={"900"}
                    alt={
                      "Inspection camera carriage: Clarify the guide-rail mounting pitch. Illustrative drawing-review workspace."
                    }
                    loading={"lazy"}
                  />
                  <figcaption>
                    {
                      "Inspection camera carriage. Clarify the guide-rail mounting pitch. "
                    }
                    <span>{"Illustrative tool demonstration"}</span>
                  </figcaption>
                </figure>
              </div>
              <h3>{"Supplier drawing review guide"}</h3>
              <p>
                {
                  "Make external questions easier to answer and easier to recover."
                }
              </p>
              <span className={"read"}>{"Read the guide"}</span>
            </a>
            <a
              className={"resource-card"}
              href={"/resources/ai-engineering-drawing-review"}
              data-resource-type={"Guides"}
            >
              <div className={"editorial-art resource-tool-art"}>
                <figure
                  className={"workflow-scene unique-inner-scene"}
                  data-workflow-scene={""}
                >
                  <img
                    className={"workflow-image"}
                    src={"/assets/inner-project-21-lug.svg"}
                    width={"1600"}
                    height={"900"}
                    alt={
                      "Crane service lifting eye: Check the plate thickness note. Illustrative drawing-review workspace."
                    }
                    loading={"lazy"}
                  />
                  <figcaption>
                    {
                      "Crane service lifting eye. Check the plate thickness note. "
                    }
                    <span>{"Illustrative tool demonstration"}</span>
                  </figcaption>
                </figure>
              </div>
              <h3>{"AI in engineering drawing review"}</h3>
              <p>
                {
                  "Where AI can assist, and where qualified judgement remains essential."
                }
              </p>
              <span className={"read"}>{"Read the guide"}</span>
            </a>
            <a
              className={"resource-card"}
              href={"/compare/pdm-vs-drawing-collaboration"}
              data-resource-type={"Comparison"}
            >
              <div className={"editorial-art resource-tool-art"}>
                <figure
                  className={"workflow-scene unique-inner-scene"}
                  data-workflow-scene={""}
                >
                  <img
                    className={"workflow-image"}
                    src={"/assets/inner-project-22-guard.svg"}
                    width={"1600"}
                    height={"900"}
                    alt={
                      "Machine safety cover: Confirm the fastener clearance. Illustrative drawing-review workspace."
                    }
                    loading={"lazy"}
                  />
                  <figcaption>
                    {"Machine safety cover. Confirm the fastener clearance. "}
                    <span>{"Illustrative tool demonstration"}</span>
                  </figcaption>
                </figure>
              </div>
              <h3>{"PDM versus drawing collaboration"}</h3>
              <p>
                {
                  "Understand the different roles of your system of record and review workspace."
                }
              </p>
              <span className={"read"}>{"Read the comparison"}</span>
            </a>
            <a
              className={"resource-card"}
              href={"/resources/drawing-review-example"}
              data-resource-type={"Worked example"}
            >
              <div className={"editorial-art resource-tool-art"}>
                <div className={"platform-explainer"}>
                  <div className={"platform-logo"}>
                    <img
                      className={"platform-official-logo"}
                      src={"/assets/official-logo-horizontal-dark.png"}
                      alt={"Official VizeDraw robot with pen and wordmark"}
                      width={"600"}
                      height={"190"}
                    />
                  </div>
                  <div className={"platform-nodes"}>
                    <div>
                      <span>
                        <svg className={"brand-icon"} aria-hidden={"true"}>
                          <use href={"/assets/icons.svg#file-pdf"}></use>
                        </svg>
                      </span>
                      <b>{"Drawing"}</b>
                      <small>{"The source detail"}</small>
                    </div>
                    <div>
                      <span>
                        <svg className={"brand-icon"} aria-hidden={"true"}>
                          <use
                            href={"/assets/icons.svg#chat-circle-dots"}
                          ></use>
                        </svg>
                      </span>
                      <b>{"Review"}</b>
                      <small>{"The shared conversation"}</small>
                    </div>
                    <div>
                      <span>
                        <svg className={"brand-icon"} aria-hidden={"true"}>
                          <use href={"/assets/icons.svg#check-circle"}></use>
                        </svg>
                      </span>
                      <b>{"Response"}</b>
                      <small>{"The recorded explanation"}</small>
                    </div>
                  </div>
                </div>
              </div>
              <h3>{"One drawing question, from source to outcome"}</h3>
              <p>
                {
                  "Follow DEMO-104 through clarification, revision and the next handoff."
                }
              </p>
              <span className={"read"}>{"Read the example"}</span>
            </a>
          </div>
          <p className={"empty-results"} hidden={true}>
            {
              "No resources match your search. Try a broader term or select All."
            }
          </p>
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
