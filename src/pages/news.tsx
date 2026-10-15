import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"VizeDraw News & Updates"}
        description={"Website news and new resources from VizeDraw."}
        path={"/news"}
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
      <Header path={"/news"} />
      <main id={"main"}>
        <section className={"news-intro wrap"}>
          <h1>{"News & updates."}</h1>
          <p>
            {
              "New website demonstrations and practical drawing-review resources."
            }
          </p>
        </section>
        <div className={"wrap update-articles"}>
          <article id={"workflow-demos"}>
            <span>{"Website update · 13 October 2026"}</span>
            <h2>{"New projects. A closer look at the review workflow."}</h2>
            <p>
              {
                "The redesigned website now shows different engineering projects for markup, collaboration and drawing knowledge. The homepage conveyor example moves automatically through a question, a revision review and a recorded response."
              }
            </p>
            <p>
              {
                "These are illustrative demonstrations created to explain review workflows, rather than captures of the live application."
              }
            </p>
            <a href={"/"}>
              {"Explore the demonstrations "}
              <svg className={"brand-icon"} aria-hidden={"true"}>
                <use href={"/assets/icons.svg#arrow-right"}></use>
              </svg>
            </a>
          </article>
          <article id={"review-guides"}>
            <span>{"Resource update · 13 October 2026"}</span>
            <h2>{"New practical reading for drawing reviewers."}</h2>
            <p>
              {
                "Three new articles cover useful review questions, checking an incoming revision and collecting supplier feedback with its drawing context."
              }
            </p>
            <a href={"/blog"}>
              {"Read the blog "}
              <svg className={"brand-icon"} aria-hidden={"true"}>
                <use href={"/assets/icons.svg#arrow-right"}></use>
              </svg>
            </a>
          </article>
        </div>
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
