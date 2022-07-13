var x = window.matchMedia("(max-width: 700px)")


function coloseBoxPosition(){
    if(x.matches){
        document.querySelector('.right').style.right = '-100vw'
        document.querySelector(".right").style.transitionDuration = "1s";
        document.querySelector('.left').style.left = '0vw'
        document.querySelector(".left").style.transitionDuration = "1s";
        setTimeout(function(){
            document.querySelector(".slide").style.zIndex = "-100";
        }, 1000)
    }
    else{
        document.querySelector('.right').style.right = '-92vw'
        document.querySelector(".right").style.transitionDuration = "1s";
        document.querySelector('.left').style.left = '-8vw'
        document.querySelector(".left").style.transitionDuration = "1s";
        setTimeout(function(){
            document.querySelector(".slide").style.zIndex = "-100";
        }, 1000)
    }
}


function openBoxPosition(){

    document.querySelector(".slide").style.zIndex = "1100";
    document.querySelector('.right').style.right = '0vw'
    document.querySelector(".right").style.transitionDuration = "1s";
    document.querySelector('.left').style.left = '0vw'
    document.querySelector(".left").style.transitionDuration = "1s";
    setTimeout(function(){
        // document.querySelector(".slide").style.display = "none";
    }, 1000)
}



document.querySelector(".close").addEventListener("click", ()=>{
    coloseBoxPosition()
})

document.querySelector(".first-service").addEventListener("click", ()=>{

    document.querySelector('.heading').innerHTML = 'Infrastructure'
    document.querySelector('.contentBox').innerHTML = 
    `Infrastructural facilities are offered to the incubate companies on an individual basis, along with a set of shared/ common infrastructure mentioned here in under:
    <br><br>
    • Office space: Company specific
    <br>
    • Internet connection
    <br><br>
    Apart from company specific infrastructure as stated above, TCGTBI provide following facilities to all incubatee companies on shared basis:
    <br><br>
    a) Photocopier<br>
    b) Scanner<br>
    c) shredder<br>
    d) Teleconferencing facilities as available. The usage of this facility will be paid by incubates as per the rate fixed by TCGTBI, time to time.<br>
    e) Meeting/Conference room with projection equipment<br>
    f) TCGTBI Library facilities<br>
    g) Pantry facilities<br>
    h) Common secretarial pool/staff (depending on availability of such staff with BI)<br>
    <br><br>
    Besides, TCGTBI will facilitate the incubatee companies to access departmental laboratories and other resources of IIEST, Shibpur or at its Partner Institute for their specific requirements. Access to Institutional resources is possible as per extant rules of the Institutes, after observing necessary formalities and on payment of required fees. Usage of such resources should be with permission of the concerned department.`

    openBoxPosition()
})


document.querySelector(".second-service").addEventListener("click", ()=>{

    document.querySelector('.heading').innerHTML = 'ENTREPRENEURSHIP PROMOTION'
    document.querySelector('.contentBox').innerHTML = 
    `In a globalised and digitised world of today, a culture of innovation, creativity and entrepreneurship have become the watch word in most economies. But, Entrepreneurial talent sitting within academia is largely untapped in India, as mostly in academic institutes employability is more focused than entrepreneurship. Thus, to promote entrepreneurship amongst students of technology institute and offer them the needed support to turn their ideas into reality, at IIEST-Shibpur, TCGTBI is established, that aims to help students build and grow a business. IIEST-Shibpur being the home to thousands of incredibly smart students with innovative ideas, where TCGTBI wishes to support every part of a student entrepreneur’s journey, from inspiring their ideas, to helping create a compelling pitch and connecting them to the global network of mentors, investors and experts.`

    openBoxPosition()
})


