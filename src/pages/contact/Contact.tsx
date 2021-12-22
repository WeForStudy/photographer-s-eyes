
import React from 'react';
import './contact.scss';
import { sendContactForm } from '../../apis/contact';
import { useInput } from '../../hooks/input';

export default function Contact() {
    function handleSentBtnClick() {
        if (!/^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/.test(email)) {
            // #TODO finish toast
            return;
        }
        sendContactForm({
            name,
            email,
            message
        }).then(res => {
            console.log(res);
        });
    }
    const [name, handleNameChange] = useInput('');
    const [email, handleEmailChange] = useInput('');
    const [message, handleMessageChange] = useInput('');
    return (
        <div className="contact--wrapper func--full-height">
            <div className="title">To Haoran Jiang</div>
            <div className="form--wrapper">
                <div className="form-item">
                    <input className="input" value={name} type="text" name="name" onInput={e => handleNameChange(e)} placeholder="*您的姓名"/>
                </div>
                <div className="form-item">
                    <input className="input" value={email} onInput={e => handleEmailChange(e)} type="text" name="email" placeholder="*您的电子邮箱"/>
                </div>
                <div className="form-item">
                    <textarea className="input textarea" value={message} onInput={e => handleMessageChange(e)} name="message" placeholder="*留下您的需求在这儿"/>
                </div>
                <button className="submit--button" onClick={handleSentBtnClick}>发送</button>
            </div>
        </div>
    )
}