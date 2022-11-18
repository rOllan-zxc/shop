import React from "react";

const ContactInfo = () => {
    return (
        <div className="contactInfo container">
            <div className="row">
                <div className="col-12 col-md-4 contact-Box">
                    <div className="box-info">
                        <div className="info-image">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <h5>Call Us 24x7</h5>
                        <p>+375 29 221 73 48</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 contact-Box">
                    <div className="box-info">
                        <div className="info-image">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <h5>Офис</h5>
                        <p>Город Минск — проспект Независисмости, 95</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 contact-Box">
                    <div className="box-info">
                        <div className="info-image">
                            <i className="fas fa-fax"></i>
                        </div>
                        <h5>Fax</h5>
                        <p>+375 222 78 77 15</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
