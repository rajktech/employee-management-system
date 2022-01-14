import {useState} from 'react';

const ReadComp = () => {
    const [empId, setEmpId] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');

    const clickHandler = () => {
        fetch('https://609a5ad40f5a13001721aac8.mockapi.io/employee_db/')
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
        })
        .catch((err) => {
            console.log(err);
        })
    };

    return(
        <div>
            {gender}
            <h1>Read Existing Employee</h1>
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
                <input type="text" defaultValue={fname} />
            </div>
            <div>
                <label>
                    Last Name
                </label>
                <input type="text" defaultValue={lname} />
            </div>
            <div>
                <label>
                    Email
                </label>
                <input type="text" defaultValue={email} />
            </div>
            <div>
                <label>
                    Date of Birth
                </label>
                <input type="date" defaultValue={dob} />
            </div>
            <div>
                <label>
                    Gender
                </label>
                Male
                <input type="radio" name="gender" value="male" checked={gender === 'male' && 'true'} />
                Female
                <input type="radio" name="gender" value="female" checked={gender === 'female' && 'true'} />
            </div>
            
        </div>
    );
}

export default ReadComp;