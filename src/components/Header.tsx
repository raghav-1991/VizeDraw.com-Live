export default function Header({ path }: { path: string }) {
  return (
    <header className={"site-header"}>
      <div className={"wrap navigation"}>
        <a href={"/"} className={"brand"} aria-label={"VizeDraw home"}>
          <img
            className={"official-header-logo"}
            src={"/assets/official-logo-horizontal-dark.png"}
            width={"600"}
            height={"190"}
            alt={"Official VizeDraw robot with pen and wordmark"}
          />
        </a>
        <nav
          className={"header-nav"}
          id={"main-navigation"}
          aria-label={"Main navigation"}
        >
          <div className={"nav-group"}>
            <button
              className={"nav-trigger"}
              aria-expanded={"false"}
              aria-controls={"dropdown-0"}
            >
              {"Product"}
              <svg
                className={"nav-chevron"}
                viewBox={"0 0 12 12"}
                fill={"none"}
                aria-hidden={"true"}
              >
                <path
                  d={"M2 4l4 4 4-4"}
                  stroke={"currentColor"}
                  strokeWidth={"1.5"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                ></path>
              </svg>
            </button>
            <div id={"dropdown-0"} className={"dropdown"} hidden={true}>
              <div className={"drop-intro"}>
                <strong>{"Product"}</strong>
              </div>
              <div className={"drop-links"}>
                <a
                  aria-current={path === "/product" ? "page" : undefined}
                  href={"/product"}
                  className={"drop-link"}
                >
                  <span>
                    <b>{"Product overview"}</b>
                    <small>{"A closer look at drawing review."}</small>
                  </span>
                </a>
                <a
                  aria-current={path === "/features" ? "page" : undefined}
                  href={"/features"}
                  className={"drop-link"}
                >
                  <span>
                    <b>{"Features"}</b>
                    <small>{"Markups, revisions and review context."}</small>
                  </span>
                </a>
                <a
                  aria-current={
                    path === "/drawing-knowledge" ? "page" : undefined
                  }
                  href={"/drawing-knowledge"}
                  className={"drop-link"}
                >
                  <span>
                    <b>{"Drawing knowledge"}</b>
                    <small>{"Find the explanation behind a detail."}</small>
                  </span>
                </a>
                <a
                  aria-current={path === "/enterprise" ? "page" : undefined}
                  href={"/enterprise"}
                  className={"drop-link"}
                >
                  <span>
                    <b>{"Enterprise"}</b>
                    <small>{"Discuss your organization’s requirements."}</small>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className={"nav-group"}>
            <button
              className={"nav-trigger"}
              aria-expanded={"false"}
              aria-controls={"dropdown-1"}
            >
              {"Solutions"}
              <svg
                className={"nav-chevron"}
                viewBox={"0 0 12 12"}
                fill={"none"}
                aria-hidden={"true"}
              >
                <path
                  d={"M2 4l4 4 4-4"}
                  stroke={"currentColor"}
                  strokeWidth={"1.5"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                ></path>
              </svg>
            </button>
            <div id={"dropdown-1"} className={"dropdown"} hidden={true}>
              <div className={"drop-intro"}>
                <strong>{"Solutions"}</strong>
              </div>
              <div className={"drop-links"}>
                <a
                  aria-current={path === "/use-cases" ? "page" : undefined}
                  href={"/use-cases"}
                  className={"drop-link"}
                >
                  <span>
                    <b>{"All workflows"}</b>
                    <small>{"Explore drawing collaboration."}</small>
                  </span>
                </a>
                <a
                  aria-current={
                    path === "/use-cases/engineering-drawing-review"
                      ? "page"
                      : undefined
                  }
                  href={"/use-cases/engineering-drawing-review"}
                  className={"drop-link"}
                >
                  <span>
                    <b>{"Engineering review"}</b>
                    <small>{"Review with a shared source."}</small>
                  </span>
                </a>
                <a
                  aria-current={
                    path === "/use-cases/external-drawing-review"
                      ? "page"
                      : undefined
                  }
                  href={"/use-cases/external-drawing-review"}
                  className={"drop-link"}
                >
                  <span>
                    <b>{"Supplier collaboration"}</b>
                    <small>{"Bring external reviewers into the loop."}</small>
                  </span>
                </a>
                <a
                  aria-current={
                    path === "/use-cases/drawing-revision-review"
                      ? "page"
                      : undefined
                  }
                  href={"/use-cases/drawing-revision-review"}
                  className={"drop-link"}
                >
                  <span>
                    <b>{"Revision review"}</b>
                    <small>{"Compare versions in context."}</small>
                  </span>
                </a>
                <a
                  aria-current={
                    path === "/use-cases/production-quality-handoff"
                      ? "page"
                      : undefined
                  }
                  href={"/use-cases/production-quality-handoff"}
                  className={"drop-link"}
                >
                  <span>
                    <b>{"Production & quality"}</b>
                    <small>{"Make the next handoff clearer."}</small>
                  </span>
                </a>
                <a
                  aria-current={path === "/manufacturing" ? "page" : undefined}
                  href={"/manufacturing"}
                  className={"drop-link"}
                >
                  <span>
                    <b>{"Manufacturing"}</b>
                    <small>{"Connect the drawing to the shop floor."}</small>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className={"nav-group"}>
            <button
              className={"nav-trigger"}
              aria-expanded={"false"}
              aria-controls={"dropdown-2"}
            >
              {"Resources"}
              <svg
                className={"nav-chevron"}
                viewBox={"0 0 12 12"}
                fill={"none"}
                aria-hidden={"true"}
              >
                <path
                  d={"M2 4l4 4 4-4"}
                  stroke={"currentColor"}
                  strokeWidth={"1.5"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                ></path>
              </svg>
            </button>
            <div id={"dropdown-2"} className={"dropdown"} hidden={true}>
              <div className={"drop-intro"}>
                <strong>{"Resources"}</strong>
              </div>
              <div className={"drop-links"}>
                <a
                  aria-current={path === "/resources" ? "page" : undefined}
                  href={"/resources"}
                  className={"drop-link"}
                >
                  <span>
                    <b>{"Resource library"}</b>
                    <small>{"All guides, checklists and examples."}</small>
                  </span>
                </a>
                <a
                  aria-current={
                    path === "/resources/engineering-drawing-revision-control"
                      ? "page"
                      : undefined
                  }
                  href={"/resources/engineering-drawing-revision-control"}
                  className={"drop-link"}
                >
                  <span>
                    <b>{"Revision control guide"}</b>
                    <small>{"A practical review process."}</small>
                  </span>
                </a>
                <a
                  aria-current={
                    path === "/resources/drawing-readiness-checklist"
                      ? "page"
                      : undefined
                  }
                  href={"/resources/drawing-readiness-checklist"}
                  className={"drop-link"}
                >
                  <span>
                    <b>{"Readiness checklist"}</b>
                    <small>{"Prepare the next drawing package."}</small>
                  </span>
                </a>
                <a
                  aria-current={
                    path === "/resources/drawing-review-example"
                      ? "page"
                      : undefined
                  }
                  href={"/resources/drawing-review-example"}
                  className={"drop-link"}
                >
                  <span>
                    <b>{"Drawing review example"}</b>
                    <small>{"Follow a question through a review."}</small>
                  </span>
                </a>
                <a
                  aria-current={path === "/company" ? "page" : undefined}
                  href={"/company"}
                  className={"drop-link"}
                >
                  <span>
                    <b>{"Company"}</b>
                    <small>{"Meet VizeDraw."}</small>
                  </span>
                </a>
                <a
                  aria-current={path === "/blog" ? "page" : undefined}
                  className={"drop-link"}
                  href={"/blog"}
                >
                  <span>
                    <b>{"Blog"}</b>
                    <small>{"Practical notes for drawing reviewers."}</small>
                  </span>
                </a>
                <a
                  aria-current={path === "/news" ? "page" : undefined}
                  className={"drop-link"}
                  href={"/news"}
                >
                  <span>
                    <b>{"News & updates"}</b>
                    <small>{"New website examples and resources."}</small>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <a
            aria-current={path === "/pricing" ? "page" : undefined}
            href={"/pricing"}
            className={""}
          >
            {"Pricing"}
          </a>
        </nav>
        <div className={"nav-actions"}>
          <a href={"https://app.vizedraw.com/"} className={"signin"}>
            {"Sign in"}
          </a>
          <a
            href={"https://app.vizedraw.com/signup"}
            className={"button small"}
          >
            {"Try VizeDraw "}
            <svg className={"brand-icon"} aria-hidden={"true"}>
              <use href={"/assets/icons.svg#arrow-up-right"}></use>
            </svg>
          </a>
          <button
            className={"menu-toggle"}
            aria-expanded={"false"}
            aria-controls={"main-navigation"}
            aria-label={"Open navigation"}
          >
            {"Menu"}
          </button>
        </div>
      </div>
    </header>
  );
}
