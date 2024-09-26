import React from "react";
import Alert from "../Alert/Alert";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import {chartDays} from "../Utils/constants";
const Coininfo = ({
  historicData,
  setDays,
  setCoinInterval,
  days,
  currency,
}) => {


  function handleDayChange(e){
    console.log(e.target.options[e.target.selectedIndex].value);
    const daysSelected = e.target.options[e.target.selectedIndex].value;
    if(daysSelected == 1){
        setCoinInterval('');
    }else{
        setCoinInterval('daily');
    }
    setDays(e.target.options[e.target.selectedIndex].value);
  }

  Chart.register(CategoryScale);

  if (!historicData) {
    return <Alert message="No data avilable" type="info" />;
  }

  return (
    <div className="flex flex-col justify-center items-center mt-8 p-6 w-full md:w-3/4">
      <div className="h-[450px] w-full">
        <Line
          data={{
            labels: historicData.prices.map((coinPrice) => {
              let date = new Date(coinPrice[0]); //CONVERTING UNIX TIMESTAMPS TO DATA
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours() - 12}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [
              {
                label: `price (past ${days}  ${
                  days === 1 ? "Day" : "Days"
                } ) in ${currency.toUpperCase()}`,
                data: historicData.prices.map((coinPrice) => coinPrice[1]),
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            elements: {
              point: {
                radius: 0,
              },
            },
          }}
        />
      </div>

      <div className="flex justify-center mt-5 w-full">
        <select className="select select-success w-full max-w-xs" onChange={handleDayChange} >
          {chartDays.map((day, index) => {
            return (
              <option selected={days == day.value} value={day.value} key={index}>
                {day.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Coininfo;
