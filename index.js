import connect from './connection.js';
import Course from './course.model.js';
import Author from './author.model.js';

import 'dotenv/config';
connect();

const createCourse = async (name, authorId) => {
  if (authorId) {
    const course = await Course.create({ name, author: authorId });
  } else {
    const course = await Course.create({ name });
  }
};

const createAuthor = async name => {
  const author = await Author.create({ name });
  console.log(author);
};

const listCourses = async () => {
  const courses = await Course.find();
  console.log(courses);
};

const listOneCourse = async (id, isPopulate) => {
  let course = null;
  if (isPopulate) {
    course = await Course.findById(id).populate('author');
  } else {
    course = await Course.findById(id);
  }
  console.log('A course = ', course);
};
const listAuthors = async () => {
  const authors = await Author.find();
  console.log(authors);
};

// createAuthor('Author1');

// createCourse('Native JS', '65a64e130f0a91c29e3453da');

// listCourses();

// listOneCourse('65a64f4b911cc865c8c1a090');
listOneCourse('65a64ee1ea1a49fd4e92c35b', true);
// listAuthors();
