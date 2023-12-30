import React from "react";
// import "./Line";
import "./Style.css";
import { getUsers } from "./Api/api";
import { useEffect, useState } from "react";
import { Tab, Toolbar } from "@mui/material";

const Dashboard = () => {
  const [users, setusers] = useState([]);

  const getUsersdetails = async () => {
    let response = await getUsers();
    // console.log(response);
    setusers(response.data);
  };
  useEffect(() => {
    getUsersdetails();
  }, []);
  return (
    <>
    <div className="dashboard">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <div className="text-wrapper"> My Projects</div>
          </div>
          <div className="frame">
            <div className="frame-2">
              <div className="frame-3">
                <div className="frame-4">
                  <div className="text-wrapper-2">Free Trial</div>
                  <div className="text-wrapper-2">|</div>
                  <div className="text-wrapper-3">2days left</div>
                </div>
                <div className="text-wrapper-4">Extend free trail</div>
              </div>
              <img className="ellipse" alt="Ellipse" src="ellipse-1.svg" />
            </div>
            <img className="page" alt="Page" src="page-1.png" />
          </div>
        </div>

        {/* <div>

          
            {
            users.map((user)=>(
              <div className="abc">
                
                <img src={user.download_url} alt="" />
                
              </div>
            ))

            }
          
        </div> */}
        <div className="frame-5">
          {users.map((user) => (
            <>
              <div className="element-add-plus-new">
                <img
                  alt="Element add plus new"
                  src={user.download_url}
                  style={{ width: "100%", height:"250px" }}
                />
                <div>{user.author}</div>
                <a href={user.download_url}>Download Link</a>

              </div>
             
            </>
          ))}
        </div>

        <div className="overlap-group-2">
          {/* <Line className="line-instance" />
        <Line className="icon-instance-node" /> */}
          <div className="frame-6">
            <img
              className="img"
              alt="Element bxs coin"
              src="9055184-bxs-coin-stack-icon-1.svg"
            />
            <div className="text-wrapper-7">My Projects</div>
          </div>
          <div className="frame-7">
            <img className="group" alt="Group" src="group-4.png" />
            <div className="text-wrapper-8">Sample Projects</div>
          </div>
          <div className="group-2">
            <img
              className="element-multimedia"
              alt="Element multimedia"
              src="6127246-multimedia-music-play-player-video-icon-1.svg"
            />
            <div className="text-wrapper-9">Intro to Necleo</div>
          </div>
          <div className="frame-8">
            <img
              className="img"
              alt="Element help circled"
              src="211674-help-circled-icon-1.svg"
            />
            <div className="text-wrapper-10">Help &amp; Support</div>
          </div>
          <div className="frame-9">
            <img
              className="img"
              alt="Element feedback ic"
              src="3669434-feedback-ic-icon-1-1.svg"
            />
            <div className="text-wrapper-10">Feedback</div>
          </div>
          <div className="frame-10">
            <img
              className="img"
              alt="Element ic fluent"
              src="8686063-ic-fluent-panel-right-expand-icon-1.svg"
            />
            <div className="text-wrapper-11">Collapse</div>
          </div>
          <img className="group-3" alt="Group" src="group-5.png" />
          <div className="frame-11">
            <img
              className="img"
              alt="Element ic fluent"
              src="8674394-ic-fluent-apps-regular-icon-1.svg"
            />
            <div className="text-wrapper-10">Apps</div>
          </div>
        </div>
      </div>
    </div>
     <Toolbar>
     <Tab to="/add">Add user dawdhqwdja</Tab>
    
  </Toolbar>
  </>
  );
 
};

export default Dashboard;
