function ProfilePic({url="",
    classname=''
})

{
  return (
    <div id="profilePic" className={`${classname} bg-cover shadow-[4px_4px_100px_10px_var(--colors-primary-royalBlue,#0A2540)]`}
    style={{
        backgroundImage: `url(${url})`,
      }}
    ></div>
  )
}

export default ProfilePic