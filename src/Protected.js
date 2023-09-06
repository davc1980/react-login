import React from "react";
import netlifyIdentity from "netlify-identity-widget";

export default function Protected() {
  const user = netlifyIdentity.currentUser();
  console.log(user);
  return (
    <div className="user_tag">
      Welcome!! <b>{user.email}</b>
    </div>
  );
}