document.querySelector(".third-service").addEventListener("click", ()=>{

    document.querySelector('.heading').innerHTML = 'INCUBATION & MENTORING SUPPORT'
    document.querySelector('.contentBox').innerHTML = 
    `<h2>INCUBATION SUPPORT</h2><br>
    • Admission to BI is open to:<br>
    i. Faculty members (current and in the recent past), (one or many) along with possibly others<br>
    ii. Students and alumni, along with possibly others<br>
    iii. IIEST, Shibpur's R&D partners (sponsors of R&D and consultancy projects), along with possibly others where any faculty is an advisor / mentor / promoter<br>
    iv. Others, having entrepreneurial mindset and innovation orientation<br>
    • Admission Process-<br>
    At the opening level, applicants for admission in TCGTBI will be required to submit a Pre-Application Questionnaire (PAQ), which can be availed from the TCGTBI office or downloaded from its website.<br>
    Applicants are required to submit a detailed proposal comprising of the following documents:<br>
    1. Business Plan. The Business plan is expected to cover the basics of the Business, namely, value proposition, products and services, market analysis, competition analysis, funding requirements, capital structure, milestones and timelines, development and marketing plan, organizational structure, team, risk analysis and projected financials. Applicants may also give additional information as they think would help in the assessment of their proposal.<br>
    2. Details of IP/ technology based on which a company is proposed to be promoted/ founded.<br>
    Based on the documents submitted, the PAQ will be screened first by the TCGTBI team for assessing the suitability of the proposal. Detailed scrutiny including financial and technical due diligence of the proposal shall then be carried out by the expert members for evaluation of the proposal. Applicants would be invited next with their teams to make presentation on their proposal.<br>
    In order to enable the expert members (would be invited/ identified depending on the nature of the proposal) to take an appropriate decision, members may ask for any additional information from the applicants and/or revision in the proposal.<br>
    Based on the affirmative assessment, a draft agreement may be sent to the applicants for initiating the process of registration.<br>
    • Some representative criteria to be applied for evaluation( not limited to these)<br>
    1. Strength of the product idea in terms of its technology content, innovation, timeliness and market potential<br>
    2. IP already generated and the potential of the idea for IP creation<br>
    3. Extent of involvement of IIEST, Shibpur faculty, employees and students<br>
    4. Strength of the core Business team<br>
    5. Funds requirement and viability of raising finance<br>
    6. Break-even period<br>
    • Facilities<br>
    Infrastructural facilities are offered to the incubate companies on an individual basis, along with a set of shared/ common infrastructure mentioned here in under:<br>
    • Office space: Company specific<br>
    • Internet connection<br>
    Apart from company specific infrastructure as stated above, TCGTBI provide following facilities to all incubate companies on shared basis:<br>
    a) Photocopier<br>
    b) Scanner<br>
    c) Meeting/Conference room with projection equipment<br>
    d) Pantry facilities<br>
    Besides, TCGTBI will facilitate the incubate companies to access departmental laboratories and other resources of IIEST, Shibpur or at its Partner Institute for their specific requirements. Access to Institutional resources is possible as per extant rules of the Institutes, after observing necessary formalities and on payment of required fees. Usage of such resources should be with permission of the concerned department.<br>
    <br><br>
    <h2>MENTORING SUPPORT</h2><br>
    Apart from physical infrastructure as stated above, TCGTBI has created certain other supports and services which would include but not limited to : • Pool of mentors, experts in technology, legal, financial and related matters, • Organising events to help companies in networking and showcasing their technologies, • Meetings with visitors of IIEST, Shibpur (such as alumni, venture capitalists, industry professionals).

    `

    openBoxPosition()
})

document.querySelector(".fourth-service").addEventListener("click", ()=>{

    document.querySelector('.heading').innerHTML = 'Support to Startup & Students'
    document.querySelector('.contentBox').innerHTML = 
    `<h2>Support to Startup</h2><br>
    Department of Industrial Policy and Promotion (DIPP), GoI enlisted TCGTBI as an empanelled incubator for evaluation of innovation and issuance of recommendation to new technology based start-up companies, which was a pre-requisite for availing government subsidies and facilities under Start-Up India Scheme launched during 2016 by Prime Minister. ISBA formulated a guideline for such evaluation and issue of recommendation by their member incubators on a chargeable basis. TCGTBI received around 40 applications from the new start-ups for such recommendation. A sui-generis modality for such recommendation process, mostly in line with the ISBA guidelines have been adopted by TCGTBI, which involves engagement of at least one subject knowledge expert specific to the applications on a payment of honorarium basis.<br>
    Though this recommendation is not a mandatory requirement these days, but such recognition from the centre would help startup companies to evaluate its potential to be successful by analyzing the innovation component, timeliness of the technology associated and the business viability of the proposal.
    <br><br>
    <h2>Student SUPPORT</h2><br>`

    openBoxPosition()
})


