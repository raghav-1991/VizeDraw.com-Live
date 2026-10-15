import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"Cookie Preferences | VizeDraw"}
        description={
          "Manage browser-local cookie preferences for this VizeDraw design-review site."
        }
        path={"/cookie-preferences"}
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
      <Header path={"/cookie-preferences"} />
      <main id={"main"} className={"page-main"}>
        <div className={"wrap page-hero-wrap"}>
          <section className={"page-hero new-page-hero text-hero"}>
            <div>
              <h1>{"Cookie preferences."}</h1>
              <p>{"Understand your choices and control optional cookies."}</p>
            </div>
          </section>
        </div>
        <div className={"wrap article-layout"}>
          <aside className={"toc"}>
            <a href={"#section-1"}>{"Manage this browser’s preferences."}</a>
          </aside>
          <article className={"article-content"}>
            <div>
              <h2 id={"section-1"}>{"Manage this browser’s preferences."}</h2>
              <p>
                {
                  "This design-review site has no optional analytics or marketing trackers. These controls store your choices locally for this site; they do not change the separate VizeDraw application."
                }
              </p>
              <form data-cookie-form={""}>
                <div className={"cookie-setting"}>
                  <div>
                    <h3>{"Preference cookies"}</h3>
                    <p>{"Remember choices you make on this website."}</p>
                  </div>
                  <label>
                    <input name={"preferences"} type={"checkbox"} />
                    {"Allow preference cookies"}
                  </label>
                </div>
                <div className={"cookie-setting"}>
                  <div>
                    <h3>{"Analytics cookies"}</h3>
                    <p>
                      {
                        "Optional measurement of website usage, if enabled in a future production integration."
                      }
                    </p>
                  </div>
                  <label>
                    <input name={"analytics"} type={"checkbox"} />
                    {"Allow analytics cookies"}
                  </label>
                </div>
                <div className={"cookie-setting"}>
                  <div>
                    <h3>{"Marketing cookies"}</h3>
                    <p>
                      {
                        "Optional campaign measurement, if enabled in a future production integration."
                      }
                    </p>
                  </div>
                  <label>
                    <input name={"marketing"} type={"checkbox"} />
                    {"Allow marketing cookies"}
                  </label>
                </div>
                <div className={"cookie-setting"}>
                  <div>
                    <h3>{"Strictly necessary"}</h3>
                    <p>
                      {"Required for hosting, access and core functionality."}
                    </p>
                  </div>
                </div>
                <button className={"btn"} type={"submit"}>
                  {"Save preferences"}
                </button>
                <p role={"status"} aria-live={"polite"}></p>
              </form>
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
