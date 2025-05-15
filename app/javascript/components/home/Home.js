import React, { useState } from "react"
import Card from "../shared/Card"
import axios from 'axios';

const Home = () => {
  const [status, setStatus] = useState('in');

  const handleSubmit = async () => {
    try {
      const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");

      const response = await axios.post('/timesheet/create', {
        timesheet: {
          status
        }
      }, {
        headers: {
          'X-CSRF-Token': csrfToken,
          'Content-Type': 'application/json'
        }
      });

      alert('Timesheet created!');
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert('Error creating timesheet');
    }
  };

  const displayRecentAttendance = () => {
    const testDate = [
      {
        time: "5:00PM",
        date: "05/07/2025",
        status: "OUT"
      },
      {
        time: "6:43AM",
        date: "05/07/2025",
        status: "IN"
      },
      {
        time: "5:13PM",
        date: "05/06/2025",
        status: "OUT"
      },
      {
        time: "7:29AM",
        date: "05/06/2025",
        status: "IN"
      },
      {
        time: "5:13PM",
        date: "05/05/2025",
        status: "OUT"
      },
      {
        time: "7:29AM",
        date: "05/05/2025",
        status: "IN"
      },
      {
        time: "5:13PM",
        date: "05/04/2025",
        status: "OUT"
      },
      {
        time: "7:29AM",
        date: "05/04/2025",
        status: "IN"
      },
      {
        time: "5:13PM",
        date: "05/03/2025",
        status: "OUT"
      },
      {
        time: "7:29AM",
        date: "05/03/2025",
        status: "IN"
      }
    ];

    return testDate.map((item, index) => (
      <div className="flex justify-between" key={index}>
        <div>
          {item.date}
        </div>
        <div>
          {item.status}
        </div>
        <div>
          {item.time}
        </div>
      </div>
    ))
  }

  return (
    <div className="flex items-stretch gap-10 px-10">
      <div className="flex-1">
        <Card>
          <h2 className="text-xl font-bold text-white mb-2">Bubblegum Card</h2>
          <p className="text-white">This is a soft, playful card that matches your UI. Styled with Tailwind CSS!</p>
        </Card>
      </div>
      <div className="flex-1">
        <Card>
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Attendance</h2>
            </div>
            <div className="h-64">
              {displayRecentAttendance()}
            </div>
            <div>
              <button className="border-2 rounded-md border-purple-200 text-gray-700 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 py-1 w-full mb-3" 
                onClick={handleSubmit}
              >
                Time In
              </button>
            </div>
          </div>
        </Card>
      </div>
      <div className="flex-1">
        <Card>
          <h2 className="text-xl font-bold text-white mb-2">Sunken Card</h2>
          <p className="text-white">This card mimics a well or "hole" in the surface. Stylish and modern!</p>
        </Card>
      </div>
    </div>      
  )
}

export default Home;
