import React, { useState }from "react";

function Form() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const [valid, setValid] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target;

        setValues(prevValues => {
            return {
                ...prevValues,
                [name]: value
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(values.name && values.email && values.message) {
            setValid(true);
        }
        setSubmitted(true);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" className="form-control" value={values.name} onChange={handleChange} />
                    {submitted && !values.name && <span id="error">Please enter your name</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input name="email" type="email" className="form-control" aria-describedby="emailHelp" value={values.email} onChange={handleChange}/>
                    {submitted && !values.email && <span id="error">Please enter an email address</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" className="form-control" rows="5" value={values.message} onChange={handleChange}></textarea>
                    {submitted && !values.message && <span id="error">Please enter text</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
             </form>
             {submitted && valid && <div class="success-message">Success! Thank you for your message!</div>}
        </div>
    )
}

export default Form;