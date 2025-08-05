import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';
import { BsPlayCircle } from 'react-icons/bs';

const TimeData = () => {
  const task = {
    subject: 'Gym',
    duration: '1 hour',
  };

  return (
    <div className="table-container">
      <table className="task-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Assigned Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{task.subject}</td>
            <td>{task.duration}</td>
            <td>
              <button className="icon-btn"><FiEdit size={20} title="Edit" /></button>
              <button className="icon-btn"><MdDeleteOutline size={22} title="Delete" /></button>
              <button className="icon-btn"><BsPlayCircle size={22} title="Resume" /></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TimeData;
