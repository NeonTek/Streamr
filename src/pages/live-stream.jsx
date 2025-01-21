import React, { useState } from "react";

import { FaCopy } from "react-icons/fa";

import { Live } from "../test-data/test";

const LiveStream = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    if (!modalOpen) {
      const modal = (document.querySelector(".manager-modal").style.display =
        "flex");
      setModalOpen(true);
    } else {
      const modal = (document.querySelector(".manager-modal").style.display =
        "none");
      setModalOpen(false);
    }
  };

  return (
    <div className="container">
      <div className="title-container">
        <h2>Live Videos</h2>
        <button className="btn add-live-btn" onClick={handleModal}>
          {modalOpen ? "Close Stream Manager" : "Open Stream Manager"}
        </button>
      </div>

      <div className="live_inner">
        <div className="manager-modal">
          <div className="new-stream">
            <p>New Stream</p>
            <div className="input-group">
              <label className="label" htmlFor="streamKeyInput">
                Stream Key
              </label>
              <input
                type="text"
                className="input stream-key-input"
                id="streamKeyInput"
                placeholder="Enter Stream Key"
              />
            </div>

            <div className="input-group">
              <label className="label" htmlFor="streamTitle">
                Stream Title
              </label>
              <input
                type="text"
                className="input stream-video-input"
                id="streamTitle"
                placeholder="Live video title"
              />
            </div>
          </div>
          <div className="stream-keys">
            <p>Manage Stream Keys</p>
            <div className="manage-keys">
              <div className="action-input input-gro">
                <input
                  type="text"
                  className="input"
                  placeholder="Stream Key"
                  value="GHAGSY3565AGSHFJ475J"
                />
                <div className="icon-container">
                  <FaCopy className="icon icon-primary" />
                </div>
              </div>
              <button className="btn btn-generate-new">Generate New Key</button>
            </div>
          </div>
        </div>

        <h3>Live Now</h3>
        <div className="section">
          {Live.now.map((item, index) => (
            <div className="live-card now" key={index}>
              <div className="live-circle"></div>
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>

        {/* Schedule Section */}
        <h3>Scheduled</h3>
        <div className="section">
          {Live.scheduled.map((item, index) => (
            <div className="live-card scheduled" key={index}>
              <h2>
                {item.title.length > 20
                  ? item.title.substring(0, 20) + "..."
                  : item.title}
              </h2>
              <div>
                <p className="timestamp">{item.timeStamp}</p>
                <a href={item.url}>Visit</a>
              </div>
            </div>
          ))}
        </div>

        {/* Past section */}
        <h3>Past Streams</h3>
        <div className="section">
          {Live.past
            ? Live.past.map((item, index) => (
                <div className="live-card past" key={index}>
                  <h2>
                    {item.title.length > 20
                      ? item.title.substring(0, 20) + "..."
                      : item.title}
                  </h2>
                  <div>
                    <p className="timestamp">{item.timeStamp}</p>
                    <a href={item.url}>Visit</a>
                  </div>
                </div>
              ))
            : (document.createElement("p").textContent =
                "No data found for past live streams.")}
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
