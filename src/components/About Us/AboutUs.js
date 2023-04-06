import { display } from "@mui/system";
import ProfileCard from "./Card";

function AboutUs() {
  return (
    <div className="wrapper-container">
      <div className="flex-container">
        <div className="first-box">
          <ProfileCard />
        </div>
        <div className="second-box">
          <ProfileCard />
        </div>
        <div className="third-box">
          <ProfileCard />
        </div>
        <div className="fourth-box">
          <ProfileCard />
        </div>
      </div>
      <div className="text-about">
        <p>Lorem ergregeegege</p>
        <p>Lorem gegegggeg</p>
        <p>Lorem gegeggeeg</p>
        <p>Lorem gegegeggeg</p>
      </div>
      <div className="btn-divider">
        <button className="btn btn-primary">View More</button>
        <button className="btn btn-primary">View More</button>
        <button className="btn btn-primary">View More</button>
        <button className="btn btn-primary">View More</button>
      </div>
    </div>
  );
}
export default AboutUs;
