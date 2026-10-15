import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"Engineering Drawing Revision Control Guide | VizeDraw"}
        description={
          "A practical guide to drawing revision identity, comparison, review history and release authority."
        }
        path={"/resources/engineering-drawing-revision-control"}
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
      <Header path={"/resources/engineering-drawing-revision-control"} />
      <main id={"main"} className={"page-main"}>
        <div className={"wrap page-hero-wrap"}>
          <section className={"page-hero new-page-hero screen-page-hero"}>
            <div>
              <h1>
                {"A practical guide"}
                <br />
                {"to revision control."}
              </h1>
              <p>
                {
                  "Identify the applicable version, preserve its review and make the authority for downstream use explicit."
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
                  src={"/assets/inner-project-17-panel.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Electrical distribution panel: What changed in the panel width between Revision A and Revision B? Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {
                    "Electrical distribution panel. What changed in the panel width between Revision A and Revision B? "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
                <a
                  className={"scene-expand"}
                  href={"/assets/inner-project-17-panel.svg"}
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
            <a href={"#section-1"}>{"Give every revision a clear identity"}</a>
            <a href={"#section-2"}>
              {"Separate received, reviewed and released"}
            </a>
            <a href={"#section-3"}>{"Compare the versions that matter"}</a>
            <a href={"#section-4"}>{"Carry the review context"}</a>
            <a href={"#section-5"}>{"Keep authorization explicit"}</a>
            <a href={"#section-6"}>{"A practical review sequence"}</a>
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
                <h2>{"Give every revision a clear identity"}</h2>
                <p>
                  {
                    "Use a consistent drawing number, revision identifier, sheet identity and package context. Avoid relying on filename order, inbox dates or informal labels such as final and latest."
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
                <h2>{"Separate received, reviewed and released"}</h2>
                <p>
                  {
                    "A drawing can be received without being reviewed, reviewed without being accepted and accepted for one purpose without being released for every downstream activity."
                  }
                </p>
                <details className={"read-more"}>
                  <summary>{"Read more"}</summary>
                  <div>
                    <p>
                      {
                        "A drawing can be received without being reviewed, reviewed without being accepted and accepted for one purpose without being released for every downstream activity. Make those states visible."
                      }
                    </p>
                  </div>
                </details>
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
                <h2>{"Compare the versions that matter"}</h2>
                <p>{"Establish the baseline and the later revision."}</p>
                <details className={"read-more"}>
                  <summary>{"Read more"}</summary>
                  <div>
                    <p>
                      {
                        "Establish the baseline and the later revision. Inspect geometry, notes, dimensions and references. Comparison can identify differences; qualified reviewers determine which changes are meaningful."
                      }
                    </p>
                  </div>
                </details>
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
                <h2>{"Carry the review context"}</h2>
                <p>
                  {
                    "Connect questions, responses and dispositions to the revision that created them. When a new version arrives, check whether earlier answers still apply."
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
                <h2>{"Keep authorization explicit"}</h2>
                <p>
                  {
                    "The revision label does not determine which drawing a job may use. Your change, approval and release process determines applicability and effectivity."
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
                <h2>{"A practical review sequence"}</h2>
                <details className={"read-more"}>
                  <summary>{"Read more"}</summary>
                  <div>
                    <ol>
                      <li>{"Confirm the drawing identity and baseline."}</li>
                      <li>{"Compare the relevant versions."}</li>
                      <li>{"Raise questions at the changed detail."}</li>
                      <li>
                        {
                          "Record the responsible response and supporting source."
                        }
                      </li>
                      <li>
                        {"Reassess earlier decisions that may be affected."}
                      </li>
                      <li>
                        {"Complete the authorized change or release process."}
                      </li>
                    </ol>
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
