import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"Engineering Drawing Review Features | VizeDraw"}
        description={
          "Explore PDF drawing review, markups, comparison, revision management, collaboration, search, measurement and AI-assisted review."
        }
        path={"/features"}
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
      <Header path={"/features"} />
      <main id={"main"} className={"page-main"}>
        <div className={"wrap page-hero-wrap"}>
          <section
            className={"page-hero new-page-hero screen-page-hero hero-features"}
          >
            <div>
              <h1>
                {"The tools behind"}
                <br />
                {"a better review."}
              </h1>
              <p>
                {
                  "Navigation, markups, revision context and collaboration, organized around the drawing under review."
                }
              </p>
              <div className={"actions"}>
                <a
                  className={"button"}
                  href={"https://app.vizedraw.com/signup"}
                >
                  {"Try VizeDraw "}
                  <svg className={"brand-icon"} aria-hidden={"true"}>
                    <use href={"/assets/icons.svg#arrow-up-right"}></use>
                  </svg>
                </a>
                <a className={"button outline"} href={"/pricing"}>
                  {"Compare plans"}
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
                  src={"/assets/inner-project-04-shaft.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Conveyor drive shaft: Clarify the bearing-seat tolerance. Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {"Conveyor drive shaft. Clarify the bearing-seat tolerance. "}
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
                <a
                  className={"scene-expand"}
                  href={"/assets/inner-project-04-shaft.svg"}
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
        <section className={"wrap feature-showcase"}>
          <a className={"feature-showcase-card"} href={"/product"}>
            <div className={"showcase-image"}>
              <figure
                className={"workflow-scene unique-inner-scene"}
                data-workflow-scene={""}
              >
                <img
                  className={"workflow-image"}
                  src={"/assets/inner-project-05-flange.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Water treatment flange: Confirm the bolt-circle diameter. Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {"Water treatment flange. Confirm the bolt-circle diameter. "}
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
              </figure>
            </div>
            <div>
              <h2>{"Mark up the detail."}</h2>
              <p>
                {
                  "Place a question beside the part of the drawing that needs attention."
                }
              </p>
              <span>{"Explore ↗"}</span>
            </div>
          </a>
          <a
            className={"feature-showcase-card"}
            href={"/use-cases/drawing-revision-review"}
          >
            <div className={"showcase-image"}>
              <figure
                className={"workflow-scene unique-inner-scene"}
                data-workflow-scene={""}
              >
                <img
                  className={"workflow-image"}
                  src={"/assets/inner-project-06-rail.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Instrument mounting rail: What changed in the rail length between Revision A and Revision B? Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {
                    "Instrument mounting rail. What changed in the rail length between Revision A and Revision B? "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
              </figure>
            </div>
            <div>
              <h2>{"Compare revisions."}</h2>
              <p>
                {
                  "See earlier and updated drawings together before the review moves on."
                }
              </p>
              <span>{"Explore ↗"}</span>
            </div>
          </a>
          <a
            className={"feature-showcase-card"}
            href={"/resources/drawing-review-example"}
          >
            <div className={"showcase-image"}>
              <figure
                className={"workflow-scene unique-inner-scene"}
                data-workflow-scene={""}
              >
                <img
                  className={"workflow-image"}
                  src={"/assets/inner-project-07-lug.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Lifting lug assembly: Confirm the lifting-eye hole diameter. Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {
                    "Lifting lug assembly. Confirm the lifting-eye hole diameter. "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
              </figure>
            </div>
            <div>
              <h2>{"Keep the response."}</h2>
              <p>
                {
                  "Connect the recorded explanation to the source drawing and revision."
                }
              </p>
              <span>{"Explore ↗"}</span>
            </div>
          </a>
          <a className={"feature-showcase-card"} href={"/drawing-knowledge"}>
            <div className={"showcase-image"}>
              <figure
                className={"workflow-scene unique-inner-scene"}
                data-workflow-scene={""}
              >
                <img
                  className={"workflow-image"}
                  src={"/assets/inner-project-08-guard.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Cooling fan shroud: Clarify the removable access opening. Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {"Cooling fan shroud. Clarify the removable access opening. "}
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
              </figure>
            </div>
            <div>
              <h2>{"Find drawing knowledge."}</h2>
              <p>
                {
                  "Recover the drawing and the context behind an earlier decision."
                }
              </p>
              <span>{"Explore ↗"}</span>
            </div>
          </a>
          <a className={"feature-showcase-card"} href={"/use-cases"}>
            <div className={"showcase-image"}>
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
                        <use href={"/assets/icons.svg#chat-circle-dots"}></use>
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
            <div>
              <h2>{"Bring people into the review."}</h2>
              <p>
                {
                  "Give engineering, suppliers and quality a shared drawing context."
                }
              </p>
              <span>{"Explore ↗"}</span>
            </div>
          </a>
          <a className={"feature-showcase-card"} href={"/enterprise"}>
            <div className={"showcase-image"}>
              <figure
                className={"workflow-scene unique-inner-scene"}
                data-workflow-scene={""}
              >
                <img
                  className={"workflow-image"}
                  src={"/assets/inner-project-09-pipe.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Hydraulic return manifold: Identify the return connection location. Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {
                    "Hydraulic return manifold. Identify the return connection location. "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
              </figure>
            </div>
            <div>
              <h2>{"Discuss project access."}</h2>
              <p>
                {
                  "Plan who needs access to your drawing packages and review workflows."
                }
              </p>
              <span>{"Explore ↗"}</span>
            </div>
          </a>
        </section>
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
