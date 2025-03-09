import React from 'react';

type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

const timelineData: TimelineItem[] = [
  {
    date: '2025-03-01',
    title: 'Started Project',
    description: 'Initiated the tracking system and created the basic structure.',
  },
  {
    date: '2025-03-02',
    title: 'Added Features',
    description: 'Integrated timeline data and began designing UI components.',
  },
  {
    date: '2025-03-03',
    title: 'Completed Design',
    description: 'Finished the frontend design and started adding functionality.',
  },
  {
    date: '2025-03-04',
    title: 'Testing Phase',
    description: 'Started testing the timeline for responsiveness and accuracy.',
  },
];

const Tracking: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold text-center">Tracking Timeline</h1>
      <div className="border-l-4 border-gray-300 mt-4">
        {timelineData.map((item, index) => (
          <div key={index} className="flex items-start mb-6 pl-6 relative">
            <div className="bg-blue-500 w-6 h-6 rounded-full text-white flex items-center justify-center absolute -left-3">
              {index + 1}
            </div>
            <div className="ml-10">
              <p className="text-sm text-gray-500">{item.date}</p>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracking;