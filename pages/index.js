import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Engagement Agent (Learner View)</h1>
      <div className="space-y-4">
        <div className="bg-blue-100 p-4 rounded">
          Hi Jordan, congrats on your new role at Acme!
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <Link href="/story">
            <a className="text-blue-600 underline">Recommend advanced product training.</a>
          </Link>
        </div>
      </div>
    </main>
  );
}
