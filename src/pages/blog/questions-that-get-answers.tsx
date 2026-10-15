import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"Write drawing questions that get useful answers. | VizeDraw"}
        description={
          "A location, a revision and a specific request make a review comment easier to act on."
        }
        path={"/blog/questions-that-get-answers"}
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
      <Header path={"/blog/questions-that-get-answers"} />
      <main id={"main"}>
        <article className={"blog-article wrap"}>
          <a className={"back-journal"} href={"/blog"}>
            <svg className={"brand-icon"} aria-hidden={"true"}>
              <use href={"/assets/icons.svg#arrow-left"}></use>
            </svg>
            {" All articles"}
          </a>
          <div className={"article-heading"}>
            <span>{"Drawing review · VizeDraw editorial"}</span>
            <h1>{"Write drawing questions that get useful answers."}</h1>
            <p>
              {
                "A location, a revision and a specific request make a review comment easier to act on."
              }
            </p>
          </div>
          <img
            className={"article-cover"}
            src={"/assets/article-fixture.webp"}
            alt={"Distinct Drawing review engineering project illustration"}
            width={"1536"}
            height={"864"}
          />
          <div className={"article-body"}>
            <h2>{"Start at the detail."}</h2>
            <p>
              {
                "Identify the feature in question: a weld symbol, a dimension, a note or an interface. A markup helps the next reviewer find the same place without guessing."
              }
            </p>
            <h2>{"Say what needs clarification."}</h2>
            <p>
              {
                "“Please check this” leaves the task open. “Does the 6 mm weld apply to both sides?” gives the engineer a specific question to answer."
              }
            </p>
            <h2>{"Keep the source revision visible."}</h2>
            <p>
              {
                "A useful response identifies the drawing and revision it refers to. If the drawing changes during review, reconnect the question to the updated detail."
              }
            </p>
            <h2>{"Make the next action clear."}</h2>
            <p>
              {
                "Record what the reviewer should do next: consult a note, revisit a changed detail or keep an unresolved question open. A recorded response is review context; it is not a substitute for engineering approval."
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
