import {useState} from 'react';

const UpdateComp = () => {
    const [empId, setEmpId] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');

    const clickHandler = () => {
        fetch('https://609a5ad40f5a13001721aac8.mockapi.io/employee_db/' + empId)
        .then((res) => res.json())
        .then((res) => {
            if (res !== "Not found") {
                const {fname, lname, email, dob, gender} = res;
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
        })
        .catch((err) => {
            console.log(err);
        })
    };

    const updateHandler = () => {
        fetch('https://609a5ad40f5a13001721aac8.mockapi.io/employee_db/' + empId, {
			method: 'PUT',
			body: JSON.stringify({
                id: empId,
				fname,
                lname,
                email,
                dob,
                gender
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
				return response.json()
			}).then(json => {
				if (json) {
                    alert("updated successfully" + json.id);
                }
			});
    };

    return(
        <div>
            <h1>Update Existing Employee</h1>
            <hr />
            <div>
                <label>
                    Employee ID
                </label>
                <input type="text" onChange={(e) => setEmpId(e.target.value)} />
            </div>
            <div>
                <input type="button" value="Read" onClick={clickHandler} />
            </div>
            <hr />
            <div>
                <label>
                    First Name
                </label>
                <input type="text" defaultValue={fname} onChange={(e) => setFname(e.target.value)} />
            </div>
            <div>
                <label>
                    Last Name
                </label>
                <input type="text" defaultValue={lname} onChange={(e) => setLname(e.target.value)} />
            </div>
            <div>
                <label>
                    Email
                </label>
                <input type="text" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>
                    Date of Birth
                </label>
                <input type="date" defaultValue={dob} onChange={(e) => setDob(e.target.value)} />
            </div>
            <div>
                <label>
                    Gender
                </label>
                Male
                <input type="radio" name="gender" value="male" checked={gender === 'male' && true} onChange={(e) => setGender(e.target.value)} />
                Female
                <input type="radio" name="gender" value="female" checked={gender === 'female' && true} onChange={(e) => setGender(e.target.value)} />
            </div>
            <div>
                <input type="button" value="Update" onClick={updateHandler} />
            </div>
            
        </div>
    );
}

export default UpdateComp;