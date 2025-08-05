export default function TimeTableSummary() {
  const data = [
    { totalTime: '8 hours', tag: 'Dedicated' },
    { totalTime: '4 hours', tag: 'Casual' },
  ];

  return (
    <div className="p-6 bg-black rounded-xl shadow-lg overflow-x-auto">
      <table className="w-full border-collapse text-white text-sm">
        <thead>
          <tr>
            <th className="border border-gray-600 px-6 py-3 text-left text-lg">Total Time</th>
            <th className="border border-gray-600 px-6 py-3 text-left text-lg">Tag</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr
              key={idx}
              className="hover:bg-gray-800 transition-all duration-300"
            >
              <td className="border border-gray-600 px-6 py-3 text-base">{item.totalTime}</td>
              <td className="border border-gray-600 px-6 py-3 text-base font-semibold uppercase tracking-wide text-blue-400">
                {item.tag}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
