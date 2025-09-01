const demoClassWiseData = [
  {
    classId: "2025CLS10",
    className: "Class 10",
    totalStudents: "130",
    classTeacher: "Mr. Sharma",
    boysCount: "70",
    girlsCount: "60",
    passPercentage: "84",
    topperPercentage: "98",
  },
  {
    classId: "2025CLS09",
    className: "Class 9",
    totalStudents: "125",
    classTeacher: "Ms. Joshi",
    boysCount: "68",
    girlsCount: "57",
    passPercentage: "82",
    topperPercentage: "97",
  },
  {
    classId: "2025CLS08",
    className: "Class 8",
    totalStudents: "120",
    classTeacher: "Mr. Gupta",
    boysCount: "65",
    girlsCount: "55",
    passPercentage: "80",
    topperPercentage: "96",
  },
  {
    classId: "2025CLS07",
    className: "Class 7",
    totalStudents: "115",
    classTeacher: "Ms. Pandey",
    boysCount: "62",
    girlsCount: "53",
    passPercentage: "78",
    topperPercentage: "95",
  },
  {
    classId: "2025CLS06",
    className: "Class 6",
    totalStudents: "110",
    classTeacher: "Mr. Singh",
    boysCount: "60",
    girlsCount: "50",
    passPercentage: "76",
    topperPercentage: "94",
  },
  {
    classId: "2025CLS05",
    className: "Class 5",
    totalStudents: "105",
    classTeacher: "Ms. Thapa",
    boysCount: "58",
    girlsCount: "47",
    passPercentage: "74",
    topperPercentage: "93",
  },
  {
    classId: "2025CLS04",
    className: "Class 4",
    totalStudents: "100",
    classTeacher: "Mr. Rana",
    boysCount: "55",
    girlsCount: "45",
    passPercentage: "72",
    topperPercentage: "92",
  },
  {
    classId: "2025CLS03",
    className: "Class 3",
    totalStudents: "95",
    classTeacher: "Ms. Lama",
    boysCount: "52",
    girlsCount: "43",
    passPercentage: "70",
    topperPercentage: "91",
  },
  {
    classId: "2025CLS02",
    className: "Class 2",
    totalStudents: "90",
    classTeacher: "Mr. Bhandari",
    boysCount: "50",
    girlsCount: "40",
    passPercentage: "68",
    topperPercentage: "90",
  },
  {
    classId: "2025CLS01",
    className: "Class 1",
    totalStudents: "85",
    classTeacher: "Ms. Gurung",
    boysCount: "48",
    girlsCount: "37",
    passPercentage: "66",
    topperPercentage: "89",
  },
  {
    classId: "2025LKG",
    className: "LKG",
    totalStudents: "75",
    classTeacher: "Ms. Shrestha",
    boysCount: "42",
    girlsCount: "33",
    passPercentage: "N/A",
    topperPercentage: "N/A",
  },
  {
    classId: "2025UKG",
    className: "UKG",
    totalStudents: "70",
    classTeacher: "Mr. Tamang",
    boysCount: "40",
    girlsCount: "30",
    passPercentage: "N/A",
    topperPercentage: "N/A",
  },
  {
    classId: "2025NURS",
    className: "Nursery",
    totalStudents: "80",
    classTeacher: "Mr. Adhikari",
    boysCount: "45",
    girlsCount: "35",
    passPercentage: "N/A",
    topperPercentage: "N/A",
  },
  {
    classId:"2025PG",
    className:"Play Group",
    totalStudents:"50",
    classTeacher: "Mr. Adhikari",
    boysCount: "45",
    girlsCount: "35",
    passPercentage: "N/A",
    topperPercentage: "N/A",
  }
];

