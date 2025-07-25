import { motion } from 'framer-motion';

export default function ReengagementStory() {
  return (
    <main className="min-h-screen bg-white p-8 text-gray-800 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto mb-8"
      >
        <h1 className="text-3xl font-bold mb-4">Re-Engagement in Action</h1>
        <p className="mb-2"><strong>Agent:</strong> Congrats on your promotion 🎉</p>
        <p className="mb-2"><strong>Learner:</strong> I’m worried my team isn’t up to speed.</p>
        <p className="mb-2"><strong>Agent:</strong> Try our Pipeline Acceleration course?</p>
        <p className="mb-2"><strong>Learner:</strong> Yes please.</p>
        <p className="mb-2"><strong>Agent:</strong> You’re enrolled! Click to begin.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="bg-gray-50 p-6 rounded-lg shadow max-w-2xl mx-auto"
      >
        <h2 className="text-xl font-semibold mb-2">Why It Works</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Win-back = 10–20% recovered accounts</li>
          <li>Contextual outreach → higher conversion</li>
          <li>5–15% click-through rate depending on segment</li>
          <li>43% more completions after milestone-based nudges</li>
        </ul>
      </motion.div>
    </main>
  );
}
