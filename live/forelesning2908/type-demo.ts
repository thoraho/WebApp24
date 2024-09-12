type ID = string;

const id : ID = '2';

type HabitObject = {
    id: ID;
    title: string;
    createdAt?: string | Date; // ? betyr at feltet er optional
};

const object: HabitObject = {
    id : '1',
    title: 'Test',
    createdAt: new Date()
}

type HabitArray = HabitObject[];

const habitArray: HabitArray = [object];

type HabitTitle = Pick<HabitObject, 'title'>;

type CreateHabitDTO = Omit<HabitObject, 'id'>;

const createHabit = (data: CreateHabitDTO) => {
    return data
}

createHabit({title: "Test"});

type FancyID = `${string}-${string}-${string}`;

const fancyId: FancyID = 'Test-ny-streng';

type StudentMeta = {name: string; birthYear: number};
type StudentRecord = Record<FancyID, StudentMeta>;
type Student = string | StudentRecord;

const getStudent = async (
    students: Student[], 
    id: FancyID 
  ): Promise<StudentRecord | undefined | never> => {
    if (students.every((s) => typeof s === "string")) // every() sjekker om alle elementene i arrayen er av typen string
      throw new Error("Can not locate user when all are strings"); // throw() kaster en feil
    return students
      .filter((student) => typeof student !== "string")
      .find((student) => student[id]);
  };

  const students: Student[] = [
    'Thor',
     {'a-b-c': {name: 'Thor', birthYear: 1990}}];

getStudent(students, 'a-b-c').then((data) => console.log(data)); // Skriver ut {name: 'Thor', birthYear: 1990}

console.log('Hey!')

