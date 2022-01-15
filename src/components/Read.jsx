import {useState} from 'react';

const ReadComp = () => {
    const [empId, setEmpId] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [loading, setLoading] = useState(false);

    const clickHandler = async () => {
        setLoading(true);
        await fetch('https://609a5ad40f5a13001721aac8.mockapi.io/employee_db/')
        .then((res) => res.json())
        .then((res) => {
            let filteredArray = res.filter((item) => item.id == empId);
            if (filteredArray.length) {
                const {fname, lname, email, dob, gender} = filteredArray[0];
                setFname(fname);
                setLname(lname);
                setEmail(email);
                setDob(dob);
                setGender(gender);
            } else {
                setFname('');
                setLname('');
                setEmail('');
                setDob('');
                setGender('');
            }
            //setLoading(false);
        })
        .catch((err) => {
            console.log(err);
        })
    };

    return(
        <div>
            <h5>Read Existing Employee</h5>
            <hr />
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-3 col-form-label">Employee ID</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" onChange={(e) => setEmpId(e.target.value)}  />
                </div>
            </div>
            <div className="text-right">
                <button type="button" class="btn btn-primary" onClick={clickHandler}>Read</button>
            </div>

            <hr style={{border: '#000 solid 1px'}} />
            {loading ? <img src="../assets/Iphone-spinner-2.gif" /> : (
            <>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-3 col-form-label">First Name</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" defaultValue={fname}  />
                    </div>
                </div>

                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-3 col-form-label">Last Name</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" defaultValue={lname}  />
                    </div>
                </div>

                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-3 col-form-label">Email</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" defaultValue={email}  />
                    </div>
                </div>

                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-3 col-form-label">Date of Birth</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" defaultValue={dob}  />
                    </div>
                </div>

                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-3 col-form-label">Gender</label>
                    <div class="col-sm-9">
                        Male
                        <input type="radio" name="gender" value="male" checked={gender === 'male' && true} className=" ml-1 mr-4" />
                        Female
                        <input type="radio" name="gender" value="female" checked={gender === 'female' && true} className=" ml-1" />
                    </div>
                </div>
            </>
            )}
        </div>
    );
}

export default ReadComp;