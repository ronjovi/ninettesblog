import "./write.css"

export default function Write(){
    return(
        <div className="write">
            <form className="writeForm"> 
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"></label>
                    <input type= "file" name="" id="fileInput"/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell a story..." 
                    type="text" 
                    className="writeInput writeText"
                    ></textarea>
                </div>
                <button className="writeSubmit">
                    Publish
                </button>
            </form>
        </div>
    )
}