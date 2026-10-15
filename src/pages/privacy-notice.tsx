import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Runtime from "@/components/Runtime";

export default function Page() {
  return (
    <>
      <PageHead
        title={"Privacy Notice | VizeDraw"}
        description={
          "Read the published privacy notice for VizeDraw by Zenitude."
        }
        path={"/privacy-notice"}
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
      <Header path={"/privacy-notice"} />
      <main id={"main"} className={"page-main"}>
        <div className={"wrap page-hero-wrap"}>
          <section className={"page-hero new-page-hero text-hero"}>
            <div>
              <h1>{"Privacy Notice"}</h1>
              <p>{"Published policy text from VizeDraw by Zenitude."}</p>
            </div>
          </section>
        </div>
        <div className={"wrap article-layout"}>
          <aside className={"toc"}>
            <a href={"#information-we-collect-h"}>
              {"1. Information We Collect"}
            </a>
            <a href={"#how-we-use-information-h"}>
              {"2. How We Use Information"}
            </a>
            <a href={"#legal-bases-for-processing-h"}>
              {"3. Legal Bases for Processing"}
            </a>
            <a href={"#cookies-and-similar-technologies-h"}>
              {"4. Cookies and Similar Technologies"}
            </a>
            <a href={"#how-we-share-information-h"}>
              {"5. How We Share Information"}
            </a>
            <a href={"#customer-content-h"}>{"6. Customer Content"}</a>
            <a href={"#data-security-h"}>{"7. Data Security"}</a>
            <a href={"#data-retention-h"}>{"8. Data Retention"}</a>
            <a href={"#international-data-transfers-h"}>
              {"9. International Data Transfers"}
            </a>
            <a href={"#your-privacy-rights-h"}>{"10. Your Privacy Rights"}</a>
            <a href={"#account-and-customer-responsibilities-h"}>
              {"11. Account and Customer Responsibilities"}
            </a>
            <a href={"#children-s-privacy-h"}>{"12. Children's Privacy"}</a>
            <a href={"#third-party-websites-and-services-h"}>
              {"13. Third-Party Websites and Services"}
            </a>
            <a href={"#changes-to-this-privacy-notice-h"}>
              {"14. Changes to This Privacy Notice"}
            </a>
            <a href={"#contact-us-h"}>{"15. Contact Us"}</a>
          </aside>
          <article className={"article-content"}>
            <div>
              <article className={"article__body"}>
                <section
                  id={"information-we-collect"}
                  aria-labelledby={"information-we-collect-h"}
                >
                  <h2 id={"information-we-collect-h"}>
                    {"1. Information We Collect"}
                  </h2>
                  <p>
                    {
                      "We may collect information that you provide directly to us, information generated through your use of VizeDraw, and certain technical information collected automatically."
                    }
                  </p>
                  <div>
                    <h3>{"Information You Provide"}</h3>
                  </div>
                  <p>
                    {
                      "Depending on how you interact with VizeDraw, we may collect:"
                    }
                  </p>
                  <ul>
                    <li>
                      <span>{"Name and contact information"}</span>
                    </li>
                    <li>
                      <span>{"Business email address"}</span>
                    </li>
                    <li>
                      <span>{"Company or organization name"}</span>
                    </li>
                    <li>
                      <span>{"Job title or role"}</span>
                    </li>
                    <li>
                      <span>{"Phone number, where provided"}</span>
                    </li>
                    <li>
                      <span>{"Account and login information"}</span>
                    </li>
                    <li>
                      <span>{"Billing and subscription information"}</span>
                    </li>
                    <li>
                      <span>
                        {
                          "Information submitted through demo, contact, or support forms"
                        }
                      </span>
                    </li>
                    <li>
                      <span>{"Communications you send to us"}</span>
                    </li>
                    <li>
                      <span>
                        {
                          "Information provided during customer onboarding or support"
                        }
                      </span>
                    </li>
                  </ul>
                  <div>
                    <h3>{"Information You Upload"}</h3>
                  </div>
                  <p>
                    {
                      "When you use VizeDraw, you may upload or create content such as:"
                    }
                  </p>
                  <ul>
                    <li>
                      <span>{"PDF drawing sets"}</span>
                    </li>
                    <li>
                      <span>{"Technical drawings"}</span>
                    </li>
                    <li>
                      <span>{"Project documents"}</span>
                    </li>
                    <li>
                      <span>{"Markups and annotations"}</span>
                    </li>
                    <li>
                      <span>{"Comments and review information"}</span>
                    </li>
                    <li>
                      <span>{"Revision information"}</span>
                    </li>
                    <li>
                      <span>{"Takeoff and quantity information"}</span>
                    </li>
                    <li>
                      <span>{"Project and organization information"}</span>
                    </li>
                    <li>
                      <span>
                        {
                          "Other content you choose to store or process through VizeDraw"
                        }
                      </span>
                    </li>
                  </ul>
                  <p>
                    {
                      "You retain responsibility for ensuring that you have the necessary rights and permissions to upload and share this content."
                    }
                  </p>
                  <div>
                    <h3>{"Automatically Collected Information"}</h3>
                  </div>
                  <p>
                    {
                      "When you access our website or services, we may automatically collect certain technical information, including:"
                    }
                  </p>
                  <ul>
                    <li>
                      <span>{"IP address"}</span>
                    </li>
                    <li>
                      <span>{"Browser type and version"}</span>
                    </li>
                    <li>
                      <span>{"Device type"}</span>
                    </li>
                    <li>
                      <span>{"Operating system"}</span>
                    </li>
                    <li>
                      <span>{"Referring website"}</span>
                    </li>
                    <li>
                      <span>{"Pages or features accessed"}</span>
                    </li>
                    <li>
                      <span>{"Date and time of access"}</span>
                    </li>
                    <li>
                      <span>{"General usage and interaction information"}</span>
                    </li>
                    <li>
                      <span>{"Error and diagnostic information"}</span>
                    </li>
                    <li>
                      <span>{"Security and authentication information"}</span>
                    </li>
                  </ul>
                  <p>
                    {
                      "We use this information to operate, secure, maintain, and improve our services."
                    }
                  </p>
                </section>
                <section
                  id={"how-we-use-information"}
                  aria-labelledby={"how-we-use-information-h"}
                >
                  <h2 id={"how-we-use-information-h"}>
                    {"2. How We Use Information"}
                  </h2>
                  <p>{"We may use information we collect to:"}</p>
                  <ul>
                    <li>
                      <span>{"Provide and operate VizeDraw"}</span>
                    </li>
                    <li>
                      <span>{"Create and manage user accounts"}</span>
                    </li>
                    <li>
                      <span>{"Process subscriptions and payments"}</span>
                    </li>
                    <li>
                      <span>{"Provide customer support"}</span>
                    </li>
                    <li>
                      <span>{"Respond to inquiries and demo requests"}</span>
                    </li>
                    <li>
                      <span>
                        {
                          "Store and process uploaded drawings and project information"
                        }
                      </span>
                    </li>
                    <li>
                      <span>
                        {
                          "Enable collaboration, sharing, revision management, markups, and other product functionality"
                        }
                      </span>
                    </li>
                    <li>
                      <span>{"Authenticate users and manage permissions"}</span>
                    </li>
                    <li>
                      <span>
                        {"Monitor service performance and reliability"}
                      </span>
                    </li>
                    <li>
                      <span>
                        {
                          "Detect, prevent, and investigate fraud, abuse, unauthorized access, and security incidents"
                        }
                      </span>
                    </li>
                    <li>
                      <span>{"Maintain audit and security records"}</span>
                    </li>
                    <li>
                      <span>
                        {"Improve and develop our products and services"}
                      </span>
                    </li>
                    <li>
                      <span>
                        {
                          "Communicate with users about their accounts, services, updates, and support"
                        }
                      </span>
                    </li>
                    <li>
                      <span>
                        {"Comply with legal and regulatory obligations"}
                      </span>
                    </li>
                  </ul>
                  <p>
                    {
                      "We do not use customer-uploaded drawings or project content for purposes unrelated to providing, securing, maintaining, or improving the services unless permitted by applicable law or otherwise authorized by the customer."
                    }
                  </p>
                </section>
                <section
                  id={"legal-bases-for-processing"}
                  aria-labelledby={"legal-bases-for-processing-h"}
                >
                  <h2 id={"legal-bases-for-processing-h"}>
                    {"3. Legal Bases for Processing"}
                  </h2>
                  <p>
                    {
                      "Where applicable law requires a legal basis for processing personal information, we may process information based on:"
                    }
                  </p>
                  <ul>
                    <li>
                      <span>{"Performance of a contract"}</span>
                    </li>
                    <li>
                      <span>{"Compliance with legal obligations"}</span>
                    </li>
                    <li>
                      <span>{"Our legitimate business interests"}</span>
                    </li>
                    <li>
                      <span>{"Your consent"}</span>
                    </li>
                    <li>
                      <span>
                        {"Protection of our services, users, and property"}
                      </span>
                    </li>
                  </ul>
                  <p>
                    {
                      "Where we rely on consent, you may withdraw your consent where permitted by applicable law."
                    }
                  </p>
                </section>
                <section
                  id={"cookies-and-similar-technologies"}
                  aria-labelledby={"cookies-and-similar-technologies-h"}
                >
                  <h2 id={"cookies-and-similar-technologies-h"}>
                    {"4. Cookies and Similar Technologies"}
                  </h2>
                  <p>
                    {
                      "VizeDraw may use cookies and similar technologies to operate our website and application, remember preferences, understand website usage, maintain security, and improve our services."
                    }
                  </p>
                  <p>{"Cookies may include:"}</p>
                  <ul>
                    <li>
                      <span>
                        {
                          "Essential cookies required for website or application functionality"
                        }
                      </span>
                    </li>
                    <li>
                      <span>
                        {"Preference cookies used to remember settings"}
                      </span>
                    </li>
                    <li>
                      <span>
                        {
                          "Analytics cookies used to understand website usage and performance"
                        }
                      </span>
                    </li>
                    <li>
                      <span>
                        {
                          "Marketing or advertising cookies, where applicable and where permitted"
                        }
                      </span>
                    </li>
                  </ul>
                  <p>
                    {"You can manage certain cookie preferences through our "}
                    <a href={"/cookie-preferences"}>
                      {"Cookie Preferences page"}
                    </a>
                    {" or through your browser settings."}
                  </p>
                </section>
                <section
                  id={"how-we-share-information"}
                  aria-labelledby={"how-we-share-information-h"}
                >
                  <h2 id={"how-we-share-information-h"}>
                    {"5. How We Share Information"}
                  </h2>
                  <p>
                    {
                      "We may share information with service providers and other parties when necessary to operate our business and provide VizeDraw."
                    }
                  </p>
                  <p>{"These parties may include:"}</p>
                  <ul>
                    <li>
                      <span>
                        {"Cloud hosting and infrastructure providers"}
                      </span>
                    </li>
                    <li>
                      <span>{"Authentication and identity providers"}</span>
                    </li>
                    <li>
                      <span>{"Payment and billing providers"}</span>
                    </li>
                    <li>
                      <span>{"Email and communication providers"}</span>
                    </li>
                    <li>
                      <span>{"Analytics and monitoring providers"}</span>
                    </li>
                    <li>
                      <span>{"Customer support providers"}</span>
                    </li>
                    <li>
                      <span>{"Security and fraud-prevention providers"}</span>
                    </li>
                    <li>
                      <span>
                        {
                          "Professional advisers, such as legal, accounting, or consulting providers"
                        }
                      </span>
                    </li>
                  </ul>
                  <p>
                    {
                      "Service providers are expected to process information according to appropriate contractual and security requirements."
                    }
                  </p>
                  <p>{"We may also disclose information:"}</p>
                  <ul>
                    <li>
                      <span>{"When required by law or legal process"}</span>
                    </li>
                    <li>
                      <span>
                        {
                          "To protect the rights, safety, or property of VizeDraw, our users, or others"
                        }
                      </span>
                    </li>
                    <li>
                      <span>
                        {"To investigate fraud, abuse, or security incidents"}
                      </span>
                    </li>
                    <li>
                      <span>
                        {
                          "In connection with a merger, acquisition, financing, restructuring, sale of assets, or similar corporate transaction"
                        }
                      </span>
                    </li>
                  </ul>
                  <p>
                    {
                      "We do not sell personal information in exchange for money."
                    }
                  </p>
                </section>
                <section
                  id={"customer-content"}
                  aria-labelledby={"customer-content-h"}
                >
                  <h2 id={"customer-content-h"}>{"6. Customer Content"}</h2>
                  <p>
                    {
                      "Customer-uploaded drawings, documents, markups, comments, and project information are treated as customer content."
                    }
                  </p>
                  <p>
                    {
                      "VizeDraw processes customer content to provide the functionality requested by the customer, including storage, viewing, searching, collaboration, revision management, comparison, measurement, takeoff, and related services."
                    }
                  </p>
                  <p>
                    {
                      "Access to customer content is controlled through account permissions and organizational access controls."
                    }
                  </p>
                  <p>
                    {
                      "Customers are responsible for determining what information they upload and who should have access to it."
                    }
                  </p>
                </section>
                <section
                  id={"data-security"}
                  aria-labelledby={"data-security-h"}
                >
                  <h2 id={"data-security-h"}>{"7. Data Security"}</h2>
                  <p>
                    {
                      "We use reasonable technical and organizational measures designed to protect information from unauthorized access, alteration, disclosure, loss, or destruction."
                    }
                  </p>
                  <p>
                    {
                      "Our security practices may include access controls, authentication controls, tenant and organization separation, permission checks, audit logging, secure infrastructure, and security monitoring."
                    }
                  </p>
                  <p>
                    {
                      "No internet-based service can guarantee absolute security. You should use appropriate security practices, including maintaining secure credentials and limiting access to authorized users."
                    }
                  </p>
                </section>
                <section
                  id={"data-retention"}
                  aria-labelledby={"data-retention-h"}
                >
                  <h2 id={"data-retention-h"}>{"8. Data Retention"}</h2>
                  <p>
                    {
                      "We retain information for as long as reasonably necessary to:"
                    }
                  </p>
                  <ul>
                    <li>
                      <span>{"Provide the services"}</span>
                    </li>
                    <li>
                      <span>{"Maintain customer accounts"}</span>
                    </li>
                    <li>
                      <span>{"Fulfill contractual obligations"}</span>
                    </li>
                    <li>
                      <span>
                        {"Meet legal, accounting, or regulatory requirements"}
                      </span>
                    </li>
                    <li>
                      <span>{"Resolve disputes"}</span>
                    </li>
                    <li>
                      <span>{"Prevent fraud and abuse"}</span>
                    </li>
                    <li>
                      <span>{"Maintain security and operational records"}</span>
                    </li>
                  </ul>
                  <p>
                    {
                      "Retention periods may vary depending on the type of information and the customer's subscription or contractual requirements."
                    }
                  </p>
                </section>
                <section
                  id={"international-data-transfers"}
                  aria-labelledby={"international-data-transfers-h"}
                >
                  <h2 id={"international-data-transfers-h"}>
                    {"9. International Data Transfers"}
                  </h2>
                  <p>
                    {
                      "Depending on where you and our service providers are located, information may be processed or stored in countries other than your country of residence."
                    }
                  </p>
                  <p>
                    {
                      "Where required, we will use appropriate safeguards for international transfers of personal information."
                    }
                  </p>
                </section>
                <section
                  id={"your-privacy-rights"}
                  aria-labelledby={"your-privacy-rights-h"}
                >
                  <h2 id={"your-privacy-rights-h"}>
                    {"10. Your Privacy Rights"}
                  </h2>
                  <p>
                    {
                      "Depending on your location and applicable law, you may have rights concerning your personal information, including the right to:"
                    }
                  </p>
                  <ul>
                    <li>
                      <span>
                        {
                          "Request access to personal information we hold about you"
                        }
                      </span>
                    </li>
                    <li>
                      <span>
                        {"Request correction of inaccurate information"}
                      </span>
                    </li>
                    <li>
                      <span>{"Request deletion of personal information"}</span>
                    </li>
                    <li>
                      <span>{"Request restriction of certain processing"}</span>
                    </li>
                    <li>
                      <span>{"Object to certain processing"}</span>
                    </li>
                    <li>
                      <span>
                        {"Request portability of certain information"}
                      </span>
                    </li>
                    <li>
                      <span>
                        {
                          "Withdraw consent where processing is based on consent"
                        }
                      </span>
                    </li>
                    <li>
                      <span>
                        {
                          "Lodge a complaint with an applicable data protection authority"
                        }
                      </span>
                    </li>
                  </ul>
                  <p>
                    {
                      "Some rights may be subject to legal limitations or exceptions."
                    }
                  </p>
                  <p>
                    {
                      "To exercise a privacy right, contact us using the information below."
                    }
                  </p>
                </section>
                <section
                  id={"account-and-customer-responsibilities"}
                  aria-labelledby={"account-and-customer-responsibilities-h"}
                >
                  <h2 id={"account-and-customer-responsibilities-h"}>
                    {"11. Account and Customer Responsibilities"}
                  </h2>
                  <p>
                    {
                      "If you use VizeDraw through an organization, your organization's administrator may control your account, access permissions, project access, and customer content."
                    }
                  </p>
                  <p>
                    {
                      "If your account is provided through an organization, privacy requests relating to organization-controlled information may need to be directed to that organization."
                    }
                  </p>
                </section>
                <section
                  id={"children-s-privacy"}
                  aria-labelledby={"children-s-privacy-h"}
                >
                  <h2 id={"children-s-privacy-h"}>
                    {"12. Children's Privacy"}
                  </h2>
                  <p>
                    {
                      "VizeDraw is intended for professional and business use. Our services are not directed toward children."
                    }
                  </p>
                  <p>
                    {
                      "We do not knowingly collect personal information from children in circumstances where such collection is prohibited by applicable law."
                    }
                  </p>
                </section>
                <section
                  id={"third-party-websites-and-services"}
                  aria-labelledby={"third-party-websites-and-services-h"}
                >
                  <h2 id={"third-party-websites-and-services-h"}>
                    {"13. Third-Party Websites and Services"}
                  </h2>
                  <p>
                    {
                      "Our website may contain links to third-party websites, applications, or services."
                    }
                  </p>
                  <p>
                    {
                      "We are not responsible for the privacy practices of third parties. We encourage you to review their privacy notices before providing information to them."
                    }
                  </p>
                </section>
                <section
                  id={"changes-to-this-privacy-notice"}
                  aria-labelledby={"changes-to-this-privacy-notice-h"}
                >
                  <h2 id={"changes-to-this-privacy-notice-h"}>
                    {"14. Changes to This Privacy Notice"}
                  </h2>
                  <p>
                    {
                      "We may update this Privacy Notice from time to time to reflect changes to our services, technology, legal requirements, or business practices."
                    }
                  </p>
                  <p>
                    {
                      "When we make changes, we will update the “Last Updated” date at the top of this page."
                    }
                  </p>
                </section>
                <section id={"contact-us"} aria-labelledby={"contact-us-h"}>
                  <h2 id={"contact-us-h"}>{"15. Contact Us"}</h2>
                  <p>
                    {
                      "If you have questions about this Privacy Notice or our privacy practices, please contact us."
                    }
                  </p>
                  <p>{"VizeDraw by Zenitude"}</p>
                  <p>
                    {"Email: "}
                    <a href={"mailto:hello@zenitude.com"}>
                      {"hello@zenitude.com"}
                    </a>
                  </p>
                  <p>
                    {"For product support: "}
                    <a href={"mailto:support@vizedraw.com"}>
                      {"support@vizedraw.com"}
                    </a>
                  </p>
                  <p>
                    {"For sales and demo inquiries: "}
                    <a href={"mailto:sales@vizedraw.com"}>
                      {"sales@vizedraw.com"}
                    </a>
                  </p>
                </section>
              </article>
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
