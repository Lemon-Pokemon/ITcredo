import { scroller } from 'react-scroll';

import './Preview.css'

function Preview() {
    return (
        <div className="preview block">
            <p className="title">Ваш партнер в мире цифровых решений</p>
            <span className="preview_info">
                iOS и Android, WEB, IT-СИСТЕМ, CRM, VR - технологии, нейронные сети - комплексная разработка, внедрение и эксплуатация
            </span>

            <button id="blue_button" className="big_button" onClick={() => {
                            scroller.scrollTo("feedback", {
                                offset: -350,
                                smooth: true,
                            })
                        }}>
                Заказать проект
            </button>
        </div>
    )
}

export default Preview;