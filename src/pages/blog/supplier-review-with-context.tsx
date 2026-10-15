import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"A clearer way to collect supplier feedback. | VizeDraw"}
        description={
          "Keep external questions close to the drawing and make engineering responses easy to recover."
        }
        path={"/blog/supplier-review-with-context"}
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
      <Header path={"/blog/supplier-review-with-context"} />
      <main id={"main"}>
        <article className={"blog-article wrap"}>
          <a className={"back-journal"} href={"/blog"}>
            <svg className={"brand-icon"} aria-hidden={"true"}>
              <use href={"/assets/icons.svg#arrow-left"}></use>
            </svg>
            {" All articles"}
          </a>
          <div className={"article-heading"}>
            <span>{"Collaboration · VizeDraw editorial"}</span>
            <h1>{"A clearer way to collect supplier feedback."}</h1>
            <p>
              {
                "Keep external questions close to the drawing and make engineering responses easy to recover."
              }
            </p>
          </div>
          <img
            className={"article-cover"}
            src={"/assets/article-supplier.webp"}
            alt={"Distinct Collaboration engineering project illustration"}
            width={"1536"}
            height={"864"}
          />
          <div className={"article-body"}>
            <h2>{"Give the review a defined starting point."}</h2>
            <p>
              {
                "Share the applicable drawing package and explain which details need review. Identify a review owner and the people expected to respond."
              }
            </p>
            <h2>{"Ask beside the drawing."}</h2>
            <p>
              {
                "A location and source revision help separate a technical question from a general discussion. Ask one clear question for each detail that needs clarification."
              }
            </p>
            <h2>{"Connect the response to the source."}</h2>
            <p>
              {
                "Record the engineering response and the drawing it refers to. If a clarification requires a new revision, identify that revision before handing the explanation to another team."
              }
            </p>
            <h2>{"Keep unresolved questions visible."}</h2>
            <p>
              {
                "A discussion does not automatically settle every issue. Retain open questions and route them to the responsible reviewer."
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
