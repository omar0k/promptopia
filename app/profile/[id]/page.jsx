"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Profile from "@components/Profile";
const MyProfile = ({ params }) => {
  const [posts, setPosts] = useState([]);
  const userName = useSearchParams().get("name");
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    if (params.id) fetchPosts();
  }, []);

  return (
    <Profile
      name={userName}
      data={posts}
    />
  );
};
export default MyProfile;
