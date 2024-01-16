import React, { useEffect } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scroller } from 'react-scroll';
import './Header.css'

function Header() {

    return (
        <div className="header_external">
            <div className="header_internal">
                <a >
                    <div className="logo" onClick={() => {
                        scroll.scrollToTop()
                    }}>
                        <span className='blue'>it</span>credo<span className='blue'>.</span>
                    </div>
                </a>
                <div className="nav_bar">
                    <ul>
                        <li><a onClick={() => {
                            scroller.scrollTo("portfolio", {
                                offset: -100,
                                smooth: true,
                            })
                        }} >Портфолио</a></li>
                        <li><a onClick={() => {
                            scroller.scrollTo("services", {
                                offset: -100,
                                smooth: true,
                            })
                        }}>Услуги</a></li>
                        <li><a onClick={() => {
                             scroll.scrollToBottom()
                        }}>Контакты</a></li>
                    </ul>
                </div>
                <div className="email_support">
                    support@itcredo.co
                </div>
                <div className="language">
                    <span>RU</span>
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 9L12 15L5 9" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>


                </div>
                <div className="media_links">
                    <a href="http://">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3515 0H21.3922C30.5624 0 32.7273 2.1328 32.7273 11.0992V20.9168C32.7273 29.8832 30.5444 32 21.3758 32H11.3351C2.16491 32 0 29.8656 0 20.9008V11.0832C0 2.1328 2.18127 0 11.3515 0ZM25.6677 8.04244C25.7492 8.01591 25.8308 8 25.9123 8C26.3309 8 26.6843 8.38727 26.5701 8.82228L22.4331 24.9708C22.27 25.6127 21.6883 26 21.0795 26C20.7914 26 20.4978 25.9151 20.2423 25.7241L12.5881 20.0584L22.4059 11.6605L10.593 18.5836L12.8164 23.0716L12.5718 20.0637L15.665 22.3554L12.8979 24.6472C12.8381 24.7003 12.7675 24.7215 12.6968 24.7215C12.5772 24.7215 12.4685 24.6525 12.4141 24.5464L12.4087 24.5305V24.5252L9.45137 18.7533L4.55331 17.1353C3.94989 16.9337 3.93358 16.1061 4.53157 15.8833L25.6677 8.04244Z" fill="url(#paint0_linear_405_1275)" />
                            <defs>
                                <linearGradient id="paint0_linear_405_1275" x1="0.00250489" y1="16.0047" x2="32.7278" y2="16.0047" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#676875" />
                                    <stop offset="1" stop-color="#50505E" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </a>
                    <a href="http://">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clip-path="url(#clip0_405_1279)">
                                <path d="M20.6079 0H11.0135C2.25083 0 0.166504 2.1328 0.166504 11.0832V20.9008C0.166504 29.8656 2.23519 32 10.9978 32H20.5923C29.3533 32 31.4392 29.8832 31.4392 20.9168V11.0992C31.4392 2.1328 29.3705 0 20.6079 0ZM25.413 22.832H23.1316C22.2685 22.832 22.0089 22.1168 20.4609 20.5328C19.11 19.2 18.5392 19.0336 18.1968 19.0336C17.7246 19.0336 17.5948 19.1664 17.5948 19.8336V21.9328C17.5948 22.5008 17.415 22.8336 15.9655 22.8336C14.5588 22.7369 13.1946 22.2995 11.9854 21.5576C10.7762 20.8158 9.75655 19.7905 9.01043 18.5664C7.2391 16.3104 6.0066 13.6626 5.41094 10.8336C5.41094 10.4832 5.54072 10.1664 6.19276 10.1664H8.47254C9.0589 10.1664 9.26999 10.4336 9.49985 11.0496C10.6069 14.384 12.4958 17.2832 13.262 17.2832C13.5559 17.2832 13.6841 17.1504 13.6841 16.4V12.9664C13.5872 11.4 12.7741 11.2672 12.7741 10.7008C12.7845 10.5514 12.8515 10.4121 12.9606 10.3123C13.0698 10.2125 13.2127 10.1602 13.3589 10.1664H16.9428C17.4322 10.1664 17.5948 10.416 17.5948 11.016V15.6496C17.5948 16.1504 17.8059 16.3168 17.9529 16.3168C18.2468 16.3168 18.4736 16.1504 19.0114 15.6C20.1668 14.1583 21.1107 12.5521 21.8135 10.832C21.8853 10.6254 22.0213 10.4485 22.2005 10.3283C22.3798 10.2081 22.5926 10.1513 22.8064 10.1664H25.0877C25.771 10.1664 25.9165 10.5168 25.771 11.016C24.9415 12.9175 23.9151 14.7225 22.7094 16.4C22.464 16.784 22.3654 16.984 22.7094 17.4336C22.9362 17.784 23.7352 18.4672 24.2731 19.1168C25.0548 19.9146 25.7039 20.8377 26.1948 21.8496C26.3902 22.4992 26.0634 22.832 25.413 22.832Z" fill="url(#paint0_linear_405_1279)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_405_1279" x1="0.168897" y1="16.0047" x2="31.4397" y2="16.0047" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#676875" />
                                    <stop offset="1" stop-color="#50505E" />
                                </linearGradient>
                                <clipPath id="clip0_405_1279">
                                    <rect width="31.2727" height="32" fill="white" transform="translate(0.166504)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Header;