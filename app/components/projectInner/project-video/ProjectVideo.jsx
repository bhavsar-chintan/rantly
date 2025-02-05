import Image from "next/image";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { FaCirclePlay } from "react-icons/fa6";
import ModalVideo from "react-modal-video";
// img
import posterImg from "../../../assets/home/comslider1.webp";

// css
import "./styles.scss";

const ProjectVideo = ({ projectVideo, videoThumbnail }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="project_video_area mtb-60">
      <Container>
        <div className="video_container">
          <figure>
            <Image
              src={
                videoThumbnail
                  ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL + videoThumbnail
                  : posterImg
              }
              alt="project"
              layout="fill"
              objectFit="cover"
            />
          </figure>
          <div className="icon_wrape" onClick={() => setOpen(true)}>
            <FaCirclePlay className="icon_style" />
          </div>
        </div>
        <ModalVideo
          // channel={"vimeo"}
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId={projectVideo?.split("/")?.[3]}
          allowFullScreen={true}
          ratio="16:9"
          onClose={() => setOpen(false)}
        />
      </Container>
    </div>
  );
};

export default ProjectVideo;
