import React, { useState } from 'react';
import axios from 'axios';


export default function ProfileSettings() {
	const [formData, setFormData] = useState('');
  const [info, setInfo] = useState({
    image: '',
    name: '',
  });
  const [progressPercent, setProgressPercent] = useState(0);
  const [error, setError] = useState({
    found: false,
    message: '',
  });
  /** end states */

  // Upload image
  const upload = ({ target: { files } }) => {
    let data = new FormData();
    data.append('categoryImage', files[0]);
    data.append('name', files[0].name);
    setFormData(data);
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo({
      image: '',
      name: '',
    });
    setProgressPercent(0);
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);
        setProgressPercent(percent);
      },
    };
    axios
      .post('http://localhost:5000/api/edit_profile', formData, options)
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          setInfo(res.data.category);
          setProgressPercent(0);
        }, 1000);
      })
      .catch((err) => {
        console.log(err.response);
        setError({
          found: true,
          message: err.response.data.errors,
        });
        setTimeout(() => {
          setError({
            found: false,
            message: '',
          });
          setProgressPercent(0);
        }, 3000);
      });
  }
  return (
      <div className="container">
		<div className="row">
		<div
      style={{ width: '100vw', height: '100vh' }}
      className='d-flex justify-content-center align-items-center flex-column'
    >
      {error.found && (
        <div
          className='alert alert-danger'
          role='alert'
          style={{ width: '359px' }}
        >
          {error.message}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ width: '359px' }}>
        <div className='progress mb-3 w-100'>
          <div
            className='progress-bar'
            role='progressbar'
            style={{ width: `${progressPercent}%` }}
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {progressPercent}
          </div>
        </div>
        <div className='custom-file mb-3'>
          <input
            type='file'
            className='custom-file-input'
            id='inputGroupFile04'
            aria-describedby='inputGroupFileAddon04'
            onChange={upload}
          />
          <label className='custom-file-label' htmlFor='inputGroupFile04'>
            Choose file
          </label>
        </div>
        <button type='submit' className='btn btn-primary w-100'>
          Submit
        </button>
      </form>
      <img
        className='mt-3'
        src={`http://localhost:8000/${info.image}`}
        alt={`${info.name}`}
        style={{ width: '359px' }}
      />
    </div>
		</div>
        <div className="row">
		<div className="col-12">
			{/* <!-- Page title --> */}
			<div className="my-5">
				<h3>My Profile</h3>
				<hr/>
			</div>
			{/* <!-- START Form  --> */}
			<form className="file-upload">
				<div className="row mb-5 gx-5">
					{/* <!-- Contact detail --> */}
					<div className="col-xxl-8 mb-5 mb-xxl-0">
						<div className="bg-white px-4 py-5 rounded">
							<div className="row g-3">
								<h4 className="mb-4 mt-0">Contact detail</h4>
								{/* <!-- First Name --> */}
								<div className="col-md-6">
									<label className="form-label">First Name *</label>
									<input type="text" className="form-control" placeholder="" aria-label="First name" value="" />
								</div>
								{/* <!-- Last name --> */}
								<div className="col-md-6">
									<label className="form-label">Last Name *</label>
									<input type="text" className="form-control" placeholder="" aria-label="Last name" value=""/>
								</div>
								{/* <!-- Phone number --> */}
								<div className="col-md-6">
									<label className="form-label">Phone number *</label>
									<input type="text" className="form-control" placeholder="" aria-label="Phone number" value="()  "/>
								</div>
								{/* <!-- Mobile number --> */}
								<div className="col-md-6">
									<label className="form-label">Mobile number *</label>
									<input type="text" className="form-control" placeholder="" aria-label="Phone number" value=""/>
								</div>
								{/* <!-- Email --> */}
								<div className="col-md-6">
									<label htmlFor="inputEmail4" className="form-label">Email *</label>
									<input type="email" className="form-control" id="inputEmail4" value=""/>
								</div>
								{/* <!-- Skype --> */}
								<div className="col-md-6">
									<label className="form-label">Skype *</label>
									<input type="text" className="form-control" placeholder="" aria-label="Phone number" value=""/>
								</div>
							{/* </div> <!-- Row END --> */}
						</div>
					</div>
					{/* <!-- Upload profile --> */}
					<div className="col-xxl-4">
						<div className="bg-secondary-soft px-4 py-5 rounded">
							<div className="row g-3">
								<h4 className="mb-4 mt-0">Upload your profile photo</h4>
								<div className="text-center">
									{/* <!-- Image upload --> */}
									<div className="square position-relative display-2 mb-3">
										<i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
									</div>
									{/* <!-- Button --> */}
									<input type="file" id="customFile" name="file" hidden=""/>
									<label className="btn btn-success-soft btn-block" for="customFile">Upload</label>
									<button type="button" className="btn btn-danger-soft">Remove</button>
									{/* <!-- Content --> */}
									<p className="text-muted mt-3 mb-0"><span className="me-1">Note:</span>Minimum size 300px x 300px</p>
								</div>
							</div>
						</div>
					</div>
				</div> 

				{/* <!-- Social media detail --> */}
				<div className="row mb-5 gx-5">
					<div className="col-xxl-6 mb-5 mb-xxl-0">
						<div className="bg-white px-4 py-5 rounded">
							<div className="row g-3">
								<h4 className="mb-4 mt-0">Social media detail</h4>
								{/* <!-- Facebook --> */}
								<div className="col-md-6">
									<label className="form-label"><i className="fab fa-fw fa-facebook me-2 text-facebook"></i>Facebook *</label>
									<input type="text" className="form-control" placeholder="" aria-label="Facebook" value=""/>
								</div>
								{/* <!-- Twitter --> */}
								<div className="col-md-6">
									<label className="form-label"><i className="fab fa-fw fa-twitter text-twitter me-2"></i>Twitter *</label>
									<input type="text" className="form-control" placeholder="" aria-label="Twitter" value=""/>
								</div>
								
								{/* <!-- Instragram --> */}
								<div className="col-md-6">
									<label className="form-label"><i className="fab fa-fw fa-instagram text-instagram me-2"></i>Instagram *</label>
									<input type="text" className="form-control" placeholder="" aria-label="Instragram" value=""/>
								
							</div>
						</div>
					</div>

					{/* <!-- change password --> */}
					<div className="col-xxl-6 mt-5">
						<div className="bg-white px-4 py-5 rounded">
							<div className="row g-3">
								<h4 className="my-4">Change Password</h4>
								{/* <!-- Old password --> */}
								<div className="col-md-6">
									<label htmlFor="exampleInputPassword1" className="form-label">Old password *</label>
									<input type="password" className="form-control" id="exampleInputPassword1"/>
								</div>
								{/* <!-- New password --> */}
								<div className="col-md-6">
									<label htmlFor="exampleInputPassword2" className="form-label">New password *</label>
									<input type="password" className="form-control" id="exampleInputPassword2"/>
								</div>
								{/* <!-- Confirm password --> */}
								<div className="col-md-12">
									<label htmlFor="exampleInputPassword3" className="form-label">Confirm Password *</label>
									<input type="password" className="form-control" id="exampleInputPassword3"/>
								</div>
							</div>
						</div>
					</div>
				</div> 
				{/* <!-- button --> */}
				<div className="gap-3 d-md-flex justify-content-md-end text-center">
					<button type="button" className="btn btn-danger btn-lg">Delete profile</button>
					<button type="button" className="btn btn-primary btn-lg">Update profile</button>
				</div>
		</div>
		</div>
			</form> 
	</div>
	</div>
    </div>

  )
}
