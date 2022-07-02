const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];
  
  const addImg = () => {
    const allImages = document.querySelector("ul.gallery");
     allImages.style.display = "flex";
     allImages.style.justifyContent = "center";
     allImages.style.flexDirection = "row";
     allImages.style.listStyle = "none";
     allImages.setAttribute("flex-direction", "center", "row");

     for (const img of images) {
        allImages.insertAdjacentHTML(
            `beforeend`,
            `<li style="margin:10px"><img src = ${img.url}
            alt = '${img.alt}' width="375" height="175"></li>`
       );
     }
     const contentStyle = document.querySelectorAll("li");
  };

addImg();