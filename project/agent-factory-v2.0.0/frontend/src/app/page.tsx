export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">AI Agent Factory Control Tower</h1>
      <p className="text-lg text-gray-600">
        Manage and monitor your AI agents from a centralized dashboard.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Agent Status</h2>
          <p className="mt-2 text-gray-500">View real-time agent health and metrics</p>
        </div>
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Create Agent</h2>
          <p className="mt-2 text-gray-500">Deploy new AI agents with custom configurations</p>
        </div>
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Analytics</h2>
          <p className="mt-2 text-gray-500">Track performance and usage statistics</p>
        </div>
      </div>
    </main>
  );
}
