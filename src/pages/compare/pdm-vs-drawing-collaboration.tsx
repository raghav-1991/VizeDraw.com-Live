import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"PDM versus drawing collaboration | VizeDraw"}
        description={
          "The two categories can overlap, but they solve different primary problems. VizeDraw is designed to complement the systems that author and control engineering information, not replace them as a class."
        }
        path={"/compare/pdm-vs-drawing-collaboration"}
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
      <Header path={"/compare/pdm-vs-drawing-collaboration"} />
      <main id={"main"} className={"page-main"}>
        <div className={"wrap page-hero-wrap"}>
          <section className={"page-hero new-page-hero screen-page-hero"}>
            <div>
              <h1>
                {"PDM and drawing review:"}
                <br />
                {"how they fit together."}
              </h1>
              <p>
                {
                  "The two categories can overlap, but they solve different primary problems. VizeDraw is designed to complement the systems that author and control engineering information, not replace them as a class."
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
                  src={"/assets/inner-project-01-guard.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Pump coupling guard: What changed in the cover width between Revision A and Revision B? Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {
                    "Pump coupling guard. What changed in the cover width between Revision A and Revision B? "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
                <a
                  className={"scene-expand"}
                  href={"/assets/inner-project-01-guard.svg"}
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
            <a href={"#role-comparison-h"}>{"Role comparison"}</a>
            <a href={"#when-vizedraw-adds-value-h"}>
              {"When VizeDraw adds value"}
            </a>
            <a href={"#questions-to-ask-before-integrating-h"}>
              {"Questions to ask before integrating"}
            </a>
            <a href={"#evaluate-the-gap-not-the-category-label-h"}>
              {"Evaluate the gap not the category label"}
            </a>
          </aside>
          <article className={"article-content visual-article"}>
            <section className={"explanation-box"} id={"role-comparison"}>
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
                <h2>{"Role comparison"}</h2>
                <details className={"read-more"}>
                  <summary>{"Read more"}</summary>
                  <div>
                    <table>
                      <caption>{"Role comparison"}</caption>
                      <thead>
                        <tr>
                          <th scope={"col"}>{"Need"}</th>
                          <th scope={"col"}>{"PDM or PLM"}</th>
                          <th scope={"col"}>
                            {"VizeDraw drawing collaboration"}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope={"row"}>{"Primary role"}</th>
                          <td data-label={"PDM or PLM"}>
                            {
                              "Control product data, files, versions and release processes"
                            }
                          </td>
                          <td data-label={"VizeDraw drawing collaboration"}>
                            {
                              "Review drawings, questions, markups and decisions in context"
                            }
                          </td>
                        </tr>
                        <tr>
                          <th scope={"row"}>{"Native engineering data"}</th>
                          <td data-label={"PDM or PLM"}>
                            {
                              "Often manages CAD files, relationships and formal metadata"
                            }
                          </td>
                          <td data-label={"VizeDraw drawing collaboration"}>
                            {
                              "Focuses on supported drawing packages and their review context"
                            }
                          </td>
                        </tr>
                        <tr>
                          <th scope={"row"}>{"Review participation"}</th>
                          <td data-label={"PDM or PLM"}>
                            {"Depends on system configuration and licenses"}
                          </td>
                          <td data-label={"VizeDraw drawing collaboration"}>
                            {
                              "Designed around focused drawing review with internal and authorized external participants"
                            }
                          </td>
                        </tr>
                        <tr>
                          <th scope={"row"}>{"System of record"}</th>
                          <td data-label={"PDM or PLM"}>
                            {"Commonly authoritative for engineering data"}
                          </td>
                          <td data-label={"VizeDraw drawing collaboration"}>
                            {
                              "Supports the collaboration layer; authority remains defined by the organization"
                            }
                          </td>
                        </tr>
                        <tr>
                          <th scope={"row"}>
                            {"Supplier and customer review"}
                          </th>
                          <td data-label={"PDM or PLM"}>
                            {"May require portals, workflows or integrations"}
                          </td>
                          <td data-label={"VizeDraw drawing collaboration"}>
                            {
                              "Provides a drawing-first review experience subject to access controls"
                            }
                          </td>
                        </tr>
                        <tr>
                          <th scope={"row"}>{"Replacement decision"}</th>
                          <td data-label={"PDM or PLM"}>
                            {
                              "Retain where it already controls engineering information"
                            }
                          </td>
                          <td data-label={"VizeDraw drawing collaboration"}>
                            {
                              "Add where drawing review and decision context remain fragmented"
                            }
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </details>
              </div>
            </section>
            <section
              className={"explanation-box"}
              id={"when-vizedraw-adds-value"}
            >
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
                <h2>{"When VizeDraw adds value"}</h2>
                <p>
                  {
                    "VizeDraw is relevant when the drawing is available but the discussion around it is distributed across email, chat, meetings, screenshots or separate PDFs."
                  }
                </p>
                <details className={"read-more"}>
                  <summary>{"Read more"}</summary>
                  <div>
                    <p>
                      <span>
                        {
                          "VizeDraw is relevant when the drawing is available but the discussion around it is distributed across email, chat, meetings, screenshots or separate PDFs. It can provide a simpler review surface while the PDM, PLM or quality system remains authoritative."
                        }
                      </span>
                    </p>
                    <figure>
                      <ul aria-hidden={"true"}>
                        <li>
                          <span></span>
                          {"CAD authoring"}
                        </li>
                        <li>
                          <span></span>
                          {"PDM"}
                        </li>
                        <li>
                          <span></span>
                          {"PLM"}
                        </li>
                        <li>
                          <span></span>
                          {"QMS"}
                        </li>
                        <li>
                          <span></span>
                          {"Production systems"}
                        </li>
                      </ul>
                      <span>{"VizeDraw"}</span>
                      <span>{"questions, markups and decisions"}</span>
                    </figure>
                  </div>
                </details>
              </div>
            </section>
            <section
              className={"explanation-box"}
              id={"questions-to-ask-before-integrating"}
            >
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
                <h2>{"Questions to ask before integrating"}</h2>
                <details className={"read-more"}>
                  <summary>{"Read more"}</summary>
                  <div>
                    <ul>
                      <li>
                        <span>{"Which system owns the released drawing?"}</span>
                      </li>
                      <li>
                        <span>
                          {
                            "How does the correct drawing enter the review workspace?"
                          }
                        </span>
                      </li>
                      <li>
                        <span>
                          {
                            "Which comments or approvals must return to the authoritative record?"
                          }
                        </span>
                      </li>
                      <li>
                        <span>
                          {
                            "What identity, access, retention and audit information must be preserved?"
                          }
                        </span>
                      </li>
                      <li>
                        <span>
                          {
                            "What happens when a new revision arrives or a review is withdrawn?"
                          }
                        </span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </section>
            <section
              className={"explanation-box"}
              id={"evaluate-the-gap-not-the-category-label"}
            >
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
                <h2>{"Evaluate the gap not the category label"}</h2>
                <p>
                  {
                    "If the current system already makes review participation and retrieval easy, another workspace may add little value."
                  }
                </p>
                <details className={"read-more"}>
                  <summary>{"Read more"}</summary>
                  <div>
                    <p>
                      <span>
                        {
                          "If the current system already makes review participation and retrieval easy, another workspace may add little value. If people repeatedly reconstruct the context, test one contained workflow and compare the result."
                        }
                      </span>
                    </p>
                    <a className={"btn secondary"} href={"/contact#enterprise"}>
                      {"Request an enterprise review"}
                    </a>
                    <a className={"btn secondary"} href={"/product"}>
                      {"See the product workflow"}
                    </a>
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
