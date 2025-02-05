import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
// css
import "./styles.scss";

function VideoModel({
  videoId = "g6YMKwMEkfk?si=bjB36_xLQ-o56eTb",
  isOpen,
  setOpen,
}) {
  return (
    <div className="videoCOntainer">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

export default VideoModel;
