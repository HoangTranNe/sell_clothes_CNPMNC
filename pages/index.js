import styles from '/styles/Home.module.css';
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import db from '../lib/db.js'
export default function App() {
    const overlapGroupClassName = 'overlap-group-class';
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setComfirmPassword] = useState("");
    const [response, setResponse] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    
    const handleChangeConfirm = (e) => {
        setComfirmPassword(e.target.value);
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(false);
        setError(true);

        // Validate form fields
        const errors = {};
        if (!isValidUsername(username)) {
            errors.username = "Invalid username";
        }
        if (Object.keys(errors).length > 0) {
            const requiredFields = ['email', 'username', 'password'];
            requiredFields.forEach((field) => {
                if (!eval(field)) {
                    errors[field] = `${field} is required`;
                }
            });
            
            setError(errors);
            setIsSubmitting(false);
            alert("Please fill in all required fields.");
        }
        else{
            try{
                const response = await fetch("/index.js", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });
            const data = await response.json();
            setResponse(data.status);
            }catch (error) {
                console.error("Error fetching data:", error);
                setError("An error occurred while submitting the form");
            }finally {
                setIsSubmitting(true);
            }
        }
    };

    useEffect(() => {
        const handleResponse = async () => {
            if (response === 'success') {                
                window.location.href = "./index_login";
            } else if (response === 'user_exists') {
                setError({ username: "Người dùng đã tồn tại" });
            }
        };

        handleResponse();
    }, [response]);


    const handleChange = (event) => {
        setPassword(event.target.value);
    };
   
    const isValidUsername = (username) => {
        return !/[!@#$%^&*()_+-]/.test(username);
    };

   
   
    return (
        <div className={styles.App}>
            <div className={styles.frame}>
                <Image
                    className={styles.rectangle}
                    alt="Rectangle"
                    src="/images/rectangle_2.png"
                    height={144} // Desired size with correct aspect ratio
                    width={144}/>
                <p className={styles.text_wrapper}>Phong cách là cách bạn thể hiện bản thân</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.overlap_wrapper}>
                    <div className={styles.overlap}>
                        <div className={styles.group}>                        
                            <button type="submit" name='sign in'
                                    disabled={handleSubmit && useEffect|| (!email && !password)}
                                    onClick={handleSubmit}                                     
                                    className={`${styles.overlap_group} ${overlapGroupClassName}`}>                            
                                    <Link href ="index_main" className={styles.sign_in}>Đăng Kí</Link>
                            </button>
                        </div>
                        <div className={styles.overlap_group_wrapper}>
                            <button className={styles.overlap_group_3} type='button'>
                                <a href="/index_login" className={styles.text_wrapper_3}>Đã Có Tải Khoản</a>
                            </button>
                        </div>
                        <div className={styles.group_5}>
                            <div className={styles.text_wrapper_8}>Đăng Kí</div>
                            <Image
                            className={styles.line}
                            height={144}
                            width={500}
                            alt="Line"
                            src="/image/line.png"
                            />
                        </div>
                        <div className={styles.group_2}>
                            <div className={styles.div_wrapper}>
                                <div className={styles.overlap_group_2}>
                                    <input
                                        type="email"
                                        name="email"
                                        color='black'                                    
                                        className={styles.input_email}
                                        placeholder="Enter your email"
                                        required
                                        autoComplete='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={styles.group_3}>
                                <div className={styles.overlap_group_2}>
                                    <input
                                        className={styles.input_password}
                                        type="password"
                                        name="password"
                                        placeholder='Nhập Password'
                                        value={password}
                                        autoComplete='password'
                                        onChange={handleChange}
                                        id="password-input"
                                    />
                                </div>
                            </div>
                            <div className={styles.group_4}>
                                <div className={styles.overlap_group_2}>
                                    <input
                                        className={styles.input_password}
                                        type="password"
                                        name="confirmPassword"
                                        placeholder='Nhập lại Password'
                                        value={confirmPassword}
                                        autoComplete='confirm-password'
                                        onChange={handleChangeConfirm}
                                        id="confirm-password-input"
                                    />
                                </div>
                            </div>
                            <div className={styles.rectangle}>
                                <input
                                    required
                                    type="text"            
                                    name='nameUser'                
                                    value={username}
                                    autoComplete='name'
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Nhập user name"                                                                                        
                                    className={styles.overlap_2}/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
