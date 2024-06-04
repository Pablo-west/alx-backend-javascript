import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Attaches routes to correct handler in the
 * Creating the routes
 * @param {Express} app Express Applications
 * @author Pablo West
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
