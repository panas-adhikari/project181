import { demoTeachersData } from "./demoData.js";

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
const level = [
  "Primary",
  "Lower Secondary",
  "Secondary",
  "Higher Secondary",
  "Bachelor's",
  "Masters",
  "PD Lecturer",
];

// Helper function to mark a teacher as absent
const markAbsent = (teacherID) => {
  const teacherCard = document.getElementById(teacherID);
  if (teacherCard) {
    teacherCard.classList.add("absent");
  }
};

const setupSelectOptions = (selectId, data) => {
  const select = document.getElementById(selectId);
  select.innerHTML = "";
  data.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    select.appendChild(option);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const teachersList = document.getElementById("teachers-list");
  teachersList.innerHTML = "";

  // Generate and render teacher cards
  demoTeachersData.forEach((teacherData) => {
    const teacherCardHTML = `
            <div class="teacher-card" id="${teacherData.id}">
                <div class="teacher-header">
                    <h2 class="teacher-name">${teacherData.name}</h2>
                    <span class="teacher-level">${teacherData.level}</span>
                </div>
                <div class="teacher-details">
                    <p><strong>Subjects:</strong> ${teacherData.subjects.join(
                      ", "
                    )}</p>
                    <p><strong>Assigned Classes:</strong> ${teacherData.assignedClasses.join(
                      ", "
                    )}</p>
                    <p><strong>Arrival Time:</strong> ${
                      teacherData.arrivalTime
                    }</p>
                    <p><strong>Departure Time:</strong> ${
                      teacherData.departureTime
                    }</p>
                    <p><strong>Contact:</strong> ${teacherData.contact}</p>
                    <p><strong>Email:</strong> ${teacherData.email}</p>
                    <p><strong>Experience:</strong> ${
                      teacherData.experience
                    }</p>
                    <p><strong>Qualification:</strong> ${
                      teacherData.qualification
                    }</p>
                </div>
                <div class="teacher-actions">
                    <button class="update-btn" data-teacher-id="${
                      teacherData.id
                    }">Update Info</button>
                    <button class="mark-absent-btn" data-teacher-id="${
                      teacherData.id
                    }">Mark absent</button>
                    <button class="view-btn" data-teacher-id="${
                      teacherData.id
                    }">View Schedule</button>
                </div>
            </div>
        `;
    teachersList.innerHTML += teacherCardHTML;
  });
  const addSubjectBtn = document.getElementById("add-subject-btn");
  const subjectInput = document.getElementById("specialty-subject-input");
  const specialtySubjectsList = document.getElementById(
    "specialty-subjects-list"
  );

  addSubjectBtn.addEventListener("click", () => {
    const subjectText = subjectInput.value.trim();
    if (subjectText) {
      const subjectTag = document.createElement("span");
      subjectTag.classList.add("subject-tag");
      subjectTag.textContent = subjectText;
      specialtySubjectsList.appendChild(subjectTag);
      subjectInput.value = "";
    }
  });

  // Handle clicks on teacher cards using event delegation
  teachersList.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const teacherID = button.dataset.teacherId;
    if (!teacherID) return;

    if (button.classList.contains("mark-absent-btn")) {
      markAbsent(teacherID);
    } else if (button.classList.contains("update-btn")) {
      // Functionality for updating info
    } else if (button.classList.contains("view-btn")) {
      // Functionality for viewing schedule
    }
  });

  // Populate class and level dropdowns
  setupSelectOptions("teacher-assigned-class", classList);
  setupSelectOptions("teacher-level", level);

  const teacherForm = document.querySelector(".teacher-form");
  teacherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(teacherForm);

    // Get selected classes
    const select = document.getElementById("teacher-assigned-class");
    const selectedClasses = Array.from(select.selectedOptions).map(
      (option) => option.value
    );

    // Collect all form data
    const data = {
      id: demoIDGenerator(),
      teacherName: formData.get("teacherName"),
      gender: formData.get("gender"),
      experience: formData.get("experience"),
      dob: formData.get("dob"),
      level: document.getElementById("teacher-level").value,
      contact: formData.get("contact"),
      email: formData.get("email"),
      arrivalTime: formData.get("arrival"),
      departureTime: formData.get("departure"),
      assignedClasses: selectedClasses,
    };
    console.log(data);
    const newCard = `
        <div class="teacher-card" id="${data.id}">
                <div class="teacher-header">
                    <h2 class="teacher-name">${data.name}</h2>
                    <span class="teacher-level">${data.level}</span>
                </div>
                <div class="teacher-details">
                    <p><strong>Subjects:</strong> ${data.subjects.join(
                      ", "
                    )}</p>
                    <p><strong>Assigned Classes:</strong> ${data.assignedClasses.join(
                      ", "
                    )}</p>
                    <p><strong>Arrival Time:</strong> ${data.arrivalTime}</p>
                    <p><strong>Departure Time:</strong> ${
                      data.departureTime
                    }</p>
                    <p><strong>Contact:</strong> ${data.contact}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Experience:</strong> ${data.experience}</p>
                    <p><strong>Qualification:</strong> ${data.qualification}</p>
                </div>
                <div class="teacher-actions">
                    <button class="update-btn" data-teacher-id="${
                      data.id
                    }">Update Info</button>
                    <button class="mark-absent-btn" data-teacher-id="${
                      data.id
                    }">Mark absent</button>
                    <button class="view-btn" data-teacher-id="${
                      data.id
                    }">View Schedule</button>
                </div>
            </div>
        `;
    teachersList.innerHTML += newCard;
  });
});

function demoIDGenerator() {
  return `TCH2025SEC${Math.floor(Math.random() * 1000)}`;
}
