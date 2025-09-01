import { demoClassWiseData, demoStudentData } from "./demoData.js";

const classList = [
  "Class 10",
  "Class 9",
  "Class 8",
  "Class 7",
  "Class 6",
  "Class 5",
  "Class 4",
  "Class 3",
  "Class 2",
  "Class 1",
  "UKG",
  "LKG",
  "Nursery",
  "PlayGroup",
];

document.addEventListener("DOMContentLoaded", () => {
  const selectPanel = document.getElementById("studentClass");
  selectPanel.innerHTML = "";

  classList.forEach((className) => {
    const classItem = document.createElement("option");
    classItem.value = className;
    classItem.textContent = className;
    selectPanel.appendChild(classItem);
  });

  // Load class-wise data for the initial list of classes
  const classlist = document.getElementById("classlist");
  classlist.innerHTML = "";
  let classCardsHTML = "";
  demoClassWiseData.forEach((classData) => {
    classCardsHTML += `
      <div class="class-card" id='${classData.classId}' onclick="openModal('classModal','${classData.className}')" >
        <div class="header">${classData.className}</div>
        <div class="info">
          <div><span>Total:</span> ${classData.totalStudents}</div>
          <div><span>Teacher:</span>${classData.classTeacher}</div>
        </div>
        <div class="count-stats">
          <div class="stat-block">
            <div class="stat">Boys</div>
            <div class="number">${classData.boysCount}</div>
          </div>
          <div class="stat-block">
            <div class="stat">Girls</div>
            <div class="number">${classData.girlsCount}</div>
          </div>
        </div>
        <div class="academic-highlight">
          <div class="stat-block">
            <div class="stat">Pass %</div>
            <div class="number">${classData.passPercentage}%</div>
          </div>
          <div class="stat-block">
            <div class="stat">Topper</div>
            <div class="number">${classData.topperPercentage}%</div>
          </div>
        </div>
      </div>
    `;
  });
  classlist.innerHTML = classCardsHTML;

  // Event delegation for class-card clicks
  classlist.addEventListener("click", (event) => {
    const card = event.target.closest(".class-card");
    if (!card) return;
    const classId = card.getAttribute("id");
    const studentList = document.getElementById("student-list-ul");
    for (const classwiseStdData of demoStudentData) {
      if (classwiseStdData.classId == classId) {
        studentList.innerHTML = "";
        let studentsHTML = "";
        classwiseStdData.students.forEach((studentDetail) => {
          studentsHTML += `
            <li>
              <div class="student-info" id="${studentDetail.id}">
                <span class="student-name">${studentDetail.name}</span>
                <div class="student-summary">
                  <span>Class Roll No: ${studentDetail.classRoll}</span> |
                  <span>School Roll No: ${studentDetail.schoolRoll}</span> |
                  <span>Contact: ${studentDetail.contact}</span> <br />
                  <span>Attendance: ${studentDetail.attendance}%</span> |
                  <span>Avg: ${studentDetail.average}%</span>
                </div>
              </div>
              <button class="update-btn" onclick="updateStudent('${studentDetail.id}')">Update</button>
            </li>
          `;
        });
        studentList.innerHTML = studentsHTML;
        break;
      } else {
        studentList.innerHTML = "<h3>NO STUDENTS</h3>";
      }
    }
  });
});

const studentform = document.getElementsByClassName("student-form")[0];
studentform.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(studentform);

  // Set registration date
  const today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const yyyy = today.getFullYear();
  const registrationDate = `${mm}-${dd}-${yyyy}`;

  const data = {
    studentName: formData.get("studentName").trim(),
    gender: formData.get("gender").trim(),
    classRoll: formData.get("classRoll").trim(),
    schoolRoll: formData.get("schoolRoll").trim(),
    dob: formData.get("dob").trim(),
    contact: formData.get("contact").trim(),
    email: formData.get("email").trim(),
    registrationDate: registrationDate,
  };
  console.log(data);
});
