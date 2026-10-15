import Head from "next/head";
export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found | VizeDraw</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main
        style={{
          maxWidth: 720,
          margin: "15vh auto",
          padding: 32,
          fontFamily: "system-ui",
          color: "#193638",
        }}
      >
        <p>404</p>
        <h1>This page could not be found.</h1>
        <p>
          <a href="/">Return to VizeDraw</a>
        </p>
      </main>
    </>
  );
}
