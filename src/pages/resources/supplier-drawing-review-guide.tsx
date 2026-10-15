import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"Supplier drawing review guide | VizeDraw"}
        description={
          "A supplier clarification should identify the source detail, the response required and the drawing revision under review. The answer should remain available to the people who need it next."
        }
        path={"/resources/supplier-drawing-review-guide"}
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
      <Header path={"/resources/supplier-drawing-review-guide"} />
      <main id={"main"} className={"page-main"}>
        <div className={"wrap page-hero-wrap"}>
          <section className={"page-hero new-page-hero screen-page-hero"}>
            <div>
              <h1>
                {"A shared process"}
                <br />
                {"for supplier drawing review."}
              </h1>
              <p>
                {
                  "A supplier clarification should identify the source detail, the response required and the drawing revision under review. The answer should remain available to the people who need it next."
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
                  src={"/assets/inner-project-23-pipe.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Dosing pump pipework: Check the elbow orientation. Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {"Dosing pump pipework. Check the elbow orientation. "}
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
                <a
                  className={"scene-expand"}
                  href={"/assets/inner-project-23-pipe.svg"}
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
            <a href={"#before-the-review-h"}>{"Before the review"}</a>
            <a href={"#when-raising-a-question-h"}>
              {"When raising a question"}
            </a>
            <a href={"#when-responding-h"}>{"When responding"}</a>
            <a href={"#when-the-drawing-changes-h"}>
              {"When the drawing changes"}
            </a>
            <a href={"#test-the-handoff-h"}>{"Test the handoff"}</a>
          </aside>
          <article className={"article-content visual-article"}>
            <article className={"article__body"}>
              <h2 id={"before-the-review"}>{"Before the review"}</h2>
              <ul>
                <li>
                  <span>
                    {
                      "Confirm that the drawing may be shared with the supplier."
                    }
                  </span>
                </li>
                <li>
                  <span>
                    {
                      "Identify the package, revision and purpose of the review."
                    }
                  </span>
                </li>
                <li>
                  <span>
                    {
                      "Define who may answer technical questions and who may authorize a change or deviation."
                    }
                  </span>
                </li>
              </ul>
              <h2 id={"when-raising-a-question"}>
                {"When raising a question"}
              </h2>
              <ul>
                <li>
                  <span>
                    {
                      "Point to the sheet, note, dimension or interface concerned."
                    }
                  </span>
                </li>
                <li>
                  <span>
                    {"Explain what is unclear and what response is required."}
                  </span>
                </li>
                <li>
                  <span>
                    {
                      "Reference related specifications or documents where they control the requirement."
                    }
                  </span>
                </li>
                <li>
                  <span>
                    {
                      "Avoid proposing an unauthorized interpretation as though it were an accepted answer."
                    }
                  </span>
                </li>
              </ul>
              <h2 id={"when-responding"}>{"When responding"}</h2>
              <ul>
                <li>
                  <span>{"Identify the responsible reviewer."}</span>
                </li>
                <li>
                  <span>
                    {"Record the clarification and its supporting source."}
                  </span>
                </li>
                <li>
                  <span>{"State whether the drawing will change."}</span>
                </li>
                <li>
                  <span>
                    {
                      "Separate technical clarification from formal approval or release."
                    }
                  </span>
                </li>
              </ul>
              <h2 id={"when-the-drawing-changes"}>
                {"When the drawing changes"}
              </h2>
              <p>
                <span>
                  {
                    "Issue the revised drawing through the authorized process, then connect the earlier question to the updated source. Do not rely on the old email answer as a substitute for the revised requirement."
                  }
                </span>
              </p>
              <h2 id={"test-the-handoff"}>{"Test the handoff"}</h2>
              <p>
                <span>
                  {
                    "Ask a production or quality reviewer to recover the supplier question, engineering response, applicable revision and next action. If that requires the original participants, the record is not yet doing enough work."
                  }
                </span>
              </p>
              <a
                className={"btn secondary"}
                href={"/use-cases/external-drawing-review"}
              >
                {"Explore supplier and customer review"}
              </a>
              <a className={"btn secondary"} href={"/contact"}>
                {"Request a workflow demo"}
              </a>
            </article>
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
