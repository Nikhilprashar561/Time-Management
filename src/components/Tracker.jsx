import { useState } from 'react';

export default function TaskTable() {
  const [tasks, setTasks] = useState([
    { subject: 'Write blog', duration: '30 mins', completed: true },
    { subject: 'Practice DSA', duration: '1 hour', completed: false },
  ]);

  return (
    <div className="p-6 bg-black rounded-xl shadow-lg overflow-x-auto">
      <h2 className="text-white text-xl mb-4 font-semibold">Task Tracker</h2>
      <table className="w-full border-collapse text-white text-sm">
        <thead>
          <tr>
            <th className="border border-gray-600 px-6 py-3 text-left">Task</th>
            <th className="border border-gray-600 px-6 py-3 text-left">Duration</th>
            <th className="border border-gray-600 px-6 py-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, idx) => (
            <tr
              key={idx}
              className="hover:bg-gray-800 transition-all duration-300"
            >
              <td className="border border-gray-600 px-6 py-3">{task.subject}</td>
              <td className="border border-gray-600 px-6 py-3">{task.duration}</td>
              <td
                className={`border border-gray-600 px-6 py-3 font-semibold ${
                  task.completed ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {task.completed ? 'Task Completed' : 'Pending'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
