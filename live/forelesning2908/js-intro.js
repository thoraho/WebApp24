let studentName = "Thor"

const thor = {
    name: studentName,
    birthYear: 1990,
    isNew: false,
    role: 'student'
}

const students = [
    thor, {
        name: "Trude",
        birthYear: 1991,
        isNew: true,
        role: 'admin',

    },
    {
        name: 'Ali',
        birthYear: 1989,
        isNew: false,
        role: 'superadmin'
    },
    {
        name: 'Simone',
        birthYear: 2001,
        isNew: true,
        role: 'student'
    }
]


const getStudentAboveBirthYear = (students = [], birthYear) => {
    return students.filter(student => student.birthYear > birthYear)
}


const studentsAbove = getStudentAboveBirthYear(undefined, 1989)


const transformStudents = students => 
    students.map(student => ({
    ...student,
    age: new Date().getFullYear() - student.birthYear
}))

const studentsWithAge = transformStudents(students)

const findStudent = (students, name) => {
    return students.find(student => student.name.toLowerCase() === name.toLowerCase())
}

const roles = [
    'admin',
    'superadmin',
]

const hasAccess = (roles, students) => {
    return students.filter(student => {
        return roles.includes(student.role)
    })
}

const adminRoles = hasAccess(['admin'], students)
const studentRoles = hasAccess(['student'], students)
const adminOrSuperAdmins = hasAccess(['admin', 'superadmin'], students)

const omitName = (students) => {
    return students.map(student => {
        const {name, ...rest} = student
        return rest
    })
}

const omitNameSimple = students => students.map(({name, ...rest}) => rest)

const studentNameOmitted = omitName(students)

const studentCopy = [...students]
studentCopy[1].name = 'Name Changed'
students
studentCopy

const thorCopy = {...thor}
thorCopy.name = 'Thor Changes'
thorCopy
thor

const hiofLocation = {
    name: 'HIOF',
    street: 'Haldenveien 1',
    postal: '1520',
    contact: {
      email: 'halden@email.no'
    }
  }

  const hiofLocationCopy = {...hiofLocation}
 

  const hiofLocationDeepCopy = structuredClone(hiofLocation)
  hiofLocationDeepCopy.contact.email = 'demo'

  const studentWithHiofData = {
    ...thor,
    location: hiofLocation
  }

