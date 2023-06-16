const socket = new WebSocket("wss://revard.meppu.boo/gateway");

socket.onopen = () => {
  socket.send(
    JSON.stringify({
      event: "subscribe",
      ids: ["01F6YN5JWMHJFKPDZVYB6434HX"],
    })
  );

  setInterval(() => {
    socket.send(`{ "event": "ping" }`);
  }, 30000);
};

socket.onmessage = ({ data: message }) => {
  const { type, data } = JSON.parse(message);

  if (type == "init") {
    const user = data[0];

    setUsername(user);
    setAvatar(user.avatar);
    setStatus(user.status);
    setBackground(user.profile);
  } else {
    const update = data.data;

    if (update.status) {
      setStatus(update.status);
    }

    if (update.avatar) {
      setAvatar(update.avatar);
    }

    if (update.discriminator && update.username) {
      setUsername(update);
    }

    if (update.profile) {
      setBackground(update.profile);
    }
  }
};

function setAvatar(avatar) {
  const avatarElement = document.getElementById("avatar");
  avatarElement.src = `https://autumn.revolt.chat/avatars/${avatar._id}?max_side=128`;
}

function setUsername({ username, discriminator }) {
  const usernameElement = document.getElementById("username");
  usernameElement.innerText = `${username}#${discriminator}`;
}

function setStatus({ presence }) {
  const borderColors = {
    Focus: "#4e4bff",
    Online: "#baffa9",
    Idle: "#f6ff7d",
    Busy: "#ff7d7d",
    Invisible: "#777",
  };

  const avatarElement = document.getElementById("avatar");
  avatarElement.style.border = `4px solid ${borderColors[presence]}`;
}

function setBackground({ background }) {
  const revoltElement = document.getElementById("revolt");
  revoltElement.style.background = `url(https://autumn.revolt.chat/backgrounds/${background._id})`;
}
