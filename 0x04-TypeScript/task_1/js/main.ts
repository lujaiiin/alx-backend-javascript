interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

const teacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'New York',
  contract: false,
};

console.log(teacher);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  yearsOfExperience: 10,
  location: 'London',
  numberOfReports: 10,
};

console.log(director);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return `${firstInitial}. ${formattedLastName}`;
};

console.log(printTeacher('John', 'Doe'));

interface Student {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}



class StudentClass implements Student {
  constructor(public firstName: string, public lastName: string) {}
  
  workOnHomework(): string {
    return 'Currently working';
  }
  
  displayName(): string {
    return this.firstName;
  }
}

const student: StudentClassInterface = StudentClass;
const studentInstance = new student('John', 'Doe');
console.log(studentInstance.workOnHomework());
console.log(studentInstance.displayName());
