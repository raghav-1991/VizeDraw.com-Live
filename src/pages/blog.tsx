import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={
          "The VizeDraw Blog | Drawing Review, Revisions and Collaboration"
        }
        description={
          "Practical articles about engineering drawing review, supplier feedback and revision context."
        }
        path={"/blog"}
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
      <Header path={"/blog"} />
      <main id={"main"}>
        <section className={"journal-intro wrap"}>
          <h1>
            {"Good questions."}
            <br />
            {"Better drawing reviews."}
          </h1>
          <p>
            {"Practical notes for engineering, supplier and quality teams."}
          </p>
        </section>
        <section className={"journal-list wrap"}>
          <a href={"/blog/questions-that-get-answers"}>
            <span>{"Drawing review"}</span>
            <h2>{"Write drawing questions that get useful answers."}</h2>
            <p>
              {
                "A location, a revision and a specific request make a review comment easier to act on."
              }
            </p>
            <b>
              {"Read article "}
              <svg className={"brand-icon"} aria-hidden={"true"}>
                <use href={"/assets/icons.svg#arrow-right"}></use>
              </svg>
            </b>
          </a>
          <a href={"/blog/revision-review-before-handoff"}>
            <span>{"Revision review"}</span>
            <h2>{"What to check when a drawing revision arrives."}</h2>
            <p>
              {
                "Review the changed detail, its related notes and the questions carried over from the earlier drawing."
              }
            </p>
            <b>
              {"Read article "}
              <svg className={"brand-icon"} aria-hidden={"true"}>
                <use href={"/assets/icons.svg#arrow-right"}></use>
              </svg>
            </b>
          </a>
          <a href={"/blog/supplier-review-with-context"}>
            <span>{"Collaboration"}</span>
            <h2>{"A clearer way to collect supplier feedback."}</h2>
            <p>
              {
                "Keep external questions close to the drawing and make engineering responses easy to recover."
              }
            </p>
            <b>
              {"Read article "}
              <svg className={"brand-icon"} aria-hidden={"true"}>
                <use href={"/assets/icons.svg#arrow-right"}></use>
              </svg>
            </b>
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
