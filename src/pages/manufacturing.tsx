import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"Drawing Collaboration for Manufacturing Teams | VizeDraw"}
        description={
          "Keep drawing review context connected across engineering, suppliers, customers, production and quality."
        }
        path={"/manufacturing"}
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
      <Header path={"/manufacturing"} />
      <main id={"main"} className={"page-main"}>
        <div className={"wrap page-hero-wrap"}>
          <section
            className={
              "page-hero new-page-hero screen-page-hero hero-manufacturing"
            }
          >
            <div>
              <h1>
                {"From drawing review"}
                <br />
                {"to the shop floor."}
              </h1>
              <p>
                {
                  "A team may receive the latest drawing without the clarification behind it. Give engineering, suppliers, production and quality a common source for the review."
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
                <a className={"button outline"} href={"/contact"}>
                  {"Book a demo"}
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
                  src={"/assets/inner-project-10-panel.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Motor terminal enclosure: Confirm the cable-entry position. Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {
                    "Motor terminal enclosure. Confirm the cable-entry position. "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
                <a
                  className={"scene-expand"}
                  href={"/assets/inner-project-10-panel.svg"}
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
        <div className={"wrap manufacturing-content"}>
          <div>
            <h2>
              {"Drawings move."}
              <br />
              {"Context should follow."}
            </h2>
            <p>
              {
                "Engineering explains the requirement. Manufacturing evaluates process impact. Quality raises an inspection question. A supplier asks for clarification."
              }
            </p>
            <p>
              {
                "VizeDraw gives those participants a shared place to review the drawing, while your authorized process determines whether work can proceed."
              }
            </p>
            <a
              className={"text-link"}
              href={"/resources/drawing-readiness-checklist"}
            >
              {"Use the readiness checklist"}
            </a>
          </div>
          <ul className={"industries"}>
            <li>
              <h3>{"Custom machinery and equipment"}</h3>
              <p>
                {
                  "Follow customer comments, supplier questions and assembly changes through order-specific drawing packages."
                }
              </p>
            </li>
            <li>
              <h3>{"Precision machining"}</h3>
              <p>
                {
                  "Review customer drawing revisions before quoting, programming, machining or inspection."
                }
              </p>
            </li>
            <li>
              <h3>{"Fabrication and tooling"}</h3>
              <p>
                {
                  "Keep discussions about weldments, frames and manufactured assemblies attached to the relevant detail."
                }
              </p>
            </li>
            <li>
              <h3>{"Automotive and aerospace suppliers"}</h3>
              <p>
                {
                  "Review customer-controlled packages while preserving existing quality, change and release procedures."
                }
              </p>
            </li>
          </ul>
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
