








// Step 1: Create Enum for Course Categories
export enum CourseCategory {
    DEVELOPMENT = "Development",
    DESIGN = "Design",
    MARKETING = "Marketing",
    BUSINESS = "Business"
}
// Step 2: Define Interfaces for Course, Instructor, and Student    
export interface Course {
    id: number;
    title: string;
    category: CourseCategory;
    instructorId: number;
    studentIds: number[];
}
export interface Instructor {
    id: number;
    name: string;
    expertise: CourseCategory[];
}
export interface Student {
    id: number;
    name: string;
    enrolledCourses: number[];
}
//Step 3: Create Maps to store data
//Map will help us in storing key value pairs where key will be id and value will be object of respective type
export const courses: Map<number, Course> = new Map();
export const instructors: Map<number, Instructor> = new Map();
export const students: Map<number, Student> = new Map();
// Step 4: Implement Decorator for logging actions where we will log method name and its arguments  
export function LogAction(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Action: ${propertyKey} called with arguments: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    }
    return descriptor;
}   
// The above code sets up the foundational structures for the Online Course Management System mini app using TypeScript.
// LogAction decorator is defined to log method calls and their arguments.
// Further implementation would involve creating classes or functions to manage courses, instructors, and students,
// utilizing the defined interfaces, enums, and data structures.
// Step 5: Further implementation can be done by creating classes or functions to manage courses, instructors, and students
// utilizing the defined interfaces, enums, and data structures.
//Step 5: Example class to manage Courses with Decorator applied
export class CourseManager {
    private courseIdCounter: number = 1;    
    @LogAction // Applying Decorator to log method calls
    public createCourse(title: string, category: CourseCategory, instructorId: number): Course {
        const newCourse: Course = {
            id: this.courseIdCounter++,
            title,
            category,
            instructorId,
            studentIds: []
        };
        courses.set(newCourse.id, newCourse);
        return newCourse;
    }
       @LogAction
    public enrollStudent(courseId: number, studentId: number): void {
        const course = courses.get(courseId);
        const student = students.get(studentId);
        if (course && student) {
            course.studentIds.push(studentId);
            student.enrolledCourses.push(courseId);
        } else {
            console.log("Course or Student not found!");
        }
    }
       @LogAction
    public enrollStudent(courseId: number, studentId: number): void {
        const course = courses.get(courseId);
        const student = students.get(studentId);
        if (course && student) {
            course.studentIds.push(studentId);
            student.enrolledCourses.push(courseId);
        } else {
            console.log("Course or Student not found!");
        }
    }
    //Step 6: Implementing Iterator to loop through courses
    public *courseIterator(): IterableIterator<Course> { 
        //generator function to iterate through courses where * indicates generator function and IterableIterator is the return type
        for (const course of courses.values()) {
            yield course;
        }
    }
    //Step 7: Further methods to manage instructors and students can be added similarly with appropriate decorators and logic
    public *instructorIterator(): IterableIterator<Instructor> {
        //generator function to iterate through instructors
        for (const instructor of instructors.values()) {
            yield instructor;
        }
    }
 public *studentIterator(): IterableIterator<Student> {
        //generator function to iterate through students
        for (const student of students.values()) {
            yield student;
        }
    }
    //Step 8: Additional methods to add instructors and students with logging
    @LogAction
    public addInstructor(name: string, expertise: CourseCategory[]): Instructor {
        const newInstructor: Instructor = {
            id: instructors.size + 1,
            name,
            expertise
        };
        instructors.set(newInstructor.id, newInstructor);
        return newInstructor;
    }































