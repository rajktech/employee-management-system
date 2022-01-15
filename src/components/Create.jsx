import {useState} from 'react';

const CreateComp = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');

    const clickHandler = () => {
        fetch('https://609a5ad40f5a13001721aac8.mockapi.io/employee_db/', {
			method: 'POST',
			body: JSON.stringify({
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
                    alert("added successfully" + json.id);
                }
			});
    };

    return(
        <div>
            {gender}
            <h1>Create New Employee</h1>
            <hr />
            <div>
                <label>
                    First Name
                </label>
                <input type="text" onChange={(e) => setFname(e.target.value)} />
            </div>
            <div>
                <label>
                    Last Name
                </label>
                <input type="text" onChange={(e) => setLname(e.target.value)} />
            </div>
            <div>
                <label>
                    Email
                </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>
                    Date of Birth
                </label>
                <input type="date" onChange={(e) => setDob(e.target.value)} />
            </div>
            <div>
                <label>
                    Gender
                </label>
                Male
                <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} />
                Female
                <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} />
            </div>
            <div>
                <input type="button" value="Create" onClick={clickHandler} />
            </div>
        </div>
    );
}

export default CreateComp;