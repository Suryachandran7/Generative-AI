import { useState } from "react";

function Login() {

    const [pwd1, setPwd1] = useState();
    const [pwd2, setPwd2] = useState();
    const [match, setMatch] = useState(true);

    function handlepwd1Change(event) {
        setPwd1(event.target.value);
        console.log(pwd1);  
    }

    function handlepwd2Change(event) {
        setPwd2(event.target.value);
        if(pwd1 == event.target.value){
            console.log("Password Matched");
            setMatch(true);
        }
        else{
            console.log("Password Not Matched");
            setMatch(false);
        }

    }
    return (
        <form style={{width:"50%", margin:"auto", marginTop:"50px"}}>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" placeholder="Password" value={pwd1} onChange={handlepwd1Change}/>
  </div>
  <div className="form-group">
     <label>Re-enter Password</label>
     <input type="password" className="form-control" placeholder="Password" value={pwd2} onChange={handlepwd2Change}/>
  </div>
  {!match && <p>Passwords do not match</p>}
  <div className="form-check">
    <input type="checkbox" className="form-check-input"/>
    <label className="form-check-label" for="exampleCheck1">I agree</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    );
}
export default Login;