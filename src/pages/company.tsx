import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"About VizeDraw and Zenitude | VizeDraw"}
        description={
          "VizeDraw by Zenitude keeps engineering drawing review context connected from design to execution."
        }
        path={"/company"}
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
      <Header path={"/company"} />
      <main id={"main"} className={"page-main"}>
        <div className={"wrap page-hero-wrap"}>
          <section className={"page-hero new-page-hero screen-page-hero"}>
            <div>
              <h1>
                {"Built for engineering"}
                <br />
                {"collaboration."}
              </h1>
              <p>
                {
                  "We focus on the knowledge behind a drawing: what changed, what was questioned and what the next person needs to know."
                }
              </p>
            </div>
            <div className={"subpage-screen"}>
              <div className={"platform-explainer"}>
                <div className={"platform-logo"}>
                  <img
                    className={"platform-official-logo"}
                    src={"/assets/official-logo-horizontal-dark.png"}
                    alt={"Official VizeDraw robot with pen and wordmark"}
                    width={"600"}
                    height={"190"}
                  />
                </div>
                <div className={"platform-nodes"}>
                  <div>
                    <span>
                      <svg className={"brand-icon"} aria-hidden={"true"}>
                        <use href={"/assets/icons.svg#file-pdf"}></use>
                      </svg>
                    </span>
                    <b>{"Drawing"}</b>
                    <small>{"The source detail"}</small>
                  </div>
                  <div>
                    <span>
                      <svg className={"brand-icon"} aria-hidden={"true"}>
                        <use href={"/assets/icons.svg#chat-circle-dots"}></use>
                      </svg>
                    </span>
                    <b>{"Review"}</b>
                    <small>{"The shared conversation"}</small>
                  </div>
                  <div>
                    <span>
                      <svg className={"brand-icon"} aria-hidden={"true"}>
                        <use href={"/assets/icons.svg#check-circle"}></use>
                      </svg>
                    </span>
                    <b>{"Response"}</b>
                    <small>{"The recorded explanation"}</small>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className={"wrap article-layout"}>
          <aside className={"toc"}>
            <a href={"#section-1"}>{"Built by Zenitude"}</a>
            <a href={"#section-2"}>{"Manufacturing is our first focus"}</a>
            <a href={"#section-3"}>
              {"The drawing and its context belong together"}
            </a>
            <a href={"#section-4"}>
              {"Information should stay connected to evidence"}
            </a>
            <a href={"#section-5"}>{"AI should assist judgement"}</a>
            <a href={"#section-6"}>
              {"Evidence matters more than broad promises"}
            </a>
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
                <h2>{"Built by Zenitude"}</h2>
                <p>
                  {
                    "VizeDraw is developed by Zenitude for teams whose work depends on engineering drawings. We focus on the knowledge created around those drawings and the context the next person needs."
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
                <h2>{"Manufacturing is our first focus"}</h2>
                <p>
                  {
                    "Drawings move between engineering, suppliers, customers, production and quality. The file may travel successfully while the explanation behind it becomes difficult to recover."
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
                <h2>{"The drawing and its context belong together"}</h2>
                <p>
                  {
                    "Questions, responses and decisions are most useful when their source remains visible."
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
                <h2>{"Information should stay connected to evidence"}</h2>
                <p>
                  {
                    "Missing context should be identified, rather than replaced with confident assumptions."
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
                <h2>{"AI should assist judgement"}</h2>
                <p>
                  {
                    "Qualified people remain responsible for technical decisions and authorized release."
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
                <h2>{"Evidence matters more than broad promises"}</h2>
                <p>
                  {
                    "Evaluate a real workflow and inspect whether the result is easier to understand and recover."
                  }
                </p>
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
