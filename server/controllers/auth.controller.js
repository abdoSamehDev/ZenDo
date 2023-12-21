import passport from "passport";

export const localLogin = passport.authenticate("local-login", {
  successRedirect: "/",
  failureRedirect: "/failure",
  failureFlash: true,
});

export const localRegister = passport.authenticate("local-register", {
  successRedirect: "/",
  failureRedirect: "/failure",
  failureFlash: true,
});

export function logout(req, res) {
  req.logout((err) => {
    if (err) {
      return res.status(500).send("Error logging out");
    }
    res.redirect("/");
  });
}
