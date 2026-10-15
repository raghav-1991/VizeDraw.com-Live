import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"VizeDraw Pricing | Free Review, Control $99, Pro $199"}
        description={
          "Invited reviewers are free. Control is $99/user/year and Pro is $199/user/year. Estimate team costs, storage and AI credits."
        }
        path={"/pricing"}
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
      <Header path={"/pricing"} />
      <main id={"main"} className={"page-main"}>
        <div className={"wrap page-hero-wrap"}>
          <section className={"page-hero new-page-hero text-hero"}>
            <div>
              <h1>
                {"Free reviewers."}
                <br />
                {"Plans for workflow owners."}
              </h1>
              <p>
                {
                  "Invited reviewers are free. Choose Control or Pro for the people managing your drawing workflows."
                }
              </p>
            </div>
          </section>
        </div>
        <div className={"wrap"}>
          <div className={"pricing-grid"}>
            <section className={"plan "}>
              <h2>{"Review"}</h2>
              <p>{"For people invited to review or approve drawings."}</p>
              <div className={"price"}>{"Free"}</div>
              <span className={"period"}>
                {"Always free for invited reviewers"}
              </span>
              <ul>
                <li>{"Unlimited invited reviews"}</li>
                <li>{"View, measure, markup and comment"}</li>
                <li>{"Compare permitted revisions"}</li>
                <li>{"Respond and resolve comments"}</li>
                <li>{"Complete assigned approvals"}</li>
                <li>{"Submit requested revisions"}</li>
                <li>{"AI available as PAYG"}</li>
              </ul>
              <a
                className={"btn secondary"}
                href={
                  "https://app.vizedraw.com/settings/billing?plan=free&audience=individual"
                }
              >
                {"Start free"}
              </a>
            </section>
            <section className={"plan "}>
              <h2>{"Control"}</h2>
              <p>{"For users who create and control drawing workflows."}</p>
              <div className={"price"}>{"$99"}</div>
              <span className={"period"}>
                {"per user / year · billed annually"}
              </span>
              <ul>
                <li>{"Everything in Review"}</li>
                <li>{"Unlimited projects and reviewers"}</li>
                <li>{"Revision control"}</li>
                <li>{"Approval and release workflows"}</li>
                <li>{"Audit trail and exports"}</li>
                <li>{"50 GB pooled storage per user"}</li>
              </ul>
              <a
                className={"btn secondary"}
                href={
                  "https://app.vizedraw.com/settings/billing?plan=starter&audience=individual"
                }
              >
                {"Choose Control"}
              </a>
            </section>
            <section className={"plan featured"}>
              <span className={"tag"}>{"WITH AI"}</span>
              <h2>{"Pro"}</h2>
              <p>{"Workflow control with AI-assisted drawing review."}</p>
              <div className={"price"}>{"$199"}</div>
              <span className={"period"}>
                {"per user / year · billed annually"}
              </span>
              <ul>
                <li>{"Everything in Control"}</li>
                <li>{"AI drawing Q&A"}</li>
                <li>{"Revision summaries and review assistance"}</li>
                <li>{"Issue extraction / classification"}</li>
                <li>{"3,000 AI credits per year"}</li>
                <li>{"100 GB pooled storage per user"}</li>
                <li>{"Additional AI as PAYG"}</li>
              </ul>
              <a
                className={"btn "}
                href={
                  "https://app.vizedraw.com/settings/billing?plan=pro&audience=individual"
                }
              >
                {"Choose Pro"}
              </a>
            </section>
            <section className={"plan "}>
              <h2>{"Enterprise"}</h2>
              <p>
                {"For larger teams with security and integration requirements."}
              </p>
              <div className={"price"}>{"Let’s talk"}</div>
              <span className={"period"}>{"Custom annual agreement"}</span>
              <ul>
                <li>{"SSO / SAML and advanced RBAC"}</li>
                <li>{"API and PLM / PDM integration"}</li>
                <li>{"Custom storage and shared AI pools"}</li>
                <li>{"Data residency options"}</li>
                <li>{"SLA and priority support"}</li>
              </ul>
              <a className={"btn secondary"} href={"/contact#enterprise"}>
                {"Discuss Enterprise"}
              </a>
            </section>
          </div>
          <p className={"fineprint"}>
            {
              "Prices in USD, billed annually. Reviewing an invited workflow is free; creating, governing and releasing an organization’s workflow requires Control or Pro. Review taxes, renewal and cancellation terms at checkout."
            }
          </p>
          <section id={"calculator"} className={"section"}>
            <div className={"section-head"}>
              <div>
                <h2>
                  {"Pay for workflow owners."}
                  <br />
                  {"Keep reviewers free."}
                </h2>
              </div>
              <p>
                {
                  "Estimate your annual cost from paid users, pooled storage and AI usage."
                }
              </p>
            </div>
            <div className={"calculator"} data-calculator={""}>
              <div className={"calc-fields"}>
                <div className={"field "}>
                  <label htmlFor={"team"}>{"Total team members"}</label>
                  <input
                    id={"team"}
                    type={"number"}
                    defaultValue={"100"}
                    min={"1"}
                    max={"100000"}
                    step={"1"}
                  />
                  <small>
                    {"Includes workflow owners and free reviewers."}
                  </small>
                </div>
                <div className={"field "}>
                  <label htmlFor={"control"}>{"Control users"}</label>
                  <input
                    id={"control"}
                    type={"number"}
                    defaultValue={"2"}
                    min={"0"}
                    max={"100000"}
                    step={"1"}
                  />
                  <small>{"Workflow owners without included AI."}</small>
                </div>
                <div className={"field "}>
                  <label htmlFor={"pro"}>{"Pro users"}</label>
                  <input
                    id={"pro"}
                    type={"number"}
                    defaultValue={"5"}
                    min={"0"}
                    max={"100000"}
                    step={"1"}
                  />
                  <small>{"Each includes 3,000 AI credits per year."}</small>
                </div>
                <div className={"field "}>
                  <label htmlFor={"storage"}>
                    {"Shared storage required (TB)"}
                  </label>
                  <input
                    id={"storage"}
                    type={"number"}
                    defaultValue={"1"}
                    min={"0"}
                    max={"1000"}
                    step={"0.1"}
                  />
                  <small>{"Total retained project data for the team."}</small>
                </div>
                <div className={"field full"}>
                  <label htmlFor={"credits"}>
                    {"AI credits used per year"}
                  </label>
                  <input
                    id={"credits"}
                    type={"number"}
                    defaultValue={"15000"}
                    min={"0"}
                    max={"10000000"}
                    step={"1"}
                  />
                  <small>{"Usage beyond the included Pro allowance."}</small>
                </div>
                <p
                  className={"full form-message"}
                  id={"calc-error"}
                  role={"status"}
                  hidden={true}
                >
                  {
                    "Increase team members to include all Control and Pro users."
                  }
                </p>
              </div>
              <div className={"calc-total"}>
                <span className={"calc-summary-label"}>
                  {"Estimated annual cost"}
                </span>
                <output id={"annual-total"} aria-live={"polite"}>
                  {"$1,392"}
                </output>
                <p id={"monthly-total"}>
                  {"$116 / month equivalent · billed annually"}
                </p>
                <dl>
                  <div>
                    <dt>{"Control licences"}</dt>
                    <dd id={"cost-control"}>{"$198"}</dd>
                  </div>
                  <div>
                    <dt>{"Pro licences"}</dt>
                    <dd id={"cost-pro"}>{"$995"}</dd>
                  </div>
                  <div>
                    <dt>{"Additional storage"}</dt>
                    <dd id={"cost-storage"}>{"$199"}</dd>
                  </div>
                  <div>
                    <dt>{"Additional AI"}</dt>
                    <dd id={"cost-ai"}>{"$0"}</dd>
                  </div>
                </dl>
                <p id={"capacity"}>{"93 free reviewers"}</p>
                <p id={"selected-packs"}></p>
              </div>
            </div>
            <p className={"fineprint"}>
              {
                "Estimate in USD before applicable taxes. Paid users contribute pooled storage: Control 50 GB and Pro 100 GB per user. Storage packs cover capacity above this allowance. Extra AI packs cover usage above included credits. Volume storage above 10 TB or 50,000+ extra AI credits requires a quote."
              }
            </p>
          </section>
          <div className={"addons"}>
            <div>
              <h3>{"Shared storage add-ons"}</h3>
              <div className={"table-scroll"}>
                <table>
                  <thead>
                    <tr>
                      <th scope={"col"}>{"Capacity / year"}</th>
                      <th scope={"col"}>{"USD"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope={"row"}>{"+1 TB"}</th>
                      <td>{"$199"}</td>
                    </tr>
                    <tr>
                      <th scope={"row"}>{"+5 TB"}</th>
                      <td>{"$899"}</td>
                    </tr>
                    <tr>
                      <th scope={"row"}>{"+10 TB"}</th>
                      <td>{"$1,699"}</td>
                    </tr>
                    <tr>
                      <th scope={"row"}>{"Above 10 TB"}</th>
                      <td>{"Enterprise quote"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3>{"AI credit packs"}</h3>
              <div className={"table-scroll"}>
                <table>
                  <thead>
                    <tr>
                      <th scope={"col"}>{"Credits"}</th>
                      <th scope={"col"}>{"USD"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope={"row"}>{"1,000"}</th>
                      <td>{"$10"}</td>
                    </tr>
                    <tr>
                      <th scope={"row"}>{"5,000"}</th>
                      <td>{"$40"}</td>
                    </tr>
                    <tr>
                      <th scope={"row"}>{"10,000"}</th>
                      <td>{"$70"}</td>
                    </tr>
                    <tr>
                      <th scope={"row"}>{"50,000+"}</th>
                      <td>{"Volume quote"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <h2>{"Compare what’s included."}</h2>
          <div className={"table-scroll"}>
            <table>
              <caption>{"Feature entitlements"}</caption>
              <thead>
                <tr>
                  <th scope={"col"}>{"Capability"}</th>
                  <th scope={"col"}>{"Review"}</th>
                  <th scope={"col"}>{"Control"}</th>
                  <th scope={"col"}>{"Pro"}</th>
                  <th scope={"col"}>{"Enterprise"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope={"row"}>{"View drawings"}</th>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                </tr>
                <tr>
                  <th scope={"row"}>{"Measure / markup / comment"}</th>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                </tr>
                <tr>
                  <th scope={"row"}>{"Compare permitted revisions"}</th>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                </tr>
                <tr>
                  <th scope={"row"}>
                    {"Complete assigned approval / rejection"}
                  </th>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                </tr>
                <tr>
                  <th scope={"row"}>{"Submit requested revision"}</th>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                </tr>
                <tr>
                  <th scope={"row"}>{"Create / own projects"}</th>
                  <td>{"—"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                </tr>
                <tr>
                  <th scope={"row"}>{"Invite / manage reviewers"}</th>
                  <td>{"—"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                </tr>
                <tr>
                  <th scope={"row"}>{"Manage official revision register"}</th>
                  <td>{"—"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                </tr>
                <tr>
                  <th scope={"row"}>{"Define approval route"}</th>
                  <td>{"—"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                </tr>
                <tr>
                  <th scope={"row"}>{"Issue / release official drawing"}</th>
                  <td>{"—"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                </tr>
                <tr>
                  <th scope={"row"}>{"Audit history / exports"}</th>
                  <td>{"Limited"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                  <td>{"Included"}</td>
                </tr>
                <tr>
                  <th scope={"row"}>{"AI drawing assistance"}</th>
                  <td>{"PAYG"}</td>
                  <td>{"PAYG"}</td>
                  <td>{"Included + PAYG"}</td>
                  <td>{"Pooled / custom"}</td>
                </tr>
                <tr>
                  <th scope={"row"}>{"SSO / SAML / advanced RBAC"}</th>
                  <td>{"—"}</td>
                  <td>{"—"}</td>
                  <td>{"—"}</td>
                  <td>{"Included"}</td>
                </tr>
                <tr>
                  <th scope={"row"}>{"API / PLM / PDM integration"}</th>
                  <td>{"—"}</td>
                  <td>{"—"}</td>
                  <td>{"Optional"}</td>
                  <td>{"Included"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={"fineprint"}>
            {
              "A simple drawing Q&A can use about one AI credit; revision and multi-sheet reviews can use more. Credit costs per task are confirmed before purchase."
            }
          </p>
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
