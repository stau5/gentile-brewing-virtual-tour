export const dynamic = "force-static";

export default function VirtualTourPage() {
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      <iframe
        src="/virtualtour/index.htm"
        style={{
          border: "none",
          width: "100vw",
          height: "100vh",
        }}
        allowFullScreen
      />
    </main>
  );
}