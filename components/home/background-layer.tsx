export function BackgroundLayer() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-30 bg-[#050505]" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_12%_8%,rgba(189,153,83,0.16),rgba(5,5,5,0)_36%),radial-gradient(circle_at_86%_16%,rgba(104,82,44,0.18),rgba(5,5,5,0)_40%),radial-gradient(circle_at_50%_100%,rgba(189,153,83,0.09),rgba(5,5,5,0)_52%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.01)_0%,rgba(0,0,0,0)_22%,rgba(255,255,255,0.01)_44%,rgba(0,0,0,0)_66%,rgba(255,255,255,0.01)_100%)]" />
    </>
  );
}
