type IComment = {
  commentId: number;
  commentContent: string;
  replies?: IComment[];
};

const comments: IComment[] = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

const countComments = (comments: IComment[]): number => {
  // menghitung total komentar, termasuk komentar balasan
  let total = comments.length;

  // iterasi setiap komentar untuk menghitung jumlah balasan
  for (let comment of comments) {
    // jika komentar memiliki balasan, tambahkan jumlah balasan ke total
    if (comment.replies) {
      // panggil fungsi rekursif untuk menghitung jumlah komentar dalam balasan
      total += countComments(comment.replies);
    }
  }

  return total; // mengembalikan total komentar yang dihitung
};

console.log(countComments(comments));
