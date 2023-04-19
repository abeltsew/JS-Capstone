let commentList = [];
export default (comment, commentsHeader, add) => {
  if (add) {
    if (comment.length === 0) {
      commentsHeader.innerHTML = 'comments (1)';
    } else {
      commentList.push(comment);
      commentsHeader.innerHTML = `comments (${commentList.length})`;
    }
  } else {
    commentList = [...comment];
    commentsHeader.innerHTML = `comments (${comment.length})`;
  }
};
