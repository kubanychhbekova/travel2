import React, {useState, useEffect} from 'react';
import {useAuth} from "../../hooks/use-auth";
import logo from"../../assets/img/logo.png"
const Review = () => {
    const {isAuth, email} = useAuth();
    const [username, setUsername] = useState('');
    const [emails, setEmails] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const handleSubmit = () => {
        const newComment = {username, emails, comment};
        const existingComments = JSON.parse(localStorage.getItem('comments')) || [];
        const updatedComments = [...existingComments, newComment];
        localStorage.setItem('comments', JSON.stringify(updatedComments));
        setUsername('');
        setEmails('');
        setComment('');
    };
    useEffect(() => {
        const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
        setComments(storedComments);
    }, []);
    console.log("hello")
    return (
        <div id="review">
            <center>REVIEWS</center>
            <div className="slice">
                    {comments.map((el, index) => (
                        <div key={index} className="slice--card">
                           <div className="slice--card__top">
                               <span>⭐⭐⭐⭐⭐</span>
                               <img src={logo} alt=""/>
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
                        display:isAuth? "none" :"block"
                    }} className="review--input">
                        <p>Name:</p>
                        <input
                            type="text"
                            value={isAuth? email : username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <p>E-Maile(optional):</p>
                        <input
                            type="email"
                            value={emails}
                            onChange={(e) => setEmails(e.target.value)}
                        />

                    </div>
<div className="review--bottom">
     <textarea
         placeholder="Write are view"
         value={comment}
         onChange={(e) => setComment(e.target.value)}
     />
    <button onClick={handleSubmit}>Send</button>
</div>
                </div>
            </div>
        </div>
    );
};

export default Review;
