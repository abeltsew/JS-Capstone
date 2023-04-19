const renderLike = async (id, likes) => {
  likes.then((data) => {
    data.forEach((element) => {
      if (element.item_id === id) {
        document.getElementById(`likes${id}`).innerHTML = element.likes;
      }
    });
  });
};
export default renderLike;
