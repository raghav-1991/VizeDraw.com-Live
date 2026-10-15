import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"Manufacturing drawing readiness checklist | VizeDraw"}
        description={
          "Use this checklist before a supplier review, customer submission, production handoff, inspection activity or another defined stage. It checks the review context. It does not certify engineering correctness or authorize work by itself."
        }
        path={"/resources/drawing-readiness-checklist"}
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
      <Header path={"/resources/drawing-readiness-checklist"} />
      <main id={"main"} className={"page-main"}>
        <div className={"wrap page-hero-wrap"}>
          <section className={"page-hero new-page-hero screen-page-hero"}>
            <div>
              <h1>
                {"Your drawing"}
                <br />
                {"readiness checklist."}
              </h1>
              <p>
                {
                  "Check the source drawing, revision, review owner, and open questions before the next handoff."
                }
              </p>
            </div>
            <div className={"subpage-screen"}>
              <div className={"readiness-screen"}>
                <div className={"screen-header"}>
                  <img
                    src={"/assets/official-logo-light-trimmed.png"}
                    alt={"Complete official VizeDraw logo"}
                  />
                  <b>{"VizeDraw"}</b>
                  <span>{"Package readiness"}</span>
                  <i>{"Illustrative product screen"}</i>
                </div>
                <div>
                  <h3>{"Before the next handoff"}</h3>
                  <span>
                    <i>{"✓"}</i>
                    {"Drawing identified"}
                  </span>
                  <span>
                    <i>{"✓"}</i>
                    {"Source revision confirmed"}
                  </span>
                  <span>
                    <i>{"✓"}</i>
                    {"Review owner assigned"}
                  </span>
                  <span>
                    <i>{"✓"}</i>
                    {"Open questions recorded"}
                  </span>
                  <small>
                    {"Use the checklist below with your own drawing package."}
                  </small>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className={"wrap article-layout"}>
          <aside className={"toc"}>
            <a href={"#1-define-the-next-action-h"}>
              {"1 Define the next action"}
            </a>
            <a href={"#2-confirm-the-drawing-source-h"}>
              {"2 Confirm the drawing source"}
            </a>
            <a href={"#3-review-the-open-questions-h"}>
              {"3 Review the open questions"}
            </a>
            <a href={"#4-check-the-recorded-outcome-h"}>
              {"4 Check the recorded outcome"}
            </a>
            <a href={"#5-confirm-authority-h"}>{"5 Confirm authority"}</a>
            <a href={"#6-prepare-the-handoff-h"}>{"6 Prepare the handoff"}</a>
          </aside>
          <article className={"article-content"}>
            <div>
              <div className={"checklist-actions"}>
                <button data-print={""} type={"button"}>
                  {"Print checklist"}
                </button>
                <button data-clear-ticks={""} type={"button"}>
                  {"Clear ticks"}
                </button>
              </div>
              <section
                id={"1-define-the-next-action"}
                className={"checklist__group"}
                aria-labelledby={"1-define-the-next-action-h"}
              >
                <div>
                  <h2 id={"1-define-the-next-action-h"}>
                    <span>{"1 "}</span>
                    {"Define the next action"}
                  </h2>
                </div>
                <ul className={"checkbox-list"}>
                  <li>
                    <label>
                      <input type={"checkbox"} />
                      <span>{"The next stage is named clearly."}</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type={"checkbox"} />
                      <span>
                        {
                          "The responsible owner and participants are identified."
                        }
                      </span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type={"checkbox"} />
                      <span>
                        {
                          "The process that authorizes the next action is understood."
                        }
                      </span>
                    </label>
                  </li>
                </ul>
              </section>
              <section
                id={"2-confirm-the-drawing-source"}
                className={"checklist__group"}
                aria-labelledby={"2-confirm-the-drawing-source-h"}
              >
                <div>
                  <h2 id={"2-confirm-the-drawing-source-h"}>
                    <span>{"2 "}</span>
                    {"Confirm the drawing source"}
                  </h2>
                </div>
                <ul className={"checkbox-list"}>
                  <li>
                    <label>
                      <input type={"checkbox"} />
                      <span>
                        {
                          "The drawing number, title, package and sheet are recognizable."
                        }
                      </span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type={"checkbox"} />
                      <span>
                        {
                          "The applicable revision is identified for this job or configuration."
                        }
                      </span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type={"checkbox"} />
                      <span>
                        {"The source location or system of record is known."}
                      </span>
                    </label>
                  </li>
                </ul>
              </section>
              <section
                id={"3-review-the-open-questions"}
                className={"checklist__group"}
                aria-labelledby={"3-review-the-open-questions-h"}
              >
                <div>
                  <h2 id={"3-review-the-open-questions-h"}>
                    <span>{"3 "}</span>
                    {"Review the open questions"}
                  </h2>
                </div>
                <ul className={"checkbox-list"}>
                  <li>
                    <label>
                      <input type={"checkbox"} />
                      <span>{"Every material question has an owner."}</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type={"checkbox"} />
                      <span>
                        {"The source detail and required response are clear."}
                      </span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type={"checkbox"} />
                      <span>
                        {
                          "Unresolved items that affect the next action are visible."
                        }
                      </span>
                    </label>
                  </li>
                </ul>
              </section>
              <section
                id={"4-check-the-recorded-outcome"}
                className={"checklist__group"}
                aria-labelledby={"4-check-the-recorded-outcome-h"}
              >
                <div>
                  <h2 id={"4-check-the-recorded-outcome-h"}>
                    <span>{"4 "}</span>
                    {"Check the recorded outcome"}
                  </h2>
                </div>
                <ul className={"checkbox-list"}>
                  <li>
                    <label>
                      <input type={"checkbox"} />
                      <span>
                        {
                          "The response is connected to the relevant drawing and revision."
                        }
                      </span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type={"checkbox"} />
                      <span>
                        {
                          "The disposition states what was clarified, changed, accepted, rejected or deferred."
                        }
                      </span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type={"checkbox"} />
                      <span>
                        {
                          "Supporting specifications, change records or evidence are identified where required."
                        }
                      </span>
                    </label>
                  </li>
                </ul>
              </section>
              <section
                id={"5-confirm-authority"}
                className={"checklist__group"}
                aria-labelledby={"5-confirm-authority-h"}
              >
                <div>
                  <h2 id={"5-confirm-authority-h"}>
                    <span>{"5 "}</span>
                    {"Confirm authority"}
                  </h2>
                </div>
                <ul className={"checkbox-list"}>
                  <li>
                    <label>
                      <input type={"checkbox"} />
                      <span>
                        {
                          "Required approvals are recorded by the correct people."
                        }
                      </span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type={"checkbox"} />
                      <span>{"The scope of each approval is clear."}</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type={"checkbox"} />
                      <span>
                        {
                          "A resolved comment has not been mistaken for release authorization."
                        }
                      </span>
                    </label>
                  </li>
                </ul>
              </section>
              <section
                id={"6-prepare-the-handoff"}
                className={"checklist__group"}
                aria-labelledby={"6-prepare-the-handoff-h"}
              >
                <div>
                  <h2 id={"6-prepare-the-handoff-h"}>
                    <span>{"6 "}</span>
                    {"Prepare the handoff"}
                  </h2>
                </div>
                <ul className={"checkbox-list"}>
                  <li>
                    <label>
                      <input type={"checkbox"} />
                      <span>
                        {
                          "The next team receives the applicable drawing and relevant review context."
                        }
                      </span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type={"checkbox"} />
                      <span>
                        {
                          "Known limitations, assumptions and open items travel with the handoff."
                        }
                      </span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type={"checkbox"} />
                      <span>
                        {
                          "A reviewer who missed the discussion can recover the source, answer and next action."
                        }
                      </span>
                    </label>
                  </li>
                </ul>
              </section>
            </div>
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
