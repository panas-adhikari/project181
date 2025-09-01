const examRoutines = [
  // Class 10
  {
    class: "Class 10",
    examDate: "2025-09-12",
    exams: [
      { subject: "Mathematics", time: { start: "09:00", end: "12:00" }, durationMinutes: 180 }
    ]
  },
  {
    class: "Class 10",
    examDate: "2025-09-14",
    exams: [
      { subject: "English", time: { start: "13:00", end: "16:00" }, durationMinutes: 180 }
    ]
  },
  {
    class: "Class 10",
    examDate: "2025-09-16",
    exams: [
      { subject: "Physics", time: { start: "09:00", end: "12:00" }, durationMinutes: 180 }
    ]
  },

  // Class 9
  {
    class: "Class 9",
    examDate: "2025-09-12",
    exams: [
      { subject: "Science", time: { start: "09:00", end: "11:30" }, durationMinutes: 150 }
    ]
  },
  {
    class: "Class 9",
    examDate: "2025-09-14",
    exams: [
      { subject: "Mathematics", time: { start: "12:00", end: "14:30" }, durationMinutes: 150 }
    ]
  },

  // Class 8
  {
    class: "Class 8",
    examDate: "2025-09-12",
    exams: [
      { subject: "English", time: { start: "09:00", end: "11:00" }, durationMinutes: 120 }
    ]
  },
  {
    class: "Class 8",
    examDate: "2025-09-14",
    exams: [
      { subject: "Mathematics", time: { start: "11:30", end: "13:30" }, durationMinutes: 120 }
    ]
  },

  // Class 7
  {
    class: "Class 7",
    examDate: "2025-09-12",
    exams: [
      { subject: "Science", time: { start: "09:00", end: "11:00" }, durationMinutes: 120 }
    ]
  },
  {
    class: "Class 7",
    examDate: "2025-09-14",
    exams: [
      { subject: "Social Studies", time: { start: "11:30", end: "13:30" }, durationMinutes: 120 }
    ]
  },

  // Class 6
  {
    class: "Class 6",
    examDate: "2025-09-12",
    exams: [
      { subject: "English", time: { start: "09:00", end: "10:30" }, durationMinutes: 90 }
    ]
  },
  {
    class: "Class 6",
    examDate: "2025-09-14",
    exams: [
      { subject: "Mathematics", time: { start: "11:00", end: "12:30" }, durationMinutes: 90 }
    ]
  },

  // Class 5
  {
    class: "Class 5",
    examDate: "2025-09-12",
    exams: [
      { subject: "English", time: { start: "09:00", end: "10:30" }, durationMinutes: 90 }
    ]
  },
  {
    class: "Class 5",
    examDate: "2025-09-14",
    exams: [
      { subject: "Mathematics", time: { start: "11:00", end: "12:30" }, durationMinutes: 90 }
    ]
  },

  // Class 4
  {
    class: "Class 4",
    examDate: "2025-09-12",
    exams: [
      { subject: "Science", time: { start: "09:00", end: "10:00" }, durationMinutes: 60 }
    ]
  },
  {
    class: "Class 4",
    examDate: "2025-09-14",
    exams: [
      { subject: "English", time: { start: "10:30", end: "11:30" }, durationMinutes: 60 }
    ]
  },

  // Class 3
  {
    class: "Class 3",
    examDate: "2025-09-12",
    exams: [
      { subject: "Mathematics", time: { start: "09:00", end: "10:00" }, durationMinutes: 60 }
    ]
  },
  {
    class: "Class 3",
    examDate: "2025-09-14",
    exams: [
      { subject: "English", time: { start: "10:30", end: "11:30" }, durationMinutes: 60 }
    ]
  },

  // Class 2
  {
    class: "Class 2",
    examDate: "2025-09-12",
    exams: [
      { subject: "Mathematics", time: { start: "09:00", end: "09:45" }, durationMinutes: 45 }
    ]
  },
  {
    class: "Class 2",
    examDate: "2025-09-14",
    exams: [
      { subject: "English", time: { start: "10:00", end: "10:45" }, durationMinutes: 45 }
    ]
  },

  // Class 1
  {
    class: "Class 1",
    examDate: "2025-09-12",
    exams: [
      { subject: "Mathematics", time: { start: "09:00", end: "09:30"}, durationMinutes: 30 }
    ]
  },
  {
    class: "Class 1",
    examDate: "2025-09-14",
    exams: [
      { subject: "English", time: { start: "09:45", end: "10:15" }, durationMinutes: 30 }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const dates = [...new Set(examRoutines.map(r => r.examDate))].sort();
  const classes = [...new Set(examRoutines.map(r => r.class))].sort((a, b) => {
    const classA = parseInt(a.match(/\d+/)[0]);
    const classB = parseInt(b.match(/\d+/)[0]);
    return classB - classA;
  });

  const headerRow = document.getElementById("header-row");
  const tableBody = document.getElementById("table-body");

  // Create header
  headerRow.innerHTML = `<th>Class</th>`;
  dates.forEach(date => {
    const th = document.createElement("th");
    th.textContent = date;
    headerRow.appendChild(th);
  });

  // Create a map for quick lookup of exams
  const examsByClassAndDate = {};
  examRoutines.forEach(routine => {
    if (!examsByClassAndDate[routine.class]) {
      examsByClassAndDate[routine.class] = {};
    }
    routine.exams.forEach(exam => {
      examsByClassAndDate[routine.class][routine.examDate] = `${exam.subject} (${exam.time.start}-${exam.time.end})`;
    });
  });

  // Populate the table body
  classes.forEach(cls => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${cls}</td>`;

    dates.forEach(date => {
      const td = document.createElement("td");
      td.textContent = examsByClassAndDate[cls]?.[date] || "—";
      tr.appendChild(td);
    });

    tableBody.appendChild(tr);
  });
});