import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"Contact VizeDraw | Request a Drawing Workflow Demo"}
        description={
          "Contact VizeDraw sales or support and prepare a focused engineering drawing review demo."
        }
        path={"/contact"}
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
      <Header path={"/contact"} />
      <main id={"main"} className={"page-main"}>
        <div className={"wrap page-hero-wrap"}>
          <section className={"page-hero new-page-hero text-hero"}>
            <div>
              <h1>
                {"Let’s talk about"}
                <br />
                {"your drawing workflow."}
              </h1>
              <p>
                {
                  "Tell us how your team reviews drawings. We’ll use that context to prepare a focused demonstration."
                }
              </p>
            </div>
          </section>
        </div>
        <div className={"wrap contact-grid"} id={"demo"}>
          <aside className={"contact-aside"}>
            <h3>{"Start with one repeated question."}</h3>
            <p>
              {
                "A supplier clarification, a customer review or a production handoff is a useful place to begin."
              }
            </p>
            <dl>
              <dt>{"Sales and demos"}</dt>
              <dd>
                <a href={"mailto:sales@vizedraw.com"}>
                  {"sales@vizedraw.com ↗"}
                </a>
              </dd>
              <dt>{"Product support"}</dt>
              <dd>
                <a href={"mailto:support@vizedraw.com"}>
                  {"support@vizedraw.com ↗"}
                </a>
              </dd>
            </dl>
            <p>{"Use an approved sample package for your demo."}</p>
            <div className={"social-block social-contact"}>
              <h4>{"Follow VizeDraw"}</h4>
              <div
                className={"social-shortcuts"}
                aria-label={"Social media profile placeholders"}
              >
                <button
                  className={"social-shortcut"}
                  type={"button"}
                  disabled={true}
                  aria-label={"LinkedIn profile link coming soon"}
                  title={"Profile link coming soon"}
                >
                  <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                    <path
                      d={
                        "M5 9v10M5 5v.2M10 19V9h4v2c1-3 6-3 6 1v7M3 9h4M3 19h4"
                      }
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"2.5"}
                      strokeLinecap={"round"}
                    ></path>
                  </svg>
                  <span>{"LinkedIn"}</span>
                </button>
                <button
                  className={"social-shortcut"}
                  type={"button"}
                  disabled={true}
                  aria-label={"X profile link coming soon"}
                  title={"Profile link coming soon"}
                >
                  <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                    <path
                      d={"M5 4h4l10 16h-4L5 4Zm0 16L19 4"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"1.8"}
                      strokeLinejoin={"round"}
                    ></path>
                  </svg>
                  <span>{"X"}</span>
                </button>
                <button
                  className={"social-shortcut"}
                  type={"button"}
                  disabled={true}
                  aria-label={"Instagram profile link coming soon"}
                  title={"Profile link coming soon"}
                >
                  <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                    <rect
                      x={"3"}
                      y={"3"}
                      width={"18"}
                      height={"18"}
                      rx={"5"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"1.7"}
                    ></rect>
                    <circle
                      cx={"12"}
                      cy={"12"}
                      r={"4"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"1.7"}
                    ></circle>
                    <circle
                      cx={"17.5"}
                      cy={"6.5"}
                      r={"1"}
                      fill={"currentColor"}
                    ></circle>
                  </svg>
                  <span>{"Instagram"}</span>
                </button>
                <button
                  className={"social-shortcut"}
                  type={"button"}
                  disabled={true}
                  aria-label={"YouTube profile link coming soon"}
                  title={"Profile link coming soon"}
                >
                  <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                    <rect
                      x={"2"}
                      y={"5"}
                      width={"20"}
                      height={"14"}
                      rx={"4"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"1.7"}
                    ></rect>
                    <path d={"m10 9 6 3-6 3z"} fill={"currentColor"}></path>
                  </svg>
                  <span>{"YouTube"}</span>
                </button>
              </div>
              <p className={"social-status"}>{"Profile links coming soon."}</p>
            </div>
          </aside>
          <form
            className={"contact-form"}
            data-contact-form={""}
            id={"enterprise"}
          >
            <h2 className={"field full"}>{"Tell us what you need."}</h2>
            <div className={"field"}>
              <label htmlFor={"name"}>{"Full name *"}</label>
              <input
                id={"name"}
                name={"name"}
                autoComplete={"name"}
                required={true}
              />
            </div>
            <div className={"field"}>
              <label htmlFor={"email"}>{"Work email *"}</label>
              <input
                id={"email"}
                name={"email"}
                type={"email"}
                autoComplete={"email"}
                required={true}
              />
            </div>
            <div className={"field"}>
              <label htmlFor={"company"}>{"Company *"}</label>
              <input
                id={"company"}
                name={"company"}
                autoComplete={"organization"}
                required={true}
              />
            </div>
            <div className={"field"}>
              <label htmlFor={"enquiry"}>{"Enquiry type"}</label>
              <select id={"enquiry"} name={"enquiry"}>
                <option>{"Workflow demo"}</option>
                <option>{"Product and plans"}</option>
                <option>{"Enterprise review"}</option>
                <option>{"Partnership"}</option>
                <option>{"Other"}</option>
              </select>
            </div>
            <div className={"field full"}>
              <label htmlFor={"contact-workflow"}>{"Workflow to review"}</label>
              <select id={"contact-workflow"} name={"workflow"}>
                <option>{"Engineering review"}</option>
                <option>{"Revision review"}</option>
                <option>{"Supplier or customer review"}</option>
                <option>{"Production or quality handoff"}</option>
                <option>{"Other"}</option>
              </select>
            </div>
            <div className={"field full"}>
              <label htmlFor={"message"}>{"What is difficult today? *"}</label>
              <textarea
                id={"message"}
                name={"message"}
                required={true}
                placeholder={
                  "Describe the drawing, the review and where context gets lost."
                }
                defaultValue={""}
              />
            </div>
            <p className={"field full"}>
              {
                "Do not include confidential drawings or restricted customer information. Read our "
              }
              <a href={"/privacy-notice"}>{"Privacy Notice"}</a>
              {"."}
            </p>
            <button className={"btn"} type={"submit"}>
              {"Open email draft"}
            </button>
            <p className={"field full"}>
              {"This opens a draft in your email app. You review and send it."}
            </p>
            <p className={"form-message"} role={"status"} hidden={true}></p>
          </form>
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
