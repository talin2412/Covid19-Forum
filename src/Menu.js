import React, { useEffect, useState } from "react";
import "./Menu.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import MenuChannel from "./MenuChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import db, { auth } from "./firebase";

function Menu() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");

    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };

  return (
    <div class="menu">
      <div class="menu_top">
        <h3>Let's Talk</h3>
        <ExpandMoreIcon />
      </div>

      <div className="menu_channels">
        <div className="menu_channels_header">
          <div className="menu_header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>

          <AddIcon onClick={handleAddChannel} className="menu_addChannel" />
        </div>

        <div className="menu_channelsList">
          {channels.map(({ id, channel }) => (
            <MenuChannel key={id} id={id} channelName={channel.channelName} />
          ))}
        </div>
      </div>

      <div className="menu__voice">
        <SignalCellularAltIcon className="menu__voiceIcon" fontSize="large" />
        <div className="menu__voiceInfo">
          <h3>Connected</h3>
          <p>Stable</p>
        </div>

        {/* <div className="menu__voiceIcons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div> */}
      </div>
      {/* can add src into avatar icon to replace profile image. */}
      <div className="menu__profile">
        <Avatar src={user.photo} />
        <div className="menu__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>

        <div className="menu__profileIcons">
          {/* <MicIcon />
                    <HeadsetIcon /> */}
          <ExitToAppIcon onClick={() => auth.signOut()} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
