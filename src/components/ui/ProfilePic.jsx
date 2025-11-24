function ProfilePic({ url = "", classname = "" }) {
  return (
    <div
      id="profilePic"
      className={`${classname}
      bg-cover `}
      style={{
        backgroundImage: `url(${url})`,
      }}
    ></div>
  );
}

export default ProfilePic;
