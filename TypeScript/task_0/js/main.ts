interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 21,
    location: "Paris"
  };
  
  const student2: Student = {
    firstName: "Bob",
    lastName: "Smith",
    age: 23,
    location: "Lyon"
  };
  
  const studentsList: Student[] = [student1, student2];
  
  // Create table
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  
  const headerFirstName = document.createElement("th");
  headerFirstName.textContent = "First Name";
  const headerLocation = document.createElement("th");
  headerLocation.textContent = "Location";
  
  headerRow.appendChild(headerFirstName);
  headerRow.appendChild(headerLocation);
  table.appendChild(headerRow);
  
  // Add rows
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
  
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
  
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });
  
  document.body.appendChild(table);
  