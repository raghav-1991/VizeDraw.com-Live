import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"Engineering Drawing Collaboration Software | VizeDraw"}
        description={
          "Review PDF engineering drawings, compare revisions, add markups and keep decisions connected in one workspace for engineering and manufacturing teams."
        }
        path={"/"}
        styles={[
          "/assets/site.css",
          "/assets/redesign.css",
          "/assets/drawing.css",
          "/assets/components.css",
          "/assets/experience.css",
          "/assets/brand.css",
          "/assets/workflows.css",
          "/assets/unique.css",
          "/assets/outcomes.css",
          "/assets/editorial-carousel.css",
          "/assets/site-polish.css",
        ]}
      />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header path={"/"} />
      <main id={"main"}>
        <section
          className={"feature-banner workflow-banner distinct-banner"}
          aria-label={"VizeDraw features"}
          aria-roledescription={"carousel"}
        >
          <div className={"wrap banner-layout"}>
            <div
              className={"banner-slide active"}
              data-banner-slide={"0"}
              aria-hidden={"false"}
            >
              <div className={"banner-copy"}>
                <h1>
                  {"Mark up the detail."}
                  <br />
                  {"Ask at the source."}
                </h1>
                <div>
                  <p>
                    {
                      "Review a pump casing with the drawing, the markup and the technical question in one view."
                    }
                  </p>
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
                  <a className={"banner-feature-link"} href={"/product"}>
                    {"Explore drawing review"}
                    <svg className={"brand-icon"} aria-hidden={"true"}>
                      <use href={"/assets/icons.svg#arrow-right"}></use>
                    </svg>
                  </a>
                </div>
              </div>
              <div className={"banner-visual"}>
                <div className={"workspace-glass"}>
                  <figure
                    className={"live-tool live-markup"}
                    aria-label={"Illustrative Pump casing drawing review"}
                  >
                    <div className={"live-top"}>
                      <img
                        src={"/assets/official-logo-horizontal-light.png"}
                        alt={"Official VizeDraw logo"}
                      />
                      <span>{"Pump casing"}</span>
                      <small>{"Illustrative workspace"}</small>
                    </div>
                    <div className={"live-body"}>
                      <div className={"live-rail"} aria-hidden={"true"}>
                        <svg className={"brand-icon"} aria-hidden={"true"}>
                          <use href={"/assets/icons.svg#folder"}></use>
                        </svg>
                        <svg className={"brand-icon"} aria-hidden={"true"}>
                          <use
                            href={"/assets/icons.svg#pencil-simple-line"}
                          ></use>
                        </svg>
                        <svg className={"brand-icon"} aria-hidden={"true"}>
                          <use href={"/assets/icons.svg#copy"}></use>
                        </svg>
                        <svg className={"brand-icon"} aria-hidden={"true"}>
                          <use href={"/assets/icons.svg#users-three"}></use>
                        </svg>
                      </div>
                      <div className={"live-canvas"}>
                        <div className={"drawing-bar"}>
                          <span>{"P-104.pdf"}</span>
                          <span>{"Revision A"}</span>
                        </div>
                        <img
                          src={"/assets/project-pump.webp"}
                          width={"1536"}
                          height={"864"}
                          alt={
                            "Pump casing technical drawing with review detail"
                          }
                        />
                        <div className={"motion-pin"}>{"1"}</div>
                        <div className={"motion-cloud"}></div>
                      </div>
                      <aside className={"live-comments"}>
                        <span className={"thread-label"}>
                          {"Review comment"}
                        </span>
                        <div className={"reviewer"}>
                          <i>{"SR"}</i>
                          <div>
                            <strong>{"Supplier reviewer"}</strong>
                            <small>{"P-104 · Detail 1"}</small>
                          </div>
                        </div>
                        <p>
                          {"Please confirm the discharge flange bolt pattern."}
                        </p>
                        <span className={"question-status"}>
                          {"Question raised"}
                        </span>
                        <div className={"animated-answer"}>
                          <div className={"reviewer"}>
                            <i>{"EN"}</i>
                            <strong>{"Engineering"}</strong>
                          </div>
                          <p>
                            {
                              "8 holes, Ø18, on a Ø180 pitch circle. See the discharge flange view."
                            }
                          </p>
                          <span className={"source-tag"}>
                            {"Source: P-104 / A"}
                          </span>
                        </div>
                      </aside>
                    </div>
                    <figcaption>
                      {"Illustrative tool demonstration · Pump casing"}
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div
              className={"banner-slide "}
              data-banner-slide={"1"}
              aria-hidden={"true"}
              inert={true}
            >
              <div className={"banner-copy"}>
                <h2>
                  {"Bring the team"}
                  <br />
                  {"into the drawing."}
                </h2>
                <div>
                  <p>
                    {
                      "Keep supplier feedback and engineering clarification beside the pipework detail being discussed."
                    }
                  </p>
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
                  <a
                    className={"banner-feature-link"}
                    href={"/use-cases/external-drawing-review"}
                  >
                    {"Explore collaboration"}
                    <svg className={"brand-icon"} aria-hidden={"true"}>
                      <use href={"/assets/icons.svg#arrow-right"}></use>
                    </svg>
                  </a>
                </div>
              </div>
              <div className={"banner-visual"}>
                <div className={"workspace-glass"}>
                  <figure
                    className={"live-tool live-collaborate"}
                    aria-label={"Illustrative Skid pipework drawing review"}
                  >
                    <div className={"live-top"}>
                      <img
                        src={"/assets/official-logo-horizontal-light.png"}
                        alt={"Official VizeDraw logo"}
                      />
                      <span>{"Skid pipework"}</span>
                      <small>{"Illustrative workspace"}</small>
                    </div>
                    <div className={"live-body"}>
                      <div className={"live-rail"} aria-hidden={"true"}>
                        <svg className={"brand-icon"} aria-hidden={"true"}>
                          <use href={"/assets/icons.svg#folder"}></use>
                        </svg>
                        <svg className={"brand-icon"} aria-hidden={"true"}>
                          <use
                            href={"/assets/icons.svg#pencil-simple-line"}
                          ></use>
                        </svg>
                        <svg className={"brand-icon"} aria-hidden={"true"}>
                          <use href={"/assets/icons.svg#copy"}></use>
                        </svg>
                        <svg className={"brand-icon"} aria-hidden={"true"}>
                          <use href={"/assets/icons.svg#users-three"}></use>
                        </svg>
                      </div>
                      <div className={"live-canvas"}>
                        <div className={"drawing-bar"}>
                          <span>{"SK-208.pdf"}</span>
                          <span>{"Revision B"}</span>
                        </div>
                        <img
                          src={"/assets/project-pipe.webp"}
                          width={"1536"}
                          height={"864"}
                          alt={
                            "Skid pipework technical drawing with review detail"
                          }
                        />
                        <div className={"motion-pin"}>{"1"}</div>
                        <div className={"motion-cloud"}></div>
                      </div>
                      <aside className={"live-comments"}>
                        <span className={"thread-label"}>
                          {"Review comment"}
                        </span>
                        <div className={"reviewer"}>
                          <i>{"SR"}</i>
                          <div>
                            <strong>{"Supplier reviewer"}</strong>
                            <small>{"SK-208 · Detail 1"}</small>
                          </div>
                        </div>
                        <p>
                          {"Is there enough clearance to operate the valve?"}
                        </p>
                        <span className={"question-status"}>
                          {"Question raised"}
                        </span>
                        <div className={"animated-answer"}>
                          <div className={"reviewer"}>
                            <i>{"EN"}</i>
                            <strong>{"Engineering"}</strong>
                          </div>
                          <p>
                            {
                              "Minimum 300 mm clearance. See Detail A on Revision B."
                            }
                          </p>
                          <span className={"source-tag"}>
                            {"Source: SK-208 / B"}
                          </span>
                        </div>
                      </aside>
                    </div>
                    <figcaption>
                      {"Illustrative tool demonstration · Skid pipework"}
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div
              className={"banner-slide "}
              data-banner-slide={"2"}
              aria-hidden={"true"}
              inert={true}
            >
              <div className={"banner-copy"}>
                <h2>
                  {"Find the answer."}
                  <br />
                  {"Keep its source."}
                </h2>
                <div>
                  <p>
                    {
                      "Recover the drawing note behind a control-panel question, with the applicable revision in view."
                    }
                  </p>
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
                  <a
                    className={"banner-feature-link"}
                    href={"/drawing-knowledge"}
                  >
                    {"Explore drawing knowledge"}
                    <svg className={"brand-icon"} aria-hidden={"true"}>
                      <use href={"/assets/icons.svg#arrow-right"}></use>
                    </svg>
                  </a>
                </div>
              </div>
              <div className={"banner-visual"}>
                <div className={"workspace-glass"}>
                  <figure
                    className={"live-tool live-knowledge"}
                    aria-label={"Illustrative Control panel drawing review"}
                  >
                    <div className={"live-top"}>
                      <img
                        src={"/assets/official-logo-horizontal-light.png"}
                        alt={"Official VizeDraw logo"}
                      />
                      <span>{"Control panel"}</span>
                      <small>{"Illustrative workspace"}</small>
                    </div>
                    <div className={"live-body"}>
                      <div className={"live-rail"} aria-hidden={"true"}>
                        <svg className={"brand-icon"} aria-hidden={"true"}>
                          <use href={"/assets/icons.svg#folder"}></use>
                        </svg>
                        <svg className={"brand-icon"} aria-hidden={"true"}>
                          <use
                            href={"/assets/icons.svg#pencil-simple-line"}
                          ></use>
                        </svg>
                        <svg className={"brand-icon"} aria-hidden={"true"}>
                          <use href={"/assets/icons.svg#copy"}></use>
                        </svg>
                        <svg className={"brand-icon"} aria-hidden={"true"}>
                          <use href={"/assets/icons.svg#users-three"}></use>
                        </svg>
                      </div>
                      <div className={"live-canvas"}>
                        <div className={"drawing-bar"}>
                          <span>{"CP-312.pdf"}</span>
                          <span>{"Revision C"}</span>
                        </div>
                        <img
                          src={"/assets/project-panel.webp"}
                          width={"1536"}
                          height={"864"}
                          alt={
                            "Control panel technical drawing with review detail"
                          }
                        />
                        <div className={"motion-pin"}>{"1"}</div>
                        <div className={"motion-cloud"}></div>
                      </div>
                      <aside className={"live-comments"}>
                        <span className={"thread-label"}>
                          {"Review comment"}
                        </span>
                        <div className={"reviewer"}>
                          <i>{"SR"}</i>
                          <div>
                            <strong>{"Supplier reviewer"}</strong>
                            <small>{"CP-312 · Detail 1"}</small>
                          </div>
                        </div>
                        <p>
                          {"Which cable-entry detail applies to this panel?"}
                        </p>
                        <span className={"question-status"}>
                          {"Question raised"}
                        </span>
                        <div className={"animated-answer"}>
                          <div className={"reviewer"}>
                            <i>{"EN"}</i>
                            <strong>{"Engineering"}</strong>
                          </div>
                          <p>
                            {
                              "Cable entries via glands, as indicated. See Note 3 on Revision C."
                            }
                          </p>
                          <span className={"source-tag"}>
                            {"Source: CP-312 / C"}
                          </span>
                        </div>
                      </aside>
                    </div>
                    <figcaption>
                      {"Illustrative tool demonstration · Control panel"}
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className={"banner-controls"}>
              <div className={"banner-dots"}>
                <button
                  data-banner-go={"0"}
                  aria-label={"Show Mark up slide"}
                  aria-pressed={"true"}
                >
                  <span></span>
                  <b>{"Mark up"}</b>
                </button>
                <button
                  data-banner-go={"1"}
                  aria-label={"Show Collaborate slide"}
                  aria-pressed={"false"}
                >
                  <span></span>
                  <b>{"Collaborate"}</b>
                </button>
                <button
                  data-banner-go={"2"}
                  aria-label={"Show Find the source slide"}
                  aria-pressed={"false"}
                >
                  <span></span>
                  <b>{"Find the source"}</b>
                </button>
              </div>
              <div className={"banner-control-buttons"}>
                <button data-banner-prev={""} aria-label={"Previous feature"}>
                  <svg className={"brand-icon"} aria-hidden={"true"}>
                    <use href={"/assets/icons.svg#arrow-left"}></use>
                  </svg>
                </button>
                <button data-banner-pause={""} aria-label={"Pause banner"}>
                  <svg className={"brand-icon"} aria-hidden={"true"}>
                    <use href={"/assets/icons.svg#pause"}></use>
                  </svg>
                </button>
                <button data-banner-next={""} aria-label={"Next feature"}>
                  <svg className={"brand-icon"} aria-hidden={"true"}>
                    <use href={"/assets/icons.svg#arrow-right"}></use>
                  </svg>
                </button>
              </div>
              <span className={"banner-counter"}>{"01 / 03"}</span>
            </div>
          </div>
        </section>
        <section className={"audience-new"}>
          <div className={"wrap"}>
            <h2>
              {"For the people who design it."}
              <br />
              <span>{"And the people who build it."}</span>
            </h2>
          </div>
        </section>
        <section
          className={"outcome-section pain-carousel story-editorial"}
          data-pain-carousel={""}
          aria-labelledby={"outcome-heading"}
          aria-roledescription={"carousel"}
        >
          <div className={"wrap"}>
            <div className={"outcome-lead"}>
              <h2 id={"outcome-heading"}>
                {"The cost of an unclear drawing."}
              </h2>
              <p className={"outcome-lead-note"}>
                {
                  "Explore the consequences of a review gap — and the context that helps your team address it."
                }
              </p>
            </div>
            <div className={"pain-box"}>
              <article
                className={"pain-slide"}
                id={"pain-panel-0"}
                role={"tabpanel"}
                aria-labelledby={"pain-tab-0"}
                data-pain-slide={"0"}
              >
                <div className={"pain-problem"}>
                  <figure className={"pain-film"} data-pain-film={"revision"}>
                    <video
                      className={"pain-video"}
                      data-src={"/assets/story-revision.mp4"}
                      preload={"none"}
                      muted={true}
                      loop={true}
                      playsInline={true}
                      aria-label={
                        "Silent illustrative revision review scenario"
                      }
                    ></video>
                    <img
                      className={"pain-poster"}
                      src={"/assets/story-revision-poster.webp"}
                      width={"960"}
                      height={"540"}
                      loading={"lazy"}
                      alt={
                        "Illustrative scenario: Wrong revision. Unplanned rework."
                      }
                    />
                    <figcaption className={"pain-film-caption"}>
                      {"Illustrative scenario"}
                    </figcaption>
                    <button
                      className={"pain-film-toggle"}
                      data-film-toggle={""}
                      aria-label={"Pause scenario animation"}
                      hidden={true}
                    >
                      <svg className={"brand-icon"} aria-hidden={"true"}>
                        <use href={"/assets/icons.svg#pause"}></use>
                      </svg>
                    </button>
                    <span
                      className={"pain-film-phase"}
                      data-film-phase={""}
                    ></span>
                  </figure>
                  <div className={"pain-issue"}>
                    <span className={"pain-eyebrow"}>
                      {"When context is missing"}
                    </span>
                    <h3>
                      {"Wrong revision."}
                      <br />
                      {"Unplanned rework."}
                    </h3>
                    <p>
                      {
                        "Work starts from a superseded drawing. A part does not match the intended assembly, and the job needs doing again."
                      }
                    </p>
                  </div>
                </div>
                <div className={"pain-solution"}>
                  <div className={"solution-signature"}>
                    <span>{"A clearer review with"}</span>
                    <img
                      className={"pain-brand"}
                      src={"/assets/official-logo-horizontal-light.png"}
                      width={"600"}
                      height={"190"}
                      alt={"VizeDraw"}
                    />
                  </div>
                  <h3>{"Review the change before work starts."}</h3>
                  <figure
                    className={"solution-figure"}
                    data-story-key={"revision"}
                  >
                    <img
                      className={"pain-solution-art"}
                      src={"/assets/editorial-solution-revision.webp"}
                      width={"1536"}
                      height={"1024"}
                      loading={"lazy"}
                      alt={
                        "Conceptual illustration: Review the change before work starts."
                      }
                    />
                    <span className={"solution-focus"} aria-hidden={"true"}>
                      <span></span>
                    </span>
                    <div className={"solution-context"}>
                      <span>{"Illustrative review action"}</span>
                      <strong data-solution-caption={""}></strong>
                    </div>
                  </figure>
                  <p>
                    {
                      "Compare the changed detail and record which drawing revision applies before the next handoff."
                    }
                  </p>
                </div>
              </article>
              <article
                className={"pain-slide"}
                id={"pain-panel-1"}
                role={"tabpanel"}
                aria-labelledby={"pain-tab-1"}
                data-pain-slide={"1"}
                hidden={true}
                inert={true}
              >
                <div className={"pain-problem"}>
                  <figure className={"pain-film"} data-pain-film={"detail"}>
                    <video
                      className={"pain-video"}
                      data-src={"/assets/story-detail.mp4"}
                      preload={"none"}
                      muted={true}
                      loop={true}
                      playsInline={true}
                      aria-label={"Silent illustrative detail review scenario"}
                    ></video>
                    <img
                      className={"pain-poster"}
                      src={"/assets/story-detail-poster.webp"}
                      width={"960"}
                      height={"540"}
                      loading={"lazy"}
                      alt={
                        "Illustrative scenario: One unclear note. Work waits for an answer."
                      }
                    />
                    <figcaption className={"pain-film-caption"}>
                      {"Illustrative scenario"}
                    </figcaption>
                    <button
                      className={"pain-film-toggle"}
                      data-film-toggle={""}
                      aria-label={"Pause scenario animation"}
                      hidden={true}
                    >
                      <svg className={"brand-icon"} aria-hidden={"true"}>
                        <use href={"/assets/icons.svg#pause"}></use>
                      </svg>
                    </button>
                    <span
                      className={"pain-film-phase"}
                      data-film-phase={""}
                    ></span>
                  </figure>
                  <div className={"pain-issue"}>
                    <span className={"pain-eyebrow"}>
                      {"When context is missing"}
                    </span>
                    <h3>
                      {"One unclear note."}
                      <br />
                      {"Work waits for an answer."}
                    </h3>
                    <p>
                      {
                        "A dimension, tolerance or instruction is unclear. The next person cannot act confidently without a clarification."
                      }
                    </p>
                  </div>
                </div>
                <div className={"pain-solution"}>
                  <div className={"solution-signature"}>
                    <span>{"A clearer review with"}</span>
                    <img
                      className={"pain-brand"}
                      src={"/assets/official-logo-horizontal-light.png"}
                      width={"600"}
                      height={"190"}
                      alt={"VizeDraw"}
                    />
                  </div>
                  <h3>{"Ask before the part is made."}</h3>
                  <figure
                    className={"solution-figure"}
                    data-story-key={"detail"}
                  >
                    <img
                      className={"pain-solution-art"}
                      src={"/assets/editorial-solution-detail.webp"}
                      width={"1536"}
                      height={"1024"}
                      loading={"lazy"}
                      alt={
                        "Conceptual illustration: Ask before the part is made."
                      }
                    />
                    <span className={"solution-focus"} aria-hidden={"true"}>
                      <span></span>
                    </span>
                    <div className={"solution-context"}>
                      <span>{"Illustrative review action"}</span>
                      <strong data-solution-caption={""}></strong>
                    </div>
                  </figure>
                  <p>
                    {
                      "Give an unclear dimension, tolerance or interface a precise place for an engineering response."
                    }
                  </p>
                </div>
              </article>
              <article
                className={"pain-slide"}
                id={"pain-panel-2"}
                role={"tabpanel"}
                aria-labelledby={"pain-tab-2"}
                data-pain-slide={"2"}
                hidden={true}
                inert={true}
              >
                <div className={"pain-problem"}>
                  <figure className={"pain-film"} data-pain-film={"decision"}>
                    <video
                      className={"pain-video"}
                      data-src={"/assets/story-decision.mp4"}
                      preload={"none"}
                      muted={true}
                      loop={true}
                      playsInline={true}
                      aria-label={
                        "Silent illustrative decision review scenario"
                      }
                    ></video>
                    <img
                      className={"pain-poster"}
                      src={"/assets/story-decision-poster.webp"}
                      width={"960"}
                      height={"540"}
                      loading={"lazy"}
                      alt={
                        "Illustrative scenario: A decision was made. The reasoning was lost."
                      }
                    />
                    <figcaption className={"pain-film-caption"}>
                      {"Illustrative scenario"}
                    </figcaption>
                    <button
                      className={"pain-film-toggle"}
                      data-film-toggle={""}
                      aria-label={"Pause scenario animation"}
                      hidden={true}
                    >
                      <svg className={"brand-icon"} aria-hidden={"true"}>
                        <use href={"/assets/icons.svg#pause"}></use>
                      </svg>
                    </button>
                    <span
                      className={"pain-film-phase"}
                      data-film-phase={""}
                    ></span>
                  </figure>
                  <div className={"pain-issue"}>
                    <span className={"pain-eyebrow"}>
                      {"When context is missing"}
                    </span>
                    <h3>
                      {"A decision was made."}
                      <br />
                      {"The reasoning was lost."}
                    </h3>
                    <p>
                      {
                        "The drawing changes, but the explanation behind the change is hard to recover. The next review starts with uncertainty."
                      }
                    </p>
                  </div>
                </div>
                <div className={"pain-solution"}>
                  <div className={"solution-signature"}>
                    <span>{"A clearer review with"}</span>
                    <img
                      className={"pain-brand"}
                      src={"/assets/official-logo-horizontal-light.png"}
                      width={"600"}
                      height={"190"}
                      alt={"VizeDraw"}
                    />
                  </div>
                  <h3>{"Recover why the drawing changed."}</h3>
                  <figure
                    className={"solution-figure"}
                    data-story-key={"decision"}
                  >
                    <img
                      className={"pain-solution-art"}
                      src={"/assets/editorial-solution-decision.webp"}
                      width={"1536"}
                      height={"1024"}
                      loading={"lazy"}
                      alt={
                        "Conceptual illustration: Recover why the drawing changed."
                      }
                    />
                    <span className={"solution-focus"} aria-hidden={"true"}>
                      <span></span>
                    </span>
                    <div className={"solution-context"}>
                      <span>{"Illustrative review action"}</span>
                      <strong data-solution-caption={""}></strong>
                    </div>
                  </figure>
                  <p>
                    {
                      "Find the recorded explanation alongside the detail and revision it refers to."
                    }
                  </p>
                </div>
              </article>
              <article
                className={"pain-slide"}
                id={"pain-panel-3"}
                role={"tabpanel"}
                aria-labelledby={"pain-tab-3"}
                data-pain-slide={"3"}
                hidden={true}
                inert={true}
              >
                <div className={"pain-problem"}>
                  <figure className={"pain-film"} data-pain-film={"supplier"}>
                    <video
                      className={"pain-video"}
                      data-src={"/assets/story-supplier.mp4"}
                      preload={"none"}
                      muted={true}
                      loop={true}
                      playsInline={true}
                      aria-label={
                        "Silent illustrative supplier review scenario"
                      }
                    ></video>
                    <img
                      className={"pain-poster"}
                      src={"/assets/story-supplier-poster.webp"}
                      width={"960"}
                      height={"540"}
                      loading={"lazy"}
                      alt={
                        "Illustrative scenario: Different feedback. Conflicting instructions."
                      }
                    />
                    <figcaption className={"pain-film-caption"}>
                      {"Illustrative scenario"}
                    </figcaption>
                    <button
                      className={"pain-film-toggle"}
                      data-film-toggle={""}
                      aria-label={"Pause scenario animation"}
                      hidden={true}
                    >
                      <svg className={"brand-icon"} aria-hidden={"true"}>
                        <use href={"/assets/icons.svg#pause"}></use>
                      </svg>
                    </button>
                    <span
                      className={"pain-film-phase"}
                      data-film-phase={""}
                    ></span>
                  </figure>
                  <div className={"pain-issue"}>
                    <span className={"pain-eyebrow"}>
                      {"When context is missing"}
                    </span>
                    <h3>
                      {"Different feedback."}
                      <br />
                      {"Conflicting instructions."}
                    </h3>
                    <p>
                      {
                        "Engineering and supplier comments pull the review in different directions. The next action is no longer clear."
                      }
                    </p>
                  </div>
                </div>
                <div className={"pain-solution"}>
                  <div className={"solution-signature"}>
                    <span>{"A clearer review with"}</span>
                    <img
                      className={"pain-brand"}
                      src={"/assets/official-logo-horizontal-light.png"}
                      width={"600"}
                      height={"190"}
                      alt={"VizeDraw"}
                    />
                  </div>
                  <h3>{"Review the interface together."}</h3>
                  <figure
                    className={"solution-figure"}
                    data-story-key={"supplier"}
                  >
                    <img
                      className={"pain-solution-art"}
                      src={"/assets/editorial-solution-supplier.webp"}
                      width={"1536"}
                      height={"1024"}
                      loading={"lazy"}
                      alt={
                        "Conceptual illustration: Review the interface together."
                      }
                    />
                    <span className={"solution-focus"} aria-hidden={"true"}>
                      <span></span>
                    </span>
                    <div className={"solution-context"}>
                      <span>{"Illustrative review action"}</span>
                      <strong data-solution-caption={""}></strong>
                    </div>
                  </figure>
                  <p>
                    {
                      "Give external reviewers and engineering the same place to work through the question."
                    }
                  </p>
                </div>
              </article>
              <article
                className={"pain-slide"}
                id={"pain-panel-4"}
                role={"tabpanel"}
                aria-labelledby={"pain-tab-4"}
                data-pain-slide={"4"}
                hidden={true}
                inert={true}
              >
                <div className={"pain-problem"}>
                  <figure className={"pain-film"} data-pain-film={"repeat"}>
                    <video
                      className={"pain-video"}
                      data-src={"/assets/story-repeat.mp4"}
                      preload={"none"}
                      muted={true}
                      loop={true}
                      playsInline={true}
                      aria-label={"Silent illustrative repeat review scenario"}
                    ></video>
                    <img
                      className={"pain-poster"}
                      src={"/assets/story-repeat-poster.webp"}
                      width={"960"}
                      height={"540"}
                      loading={"lazy"}
                      alt={
                        "Illustrative scenario: Reviews pile up. The project slows down."
                      }
                    />
                    <figcaption className={"pain-film-caption"}>
                      {"Illustrative scenario"}
                    </figcaption>
                    <button
                      className={"pain-film-toggle"}
                      data-film-toggle={""}
                      aria-label={"Pause scenario animation"}
                      hidden={true}
                    >
                      <svg className={"brand-icon"} aria-hidden={"true"}>
                        <use href={"/assets/icons.svg#pause"}></use>
                      </svg>
                    </button>
                    <span
                      className={"pain-film-phase"}
                      data-film-phase={""}
                    ></span>
                  </figure>
                  <div className={"pain-issue"}>
                    <span className={"pain-eyebrow"}>
                      {"When context is missing"}
                    </span>
                    <h3>
                      {"Reviews pile up."}
                      <br />
                      {"The project slows down."}
                    </h3>
                    <p>
                      {
                        "Drawing packages wait while questions and responses move through disconnected review queues."
                      }
                    </p>
                  </div>
                </div>
                <div className={"pain-solution"}>
                  <div className={"solution-signature"}>
                    <span>{"A clearer review with"}</span>
                    <img
                      className={"pain-brand"}
                      src={"/assets/official-logo-horizontal-light.png"}
                      width={"600"}
                      height={"190"}
                      alt={"VizeDraw"}
                    />
                  </div>
                  <h3>{"See what is holding the review up."}</h3>
                  <figure
                    className={"solution-figure"}
                    data-story-key={"repeat"}
                  >
                    <img
                      className={"pain-solution-art"}
                      src={"/assets/editorial-solution-repeat.webp"}
                      width={"1536"}
                      height={"1024"}
                      loading={"lazy"}
                      alt={
                        "Conceptual illustration: See what is holding the review up."
                      }
                    />
                    <span className={"solution-focus"} aria-hidden={"true"}>
                      <span></span>
                    </span>
                    <div className={"solution-context"}>
                      <span>{"Illustrative review action"}</span>
                      <strong data-solution-caption={""}></strong>
                    </div>
                  </figure>
                  <p>
                    {
                      "Find the questions still needing a response without rebuilding the conversation from scattered messages."
                    }
                  </p>
                </div>
              </article>
              <article
                className={"pain-slide"}
                id={"pain-panel-5"}
                role={"tabpanel"}
                aria-labelledby={"pain-tab-5"}
                data-pain-slide={"5"}
                hidden={true}
                inert={true}
              >
                <div className={"pain-problem"}>
                  <figure className={"pain-film"} data-pain-film={"handoff"}>
                    <video
                      className={"pain-video"}
                      data-src={"/assets/story-handoff.mp4"}
                      preload={"none"}
                      muted={true}
                      loop={true}
                      playsInline={true}
                      aria-label={"Silent illustrative handoff review scenario"}
                    ></video>
                    <img
                      className={"pain-poster"}
                      src={"/assets/story-handoff-poster.webp"}
                      width={"960"}
                      height={"540"}
                      loading={"lazy"}
                      alt={
                        "Illustrative scenario: The PDF arrived. The context did not."
                      }
                    />
                    <figcaption className={"pain-film-caption"}>
                      {"Illustrative scenario"}
                    </figcaption>
                    <button
                      className={"pain-film-toggle"}
                      data-film-toggle={""}
                      aria-label={"Pause scenario animation"}
                      hidden={true}
                    >
                      <svg className={"brand-icon"} aria-hidden={"true"}>
                        <use href={"/assets/icons.svg#pause"}></use>
                      </svg>
                    </button>
                    <span
                      className={"pain-film-phase"}
                      data-film-phase={""}
                    ></span>
                  </figure>
                  <div className={"pain-issue"}>
                    <span className={"pain-eyebrow"}>
                      {"When context is missing"}
                    </span>
                    <h3>
                      {"The PDF arrived."}
                      <br />
                      {"The context did not."}
                    </h3>
                    <p>
                      {
                        "The next team gets a drawing without the unresolved questions and explanations that belong with it."
                      }
                    </p>
                  </div>
                </div>
                <div className={"pain-solution"}>
                  <div className={"solution-signature"}>
                    <span>{"A clearer review with"}</span>
                    <img
                      className={"pain-brand"}
                      src={"/assets/official-logo-horizontal-light.png"}
                      width={"600"}
                      height={"190"}
                      alt={"VizeDraw"}
                    />
                  </div>
                  <h3>{"Pass the context to the next team."}</h3>
                  <figure
                    className={"solution-figure"}
                    data-story-key={"handoff"}
                  >
                    <img
                      className={"pain-solution-art"}
                      src={"/assets/editorial-solution-handoff.webp"}
                      width={"1536"}
                      height={"1024"}
                      loading={"lazy"}
                      alt={
                        "Conceptual illustration: Pass the context to the next team."
                      }
                    />
                    <span className={"solution-focus"} aria-hidden={"true"}>
                      <span></span>
                    </span>
                    <div className={"solution-context"}>
                      <span>{"Illustrative review action"}</span>
                      <strong data-solution-caption={""}></strong>
                    </div>
                  </figure>
                  <p>
                    {
                      "Keep the applicable drawing and unresolved questions visible when work changes hands."
                    }
                  </p>
                </div>
              </article>
              <div className={"pain-controls"}>
                <div
                  className={"pain-tabs"}
                  role={"tablist"}
                  aria-label={"Examples of drawing review risks"}
                >
                  <button
                    role={"tab"}
                    id={"pain-tab-0"}
                    aria-controls={"pain-panel-0"}
                    aria-selected={"true"}
                    tabIndex={0}
                    data-pain-go={"0"}
                  >
                    {"Revision & rework"}
                  </button>
                  <button
                    role={"tab"}
                    id={"pain-tab-1"}
                    aria-controls={"pain-panel-1"}
                    aria-selected={"false"}
                    tabIndex={-1}
                    data-pain-go={"1"}
                  >
                    {"Unclear requirements"}
                  </button>
                  <button
                    role={"tab"}
                    id={"pain-tab-2"}
                    aria-controls={"pain-panel-2"}
                    aria-selected={"false"}
                    tabIndex={-1}
                    data-pain-go={"2"}
                  >
                    {"Lost decisions"}
                  </button>
                  <button
                    role={"tab"}
                    id={"pain-tab-3"}
                    aria-controls={"pain-panel-3"}
                    aria-selected={"false"}
                    tabIndex={-1}
                    data-pain-go={"3"}
                  >
                    {"Conflicting feedback"}
                  </button>
                  <button
                    role={"tab"}
                    id={"pain-tab-4"}
                    aria-controls={"pain-panel-4"}
                    aria-selected={"false"}
                    tabIndex={-1}
                    data-pain-go={"4"}
                  >
                    {"Review delays"}
                  </button>
                  <button
                    role={"tab"}
                    id={"pain-tab-5"}
                    aria-controls={"pain-panel-5"}
                    aria-selected={"false"}
                    tabIndex={-1}
                    data-pain-go={"5"}
                  >
                    {"Missing handoff context"}
                  </button>
                </div>
                <div className={"pain-playback"}>
                  <button data-pain-prev={""} aria-label={"Previous story"}>
                    <svg className={"brand-icon"} aria-hidden={"true"}>
                      <use href={"/assets/icons.svg#arrow-left"}></use>
                    </svg>
                  </button>
                  <button
                    data-pain-pause={""}
                    aria-label={"Pause problem and solution carousel"}
                  >
                    <svg className={"brand-icon"} aria-hidden={"true"}>
                      <use href={"/assets/icons.svg#pause"}></use>
                    </svg>
                  </button>
                  <button data-pain-next={""} aria-label={"Next story"}>
                    <svg className={"brand-icon"} aria-hidden={"true"}>
                      <use href={"/assets/icons.svg#arrow-right"}></use>
                    </svg>
                  </button>
                  <span data-pain-count={""}>{"1 / 6"}</span>
                </div>
              </div>
              <div className={"pain-progress"} aria-hidden={"true"}>
                <span></span>
              </div>
            </div>
            <div className={"investment"}>
              <div className={"investment-message"}>
                <span className={"investment-kicker"}>
                  {"The case for a clearer review"}
                </span>
                <h3>
                  {"Review is an investment."}
                  <br />
                  {"Rework is an expense."}
                </h3>
                <p>
                  {
                    "Put a clearer review alongside the time spent chasing revisions, repeating a review or remaking a part."
                  }
                </p>
                <small>
                  {
                    "Costs vary by project. Engineering approval remains with your team."
                  }
                </small>
              </div>
              <div className={"investment-price"}>
                <span>{"Control starts at"}</span>
                <strong>{"$99"}</strong>
                <p>{"per user, per year"}</p>
                <a className={"button investment-cta"} href={"/pricing"}>
                  {"See plans & pricing "}
                  <svg className={"brand-icon"} aria-hidden={"true"}>
                    <use href={"/assets/icons.svg#arrow-up-right"}></use>
                  </svg>
                </a>
              </div>
            </div>
            <p className={"outcome-note"}>
              {
                "Illustrative scenarios and review concepts. Engineering decisions and release remain with your team."
              }
            </p>
          </div>
        </section>
        <section className={"feature-reel"}>
          <div className={"wrap"}>
            <div className={"reel-heading"}>
              <div>
                <h2>{"The tools behind a clearer review."}</h2>
                <p>{"A quick look. Then explore what you need."}</p>
              </div>
              <div className={"reel-controls"}>
                <button data-reel-prev={""} aria-label={"Previous features"}>
                  <svg className={"brand-icon"} aria-hidden={"true"}>
                    <use href={"/assets/icons.svg#arrow-left"}></use>
                  </svg>
                </button>
                <button data-reel-next={""} aria-label={"Next features"}>
                  <svg className={"brand-icon"} aria-hidden={"true"}>
                    <use href={"/assets/icons.svg#arrow-right"}></use>
                  </svg>
                </button>
              </div>
            </div>
            <div
              className={"reel-track"}
              tabIndex={0}
              aria-label={"Feature gallery; scroll horizontally"}
            >
              <a className={"mini-feature"} href={"/features"}>
                <img
                  src={"/assets/vivid-feature-mark.webp"}
                  width={"1536"}
                  height={"1024"}
                  alt={"Conceptual feature illustration: Ask at the detail."}
                  loading={"lazy"}
                />
                <div>
                  <h3>{"Ask at the detail."}</h3>
                  <p>{"Locate feedback with a markup."}</p>
                  <span aria-hidden={"true"}>{"↗"}</span>
                </div>
              </a>
              <a
                className={"mini-feature"}
                href={"/use-cases/drawing-revision-review"}
              >
                <img
                  src={"/assets/vivid-feature-revision.webp"}
                  width={"1536"}
                  height={"1024"}
                  alt={"Conceptual feature illustration: Compare revisions."}
                  loading={"lazy"}
                />
                <div>
                  <h3>{"Compare revisions."}</h3>
                  <p>{"Keep changed details in view."}</p>
                  <span aria-hidden={"true"}>{"↗"}</span>
                </div>
              </a>
              <a
                className={"mini-feature"}
                href={"/use-cases/external-drawing-review"}
              >
                <img
                  src={"/assets/vivid-feature-conversation.webp"}
                  width={"1536"}
                  height={"1024"}
                  alt={"Conceptual feature illustration: Review together."}
                  loading={"lazy"}
                />
                <div>
                  <h3>{"Review together."}</h3>
                  <p>{"A question and response, connected."}</p>
                  <span aria-hidden={"true"}>{"↗"}</span>
                </div>
              </a>
              <a className={"mini-feature"} href={"/drawing-knowledge"}>
                <img
                  src={"/assets/vivid-feature-knowledge.webp"}
                  width={"1536"}
                  height={"1024"}
                  alt={"Conceptual feature illustration: Find the source."}
                  loading={"lazy"}
                />
                <div>
                  <h3>{"Find the source."}</h3>
                  <p>{"Recover a recorded clarification."}</p>
                  <span aria-hidden={"true"}>{"↗"}</span>
                </div>
              </a>
              <a className={"mini-feature"} href={"/features"}>
                <img
                  src={"/assets/vivid-feature-open.webp"}
                  width={"1536"}
                  height={"1024"}
                  alt={
                    "Conceptual feature illustration: Keep questions visible."
                  }
                  loading={"lazy"}
                />
                <div>
                  <h3>{"Keep questions visible."}</h3>
                  <p>{"See what still needs a response."}</p>
                  <span aria-hidden={"true"}>{"↗"}</span>
                </div>
              </a>
              <a className={"mini-feature"} href={"/product"}>
                <img
                  src={"/assets/vivid-feature-package.webp"}
                  width={"1536"}
                  height={"1024"}
                  alt={"Conceptual feature illustration: Know the package."}
                  loading={"lazy"}
                />
                <div>
                  <h3>{"Know the package."}</h3>
                  <p>{"Drawing, revision and review context."}</p>
                  <span aria-hidden={"true"}>{"↗"}</span>
                </div>
              </a>
            </div>
            <a className={"reel-all"} href={"/features"}>
              {"Explore all features "}
              <svg className={"brand-icon"} aria-hidden={"true"}>
                <use href={"/assets/icons.svg#arrow-right"}></use>
              </svg>
            </a>
          </div>
        </section>
        <section
          className={"auto-walkthrough review-story-new"}
          data-auto-demo={""}
          id={"review-story"}
        >
          <div className={"wrap"}>
            <div className={"section-lead"}>
              <div>
                <h2>
                  {"From the first question"}
                  <br />
                  {"to the next handoff."}
                </h2>
                <p>
                  {"Follow a conveyor review through three connected actions."}
                </p>
              </div>
              <button
                className={"auto-pause"}
                data-auto-pause={""}
                aria-label={"Pause conveyor walkthrough"}
              >
                {"Pause walkthrough"}
              </button>
            </div>
            <div className={"auto-panels"}>
              <div
                className={"auto-panel active"}
                data-auto-panel={"0"}
                aria-hidden={"false"}
              >
                <figure
                  className={"live-tool live-markup"}
                  aria-label={"Illustrative Conveyor drive drawing review"}
                >
                  <div className={"live-top"}>
                    <img
                      src={"/assets/official-logo-horizontal-light.png"}
                      alt={"Official VizeDraw logo"}
                    />
                    <span>{"Conveyor drive"}</span>
                    <small>{"Illustrative workspace"}</small>
                  </div>
                  <div className={"live-body"}>
                    <div className={"live-rail"} aria-hidden={"true"}>
                      <svg className={"brand-icon"} aria-hidden={"true"}>
                        <use href={"/assets/icons.svg#folder"}></use>
                      </svg>
                      <svg className={"brand-icon"} aria-hidden={"true"}>
                        <use
                          href={"/assets/icons.svg#pencil-simple-line"}
                        ></use>
                      </svg>
                      <svg className={"brand-icon"} aria-hidden={"true"}>
                        <use href={"/assets/icons.svg#copy"}></use>
                      </svg>
                      <svg className={"brand-icon"} aria-hidden={"true"}>
                        <use href={"/assets/icons.svg#users-three"}></use>
                      </svg>
                    </div>
                    <div className={"live-canvas"}>
                      <div className={"drawing-bar"}>
                        <span>{"CV-416.pdf"}</span>
                        <span>{"Revision A"}</span>
                      </div>
                      <img
                        src={"/assets/project-conveyor-a.webp"}
                        width={"1536"}
                        height={"864"}
                        alt={
                          "Conveyor drive technical drawing with review detail"
                        }
                      />
                      <div className={"motion-pin"}>{"1"}</div>
                      <div className={"motion-cloud"}></div>
                    </div>
                    <aside className={"live-comments"}>
                      <span className={"thread-label"}>{"Review comment"}</span>
                      <div className={"reviewer"}>
                        <i>{"SR"}</i>
                        <div>
                          <strong>{"Supplier reviewer"}</strong>
                          <small>{"CV-416 · Detail 1"}</small>
                        </div>
                      </div>
                      <p>
                        {
                          "What minimum clearance is required around the belt guard?"
                        }
                      </p>
                      <span className={"question-status"}>
                        {"Question raised"}
                      </span>
                      <div className={"animated-answer"}>
                        <div className={"reviewer"}>
                          <i>{"EN"}</i>
                          <strong>{"Engineering"}</strong>
                        </div>
                        <p>
                          {
                            "The clearance question is awaiting engineering clarification."
                          }
                        </p>
                        <span className={"source-tag"}>
                          {"Source: CV-416 / A"}
                        </span>
                      </div>
                    </aside>
                  </div>
                  <figcaption>
                    {"Illustrative tool demonstration · Conveyor drive"}
                  </figcaption>
                </figure>
                <div className={"auto-explanation"}>
                  <b>{"Locate the question."}</b>
                  <p>
                    {
                      "The supplier asks which clearance is required on Revision A."
                    }
                  </p>
                </div>
              </div>
              <div
                className={"auto-panel "}
                data-auto-panel={"1"}
                aria-hidden={"true"}
                inert={true}
              >
                <figure className={"sequence-raster"}>
                  <img
                    src={"/assets/project-conveyor-pair.webp"}
                    width={"1672"}
                    height={"941"}
                    alt={
                      "Conveyor revisions A and B: earlier clearance question and minimum 50 mm clarification"
                    }
                  />
                  <figcaption>
                    {"Illustrative revision comparison · CV-416 / A and B"}
                  </figcaption>
                </figure>
                <div className={"auto-explanation"}>
                  <b>{"Review the clarified detail."}</b>
                  <p>
                    {"Revision B specifies a minimum 50 mm guard clearance."}
                  </p>
                </div>
              </div>
              <div
                className={"auto-panel "}
                data-auto-panel={"2"}
                aria-hidden={"true"}
                inert={true}
              >
                <figure className={"sequence-raster"}>
                  <img
                    src={"/assets/project-conveyor-response.webp"}
                    width={"1672"}
                    height={"941"}
                    alt={
                      "Engineering response beside the belt guard detail: minimum 50 mm clearance on CV-416 revision B"
                    }
                  />
                  <figcaption>
                    {"Illustrative recorded response · CV-416 / B"}
                  </figcaption>
                </figure>
                <div className={"auto-explanation"}>
                  <b>{"Record the response."}</b>
                  <p>
                    {"Engineering links the 50 mm clarification to CV-416 / B."}
                  </p>
                </div>
              </div>
            </div>
            <div className={"auto-steps"}>
              <button data-auto-go={"0"} aria-pressed={"true"}>
                <span>{"01"}</span>
                {"Locate the question."}
                <i></i>
              </button>
              <button data-auto-go={"1"} aria-pressed={"false"}>
                <span>{"02"}</span>
                {"Review the clarified detail."}
                <i></i>
              </button>
              <button data-auto-go={"2"} aria-pressed={"false"}>
                <span>{"03"}</span>
                {"Record the response."}
                <i></i>
              </button>
            </div>
            <div className={"animation-downloads"}>
              <a
                href={"/assets/conveyor-review-demo.mp4"}
                target={"_blank"}
                rel={"noopener"}
              >
                {"Watch the animated example "}
                <svg className={"brand-icon"} aria-hidden={"true"}>
                  <use href={"/assets/icons.svg#arrow-up-right"}></use>
                </svg>
              </a>
              <a
                href={"/assets/conveyor-review-demo.gif"}
                target={"_blank"}
                rel={"noopener"}
              >
                {"Open GIF"}
              </a>
            </div>
          </div>
        </section>
        <section className={"people-review"}>
          <div className={"wrap"}>
            <div className={"people-copy"}>
              <h2>
                {"Your next review."}
                <br />
                {"The right people."}
                <br />
                {"The same drawing."}
              </h2>
              <p>
                {
                  "Bring engineering, suppliers and quality into the conversation while the detail is still in view."
                }
              </p>
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
            <figure>
              <img
                src={"/assets/outcome-team.webp"}
                width={"1536"}
                height={"1024"}
                alt={
                  "Illustrative US engineering team discussing a drawing review together"
                }
                loading={"lazy"}
              />
              <figcaption>{"Illustrative engineering team"}</figcaption>
            </figure>
          </div>
        </section>
        <section className={"home-news-new vivid-news"}>
          <div className={"wrap"}>
            <div className={"news-heading"}>
              <h2>{"News & updates."}</h2>
              <p>{"A closer look at what’s new on the VizeDraw website."}</p>
              <a href={"/news"}>
                {"All updates "}
                <svg className={"brand-icon"} aria-hidden={"true"}>
                  <use href={"/assets/icons.svg#arrow-right"}></use>
                </svg>
              </a>
            </div>
            <div className={"news-updates"}>
              <article>
                <span>{"Website update · 14 October 2026"}</span>
                <h3>{"Where drawing context breaks down."}</h3>
                <p>
                  {
                    "Explore a new visual narrative about the consequences of missing drawing context."
                  }
                </p>
                <a href={"#outcome-heading"}>
                  {"Explore the stories "}
                  <svg className={"brand-icon"} aria-hidden={"true"}>
                    <use href={"/assets/icons.svg#arrow-right"}></use>
                  </svg>
                </a>
              </article>
              <article>
                <span>{"Website update · 13 October 2026"}</span>
                <h3>{"A closer look at drawing collaboration."}</h3>
                <p>
                  {
                    "Follow original examples of markup, revision comparison and source-linked responses."
                  }
                </p>
                <a href={"#review-story"}>
                  {"Watch the example "}
                  <svg className={"brand-icon"} aria-hidden={"true"}>
                    <use href={"/assets/icons.svg#arrow-right"}></use>
                  </svg>
                </a>
              </article>
              <article>
                <span>{"Resource update · 13 October 2026"}</span>
                <h3>{"Practical reading for drawing reviewers."}</h3>
                <p>
                  {
                    "Three sample articles cover useful questions, incoming revisions and supplier feedback."
                  }
                </p>
                <a href={"/blog"}>
                  {"Read the articles "}
                  <svg className={"brand-icon"} aria-hidden={"true"}>
                    <use href={"/assets/icons.svg#arrow-right"}></use>
                  </svg>
                </a>
              </article>
            </div>
          </div>
        </section>
        <section className={"home-blog-new wrap"}>
          <div className={"blog-heading"}>
            <h2>
              {"Better drawing reviews"}
              <br />
              {"start with better questions."}
            </h2>
            <a href={"/blog"}>
              {"Visit the blog "}
              <svg className={"brand-icon"} aria-hidden={"true"}>
                <use href={"/assets/icons.svg#arrow-right"}></use>
              </svg>
            </a>
          </div>
          <p className={"blog-intro"}>
            {"Three sample articles for the people doing the review."}
          </p>
          <div className={"blog-preview-grid"}>
            <a
              className={"blog-preview"}
              href={"/blog/questions-that-get-answers"}
            >
              <img
                src={"/assets/vivid-blog-questions.webp"}
                width={"1536"}
                height={"864"}
                loading={"lazy"}
                alt={"Conceptual Drawing review editorial illustration"}
              />
              <div>
                <span>{"Sample article · Drawing review"}</span>
                <h3>{"Write drawing questions that get useful answers."}</h3>
                <p>
                  {
                    "A location, a revision and a specific request make a review comment easier to act on."
                  }
                </p>
                <b>
                  {"Read the article "}
                  <svg className={"brand-icon"} aria-hidden={"true"}>
                    <use href={"/assets/icons.svg#arrow-right"}></use>
                  </svg>
                </b>
              </div>
            </a>
            <a
              className={"blog-preview"}
              href={"/blog/revision-review-before-handoff"}
            >
              <img
                src={"/assets/vivid-blog-revisions.webp"}
                width={"1536"}
                height={"864"}
                loading={"lazy"}
                alt={"Conceptual Revision review editorial illustration"}
              />
              <div>
                <span>{"Sample article · Revision review"}</span>
                <h3>{"What to check when a drawing revision arrives."}</h3>
                <p>
                  {
                    "Review the changed detail, its related notes and the questions carried over from the earlier drawing."
                  }
                </p>
                <b>
                  {"Read the article "}
                  <svg className={"brand-icon"} aria-hidden={"true"}>
                    <use href={"/assets/icons.svg#arrow-right"}></use>
                  </svg>
                </b>
              </div>
            </a>
            <a
              className={"blog-preview"}
              href={"/blog/supplier-review-with-context"}
            >
              <img
                src={"/assets/vivid-blog-supplier.webp"}
                width={"1536"}
                height={"864"}
                loading={"lazy"}
                alt={"Conceptual Collaboration editorial illustration"}
              />
              <div>
                <span>{"Sample article · Collaboration"}</span>
                <h3>{"A clearer way to collect supplier feedback."}</h3>
                <p>
                  {
                    "Keep external questions close to the drawing and make engineering responses easy to recover."
                  }
                </p>
                <b>
                  {"Read the article "}
                  <svg className={"brand-icon"} aria-hidden={"true"}>
                    <use href={"/assets/icons.svg#arrow-right"}></use>
                  </svg>
                </b>
              </div>
            </a>
          </div>
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
          "/assets/outcomes.js",
          "/assets/story-motion.js",
        ]}
      />
    </>
  );
}
