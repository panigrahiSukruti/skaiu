const Header = () => {
  return (
    <div>
      <div
        style={{ display: "flex", alignItems: "flex-start", columnGap: "6px" }}
      >
        <img
          src="Logo/directright.png"
          alt="Logo"
          height={"32px"}
          width={"32px"}
        ></img>
        <img
          src="Logo/LAMA.png"
          alt="LogoText"
          height={"18px"}
          width={"72px"}
          style={{ paddingTop: "5px" }}
        ></img>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          columnGap: "6px",
          marginRight: "10px",
        }}
      >
        <img
          src="Logo/SettingIcon.png"
          alt="setting"
          height={"40px"}
          width={"40px"}
        ></img>
        <img
          src="Logo/noti_Icon.png"
          alt="notification"
          height={"40px"}
          width={"40px"}
        ></img>
      </div>
    </div>
  );
};

export default Header;
