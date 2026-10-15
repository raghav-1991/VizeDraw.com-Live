export default function Footer() {
  return (
    <footer className={"footer"}>
      <div className={"wrap footer-grid"}>
        <div>
          <a className={"brand"} aria-label={"VizeDraw home"} href={"/"}>
            <img
              className={"official-full-logo"}
              src={"/assets/official-logo-horizontal-dark.png"}
              width={"600"}
              height={"190"}
              alt={"Official VizeDraw robot with pen and wordmark"}
            />
          </a>
          <p>
            {"Drawing collaboration for engineering"}
            <br />
            {"and manufacturing teams."}
          </p>
          <div className={"social-block social-footer"}>
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
                    d={"M5 9v10M5 5v.2M10 19V9h4v2c1-3 6-3 6 1v7M3 9h4M3 19h4"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2.5"}
                    strokeLinecap={"round"}
                  ></path>
                </svg>
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
              </button>
            </div>
            <p className={"social-status"}>{"Profile links coming soon."}</p>
          </div>
        </div>
        <nav aria-label={"Product links"}>
          <strong>{"Product"}</strong>
          <a className={""} href={"/product"}>
            {"Overview"}
          </a>
          <a className={""} href={"/features"}>
            {"Features"}
          </a>
          <a className={""} href={"/drawing-knowledge"}>
            {"Drawing knowledge"}
          </a>
          <a className={""} href={"/pricing"}>
            {"Pricing"}
          </a>
        </nav>
        <nav aria-label={"Explore links"}>
          <strong>{"Explore"}</strong>
          <a className={""} href={"/manufacturing"}>
            {"Manufacturing"}
          </a>
          <a className={""} href={"/use-cases"}>
            {"Use cases"}
          </a>
          <a className={""} href={"/resources"}>
            {"Resources"}
          </a>
          <a className={""} href={"/enterprise"}>
            {"Enterprise"}
          </a>
          <a href={"/blog"}>{"Blog"}</a>
          <a href={"/news"}>{"News & updates"}</a>
        </nav>
        <nav aria-label={"Company links"}>
          <strong>{"Company"}</strong>
          <a className={""} href={"/company"}>
            {"About"}
          </a>
          <a className={""} href={"/contact"}>
            {"Contact"}
          </a>
          <a className={""} href={"/privacy-notice"}>
            {"Privacy"}
          </a>
          <a className={""} href={"/terms-of-use"}>
            {"Terms"}
          </a>
          <a className={""} href={"/cookie-preferences"}>
            {"Cookie preferences"}
          </a>
        </nav>
      </div>
      <div className={"wrap footer-bottom"}>{"© 2026 Zenitude. VizeDraw."}</div>
    </footer>
  );
}
