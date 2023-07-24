import React from 'react';
import UseImg from '../../assets/img/useImg.png'
import NewLink from "../newLink/newLink";

const UsePage = () => {
    return (
        <div>
            <div id="use">
                <img className='mainImg3' src={UseImg} alt=""/>
                <div className="h1">
                    <h1>TERMS OF USE</h1>
                </div>
                <div className="container">
                    <div className="useText">
                        <h1>Conditions</h1>
                        <p>By accessing the website at http://Country_travel_guide.kg , you agree to comply with these
                            terms of service, all applicable laws and regulations, and agree that you are responsible
                            for complying with any applicable local laws. If you do not agree to any of these terms, you
                            are prohibited from using or accessing this site. The materials contained on this website
                            are protected by applicable copyright and trademark laws.</p>
                        <h1>License</h1>
                        <p>Materials of the Tao website.kg is licensed through Blah blah blah blah blah, which implies
                            the possibility of using the materials of the site only for non-commercial purposes and with
                            reference to the source.</p>
                        <h1>Accuracy of materials</h1>
                        <p>All materials of the Country_travel_guide website.kg are provided solely for reference. We
                            are not responsible for the possible consequences resulting from the use of information from
                            the site Country_travel_guide.kg .</p>
                        <h1>Disclaimer of liability</h1>
                        <p>Materials presented on the website Country_travel_guide.kg , may include factual, spelling,
                            or photographic errors. Country_travel_guide.kg.kg does not guarantee that any of the
                            materials on its website are accurate, complete or up-to-date. Country_travel_guide.kg may
                            make changes to the materials contained on its website at any time without prior notice.
                            However, Country_travel_guide.kg does not give any obligation to update the materials.</p>
                        <h1>Links</h1>
                        <p>We are not responsible for the content of the sites, links to which may be placed on the
                            pagesCountry_travel_guide.kg .</p>
                        <h1>Changes</h1>
                        <p>Tao.kg may revise these terms of service on its website at any time without prior notice. By
                            using this site, you agree to be bound by the current version of these terms of service</p>
                        <h1>Regulatory legislation</h1>
                        <p>These terms and conditions are governed by and interpreted in accordance with the laws of the
                            Kyrgyz Republic, and you unconditionally submit to the exclusive jurisdiction of the courts
                            in that State or place.</p>
                    </div>

                </div>
                <NewLink/>
            </div>

        </div>
    );
};

export default UsePage;