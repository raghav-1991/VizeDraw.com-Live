import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"Enterprise Drawing Collaboration and Security | VizeDraw"}
        description={
          "Evaluate drawing collaboration against your identity, access, retention, data handling and integration requirements."
        }
        path={"/enterprise"}
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
      <Header path={"/enterprise"} />
      <main id={"main"} className={"page-main"}>
        <div className={"wrap page-hero-wrap"}>
          <section
            className={
              "page-hero new-page-hero screen-page-hero hero-enterprise"
            }
          >
            <div>
              <h1>
                {"Drawing collaboration"}
                <br />
                {"for your organization."}
              </h1>
              <p>
                {
                  "Enterprise adoption begins with the workflow, the information scope and the controls your organization requires."
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
                  src={"/assets/inner-project-03-panel.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Control cabinet door: Confirm the ventilation cut-out dimensions. Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {
                    "Control cabinet door. Confirm the ventilation cut-out dimensions. "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
                <a
                  className={"scene-expand"}
                  href={"/assets/inner-project-03-panel.svg"}
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
            <a href={"#section-1"}>{"Define the information scope"}</a>
            <a href={"#section-2"}>{"Identity and access"}</a>
            <a href={"#section-3"}>{"Records and history"}</a>
            <a href={"#section-4"}>{"Data handling and deployment"}</a>
            <a href={"#section-5"}>{"Integrations"}</a>
            <a href={"#section-6"}>{"Support and rollout"}</a>
            <a href={"#section-7"}>{"Validate with a contained evaluation"}</a>
          </aside>
          <article className={"article-content visual-article"}>
            <section className={"explanation-box"} id={"section-1"}>
              <div className={"explanation-icon"}>
                <svg
                  className={"ui-icon"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.5"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  aria-hidden={"true"}
                >
                  <path d={"M5 4h14v16H5z M9 9h6 M9 13h4 M15 17l4-4"}></path>
                </svg>
              </div>
              <div className={"explanation-copy"}>
                <h2>{"Define the information scope"}</h2>
                <p>
                  {
                    "Describe the drawing types, participating organizations, customer restrictions and permitted environments. Use approved sample information until handling requirements are agreed."
                  }
                </p>
              </div>
            </section>
            <section className={"explanation-box"} id={"section-2"}>
              <div className={"explanation-icon"}>
                <svg
                  className={"ui-icon"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.5"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  aria-hidden={"true"}
                >
                  <path d={"M3 5h11v14H3z M10 3h11v14 M7 10h3 M7 14h3"}></path>
                </svg>
              </div>
              <div className={"explanation-copy"}>
                <h2>{"Identity and access"}</h2>
                <p>
                  {
                    "Review roles, external participation, authentication and single sign-on requirements."
                  }
                </p>
              </div>
            </section>
            <section className={"explanation-box"} id={"section-3"}>
              <div className={"explanation-icon"}>
                <svg
                  className={"ui-icon"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.5"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  aria-hidden={"true"}
                >
                  <path
                    d={
                      "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6 M3 20v-2a6 6 0 0 1 12 0v2 M17 5a3 3 0 0 1 0 6 M18 14a5 5 0 0 1 3 5"
                    }
                  ></path>
                </svg>
              </div>
              <div className={"explanation-copy"}>
                <h2>{"Records and history"}</h2>
                <p>
                  {
                    "Define review events, approvals, exports, retention and retrieval expectations."
                  }
                </p>
              </div>
            </section>
            <section className={"explanation-box"} id={"section-4"}>
              <div className={"explanation-icon"}>
                <svg
                  className={"ui-icon"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.5"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  aria-hidden={"true"}
                >
                  <path
                    d={"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14 M15 15l6 6"}
                  ></path>
                </svg>
              </div>
              <div className={"explanation-copy"}>
                <h2>{"Data handling and deployment"}</h2>
                <p>
                  {
                    "Confirm storage, processing, location, retention and deletion requirements for the proposed configuration."
                  }
                </p>
              </div>
            </section>
            <section className={"explanation-box"} id={"section-5"}>
              <div className={"explanation-icon"}>
                <svg
                  className={"ui-icon"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.5"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  aria-hidden={"true"}
                >
                  <path d={"M4 12l5 5L20 6"}></path>
                </svg>
              </div>
              <div className={"explanation-copy"}>
                <h2>{"Integrations"}</h2>
                <p>
                  {
                    "Identify the authoritative CAD, PDM, PLM, QMS or production system and the handoff VizeDraw needs to support."
                  }
                </p>
              </div>
            </section>
            <section className={"explanation-box"} id={"section-6"}>
              <div className={"explanation-icon"}>
                <svg
                  className={"ui-icon"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.5"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  aria-hidden={"true"}
                >
                  <path d={"M5 4h14v16H5z M9 9h6 M9 13h4 M15 17l4-4"}></path>
                </svg>
              </div>
              <div className={"explanation-copy"}>
                <h2>{"Support and rollout"}</h2>
                <p>
                  {
                    "Agree the evaluation scope, onboarding, responsibilities and service commitments."
                  }
                </p>
              </div>
            </section>
            <section className={"explanation-box"} id={"section-7"}>
              <div className={"explanation-icon"}>
                <svg
                  className={"ui-icon"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.5"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  aria-hidden={"true"}
                >
                  <path d={"M3 5h11v14H3z M10 3h11v14 M7 10h3 M7 14h3"}></path>
                </svg>
              </div>
              <div className={"explanation-copy"}>
                <h2>{"Validate with a contained evaluation"}</h2>
                <p>
                  {
                    "Use one permitted drawing package and representative roles. Test external review, revision handling, retrieval and exports against written requirements before expanding."
                  }
                </p>
                <details className={"read-more"}>
                  <summary>{"Read more"}</summary>
                  <div>
                    <div className={"notice"}>
                      {
                        "Confirm certifications, deployment options, integration details and retention terms for your selected plan and agreement."
                      }
                    </div>
                  </div>
                </details>
              </div>
            </section>
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