const demoStudentData = [
  {
    classId: "2025CLS09",
    students: [
      {
        id: "STU202509A001",
        name: "Aarav Singh",
        gender: "Male",
        classRoll: 12,
        schoolRoll: "2025-0312",
        contact: "9876543210",
        guardian: "Mr. Singh",
        attendance: 92,
        average: 87,
        exams: [
          {
            type: "Test",
            date: "2025-01-15T10:00:00Z",
            subjects: [
              {
                name: "Math",
                marks: { theory: 28, practical: 12 },
                fullMarks: { theory: 30, practical: 15 },
              },
              {
                name: "Science",
                marks: { theory: 25, practical: 14 },
                fullMarks: { theory: 30, practical: 15 },
              },
            ],
          },
          {
            type: "Terminal",
            date: "2025-03-30T09:00:00Z",
            subjects: [
              {
                name: "Math",
                marks: { theory: 58, practical: 28 },
                fullMarks: { theory: 60, practical: 30 },
              },
              {
                name: "Science",
                marks: { theory: 52, practical: 27 },
                fullMarks: { theory: 60, practical: 30 },
              },
            ],
          },
        ],
      },
      {
        id: "STU202509A002",
        name: "Priya Mehta",
        gender: "Female",
        classRoll: 15,
        schoolRoll: "2025-0315",
        contact: "9876501234",
        guardian: "Mrs. Mehta",
        attendance: 95,
        average: 91,
        exams: [
          {
            type: "Test",
            date: "2025-01-15T10:00:00Z",
            subjects: [
              {
                name: "Math",
                marks: { theory: 30, practical: 13 },
                fullMarks: { theory: 30, practical: 15 },
              },
              {
                name: "Science",
                marks: { theory: 27, practical: 15 },
                fullMarks: { theory: 30, practical: 15 },
              },
            ],
          },
          {
            type: "Terminal",
            date: "2025-03-30T09:00:00Z",
            subjects: [
              {
                name: "Math",
                marks: { theory: 56, practical: 29 },
                fullMarks: { theory: 60, practical: 30 },
              },
              {
                name: "Science",
                marks: { theory: 54, practical: 28 },
                fullMarks: { theory: 60, practical: 30 },
              },
            ],
          },
        ],
      },
      {
        id: "STU202509B001",
        name: "Rohan Verma",
        gender: "Male",
        classRoll: 18,
        schoolRoll: "2025-0318",
        contact: "9876009999",
        guardian: "Mr. Verma",
        attendance: 88,
        average: 79,
        exams: [
          {
            type: "Test",
            date: "2025-01-15T10:00:00Z",
            subjects: [
              {
                name: "Math",
                marks: { theory: 24, practical: 10 },
                fullMarks: { theory: 30, practical: 15 },
              },
              {
                name: "Science",
                marks: { theory: 22, practical: 12 },
                fullMarks: { theory: 30, practical: 15 },
              },
            ],
          },
          {
            type: "Terminal",
            date: "2025-03-30T09:00:00Z",
            subjects: [
              {
                name: "Math",
                marks: { theory: 50, practical: 25 },
                fullMarks: { theory: 60, practical: 30 },
              },
              {
                name: "Science",
                marks: { theory: 48, practical: 26 },
                fullMarks: { theory: 60, practical: 30 },
              },
            ],
          },
        ],
      },
      {
        id: "STU202509B002",
        name: "Simran Kaur",
        gender: "Female",
        classRoll: 20,
        schoolRoll: "2025-0320",
        contact: "9876112233",
        guardian: "Mr. Kaur",
        attendance: 90,
        average: 85,
        exams: [
          {
            type: "Test",
            date: "2025-01-15T10:00:00Z",
            subjects: [
              {
                name: "Math",
                marks: { theory: 27, practical: 14 },
                fullMarks: { theory: 30, practical: 15 },
              },
              {
                name: "Science",
                marks: { theory: 26, practical: 13 },
                fullMarks: { theory: 30, practical: 15 },
              },
            ],
          },
          {
            type: "Terminal",
            date: "2025-03-30T09:00:00Z",
            subjects: [
              {
                name: "Math",
                marks: { theory: 55, practical: 27 },
                fullMarks: { theory: 60, practical: 30 },
              },
              {
                name: "Science",
                marks: { theory: 50, practical: 28 },
                fullMarks: { theory: 60, practical: 30 },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    classId: "2025CLS10",
    students: [
      {
        id: "STU202510A001",
        name: "Kabir Sharma",
        gender: "Male",
        classRoll: 5,
        schoolRoll: "2025-0405",
        contact: "9876547890",
        guardian: "Mrs. Sharma",
        attendance: 93,
        average: 89,
        exams: [
          {
            type: "Test",
            date: "2025-02-05T10:00:00Z",
            subjects: [
              {
                name: "English",
                marks: { theory: 29, practical: 14 },
                fullMarks: { theory: 30, practical: 15 },
              },
              {
                name: "Math",
                marks: { theory: 30, practical: 13 },
                fullMarks: { theory: 30, practical: 15 },
              },
            ],
          },
        ],
      },
    ],
  },
];

const demoTeachersData = [
  {
    id: "TCH2025SEC001",
    name: "Mr. Rajesh Kumar",
    level: "Secondary",
    subjects: ["Mathematics", "Physics"],
    assignedClasses: ["2025CLS09", "2025CLS10"],
    arrivalTime: "08:30 AM",
    departureTime: "03:30 PM",
    contact: "+91-9876543210",
    email: "rajesh.kumar@school.edu",
    experience: "10 years",
    qualification: "M.Sc, B.Ed"
  },
  {
    id: "TCH2025PRI002",
    name: "Ms. Anjali Sharma",
    level: "Primary",
    subjects: ["English", "Social Science"],
    assignedClasses: ["2025CLS03", "2025CLS04", "2025CLS05"],
    arrivalTime: "09:00 AM",
    departureTime: "02:00 PM",
    contact: "+91-9812345678",
    email: "anjali.sharma@school.edu",
    experience: "6 years",
    qualification: "B.A, B.Ed"
  },
  {
    id: "TCH2025HSEC003",
    name: "Dr. Sandeep Verma",
    level: "Higher Secondary",
    subjects: ["Chemistry"],
    assignedClasses: ["2025CLS11", "2025CLS12"],
    arrivalTime: "08:00 AM",
    departureTime: "04:00 PM",
    contact: "+91-9765432109",
    email: "sandeep.verma@school.edu",
    experience: "15 years",
    qualification: "Ph.D, M.Ed"
  },
  {
    id: "TCH2025SEC004",
    name: "Mrs. Kavita Joshi",
    level: "Secondary",
    subjects: ["Biology"],
    assignedClasses: ["2025CLS09", "2025CLS10"],
    arrivalTime: "08:45 AM",
    departureTime: "03:15 PM",
    contact: "+91-9123456780",
    email: "kavita.joshi@school.edu",
    experience: "12 years",
    qualification: "M.Sc, B.Ed"
  }
];


export { demoClassWiseData, demoStudentData ,demoTeachersData};
