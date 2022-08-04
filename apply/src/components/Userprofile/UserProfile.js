import React from 'react'
import { Context } from '../../context/Context'
import { useContext, useState } from 'react'
import axios from 'axios';
function UserProfile() {
    const { user, dispatch } = useContext(Context);
    const [file, setFile] = useState(null);

    const PF = "http://localhost:5000/images/"

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updatedUser = {
            userId: user._id,

        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            const res = await axios.put("/users/" + user._id, updatedUser);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
    };

    return (
        <div>
            <section className="bg-light">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-lg-12 mb-4 mb-sm-5 mb-3">
                            <div className="card card-style1 border-0 mb-3">
                                <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7 ">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 mb-4 mb-lg-0">

                                            <form className="settingsForm" onSubmit={handleSubmit}>
                                                <div className="settingsPP">
                                                    <img
                                                        src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                                                        alt=""
                                                        width={600}
                                                        height={600}
                                                    />
                                                    <label htmlFor="fileInput">
                                                        <i className="settingsPPIcon far fa-user-circle"></i>
                                                    </label>
                                                    <input
                                                        type="file"
                                                        id="fileInput"
                                                        style={{ display: "none" }}

                                                        onChange={(e) => setFile(e.target.files[0])}

                                                    />

                                                </div>
                                                <button className="settingsSubmit" type="submit">
                                                    Upload
                                                </button>

                                            </form>

                                        </div>
                                        <div className="col-lg-6 px-xl-10">
                                            <div className="bg-light d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                                                <h3 className="h2  mb-0">{user.username}</h3>
                                                <span>Student</span>
                                            </div>
                                            <div className='my-3'>
                                                <ul className="list-unstyled mb-1-9">
                                                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Email:</span> {user.email}</li>
                                                    <li className="display-28"><span className="display-26 text-secondary me-2 font-weight-600">Phone:</span>{user.phone}</li>
                                                </ul>
                                            </div>
                                            <ul className="social-icon-style1 list-unstyled mb-0 ps-0">
                                                <li><a href="#!"><i className="ti-twitter-alt"></i></a></li>
                                                <li><a href="#!"><i className="ti-facebook"></i></a></li>
                                                <li><a href="#!"><i className="ti-pinterest"></i></a></li>
                                                <li><a href="#!"><i className="ti-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 mb-4 mb-sm-5 mt-3 mb-3">
                            <div className="card mb-3">
                                <div className="card-header">
                                    About

                                </div>
                                <div className='container'>
                                    <p>I am currently a 6th semester student doing CS from FAST-NU LAHORE</p>
                                    <p class="mb-0">GPA:3.1 </p>
                                </div>
                                <div className=' ms-3 mt-3 mb-3'>


                                </div>

                            </div>

                        </div>

                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-12 mb-4 mb-sm-5">
                                    <div>
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Feedback
                                        </button>

                                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Feedback Form</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label">Username</label>
                                                            <input type="text" className="form-control" id="exampleFormControlInput1" />
                                                        </div>

                                                        <div className="mb-3">
                                                            <label for="exampleFormControlTextarea1" className="form-label">Feedback</label>
                                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer col-12 d-flex justify-content-center ">
                                                        <button type="button" className="btn btn-primary " data-bs-dismiss="modal">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserProfile
