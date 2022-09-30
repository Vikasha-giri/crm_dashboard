import React from 'react';
import "./launchpad.css"
import download_our_app from "../../assets/download_our_app.png";
import google from "../../assets/google-business-seeklogo.png";
import facebook from "../../assets/facebook-logo.png";
import chat from "../../assets/chat-svgrepo-com.png";
import Stripe_Logo from "../../assets/Stripe_Logo,_revised_2016.png";

const Launchpad = () => {

    return (
        <>         
                <div className="launchpad_section">
                    <div>
                        <h3 className="text-center pb-5">Let's get you on the path to success</h3>
                        <div className="luanchpad_outer">
                            <div className="row  d-flex align-items-center py-3">
                                <div className="col-12 col-lg-2 ">
                                <img src={download_our_app} className="img-fluid iso_img" alt="ios_logo" />
                                </div>
                                <div className="col-12 col-lg-8">
                                <p className="test-center">downloaded our app and enagage with your leads   on the go!</p>
                                </div>
                                <div className="col-12 col-lg-2 "> <button className="btn">send Link</button></div>
                            </div>
                         
                            <hr />
                            <div className="row  d-flex align-items-center  py-3">
                                <div className="col-12 col-lg-2">
                                <img src={google} className="img-fluid " alt="ios_logo" />
                                </div>
                                <div className="col-12 col-lg-8">
                                <p >generate more leads form google my bussiness menitor and reply to GMB Conversations & review</p>
                                </div>
                                <div className="col-12 col-lg-2">
                                <button className="btn">connect</button>
                                </div>
                            </div>
                            
                            <hr/>
                            <div className="row  d-flex align-items-center  py-3">
                                <div className="col-12 col-lg-2 d-flex align-items-center justify-content-center">
                                <img src={facebook} className="img-fluid " alt="ios_logo" />
                                </div>
                                <div className="col-12 col-lg-8">
                                <p >connect directly with prospects and customers via  messanger  in Conversation and sync your facebook  leadswoth our CRM</p>
                                </div>
                                <div className="col-12 col-lg-2">
                                <button className="btn">connect</button>
                                </div>
                            </div>
                            
                            <hr/>
                            <div className="row  d-flex align-items-center justify-content-center py-3">
                                <div className="col-12 col-lg-2 d-flex align-items-center justify-content-center">
                                <img src={chat} className="img-fluid " alt="ios_logo" />
                                </div>
                                <div className="col-12 col-lg-8">
                                <p>Generate leads form your Website by connecting <br/> website webchat  widget</p>
                                </div>
                                <div className="col-12 col-lg-2">
                                <button className="btn">connect</button>
                                </div>
                            </div>
                           
                            <hr/>
                            <div className="row  d-flex align-items-center  py-3">
                                <div className="col-12 col-lg-2 d-flex align-items-center justify-content-center">
                                <img src={Stripe_Logo} className="img-fluid " alt="ios_logo" />
                                </div>
                                <div className="col-12 col-lg-8">
                                <p>Connect Your Stripe account to start accepting payment</p>
                                </div>
                                <div className="col-12 col-lg-2">
                                <button className="btn">connect</button>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </div>

        

        </>
    );
};

export default Launchpad;