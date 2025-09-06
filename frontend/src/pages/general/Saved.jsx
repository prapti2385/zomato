import React, { useEffect, useState } from "react";
import "../../styles/reels.css";
import axios from "axios";
import ReelFeed from "../../components/ReelFeed";

const toNum = (v, def = 0) => (Number.isFinite(Number(v)) ? Number(v) : def);

const Saved = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/food/save", { withCredentials: true })
      .then((response) => {
        const savedFoods = (response.data?.savedFoods || []).map((item) => {
          const f = item.food || {};
          return {
            _id: f._id,
            video: f.video,
            description: f.description,
            likeCount: toNum(f.likeCount, 0),
            savesCount: toNum(f.savesCount, 0),
            commentsCount: toNum(f.commentsCount, 0),
            foodPartner: f.foodPartner,
          };
        });
        setVideos(savedFoods);
      })
      .catch((err) => {
        console.error(err?.response?.data || err.message);
        setVideos([]);
      });
  }, []);

  const removeSaved = async (item) => {
    try {
      await axios.post(
        "http://localhost:3000/api/food/save",
        { foodId: item._id },
        { withCredentials: true }
      );
      setVideos((prev) =>
        prev.map((v) => {
          if (v._id !== item._id) return v;
          const current = toNum(v.savesCount, 0);
          const next = Math.max(0, current - 1);
          return { ...v, savesCount: next };
        })
      );
    } catch (err) {
      console.error(err?.response?.data || err.message);
    }
  };

  return (
    <ReelFeed
      items={videos}
      onSave={removeSaved}
      emptyMessage="No saved videos yet."
    />
  );
};

export default Saved;
