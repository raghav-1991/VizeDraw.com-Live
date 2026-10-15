import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"Worked Drawing Review Example | VizeDraw"}
        description={
          "Follow one fictional supplier question from DEMO-104 Revision A to a recorded response, Revision B and the next action."
        }
        path={"/resources/drawing-review-example"}
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
      <Header path={"/resources/drawing-review-example"} />
      <main id={"main"} className={"page-main"}>
        <div className={"wrap page-hero-wrap"}>
          <section className={"page-hero new-page-hero screen-page-hero"}>
            <div>
              <h1>
                {"One drawing question."}
                <br />
                {"A recorded answer."}
              </h1>
              <p>
                {
                  "A supplier asks whether a cover-access note refers to the operator side or service side. Follow the source, the responsible response and the revised note."
                }
              </p>
            </div>
            <div className={"subpage-screen"}>
              <figure
                className={"workflow-scene unique-inner-scene"}
                data-workflow-scene={""}
              >
                <img
                  className={"workflow-image"}
                  src={"/assets/inner-project-16-pipe.svg"}
                  width={"1600"}
                  height={"900"}
                  alt={
                    "Compressed air header: Clarify the branch connection spacing. Illustrative drawing-review workspace."
                  }
                  loading={"lazy"}
                />
                <figcaption>
                  {
                    "Compressed air header. Clarify the branch connection spacing. "
                  }
                  <span>{"Illustrative tool demonstration"}</span>
                </figcaption>
                <a
                  className={"scene-expand"}
                  href={"/assets/inner-project-16-pipe.svg"}
                  target={"_blank"}
                  rel={"noopener"}
                  aria-label={"Open full-size drawing demonstration"}
                >
                  {"View detail "}
                  <svg className={"brand-icon"} aria-hidden={"true"}>
                    <use href={"/assets/icons.svg#arrow-up-right"}></use>
                  </svg>
                </a>
              </figure>
            </div>
          </section>
        </div>
        <section className={"section dark"} id={"workflow"}>
          <div className={"wrap"} data-tour={""}>
            <div className={"section-head reveal"}>
              <div>
                <h2>
                  {"The answer belongs"}
                  <br />
                  {"beside the drawing."}
                </h2>
              </div>
              <p>
                {
                  "Follow one cover-access question from its source revision to the recorded response."
                }
              </p>
            </div>
            <div
              className={"tour-controls"}
              role={"tablist"}
              aria-label={"Review workflow"}
            >
              <button
                className={"tour-tab"}
                id={"tour-organize"}
                role={"tab"}
                aria-selected={"true"}
                aria-controls={"tour-panel"}
                tabIndex={0}
                data-view={"organize"}
              >
                <span>{"01"}</span>
                {"Bring in the drawing"}
              </button>
              <button
                className={"tour-tab"}
                id={"tour-review"}
                role={"tab"}
                aria-selected={"false"}
                aria-controls={"tour-panel"}
                tabIndex={-1}
                data-view={"review"}
              >
                <span>{"02"}</span>
                {"Review the detail"}
              </button>
              <button
                className={"tour-tab"}
                id={"tour-compare"}
                role={"tab"}
                aria-selected={"false"}
                aria-controls={"tour-panel"}
                tabIndex={-1}
                data-view={"compare"}
              >
                <span>{"03"}</span>
                {"Compare the revision"}
              </button>
              <button
                className={"tour-tab"}
                id={"tour-handoff"}
                role={"tab"}
                aria-selected={"false"}
                aria-controls={"tour-panel"}
                tabIndex={-1}
                data-view={"handoff"}
              >
                <span>{"04"}</span>
                {"Keep the answer"}
              </button>
            </div>
            <div
              className={"tour-stage"}
              id={"tour-panel"}
              role={"tabpanel"}
              aria-labelledby={"tour-organize"}
            >
              <div>
                <div className={"workspace-top"}>
                  <b>{"DEMO-104 · Access cover"}</b>
                  <span>
                    {"REV "}
                    <span data-demo={"revision"}>{"A"}</span>
                  </span>
                </div>
                <div className={"drawing-sheet"} data-view={"organize"}>
                  <svg
                    className={"ds"}
                    viewBox={"0 0 600 400"}
                    role={"img"}
                    aria-label={
                      "Illustrative drawing sheet DEMO-104 Revision A with a revision cloud and markup pin on note 3"
                    }
                    preserveAspectRatio={"xMidYMid meet"}
                  >
                    <defs>
                      <marker
                        id={"art-0-drawing-ds-arrow-rd"}
                        viewBox={"0 0 8 8"}
                        refX={"4"}
                        refY={"4"}
                        markerWidth={"7"}
                        markerHeight={"7"}
                        orient={"auto-start-reverse"}
                      >
                        <path
                          d={"M0 1 L7 4 L0 7 Z"}
                          className={"ds-arrowhead"}
                        ></path>
                      </marker>
                      <pattern
                        id={"art-0-drawing-ds-hatch-rd"}
                        width={"6"}
                        height={"6"}
                        patternUnits={"userSpaceOnUse"}
                        patternTransform={"rotate(45)"}
                      >
                        <line
                          x1={"0"}
                          y1={"0"}
                          x2={"0"}
                          y2={"6"}
                          className={"ds-hatch"}
                        ></line>
                      </pattern>
                    </defs>
                    <rect
                      x={"0"}
                      y={"0"}
                      width={"600"}
                      height={"400"}
                      className={"ds-paper"}
                    ></rect>
                    <rect
                      x={"10"}
                      y={"10"}
                      width={"580"}
                      height={"380"}
                      className={"ds-border-outer"}
                    ></rect>
                    <rect
                      x={"22"}
                      y={"22"}
                      width={"556"}
                      height={"356"}
                      className={"ds-border"}
                    ></rect>
                    <g className={"ds-zone"}>
                      <line x1={"161"} y1={"10"} x2={"161"} y2={"22"}></line>
                      <line x1={"161"} y1={"378"} x2={"161"} y2={"390"}></line>
                      <text x={"91"} y={"19"} textAnchor={"middle"}>
                        {"4"}
                      </text>
                      <text x={"91"} y={"387"} textAnchor={"middle"}>
                        {"4"}
                      </text>
                    </g>
                    <g className={"ds-zone"}>
                      <line x1={"300"} y1={"10"} x2={"300"} y2={"22"}></line>
                      <line x1={"300"} y1={"378"} x2={"300"} y2={"390"}></line>
                      <text x={"230"} y={"19"} textAnchor={"middle"}>
                        {"3"}
                      </text>
                      <text x={"230"} y={"387"} textAnchor={"middle"}>
                        {"3"}
                      </text>
                    </g>
                    <g className={"ds-zone"}>
                      <line x1={"439"} y1={"10"} x2={"439"} y2={"22"}></line>
                      <line x1={"439"} y1={"378"} x2={"439"} y2={"390"}></line>
                      <text x={"369"} y={"19"} textAnchor={"middle"}>
                        {"2"}
                      </text>
                      <text x={"369"} y={"387"} textAnchor={"middle"}>
                        {"2"}
                      </text>
                    </g>
                    <g className={"ds-zone"}>
                      <line x1={"578"} y1={"10"} x2={"578"} y2={"22"}></line>
                      <line x1={"578"} y1={"378"} x2={"578"} y2={"390"}></line>
                      <text x={"508"} y={"19"} textAnchor={"middle"}>
                        {"1"}
                      </text>
                      <text x={"508"} y={"387"} textAnchor={"middle"}>
                        {"1"}
                      </text>
                    </g>
                    <g className={"ds-zone"}>
                      <line x1={"10"} y1={"141"} x2={"22"} y2={"141"}></line>
                      <text x={"16"} y={"84"} textAnchor={"middle"}>
                        {"C"}
                      </text>
                      <text x={"584"} y={"84"} textAnchor={"middle"}>
                        {"C"}
                      </text>
                    </g>
                    <g className={"ds-zone"}>
                      <line x1={"10"} y1={"260"} x2={"22"} y2={"260"}></line>
                      <text x={"16"} y={"203"} textAnchor={"middle"}>
                        {"B"}
                      </text>
                      <text x={"584"} y={"203"} textAnchor={"middle"}>
                        {"B"}
                      </text>
                    </g>
                    <g className={"ds-zone"}>
                      <line x1={"10"} y1={"379"} x2={"22"} y2={"379"}></line>
                      <text x={"16"} y={"322"} textAnchor={"middle"}>
                        {"A"}
                      </text>
                      <text x={"584"} y={"322"} textAnchor={"middle"}>
                        {"A"}
                      </text>
                    </g>
                    <g className={"ds-part"}>
                      <line
                        x1={"42"}
                        y1={"160"}
                        x2={"318"}
                        y2={"160"}
                        className={"ds-center"}
                      ></line>
                      <line
                        x1={"180"}
                        y1={"52"}
                        x2={"180"}
                        y2={"268"}
                        className={"ds-center"}
                      ></line>
                      <rect
                        x={"60"}
                        y={"70"}
                        width={"240"}
                        height={"180"}
                        rx={"8"}
                        className={"ds-outline"}
                      ></rect>
                      <rect
                        x={"120"}
                        y={"118"}
                        width={"120"}
                        height={"84"}
                        rx={"5"}
                        className={"ds-outline"}
                      ></rect>
                      <g>
                        <circle
                          cx={"80"}
                          cy={"90"}
                          r={"6"}
                          className={"ds-outline ds-thin"}
                        ></circle>
                        <line
                          x1={"69"}
                          y1={"90"}
                          x2={"91"}
                          y2={"90"}
                          className={"ds-center"}
                        ></line>
                        <line
                          x1={"80"}
                          y1={"79"}
                          x2={"80"}
                          y2={"101"}
                          className={"ds-center"}
                        ></line>
                      </g>
                      <g>
                        <circle
                          cx={"280"}
                          cy={"90"}
                          r={"6"}
                          className={"ds-outline ds-thin"}
                        ></circle>
                        <line
                          x1={"269"}
                          y1={"90"}
                          x2={"291"}
                          y2={"90"}
                          className={"ds-center"}
                        ></line>
                        <line
                          x1={"280"}
                          y1={"79"}
                          x2={"280"}
                          y2={"101"}
                          className={"ds-center"}
                        ></line>
                      </g>
                      <g>
                        <circle
                          cx={"80"}
                          cy={"230"}
                          r={"6"}
                          className={"ds-outline ds-thin"}
                        ></circle>
                        <line
                          x1={"69"}
                          y1={"230"}
                          x2={"91"}
                          y2={"230"}
                          className={"ds-center"}
                        ></line>
                        <line
                          x1={"80"}
                          y1={"219"}
                          x2={"80"}
                          y2={"241"}
                          className={"ds-center"}
                        ></line>
                      </g>
                      <g>
                        <circle
                          cx={"280"}
                          cy={"230"}
                          r={"6"}
                          className={"ds-outline ds-thin"}
                        ></circle>
                        <line
                          x1={"269"}
                          y1={"230"}
                          x2={"291"}
                          y2={"230"}
                          className={"ds-center"}
                        ></line>
                        <line
                          x1={"280"}
                          y1={"219"}
                          x2={"280"}
                          y2={"241"}
                          className={"ds-center"}
                        ></line>
                      </g>
                    </g>
                    <g className={"ds-part"}>
                      <line
                        x1={"352"}
                        y1={"52"}
                        x2={"352"}
                        y2={"268"}
                        className={"ds-center"}
                      ></line>
                      <rect
                        x={"342"}
                        y={"70"}
                        width={"20"}
                        height={"180"}
                        className={"ds-outline"}
                      ></rect>
                      <rect
                        x={"342"}
                        y={"70"}
                        width={"20"}
                        height={"180"}
                        fill={"url(#art-0-drawing-ds-hatch-rd)"}
                        className={"ds-section"}
                      ></rect>
                      <line
                        x1={"342"}
                        y1={"118"}
                        x2={"362"}
                        y2={"118"}
                        className={"ds-hidden"}
                      ></line>
                      <line
                        x1={"342"}
                        y1={"202"}
                        x2={"362"}
                        y2={"202"}
                        className={"ds-hidden"}
                      ></line>
                    </g>
                    <g transform={"translate(465 115)"}>
                      <path
                        d={"M-58 0 L28 -30 L78 6 L-8 37 Z"}
                        fill={"#e7ebef"}
                        stroke={"#66717b"}
                        strokeWidth={"1"}
                      ></path>
                      <path
                        d={"M-58 0 L-8 37 L-8 47 L-58 10 Z"}
                        fill={"#b4bdc7"}
                        stroke={"#66717b"}
                        strokeWidth={"1"}
                      ></path>
                      <path
                        d={"M-8 37 L78 6 L78 16 L-8 47 Z"}
                        fill={"#d0d7de"}
                        stroke={"#66717b"}
                        strokeWidth={"1"}
                      ></path>
                      <path
                        d={"M-18 1 L18 -12 L42 5 L6 18 Z"}
                        fill={"#fafbf9"}
                        stroke={"#66717b"}
                        strokeWidth={"1"}
                      ></path>
                      <path
                        d={"M-18 1 L-18 8 L6 25 L6 18 Z"}
                        fill={"#a5b0bc"}
                        stroke={"#66717b"}
                        strokeWidth={".7"}
                      ></path>
                      <path
                        d={"M6 18 L42 5 L42 12 L6 25 Z"}
                        fill={"#c5ced7"}
                        stroke={"#66717b"}
                        strokeWidth={".7"}
                      ></path>
                      <ellipse
                        cx={"-43"}
                        cy={"1"}
                        rx={"3.7"}
                        ry={"2"}
                        fill={"#87929d"}
                        stroke={"#66717b"}
                        strokeWidth={".6"}
                      ></ellipse>
                      <ellipse
                        cx={"26"}
                        cy={"-22"}
                        rx={"3.7"}
                        ry={"2"}
                        fill={"#87929d"}
                        stroke={"#66717b"}
                        strokeWidth={".6"}
                      ></ellipse>
                      <ellipse
                        cx={"-7"}
                        cy={"30"}
                        rx={"3.7"}
                        ry={"2"}
                        fill={"#87929d"}
                        stroke={"#66717b"}
                        strokeWidth={".6"}
                      ></ellipse>
                      <ellipse
                        cx={"64"}
                        cy={"6"}
                        rx={"3.7"}
                        ry={"2"}
                        fill={"#87929d"}
                        stroke={"#66717b"}
                        strokeWidth={".6"}
                      ></ellipse>
                      <text
                        x={"7"}
                        y={"77"}
                        textAnchor={"middle"}
                        fontSize={"7"}
                        fill={"#66717b"}
                      >
                        {"ISOMETRIC VIEW"}
                      </text>
                      <text
                        x={"7"}
                        y={"88"}
                        textAnchor={"middle"}
                        fontSize={"6"}
                        fill={"#87929d"}
                      >
                        {"ILLUSTRATIVE · NOT TO SCALE"}
                      </text>
                    </g>
                    <g className={"ds-ext"}>
                      <line x1={"60"} y1={"254"} x2={"60"} y2={"292"}></line>
                      <line x1={"300"} y1={"254"} x2={"300"} y2={"292"}></line>
                      <line x1={"56"} y1={"70"} x2={"34"} y2={"70"}></line>
                      <line x1={"56"} y1={"250"} x2={"34"} y2={"250"}></line>
                    </g>
                    <g className={"ds-dim"}>
                      <line
                        x1={"60"}
                        y1={"286"}
                        x2={"300"}
                        y2={"286"}
                        markerStart={"url(#art-0-drawing-ds-arrow-rd)"}
                        markerEnd={"url(#art-0-drawing-ds-arrow-rd)"}
                      ></line>
                      <text x={"180"} y={"281"} textAnchor={"middle"}>
                        {"240"}
                      </text>
                    </g>
                    <g className={"ds-dim"}>
                      <line
                        x1={"40"}
                        y1={"70"}
                        x2={"40"}
                        y2={"250"}
                        markerStart={"url(#art-0-drawing-ds-arrow-rd)"}
                        markerEnd={"url(#art-0-drawing-ds-arrow-rd)"}
                      ></line>
                      <text
                        x={"34"}
                        y={"160"}
                        transform={"rotate(-90 34 160)"}
                        textAnchor={"middle"}
                      >
                        {"180"}
                      </text>
                    </g>
                    <g className={"ds-dim"}>
                      <line
                        x1={"120"}
                        y1={"110"}
                        x2={"240"}
                        y2={"110"}
                        markerStart={"url(#art-0-drawing-ds-arrow-rd)"}
                        markerEnd={"url(#art-0-drawing-ds-arrow-rd)"}
                      ></line>
                      <text x={"180"} y={"105"} textAnchor={"middle"}>
                        {"120"}
                      </text>
                    </g>
                    <g className={"ds-leader"}>
                      <polyline points={"286,95 318,62 346,62"}></polyline>
                      <text x={"320"} y={"57"}>
                        {"4× Ø12"}
                      </text>
                    </g>
                    <g className={"ds-notes"}>
                      <text x={"40"} y={"314"} className={"ds-notes-title"}>
                        {"NOTES"}
                      </text>
                      <text x={"40"} y={"328"}>
                        {"1. REMOVE ALL BURRS."}
                      </text>
                      <text x={"40"} y={"341"}>
                        {"2. DIMENSIONS IN MM."}
                      </text>
                      <text x={"40"} y={"363"}>
                        <tspan className={"demo-revision-note"}>
                          {"3. COVER ACCESS THIS SIDE."}
                        </tspan>
                      </text>
                    </g>
                    <path
                      d={
                        "M33 353 a5 5 0 0 1 9.733333333333333 0 a5 5 0 0 1 9.733333333333333 0 a5 5 0 0 1 9.733333333333333 0 a5 5 0 0 1 9.733333333333333 0 a5 5 0 0 1 9.733333333333333 0 a5 5 0 0 1 9.733333333333333 0 a5 5 0 0 1 9.733333333333333 0 a5 5 0 0 1 9.733333333333333 0 a5 5 0 0 1 9.733333333333333 0 a5 5 0 0 1 9.733333333333333 0 a5 5 0 0 1 9.733333333333333 0 a5 5 0 0 1 9.733333333333333 0 a5 5 0 0 1 9.733333333333333 0 a5 5 0 0 1 9.733333333333333 0 a5 5 0 0 1 9.733333333333333 0 a5 5 0 0 1 0 7 a5 5 0 0 1 0 7 a5 5 0 0 1 -9.733333333333333 0 a5 5 0 0 1 -9.733333333333333 0 a5 5 0 0 1 -9.733333333333333 0 a5 5 0 0 1 -9.733333333333333 0 a5 5 0 0 1 -9.733333333333333 0 a5 5 0 0 1 -9.733333333333333 0 a5 5 0 0 1 -9.733333333333333 0 a5 5 0 0 1 -9.733333333333333 0 a5 5 0 0 1 -9.733333333333333 0 a5 5 0 0 1 -9.733333333333333 0 a5 5 0 0 1 -9.733333333333333 0 a5 5 0 0 1 -9.733333333333333 0 a5 5 0 0 1 -9.733333333333333 0 a5 5 0 0 1 -9.733333333333333 0 a5 5 0 0 1 -9.733333333333333 0 a5 5 0 0 1 0 -7 a5 5 0 0 1 0 -7Z"
                      }
                      className={"ds-cloud"}
                      pathLength={"1"}
                    ></path>
                    <g className={"ds-pin"} transform={"translate(206 360)"}>
                      <line x1={"-14"} y1={"0"} x2={"-4"} y2={"0"}></line>
                      <circle r={"10"}></circle>
                      <text y={"4"} textAnchor={"middle"}>
                        {"1"}
                      </text>
                    </g>
                    <g className={"ds-title"}>
                      <rect
                        x={"392"}
                        y={"300"}
                        width={"186"}
                        height={"78"}
                      ></rect>
                      <line x1={"392"} y1={"326"} x2={"578"} y2={"326"}></line>
                      <line x1={"392"} y1={"352"} x2={"578"} y2={"352"}></line>
                      <line x1={"496"} y1={"326"} x2={"496"} y2={"378"}></line>
                      <line x1={"540"} y1={"326"} x2={"540"} y2={"378"}></line>
                      <text x={"400"} y={"311"} className={"ds-title-key"}>
                        {"TITLE"}
                      </text>
                      <text x={"400"} y={"321"} className={"ds-title-val"}>
                        {"ACCESS COVER"}
                      </text>
                      <text x={"400"} y={"336"} className={"ds-title-key"}>
                        {"DWG NO"}
                      </text>
                      <text x={"400"} y={"347"} className={"ds-title-val"}>
                        {"DEMO-104"}
                      </text>
                      <text x={"502"} y={"336"} className={"ds-title-key"}>
                        {"SCALE"}
                      </text>
                      <text x={"502"} y={"347"} className={"ds-title-val"}>
                        {"1:2"}
                      </text>
                      <text x={"546"} y={"336"} className={"ds-title-key"}>
                        {"REV"}
                      </text>
                      <text
                        x={"546"}
                        y={"347"}
                        className={"ds-title-val ds-rev"}
                      >
                        {"A"}
                      </text>
                      <text x={"400"} y={"362"} className={"ds-title-key"}>
                        {"STATUS"}
                      </text>
                      <text x={"400"} y={"373"} className={"ds-title-val"}>
                        {"FOR REVIEW"}
                      </text>
                      <text x={"502"} y={"362"} className={"ds-title-key"}>
                        {"SHEET"}
                      </text>
                      <text x={"502"} y={"373"} className={"ds-title-val"}>
                        {"1/1"}
                      </text>
                      <text x={"546"} y={"362"} className={"ds-title-key"}>
                        {"SIZE"}
                      </text>
                      <text x={"546"} y={"373"} className={"ds-title-val"}>
                        {"A3"}
                      </text>
                    </g>
                  </svg>
                  <div className={"demo-file"}>
                    {"Machinery / Drawing set / DEMO-104"}
                  </div>
                  <span className={"pin-marker"} aria-hidden={"true"}>
                    {"1"}
                  </span>
                  <span
                    className={"compare-highlight"}
                    aria-hidden={"true"}
                  ></span>
                  <div className={"handoff-record"}>
                    <b>{"DEMO-104 / REV B"}</b>
                    <span>{"CHANGE-DEMO-07 / Recorded"}</span>
                  </div>
                </div>
              </div>
              <aside className={"tour-side"}>
                <h3 data-demo={"title"}>{"Start with a known source."}</h3>
                <p data-demo={"text"}>
                  {
                    "Identify the drawing, sheet and revision before the review begins."
                  }
                </p>
                <dl>
                  <div>
                    <dt>{"Source"}</dt>
                    <dd data-demo={"source"}>{"DEMO-104 · Revision A"}</dd>
                  </div>
                  <div>
                    <dt>{"Status"}</dt>
                    <dd data-demo={"status"}>{"For review"}</dd>
                  </div>
                  <div>
                    <dt>{"Next action"}</dt>
                    <dd data-demo={"action"}>{"Assign the review owner"}</dd>
                  </div>
                </dl>
              </aside>
            </div>
            <div className={"tour-caption"}>
              <span>
                {
                  "Illustrative walkthrough · Fictional drawing and review record · Not a live product screenshot"
                }
              </span>
              <a
                className={"text-link"}
                href={"/resources/drawing-review-example"}
              >
                {"Read the worked example"}
              </a>
            </div>
          </div>
        </section>
        <div className={"wrap section"}>
          <section className={"feature-row reveal"}>
            <h2>{"Preserve the source"}</h2>
            <p>
              {
                "The review identifies DEMO-104 Revision A, the marked note and the purpose of the review. The question stays attached to the source drawing."
              }
            </p>
          </section>
          <section className={"feature-row reveal"}>
            <h2>{"Name the question and responder"}</h2>
            <p>
              {
                "A supplier asks which side is intended by the cover-access note. The assigned design-review owner is responsible for the response."
              }
            </p>
          </section>
          <section className={"feature-row reveal"}>
            <h2>{"Record the source-backed answer"}</h2>
            <p>
              {
                "The design-review owner consults the responsible product owner. The explanation is recorded in CHANGE-DEMO-07, and the note is updated in Revision B."
              }
            </p>
          </section>
          <section className={"feature-row reveal"}>
            <h2>{"Reassess the revised drawing"}</h2>
            <p>
              {
                "The team checks the changed note and other affected details. The Revision A question remains part of the history, connected to the updated source."
              }
            </p>
          </section>
          <section className={"feature-row reveal"}>
            <h2>{"Keep decision and authorization distinct"}</h2>
            <p>
              {
                "The clarification is recorded and the note is updated. Manufacturing release is still determined by the organization’s authorized process."
              }
            </p>
          </section>
          <section className={"feature-row reveal"}>
            <h2>{"Test the next person’s understanding"}</h2>
            <p>
              {
                "A production or quality reviewer should be able to identify the applicable drawing, recover the explanation and find the next required action."
              }
            </p>
          </section>
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
