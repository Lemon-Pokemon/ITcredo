

function Project({ img, img_height = 65, name, link, link_name, link_text }) {
    return (
        <a href={link}>
            <div className="project">
                <div className="project_name">
                    <div className="project_img">
                        <img src={img} alt="img" height={img_height} width="auto" />
                    </div>
                    <div className="name dropshop">
                        {name}
                    </div>
                </div>
                <div className="project_info">
                    <svg width="32" height="32" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M19.3834 25.2406L18.4223 26.2017C15.2374 29.3867 10.0736 29.3867 6.88868 26.2017C3.70377 23.0168 3.70377 17.8531 6.88868 14.6682L7.84981 13.707" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M13.6167 19.4738L19.3835 13.707" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        <path opacity="0.5" d="M13.6167 7.93966L14.5778 6.97853C17.7627 3.79362 22.9265 3.79362 26.1114 6.97853C29.2963 10.1634 29.2963 15.3272 26.1114 18.5121L25.1503 19.4732" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    <div className="project_text">
                        {link_name}
                        <p className="project_description">{link_text}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Project; 