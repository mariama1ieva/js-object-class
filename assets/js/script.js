"use strict"

let student1 = {
    id: 1,
    name: "Meryem",
    fullName: "Meryem Aliyeva",
    age: 23
};
let student2 = {
    id: 2,
    name: "Tofiq",
    fullName: "Tofiq Nasibli",
    age: 19
};
let student3 = {
    id: 3,
    name: "Haci",
    fullName: "Haci Ahmedov",
    age: 28
};
let student4 = {
    id: 4,
    name: "Metanet",
    fullName: "Metanet Abbasov",
    age: 21
};

let group = {
    name: "p418",
    capacity: 4,
    students: [],
    addStudent: function (stu) {
        if (stu == undefined) {
            alert("Input can't be empty");
            return;
        }
        if (this.students.length >= this.capacity) {
            alert("Group already filled");
            return;
        }
        this.students.push(stu);
    },
    getAllStudents: function () {
        return this.students;
    },
    getStudentById: function (id) {
        let findStudent = this.students.find((stu) => stu.id === id);
        if (findStudent) {
            return findStudent;
        } else {
            return ("Student with was Not Found");
        }
    },
    updateStudent: function (id, updated) {
      let i = this.students.findIndex((stu) => stu.id == id);
      if (i > 0) {
        let current = this.stu[i];
        this.stu[i] = updated;
      } else {
        return "Student was not found";
      }
      for (let i = 0; i < updated.length; i++) {
        if (updated[i] == current[i]) {
          this.students[i] = { current, updated };
        }
      }
    },
    searchStudent: function (searchName) {
        return this.students.filter(student => student.fullName.toLowerCase().includes(searchName.toLowerCase()));
    },
    deleteStudent: function (id) {
        const index = this.students.findIndex(stu => stu.id === id);
        if (index >= 0) {
            this.students.splice(index,1);
            console.log("Student is removed");
        }
        else {
            console.log("Was not found");
        }
    }
}

group.addStudent(student1);
group.addStudent(student2);
group.addStudent(student3);
console.log(group.getAllStudents());
  group.updateStudent(2, {
    id: 2,
    fullName: "Ilham Abasli",
    age: 20,
  });
  console.log(updateStudent(2));
//   console.log(group.searchStudent("h"));
//   console.log(group.getStudentById(1));
// console.log(group.deleteStudent(1));