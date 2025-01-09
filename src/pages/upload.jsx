import { useState } from "react";

const Upload = () => {

    const [imageURL, setImageURL] = useState(null);
    const [videoFile, setVideoFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const imageURL = URL.createObjectURL(file);
        setImageURL(imageURL)
    }

    const handleVideoChange = (event) => {
        const file = event.target.files[0];
        const videoFile = URL.createObjectURL(file);
        setVideoFile(videoFile)
    }
    return ( 
        <div className="container">
            <div className="up_inner">
                <h2>Upload Video</h2>
                <form action="#" className="data-form">
                    <div className="video-data">
                        <div className="video-container">
                            <input type="file" name="videoFile" id="inputVideo" onChange={handleVideoChange}/>
                            <video src={videoFile} className="video"></video>
                        </div>

                        <div className="video-thumbnail">
                            <input type="file" name="videoFile" id="inputThumb" onChange={handleFileChange}/>
                            {imageURL && (
                                <img src={imageURL} alt="Video Thumnail" className="videoThumb"/>
                            )}
                        </div>



                        <div className="video-metadata"></div>
                    </div>
                    <div className="input-containers">

                        <div className="input-group">
                            <label className="label" htmlFor="inputTitle">Video Title</label>
                            <input id="inputTitle" type="text" placeholder="Video Title" className="video-title input" />
                        </div>

                        <div className="input-group">
                            <label className="label" htmlFor="inputDescription">Description</label>
                            <textarea id="inputDescription" placeholder="Describe the video(maximum of 5000 characters)" className="video-title input" />
                        </div>

                        <input type="submit" value="Upload Video" className="input btn btn-submit"/>
                        <input type="reset" value="Cancel" className="input btn btn-outline btn-cancel"/>
                    </div>


                </form>
            </div>
        </div>
     );
}
 
export default Upload;