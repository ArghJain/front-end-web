import { useEffect, useState, createContext } from "react";
import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";

function Discussions() {
  const [comments, setComments] = useState([
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "2022-02-08T17:10:17.090Z",
      score: 12,
      user: {
        image: {
          png: "../assets/images/avatars/image-amyrobson.png",
          webp: "./assets/images/avatars/image-amyrobson.webp",
        },
        username: "amyrobson",
      },
      replies: [],
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2022-05-09T17:10:17.090Z",
      score: 5,
      user: {
        image: {
          png: "../assets/images/avatars/image-maxblagun.png",
          webp: "./assets/images/avatars/image-maxblagun.webp",
        },
        username: "maxblagun",
      },
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "2022-05-10T17:10:17.090Z",
          score: 4,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: "../assets/images/avatars/image-ramsesmiron.png",
              webp: "./assets/images/avatars/image-ramsesmiron.webp",
            },
            username: "ramsesmiron",
          },
        },
        {
          id: 4,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: "2022-05-13T17:10:17.090Z",
          score: 2,
          replyingTo: "ramsesmiron",
          user: {
            image: {
              png: "../assets/images/avatars/image-juliusomo.png",
              webp: "./assets/images/avatars/image-juliusomo.webp",
            },
            username: "juliusomo",
          },
        },
      ],
    },
  ]);

  const updateScore = (id, commentArrIndex, operation) => {};

  const addComment = async (postId, newComment) => {};

  const deleteComment = async (postId, commentId) => {};

  const editComment = async (id, newContent) => {};

  return (
    <section className={`min-w-screen min-h-screen bg-lightGray py-8`}>
      <div className="mx-auto max-w-2xl">
        <CommentForm addComment={addComment} />

        {comments.map((comment, index) => (
          <Comment
            key={comment.id}
            commentArrIndex={index}
            comment={comment}
            updateScore={updateScore}
            addComment={addComment}
            onDelete={deleteComment}
            editComment={editComment}
          />
        ))}
      </div>
    </section>
  );
}

export default Discussions;