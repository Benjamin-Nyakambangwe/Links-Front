export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">PUBLISHER Dashboard</h1>
      <div className="flex gap-2">
        {[...new Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800"
          ></div>
        ))}
      </div>
      <div className="flex gap-2 flex-1 mt-4">
        {[...new Array(2)].map((_, i) => (
          <div
            key={i}
            className="h-40 w-full rounded-lg bg-gray-100 dark:bg-neutral-800"
          ></div>
        ))}
      </div>
    </div>
  );
}
