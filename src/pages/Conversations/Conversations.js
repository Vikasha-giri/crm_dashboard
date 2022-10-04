import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./conversations.css"
import profile from "../../assets/profiles.jpg"
const Conversations = () => {

    const [conversations, SetConversations] = useState("all");
    const [chats, setChats] = useState("chats");
    const [sendSms, setSendSms] = useState("sms")



    // send msm function
    const sendSmstext = () => {
        return (
            <div>
                <div className="textarea">
                    <textarea placeholder="Type a message" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <div className="textarea_icons">
                        <i className="bi bi-plus"></i>
                        <i className="bi bi-emoji-smile-fill"></i>
                        <i className="bi bi-tag-fill"></i>
                    </div>

                </div>
                <div className="d-flex justify-content-end mt-4">
                    <button type='butonn' className="clear_btn  mx-2">Clear</button>
                    <button type='butonn' className="send_btn mx-2"> <i className="bi bi-send"></i> Send</button>
                </div>
            </div>


        )
    }

    const sendEmailText = () => {
        return (
            <h1>hello</h1>
        )
    }

    const Conversations = () => {
        return (
            <div className="container-fluld">
                <div className="Conversations_main">
                    <div class="Conversations_left">
                        <ul>
                            <li className="active">Unread</li>
                            <li>Recents</li>
                            <li>All</li>
                        </ul>

                        <div className="d-flex justify-content-between px-3 mt-2">
                            <div> <h5>message</h5> </div>
                            <div>
                                <i className="bi bi-pencil-square"></i>
                                <i className="bi bi-pencil-square"></i>
                            </div>
                        </div>
                        <div className="inputsearch position-relative mx-3 my-4">
                            <input type="search" placeholder="Search..." />
                            <i className="bi bi-search search-icon"></i>
                        </div>

                        <div className="d-flex justify-content-between px-3 unread_message" >
                            <div className="d-flex align-items-center  userchat">                    
                                <div className="d-flex justify-content-center align-items-center user_name">
                                <h6>JK</h6>
                                <i className="bi bi-chat-left-dots-fill"></i>
                                </div>
                                <div className="ml-3">
                                    <h6>jesse King</h6>
                                    <span>sure thanks</span>
                                </div>

                            </div>
                            <div><span className="date_times mt-4">3/1 12:40 pm</span></div>
                        </div>
                        <div className="d-flex justify-content-between px-3 jeckson_Hart">
                            <div className="d-flex align-items-center  userchat">
                                <div className="d-flex justify-content-center align-items-center user_name">
                                <h6>jH</h6>
                                <i className="bi bi-chat-left-dots-fill"></i>
                                </div>                              
                                <div className="ml-3">
                                    <h6>jeckson Hart</h6>
                                    <span>sure thanks</span>
                                </div>

                            </div>
                            <div><span className="date_times">3/1 12:40 pm</span></div>
                        </div>
                        <div className="d-flex justify-content-between px-3 unread_message">
                            <div className="d-flex align-items-center  userchat">
                                <div className="d-flex justify-content-center align-items-center user_name bg-info">
                                <h6>DG</h6>
                                <i className="bi bi-chat-left-dots-fill"></i>
                                </div>
                                <div className="ml-3">
                                    <h6>Donald Gonzales</h6>
                                    <span>sure thanks</span>
                                </div>

                            </div>
                            <div><span className="date_times">3/1 12:40 pm</span></div>
                        </div>

                    </div>
                    <div className="Conversations_middle">
                        <div className="message__area">
                            <h4 className="py-2 mt-4">Jesse king</h4>
                            <div className="incoming message d-flex mt-3">
                                <div>
                                    <h4>JK</h4>
                                    <i className="bi bi-chat-left-dots-fill"></i>
                                </div>
                                <div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <span>11:40 AM</span>
                                </div>


                            </div>
                            <div className="d-flex justify-content-end">
                                <div className="outgoing d-flex">
                                    <div>
                                    <div className="triangle"></div>
                                        <p>sure how can i help?</p>
                                        <span>12:40 AM</span>
                                    </div>
                                    <div className="position-relative">
                                        <h4>JK</h4>
                                        <i className="bi bi-chat-left-dots-fill position-absolute "></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="message__area">
                            <div className="incoming message d-flex">
                                <div>
                                    <h4>JK</h4>
                                    <i className="bi bi-chat-left-dots-fill"></i>
                                </div>
                                <div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <span>11:40 AM</span>
                                </div>


                            </div>
                            <div className="d-flex justify-content-end">
                                <div className="outgoing d-flex">
                                    <div>
                                    <div className="triangle"></div>
                                        <p>sure how can i help ?</p>
                                        <span>12:40 AM</span>
                                       
                                        </div>
                              
                                    <div className="position-relative">
                                        <h4>JK</h4>
                                        <i className="bi bi-chat-left-dots-fill position-absolute "></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="message__area">
                            <div className="incoming message d-flex">

                                <h4>JK</h4>
                                <i className="bi bi-chat-left-dots-fill"></i>
                                <div>
                                    <p>Lorem Ipsum </p>
                                    <span>11:40 AM</span>
                                </div>



                            </div>
                        </div>
                        <hr className="mt-4" />

                        <div className="sending_sms mt-3">
                            <ul className="d-flex">
                                <li className={`sendsms ${sendSms === 'sms' ? 'active' : ''}`} onClick={() => setSendSms('sms')}>SMS</li>
                                <li className={`sendsms px-4 ${sendSms === 'send_email_msg' ? 'active' : ''}`} onClick={() => setSendSms('send_email_msg')}>Email</li>
                            </ul>

                            <div>
                                {sendSms === "sms" && sendSmstext()}
                                {sendSms === "send_email_msg" && sendEmailText()}
                            </div>
                        </div>
                    </div>
                    <div className="Conversations_right ">
                        <div className="profiles d-flex justify-content-center">
                            <div>
                                <img src={profile} className="img-fluid" />
                                <h3>sumant</h3>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex mt-4">
                            <i className="bi bi-telephone px-2"></i>
                            <p>(940) 783-2395</p>
                        </div>
                        <div className="d-flex ">
                            <i className="bi bi-envelope px-2"></i>
                            <p>idj@bacen.com</p>
                        </div>
                        <div className="d-flex ">
                            <i className="bi bi-tag px-2"></i>
                            <input type="text" id="exampleInputEmail1" className="add_tag_input" aria-describedby="emailHelp" placeholder="Add Tags" />
                        </div>
                        <div className="text-center  post_client mx-3">
                            <p className="mt-3">past-client jonh & deo <i className="bi bi-x"></i></p>
                            <div className="d-flex justify-content-between">
                                <p>past-client <i className="bi bi-x"></i></p>
                                <p>past-client <i className="bi bi-x"></i></p>
                            </div>
                        </div>

                        <h6 className="mt-4">DND (opt out of marketing campaigns) </h6>

                        <label className="switch ">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>

                </div>
            </div>
        )
    }


    const ManualAction = () => {
        return (
            <h1>he</h1>

        )
    }


    return (
        <>
            <div className="conversations_sections">
                <Link className={`items ${conversations === 'all' ? 'active' : ''}`} onClick={() => SetConversations('all')}> Conversations
                </Link>
                <Link className={`items ${conversations === 'Manual_Action' ? 'active' : ''}`} onClick={() => SetConversations('Manual_Action')}>
                    Manual Action
                </Link>


                {conversations === 'all' && Conversations()}
                {conversations === 'Manual_Action' && ManualAction()}
            </div>
        </>
    );
};

export default Conversations;