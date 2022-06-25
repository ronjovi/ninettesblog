import "./topbar.css"

export default function TopBar(){
    return (
        <div className="top">
            <div className="topLeft"></div>
            <div className="topCenter"></div>
                <ul className="topList">
                   <li className="topListItem"> HOME</li> 
                   <li className="topListItem"> ABOUT</li> 
                   <li className="topListItem"> CONTACT</li> 
                   <li className="topListItem"> WRITE</li> 
                   <li className="topListItem"> LOGOUT</li> 
                </ul>
            <div className="topRight"></div>
                <img className="topImg"src="https://elcentro.stanford.edu/sites/g/files/sbiybj19821/files/styles/responsive_large/public/media/image/ninette_0.jpg?itok=zoLwzwUP" 
                alt=""/> 
        </div>
    )
}