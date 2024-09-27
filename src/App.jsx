import React, { useState } from 'react';
import './App.css';

function App() {
    // State for all form inputs
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        hobbies: [],
        color: '',
        dateOfBirth: '',
        appointmentTime: '',
        favoriteMonth: '',
        rangeValue: 50,
        comments: '',
        termsAccepted: false,
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            if (name === 'hobbies') {
                setFormData((prevData) => ({
                    ...prevData,
                    hobbies: checked
                        ? [...prevData.hobbies, value]
                        : prevData.hobbies.filter((hobby) => hobby !== value),
                }));
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: checked,
                }));
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // You can also send formData to an API or perform other actions here
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Comprehensive React Form Example</h2>

            <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <fieldset>
                    <legend>Personal Information</legend>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Phone Number Input */}
                    <div>
                        <label>Phone Number:</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Number Input */}
                    <div>
                        <label>Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </fieldset>

                {/* Gender Radio Inputs */}
                <fieldset>
                    <legend>Gender</legend>
                    <div>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={formData.gender === 'Male'}
                            onChange={handleChange}
                        />{' '}
                        Male
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={formData.gender === 'Female'}
                            onChange={handleChange}
                        />{' '}
                        Female
                        <input
                            type="radio"
                            name="gender"
                            value="Other"
                            checked={formData.gender === 'Other'}
                            onChange={handleChange}
                        />{' '}
                        Other
                    </div>
                </fieldset>

                {/* Hobbies Checkbox Inputs */}
                <fieldset>
                    <legend>Hobbies</legend>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="hobbies"
                                value="Reading"
                                checked={formData.hobbies.includes('Reading')}
                                onChange={handleChange}
                            />{' '}
                            Reading
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="hobbies"
                                value="Traveling"
                                checked={formData.hobbies.includes('Traveling')}
                                onChange={handleChange}
                            />{' '}
                            Traveling
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="hobbies"
                                value="Gaming"
                                checked={formData.hobbies.includes('Gaming')}
                                onChange={handleChange}
                            />{' '}
                            Gaming
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="hobbies"
                                value="Cooking"
                                checked={formData.hobbies.includes('Cooking')}
                                onChange={handleChange}
                            />{' '}
                            Cooking
                        </label>
                    </div>
                </fieldset>

                {/* Favorite Color Input */}
                <fieldset>
                    <legend>Preferences</legend>
                    <div>
                        <label>Favorite Color:</label>
                        <input
                            type="color"
                            name="color"
                            value={formData.color}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Date Picker Input */}
                    <div>
                        <label>Date of Birth:</label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Time Picker Input */}
                    <div>
                        <label>Appointment Time:</label>
                        <input
                            type="time"
                            name="appointmentTime"
                            value={formData.appointmentTime}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Month Picker Input */}
                    <div>
                        <label>Favorite Month:</label>
                        <input
                            type="month"
                            name="favoriteMonth"
                            value={formData.favoriteMonth}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Range Slider Input */}
                    <div>
                        <label>Range Value ({formData.rangeValue}):</label>
                        <input
                            type="range"
                            name="rangeValue"
                            min="0"
                            max="100"
                            value={formData.rangeValue}
                            onChange={handleChange}
                        />
                    </div>
                </fieldset>

                {/* Textarea Input */}
                <fieldset>
                    <legend>Additional Information</legend>
                    <div>
                        <label>Comments:</label>
                        <textarea
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                        />
                    </div>
                </fieldset>

                {/* Terms and Conditions Checkbox */}
                <fieldset>
                    <legend>Terms and Conditions</legend>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="termsAccepted"
                                checked={formData.termsAccepted}
                                onChange={handleChange}
                                required
                            />{' '}
                            I accept the terms and conditions
                        </label>
                    </div>
                </fieldset>

                {/* Submit Button */}
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>

            {/* Display Submitted Data */}
            <div style={{ marginTop: '20px' }}>
                <h3>Submitted Data:</h3>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
        </div>
    );
}

export default App;
