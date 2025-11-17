function ProfilePic({ url = "", classname = "" }) {
  return (
    <div
      id="profilePic"
      className={`${classname} bg-primary-golden/54
      bg-cover shadow-[0_0_131px_100px_rgba(255,213,74,0.56)] `}
      style={{
        backgroundImage: `url(${url})`,
      }}
    ></div>
  );
}

export default ProfilePic;
