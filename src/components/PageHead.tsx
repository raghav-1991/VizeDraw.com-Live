import Head from "next/head";
type Props = {
  title: string;
  description: string;
  path: string;
  styles: string[];
};
export default function PageHead({ title, description, path, styles }: Props) {
  const origin = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://vizedraw-design-review.karmastrikes.chatgpt.site"
  ).replace(/\/$/, "");
  const indexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="robots"
        content={indexable ? "index,follow" : "noindex,nofollow"}
      />
      <meta name="theme-color" content="#193638" />
      <link rel="canonical" href={origin + (path === "/" ? "/" : path + "/")} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={origin + (path === "/" ? "/" : path + "/")}
      />
      <link rel="icon" href="/assets/favicon.png" type="image/png" />
      <link
        rel="preload"
        href="/assets/poppins-regular.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      {styles.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
    </Head>
  );
}
