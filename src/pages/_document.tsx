import Document, {
  Html,
  Head,
  Main,
  NextScript,
  type DocumentContext,
} from "next/document";
import routes from "@/data/routes.json";
export default class SiteDocument extends Document<{
  bodyClass: string;
  dataPage: string;
}> {
  static async getInitialProps(ctx: DocumentContext) {
    const initial = await Document.getInitialProps(ctx);
    const route = routes.find(
      (r) => r.path === (ctx.pathname.replace(/\/$/, "") || "/"),
    );
    return {
      ...initial,
      bodyClass: route?.bodyClass || "",
      dataPage: route?.dataPage || "",
    };
  }
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className={this.props.bodyClass} data-page={this.props.dataPage}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
