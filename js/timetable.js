const classwiseDemoData = [
  {
    classId: "2025CLS10",
    className: "Class 10",
    numberOfSubjects: 7,
    classStartTime: "08:00",
    classEndTime: "14:00",
  },
  {
    classId: "2025CLS09",
    className: "Class 9",
    numberOfSubjects: 7,
    classStartTime: "08:00",
    classEndTime: "14:00",
  },
  {
    classId: "2025CLS08",
    className: "Class 8",
    numberOfSubjects: 8,
    classStartTime: "08:00",
    classEndTime: "13:45",
  },
  {
    classId: "2025CLS07",
    className: "Class 7",
    numberOfSubjects: 10,
    classStartTime: "08:15",
    classEndTime: "13:45",
  },
  {
    classId: "2025CLS06",
    className: "Class 6",
    numberOfSubjects: 10,
    classStartTime: "08:15",
    classEndTime: "13:30",
  },
  {
    classId: "2025CLS05",
    className: "Class 5",
    numberOfSubjects: 10,
    classStartTime: "08:30",
    classEndTime: "13:30",
  },
  {
    classId: "2025CLS04",
    className: "Class 4",
    numberOfSubjects: 8,
    classStartTime: "08:30",
    classEndTime: "13:15",
  },
  {
    classId: "2025CLS03",
    className: "Class 3",
    numberOfSubjects: 8,
    classStartTime: "08:45",
    classEndTime: "13:15",
  },
  {
    classId: "2025CLS02",
    className: "Class 2",
    numberOfSubjects: 8,
    classStartTime: "08:45",
    classEndTime: "13:00",
  },
  {
    classId: "2025CLS01",
    className: "Class 1",
    numberOfSubjects: 7,
    classStartTime: "09:00",
    classEndTime: "13:00",
  },
  {
    classId: "2025UKG",
    className: "UKG",
    numberOfSubjects: 5,
    classStartTime: "09:00",
    classEndTime: "12:00",
  },
  {
    classId: "2025LKG",
    className: "LKG",
    numberOfSubjects: 3,
    classStartTime: "09:30",
    classEndTime: "11:30",
  },
  {
    classId: "2025NUR",
    className: "Nursery",
    numberOfSubjects: 3,
    classStartTime: "09:30",
    classEndTime: "11:00",
  },
  {
    classId: "2025PG",
    className: "PlayGroup",
    numberOfSubjects: 1,
    classStartTime: "10:00",
    classEndTime: "11:00",
  },
];

const tableData = [
  {
    className: "Class 10",
    classID: "2025CLS10",
    classStartTime: "08:00",
    classEndTime: "14:00",
    periods: [
      {
        period: 1,
        subject: "Mathematics",
        teacher: "Mr. Sharma",
        start: "08:00",
        end: "08:45",
      },
      {
        period: 2,
        subject: "English",
        teacher: "Ms. Gupta",
        start: "08:45",
        end: "09:30",
      },
      {
        period: 3,
        subject: "Physics",
        teacher: "Dr. Verma",
        start: "09:30",
        end: "10:15",
      },
      {
        period: 4,
        subject: "Chemistry",
        teacher: "Mrs. Singh",
        start: "10:15",
        end: "11:00",
      },
      {
        period: 5,
        subject: "Biology",
        teacher: "Ms. Das",
        start: "11:00",
        end: "11:45",
      },
      {
        period: 6,
        subject: "History",
        teacher: "Mr. Khan",
        start: "11:45",
        end: "12:30",
      },
      {
        period: 7,
        subject: "Geography",
        teacher: "Ms. Roy",
        start: "12:30",
        end: "13:15",
      },
      {
        period: 8,
        subject: "Physical Education",
        teacher: "Coach Patel",
        start: "13:15",
        end: "14:00",
      },
    ],
  },
  {
    className: "Class 9",
    classID: "2025CLS09",
    classStartTime: "08:00",
    classEndTime: "14:00",
    periods: [
      {
        period: 1,
        subject: "Mathematics",
        teacher: "Mr. Iyer",
        start: "08:00",
        end: "08:45",
      },
      {
        period: 2,
        subject: "English Literature",
        teacher: "Mrs. Kapoor",
        start: "08:45",
        end: "09:30",
      },
      {
        period: 3,
        subject: "Science",
        teacher: "Dr. Banerjee",
        start: "09:30",
        end: "10:15",
      },
      {
        period: 4,
        subject: "Social Science",
        teacher: "Mr. Thomas",
        start: "10:15",
        end: "11:00",
      },
      {
        period: 5,
        subject: "Hindi",
        teacher: "Ms. Rani",
        start: "11:00",
        end: "11:45",
      },
      {
        period: 6,
        subject: "Computer Science",
        teacher: "Mr. Desai",
        start: "11:45",
        end: "12:30",
      },
      {
        period: 7,
        subject: "Art & Craft",
        teacher: "Ms. Fernandes",
        start: "12:30",
        end: "13:15",
      },
      {
        period: 8,
        subject: "Physical Education",
        teacher: "Coach Ahmed",
        start: "13:15",
        end: "14:00",
      },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const tableList = document.getElementById("table-list");
  tableList.innerHTML = "";
  let updatedHTML = "";
  classwiseDemoData.forEach((classData) => {
    updatedHTML += `
      <div class="class-card" id='${classData.classId}' onclick="openModal('table-modal','${classData.className}')">
        <div class="header">${classData.className}</div>
        <div class="info">
          <div><span>Subjects :</span>${classData.numberOfSubjects}</div>
          <div><span>Class Start : </span>${classData.classStartTime}</div>
          <div><span>Class End : </span>${classData.classEndTime}</div>
        </div>
      </div>
    `;
  });
  tableList.innerHTML = updatedHTML;

  tableList.addEventListener("click", (event) => {
    const card = event.target.closest(".class-card");
    if (!card) return;
    const classID = card.getAttribute("id");
    const classTableDiv = document.querySelector(".class-table");
    // Build table header and body
    let tableHTML = `
      <table id="class-timetable">
        <thead>
          <tr>
            <th>Period</th>
            <th>Subject</th>
            <th>Teacher</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody id="table-body">
        </tbody>
      </table>
    `;
    classTableDiv.innerHTML = tableHTML;
    const tableBody = document.getElementById("table-body");

    // Find the matching class timetable
    const classwiseTableData = tableData.find(
      (data) => data.classID === classID
    );

    if (classwiseTableData) {
      let rows = "";
      classwiseTableData.periods.forEach((period) => {
        rows += `
          <tr>
            <td>${period.period}</td>
            <td>${period.subject}</td>
            <td>${period.teacher}</td>
            <td>${period.start}</td>
            <td>${period.end}</td>
          </tr>
        `;
      });
      tableBody.innerHTML = rows;
    } else {
      tableBody.innerHTML = `<tr><td colspan="5">No timetable data available.</td></tr>`;
    }
  });
});
