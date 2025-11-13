import config from "../../next.config";

const assetsPrefix =
  // @ts-expect-error next.config typing
  (config.assetPrefix as string | undefined) ||
  // @ts-expect-error next.config typing
  (config.basePath as string | undefined) ||
  "";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      <iframe
        src={`${assetsPrefix}/tour/index.htm`}
        style={{
          border: "none",
          width: "100vw",
          height: "100vh",
          display: "block",
        }}
        allowFullScreen
      />
    </main>
  );
}