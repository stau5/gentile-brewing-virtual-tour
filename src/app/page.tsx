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
        src="/tour/index.htm"
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