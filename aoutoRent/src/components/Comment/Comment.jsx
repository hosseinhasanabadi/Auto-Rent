import React, { useEffect, useState } from "react";
import commentData from "../../../db.json";
import { data } from "react-router";
import useFetchData from "../../Api/useFetch";
function Comment() {
  //روش اول
  // const [comment, setComment] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/commentData")
  //     .then((response) => response.json())
  //     .then((data) => setComment(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  //روش 2

  const {
    data: comment,
    loading,
    error,
  } = useFetchData("http://localhost:5000/commentData");
  if (loading)
    return <p className="text-center text-blue-500">در حال بارگذاری...</p>;
  if (error) return <p className="text-center text-red-500">خطا: {error}</p>;
  return (
    <section
      className="container mx-auto py-10 lg:px-32 w-full 
  overflow-hidden "
      id="Testimonalis"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        نظرات
        <span
          className="underline underline-offset-4 decoration-1 
      under font-light "
        >
          {" "}
          و پیشنهادات
        </span>
      </h1>

      <div className=" flex flex-wrap justify-center gap-8 mt-4">
        {comment.map((comment, index) => (
          <div
            key={index}
            className="bg-white border-white rounded-2xl p-6 shadow-lg max-w-sm text-center"
          >
            <img
              src={comment.image}
              alt={comment.alt}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">{comment.name}</h3>
            <p className="text-gray-600 text-sm">{comment.title}</p>
            <p className="text-gray-800 mt-2">{comment.text}</p>
            <di className="flex justify-center mt-3">
              {Array(comment.rating)
                .fill("⭐")
                .map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
            </di>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Comment;
