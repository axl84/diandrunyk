import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.facebook.com/diandrunyk" target="_blank" className="icon fa-facebook-f"><span className="label">FB</span></a></li>
                        <li><a href="https://www.instagram.com/diandrunyk/" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="https://www.behance.net/diandrunyk" target="_blank" className="icon fa-behance"><span className="label">Behance</span></a></li>
                        <li><a href="mailto:diandrunyk@gmail.com" target="_top" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Diana Andrunyk Photography</li><li>2018</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
