import React, { useEffect, useState } from "react"
import Card from "../shared/Card"
import axios from 'axios';
import PropTypes from "prop-types"
import moment from "moment-timezone";

const STATUS = ["in", "out"];

const Home = ({ timesheetList }) => {
  const [status, setStatus] = useState(STATUS[0]);
  const [timesheet, setTimesheet] = useState(timesheetList);

  useEffect(() => {
    const getLatestTimesheetStatus = timesheet && timesheet.length > 0 && timesheet[0].status;
    
    if (getLatestTimesheetStatus) setStatus(STATUS.filter(stat => stat != getLatestTimesheetStatus)[0]);
  }, [timesheet])

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
      if (response.data && response.data.hasOwnProperty("id")) {
        setTimesheet([response.data, ...timesheet]);
      }
    } catch (error) {
      console.error(error);
      alert('Error creating timesheet');
    }
  };

  const displayRecentAttendance = () => {
    const formatTime = (time) => {
      return moment(time)
        .tz("Asia/Manila")
        .format("hh:mm A");
    };

    return timesheet.slice(0, 10).map((timesheet, index) => (
      <div className="flex justify-between" key={index}>
        <div>
          {timesheet.date}
        </div>
        <div>
          {timesheet.status.toUpperCase()}
        </div>
        <div>
          {formatTime(timesheet.time)}
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
                Time {status}
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

Home.propTypes = {
  timesheetList: PropTypes.array
};

export default Home;
