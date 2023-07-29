import React, { useState, useEffect } from 'react';
import { useAuth } from "../../hooks/use-auth";
import logo from "../../assets/img/logo.png";

const Review = () => {
    const { isAuth, email } = useAuth();
    const [username, setUsername] = useState('');
    const [emails, setEmails] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [isUsernameEmpty, setIsUsernameEmpty] = useState(false);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isCommentEmpty, setIsCommentEmpty] = useState(false);

    useEffect(() => {
        const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
        setComments(storedComments);

        // If the user is authenticated, pre-populate the username and emails fields
        if (isAuth) {
            setUsername(email);
            setEmails(email);
        }
    }, [isAuth, email]);

    const handleSubmit = () => {
        // Check if any of the inputs is empty
        if (!username.trim()) {
            setIsUsernameEmpty(true);
        }
        if (!comment.trim()) {
            setIsCommentEmpty(true);
        }

        // If all required inputs are filled, proceed to save the data in local storage
        if (username.trim() && comment.trim()) {
            const newComment = { username, emails, comment };
            const existingComments = JSON.parse(localStorage.getItem('comments')) || [];
            const updatedComments = [...existingComments, newComment];
            localStorage.setItem('comments', JSON.stringify(updatedComments));
            setUsername('');
            setEmails('');
            setComment('');
            setIsUsernameEmpty(false);
            setIsCommentEmpty(false);
        }
    };

    const resetBorderStyling = () => {
        setIsUsernameEmpty(false);
        setIsCommentEmpty(false);
    };

    useEffect(() => {
        const timer = setTimeout(resetBorderStyling, 3000);
        return () => clearTimeout(timer);
    }, [username, comment]);

    return (
        <div id="review">
            <center>REVIEWS</center>
            <div className="slice">
                {comments.map((el, index) => (
                    <div key={index} className="slice--card">
                        <div className="slice--card__top">
                            <span>⭐⭐⭐⭐⭐</span>
                            <img src={logo} alt="" />
                            <h6>{el.username}</h6>
                        </div>
                        <div className="slice--card__bottom">
                            <p>{el.comment}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="container">
                <div className="review">
                    <div className="review--top">
                        <p>Write a review</p>
                        <div></div>
                    </div>
                    <div style={{
                        display: isAuth ? "none" : "block"
                    }} className="review--input">
                        <p>Name:</p>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{
                                border: isUsernameEmpty ? "1px solid red" : "1px solid #ccc",
                                boxShadow: isUsernameEmpty ? "0 0 10px 2px red" : ""
                            }}
                        />
                        <p>E-Mail (optional):</p>
                        <input
                            type="email"
                            value={emails}
                            onChange={(e) => setEmails(e.target.value)}
                            style={{
                                border: isEmailEmpty ? "1px solid red" : "1px solid #ccc",
                                boxShadow: isEmailEmpty ? "0 0 10px 2px red" : ""
                            }}
                        />
                    </div>
                    <div className="review--bottom">
                        <textarea
                            placeholder="Write a review"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            style={{
                                border: isCommentEmpty ? "1px solid red" : "1px solid #ccc",
                                boxShadow: isCommentEmpty ? "0 0 10px 2px red" : ""
                            }}
                        />
                        <button onClick={handleSubmit}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
