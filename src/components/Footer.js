import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="#" className="icon fa-facebook-messenger"><span className="label">Messenger</span></a></li>
                        <li><a href="#" className="icon fa-telegram"><span className="label">Telegram</span></a></li>
                        <li><a href="#" className="icon fa-behance"><span className="label">Behance</span></a></li>
                        <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
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
