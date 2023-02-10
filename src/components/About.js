import React from 'react'
import myImg from './myImg.png'

const About = (props) => {
  return (
  <>
  <section className="vh-100" style={{backgroundColor: props.mode==='light'?'#f4f5f7':'black'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-6 mb-4 mb-lg-0">
        <div className="card mb-3" style={{borderRadius: ".5rem"}}>
          <div className="row g-0">
            <div className={`col-md-4 gradient-custom text-center text-${props.mode==="light"?"black":"white"}`}
              style={{borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem",background:"linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1))"}}>
              <img src={myImg}
                alt="Avatar" className="img-fluid my-5 " style={{width: "150px",height:"150px",borderRadius:"50%"}} />
              <h5>Manish Joshi</h5>
              <p>Web Designer</p>
              <i className="far fa-edit mb-5"></i>
            </div>
            <div className="col-md-8">
              <div className="card-body p-4">
                <h6>About Me</h6>
                <hr className="mt-0 mb-4"/>
                <div className="row pt-1">
                  <div className="col-7 mb-3">
                    <h6>Email</h6>
                    <p className="text-muted">manishjoc@gmail.com</p>
                  </div>
                  <div className="col-5 mb-3">
                    <h6>Phone</h6>
                    <p className="text-muted">9814630044</p>
                  </div>
                </div>
                <h6>About this Project</h6>
                <hr className="mt-0 mb-4"/>
                <div className="row pt-1">
                <p className="text-muted my">This is a simple joke reading website made with reactJs.
                    Here you can read so many jokes you can choose categories too. <br/>
                    Have fun!!
                </p>
                </div>
                <div className="d-flex justify-content-start mt-2">
                  <a href="https://www.facebook.com/profile.php?id=100028545702525" target="_blank"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                  <a href="https://github.com/ManishJoc14" target="_blank"><i className="fab fa-github fa-lg me-3"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </>
  )
}

export default About