import connect from './connection.js';
import Course from './course.model.js';
import Author from './author.model.js';

connect();

const createCourse = async name => {
  const course = await Course.create({ name });
  console.log(course);
};
const createAuthor = async name => {
  const author = await Author.create({ name });
  console.log(author);
};

const listCourses = async () => {
  const courses = await Course.find();
  console.log(courses);
};
const listAuthors = async () => {
  const authors = await Author.find();
  console.log(authors);
};

createCourse('JS');
