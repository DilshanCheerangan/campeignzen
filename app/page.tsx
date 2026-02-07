export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          CampaignZen
        </h1>
        <p className="mt-4 text-lg" style={{ color: 'var(--zen-stone-500)' }}>
          Campaign management made simple.
        </p>
      </div>
    </main>
  );
}
