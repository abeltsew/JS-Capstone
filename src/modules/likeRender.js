const renderLike = async (id) => {
    const likes = await fetchLikes();
    likes.forEach((element) => {
      if (element.item_id == id) {
        document.getElementById(`likes${id}`).innerHTML = element.likes;
      }
    });
    
  };
  export {renderLike}