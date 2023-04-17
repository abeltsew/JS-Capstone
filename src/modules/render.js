const main = document.querySelector(".main");
const renderMeal = (item) => {
    const div = document.createElement("div");
    div.classList.add("list");
    div.innerHTML = `
      <div class="image">
      <img
        src="${item.strMealThumb}" alt=""
      />
    </div>
    <div class="description">
      <h5 class="description-header">
      ${item.strMeal}
     
      </h5>
      
        <button class="like" id= "${item.idMeal}">
           <i class="far fa-heart fa-2x"></i><span>10</span>
        </button>
  
    </div>
    <button class="like" id= "${item.idMeal}">See More</button>
  `;
    main.append(div);
  };
  export {renderMeal}