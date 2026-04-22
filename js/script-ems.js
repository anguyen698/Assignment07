// CREATE AN ARRAY OF EMPLOYEES
let employees = [
  {
    id: 101,
    name: "Phineas Flynn",
    extension: 1234,
    email: "phineas.flynn@outlook.com",
    department: "Engineering",
  },
  {
    id: 102,
    name: "Ferb Fletcher",
    extension: 2345,
    email: "ferb.fletcher@outlook.com",
    department: "Research & Development",
  },
  {
    id: 103,
    name: "Candace Flynn",
    extension: 3456,
    email: "candace.flynn@outlook.com",
    department: "Compliance",
  },
  {
    id: 104,
    name: "Jeremy Johnson",
    extension: 4567,
    email: "jeremy.johnson@outlook.com",
    department: "Marketing",
  },
  {
    id: 105,
    name: "Isabella Garcia-Shapiro",
    extension: 5678,
    email: "isabella.garcia@outlook.com",
    department: "Community Outreach",
  },
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY

// GET DOM ELEMENTS

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS

// ADD EMPLOYEE
form.addEventListener("submit", (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();

  // GET THE VALUES FROM THE TEXT BOXES
  const id = document.querySelector("#id");
  const name = document.querySelector("#name");
  const extension = document.querySelector("#extension");
  const email = document.querySelector("#email");
  const department = document.querySelector("#department");

  // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
  let employeesNew = new Array();
  employeesNew.push({
    id: id,
    name: name,
    extension: extension,
    email: email,
    department: department,
  });

  // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
  employees.push(...employeesNew);

  // BUILD THE GRID
  // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
  let tr = table.insertRow();

  // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
  // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
  let tdId = tr.insertCell();
  tdId.appendChild(document.createTextNode(id.value));

  let tdName = tr.insertCell();
  tdName.appendChild(document.createTextNode(name.value));

  let tdExtension = tr.insertCell();
  tdExtension.appendChild(document.createTextNode(extension.value));

  let tdEmail = tr.insertCell();
  tdEmail.appendChild(document.createTextNode(email.value));

  let tdDepartment = tr.insertCell();
  tdDepartment.appendChild(document.createTextNode(department.value));

  // CREATE THE DELETE BUTTON
  let deleteButton = createDeleteButton();
  tdDepartment.appendChild(deleteButton);

  // RESET THE FORM
  form.reset();

  // SET FOCUS BACK TO THE ID TEXT BOX
  id.focus();
});

// DELETE EMPLOYEE
empTable.addEventListener("click", (e) => {
  // CONFIRM THE DELETE
  // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
  // REMOVE EMPLOYEE FROM ARRAY
  // BUILD THE GRID
  empTable.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("delete-btn")) {
      if (confirm("Are you sure you want to delete this employee?")) {
        let row = e.target.closest("tr");
        let rowIndex = row.rowIndex - 1;
        employees.splice(rowIndex, 1);
        empTable.deleteRow(row.rowIndex);
      }
    }
  });
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
  // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
  // REBUILD THE TBODY FROM SCRATCH
  // LOOP THROUGH THE ARRAY OF EMPLOYEES
  // REBUILDING THE ROW STRUCTURE
  // BIND THE TBODY TO THE EMPLOYEE TABLE
  // UPDATE EMPLOYEE COUNT
  // STORE THE ARRAY IN STORAGE

  let empTable = document.getElementById("empTable");
  let oldTbody = empTable.querySelector("tbody");

  // Remove existing tbody if it exists
  if (oldTbody) {
    empTable.removeChild(oldTbody);
  }

  // Create a new tbody element
  let newTbody = document.createElement("tbody");

  // Loop through the employees array
  employees.forEach((employee) => {
    // Create a new row
    let tr = document.createElement("tr");

    // Add each cell for employee properties
    let tdId = document.createElement("td");
    tdId.textContent = employee.id;
    tr.appendChild(tdId);

    let tdName = document.createElement("td");
    tdName.textContent = employee.name;
    tr.appendChild(tdName);

    let tdExtension = document.createElement("td");
    tdExtension.textContent = employee.extension;
    tr.appendChild(tdExtension);

    let tdEmail = document.createElement("td");
    tdEmail.textContent = employee.email;
    tr.appendChild(tdEmail);

    let tdDepartment = document.createElement("td");
    tdDepartment.textContent = employee.department;
    tr.appendChild(tdDepartment);

    // Add delete button
    let tdDelete = document.createElement("td");
    let deleteButton = createDeleteButton();
    tdDelete.appendChild(deleteButton);
    tr.appendChild(tdDelete);

    // Append row to the new tbody
    newTbody.appendChild(tr);
  });

  // Bind the new tbody to the table
  empTable.appendChild(newTbody);

  // Update employee count
  document.getElementById("empCount").textContent = `(${employees.length})`;

  // Store updated employees array in local storage
  localStorage.setItem("employees", JSON.stringify(employees));
}
