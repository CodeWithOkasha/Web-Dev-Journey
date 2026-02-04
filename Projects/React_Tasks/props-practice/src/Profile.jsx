import React from "react";
function Profile(props)
{
    return(
        
      <div className="profileDiv">
<img src={props.image} className="profileImage" />
<h4 className="profileName">{props.name}</h4>
<p className="profileProfession">{props.profession}</p>
<hr />
<p className="profileEmail">{props.email}</p>
      </div>
    );
}
export default Profile;