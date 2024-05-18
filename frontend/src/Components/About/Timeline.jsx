import React from 'react'

export default function Timeline() {
    const events = [
        { date: '2023-01-01', title: 'Event 1', description: 'Description for event 1', side: 'left' },
        { date: '2023-02-01', title: 'Event 2', description: 'Description for event 2', side: 'right' },
        { date: '2023-03-01', title: 'Event 3', description: 'Description for event 3', side: 'left' },
        { date: '2023-04-01', title: 'Event 4', description: 'Description for event 4', side: 'right' },
    ];
    return (
        <>
            <div className="h-16"></div>
            <div className="container-about w-full bg-gradient-to-b from-blue-200 via-pink-300 to-gray-900 ">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
                    {events.map((event, index) => (
                        <div key={index} className={`mb-8 flex justify-${event.side === 'left' ? 'start' : 'end'} w-full`}>
                            <div className={`w-1/2 ${event.side === 'left' ? 'pr-8' : 'pl-8'}`}>
                                <div className="bg-white p-4 rounded shadow-lg">
                                    <h2 className="font-bold text-lg mb-1">{event.title}</h2>
                                    <span className="text-sm text-gray-600">{event.date}</span>
                                    <p className="text-gray-700 mt-2">{event.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}
