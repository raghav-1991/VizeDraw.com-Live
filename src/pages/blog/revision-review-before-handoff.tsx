import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"What to check when a drawing revision arrives. | VizeDraw"}
        description={
          "Review the changed detail, its related notes and the questions carried over from the earlier drawing."
        }
        path={"/blog/revision-review-before-handoff"}
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
      <Header path={"/blog/revision-review-before-handoff"} />
      <main id={"main"}>
        <article className={"blog-article wrap"}>
          <a className={"back-journal"} href={"/blog"}>
            <svg className={"brand-icon"} aria-hidden={"true"}>
              <use href={"/assets/icons.svg#arrow-left"}></use>
            </svg>
            {" All articles"}
          </a>
          <div className={"article-heading"}>
            <span>{"Revision review · VizeDraw editorial"}</span>
            <h1>{"What to check when a drawing revision arrives."}</h1>
            <p>
              {
                "Review the changed detail, its related notes and the questions carried over from the earlier drawing."
              }
            </p>
          </div>
          <img
            className={"article-cover"}
            src={"/assets/article-revision.webp"}
            alt={"Distinct Revision review engineering project illustration"}
            width={"1536"}
            height={"864"}
          />
          <div className={"article-body"}>
            <h2>{"Confirm which drawings you are comparing."}</h2>
            <p>
              {
                "Check drawing identity and revision before reviewing a difference. Similar filenames do not establish that two documents are the intended pair."
              }
            </p>
            <h2>{"Review the detail and its context."}</h2>
            <p>
              {
                "A changed dimension can affect a related feature, note or interface. Read the surrounding drawing information rather than treating the highlighted difference as the entire change."
              }
            </p>
            <h2>{"Revisit earlier questions."}</h2>
            <p>
              {
                "Check whether the new revision answers an open question. Keep the engineering explanation with the revision it references, so the next reviewer can recover the reasoning."
              }
            </p>
            <h2>{"Prepare the handoff."}</h2>
            <p>
              {
                "Identify the applicable drawing, review owner and questions that remain. Use your organization’s release process to decide whether work can proceed."
              }
            </p>
          </div>
        </article>
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
