const Validation = (users) => {
    let error = {};
    const email_pat = /^[^\s@/]+@[^\s@]+\.[^\s@]+$/;
    const pass_pat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    if (users.Name === "") {
      error.Name = "do not empty name filed";
    }
  
    if (users.Email === "") {
      error.Email = "do not empty email";
    }
    if (!email_pat.test(users.Email)) {
      error.Email = "plz valid email";
    }
    if (users.Password === "") {
      error.Password = "do not empty email";
    }
    if (!pass_pat.test(users.Password)) {
      error.Password = "plz valid pass";
   
    }
    return error;
  };
  export default Validation;

