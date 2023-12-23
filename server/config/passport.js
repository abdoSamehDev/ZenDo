import localLogin from "../passport/local_login.js";
import localRegister from "../passport/local_register.js";
import googleLogin from "../passport/google.js";
import User from "../models/User.js";
import session from "express-session";
import PgSession from "connect-pg-simple";

const PgStore = PgSession(session);
const store = new PgStore({
  //DB connection details
  conObject: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  },
});

function initialize(passport) {
  console.log("INITIALIZED!!!");

  passport.use("local-login", localLogin);
  passport.use("local-register", localRegister);
  passport.use("google", googleLogin);

  passport.serializeUser((user, done) => {
    console.log("s", typeof user.id);
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    console.log("ds ID: ", id);
    try {
      const user = await User.getUserById(id);
      console.log("ds", user);
      done(null, user);
    } catch (error) {
      console.log("ERROR DeSerizlizeUser: " + error.message);
      done(error);
    }
  });
}

export default initialize;
export { store };

// export default {
//   initialize: (app) => {
//     app.use(
//       session({
//         secret: process.env.SESSION_SECRET,
//         resave: false,
//         saveUninitialized: false,
//         store: store,
//         cookie: {
//           maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
//         },
//       })
//     );
//     app.use(passport.initialize());
//     app.use(passport.session());
//   },
// };
