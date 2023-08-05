import React, {useState, useEffect} from 'react';
import {useAuth} from "../../hooks/use-auth";
import logo from "../../assets/img/user.png";
import {useSelector} from "react-redux";

const Review = () => {
    const {isAuth, email, name} = useAuth();
    const [username, setUsername] = useState('');
    const [emails, setEmails] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [isUsernameEmpty, setIsUsernameEmpty] = useState(false);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isCommentEmpty, setIsCommentEmpty] = useState(false);
    const [rating, setRating] = useState(0);
    const {userImage}=useSelector(s=>s.user)
    const [image, setImage] = useState(userImage ? userImage : logo);


    const handleStarClick = (value) => {
        setRating(value);
    };
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const starClass = i <= rating ? 'star active' : 'star';
            stars.push(
                <span
                    key={i}
                    className={starClass}
                    onClick={() => handleStarClick(i)}
                >
          &#9733;
        </span>
            );
        }
        return stars
    };
    const CommentRenderStars = (ratingValue) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const starClass = i <= ratingValue ? 'star active' : 'star';
            stars.push(
                <span key={i} className={starClass}>
        &#9733;
      </span>
            );
        }
        return stars;
    };
    useEffect(() => {
        const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
        setComments(storedComments);
        if (isAuth) {
            setUsername(name);
            setEmails(email);
        }
    }, [isAuth, email, name]);

    const handleSubmit = () => {
        if (!username.trim()) {
            setIsUsernameEmpty(true);
        }
        if (!comment.trim()) {
            setIsCommentEmpty(true);
        }
        if (!emails.trim()) {
            setIsEmailEmpty(true);
        }

        if (username.trim() && comment.trim() && emails.trim()) {
            const newComment = {username, emails, comment,rating,image};
            const existingComments = JSON.parse(localStorage.getItem('comments')) || [];
            const updatedComments = [...existingComments, newComment];
            localStorage.setItem('comments', JSON.stringify(updatedComments));
            setComment('');
            if(isAuth){
                setUsername(name);
                setEmails(email);
                setImage(userImage)
            }else{
                setUsername('');
                setEmails('');
                setImage(logo)

            }
            setIsUsernameEmpty(false);
            setIsCommentEmpty(false);
            setRating(0)
        }
    };
    const resetBorderStyling = () => {
        setIsUsernameEmpty(false);
        setIsCommentEmpty(false);
        setIsEmailEmpty(false)
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
                            <span>{CommentRenderStars(el.rating)}</span>
                            <img src={el.image  } alt=""/>
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
                        <div className="review--bottom__star">
                            {renderStars()}
                        </div>
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
