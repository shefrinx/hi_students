// Add student
async function addStudent() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const department = document.getElementById("department").value;

  if (!name || !age || !department) {
    alert("Please fill all fields!");
    return;
  }

  const response = await fetch("/students", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      name: name,
      age: age,
      department: department,
    }),
  });

  const data = await response.json();

  alert(data.message);

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("department").value = "";

  loadStudents();
}

// Get all students
async function loadStudents() {
  const response = await fetch("/students");

  const students = await response.json();

  const studentList = document.getElementById("studentList");

  studentList.innerHTML = "";

  if (students.length === 0) {
    studentList.innerHTML = "<p>No students found.</p>";
    return;
  }

  students.forEach((student) => {
    const studentDiv = document.createElement("div");

    studentDiv.className = "student";

    studentDiv.innerHTML = `
      <div class="student-info">

        <strong>${student.name}</strong>
        <br>

        Age: ${student.age}
        <br>

        Department: ${student.department}

      </div>

      <div class="student-buttons">

        <button
          class="edit-btn"
          onclick="showEditForm('${student._id}')">
          Edit
        </button>

        <button
          class="delete-btn"
          onclick="deleteStudent('${student._id}')">
          Delete
        </button>

      </div>

      <div
        id="edit-${student._id}"
        class="edit-form"
        style="display: none;">

        <input
          type="text"
          id="edit-name-${student._id}"
          value="${student.name}"
          placeholder="Name">

        <input
          type="number"
          id="edit-age-${student._id}"
          value="${student.age}"
          placeholder="Age">

        <input
          type="text"
          id="edit-department-${student._id}"
          value="${student.department}"
          placeholder="Department">

        <button
          onclick="updateStudent('${student._id}')">
          Save Changes
        </button>

        <button
          onclick="hideEditForm('${student._id}')">
          Cancel
        </button>

      </div>
    `;

    studentList.appendChild(studentDiv);
  });
}

// Show edit form
function showEditForm(id) {
  document.getElementById(`edit-${id}`).style.display = "block";
}

// Hide edit form
function hideEditForm(id) {
  document.getElementById(`edit-${id}`).style.display = "none";
}

// Update student
async function updateStudent(id) {
  const name = document.getElementById(`edit-name-${id}`).value;
  const age = document.getElementById(`edit-age-${id}`).value;
  const department = document.getElementById(`edit-department-${id}`).value;

  if (!name || !age || !department) {
    alert("Please fill all fields!");
    return;
  }

  const response = await fetch(`/students/${id}`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      name: name,
      age: age,
      department: department,
    }),
  });

  const data = await response.json();

  alert(data.message);

  loadStudents();
}

// Delete student
async function deleteStudent(id) {
  const response = await fetch(`/students/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  alert(data.message);

  loadStudents();
}

// Load students when page opens
loadStudents();
