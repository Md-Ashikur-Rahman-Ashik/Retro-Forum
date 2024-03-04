// Fetching Post data form API

async function getPostData() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();
  // console.log(data);
  // console.log(data.posts[0].image);
  const imgUrl = data.posts[0].image;
//   console.log(imgUrl);

  // Display first data from API
  function getFirstElement() {
    const image = document.getElementById("firstImg");
    // let imageHtml = image.innerHTML;
    // console.log(imgUrl);
    // console.log(image.innerHTML);
    let active = data.posts[0].isActive;
    // console.log(active);
    if(active === false){
        const act = document.getElementsByClassName("active");
        act.classList.remove("hidden");
    }
    image.innerHTML = `
        <img class="w-1/6 relative rounded-2xl" src="${imgUrl}">
        <div class="rounded-full bg-[#10B981] border absolute w-[18px] h-[18px] left-56 top-[930px]"></div>
        <div class="active hidden rounded-full bg-[#FF3434] border absolute w-[18px] h-[18px] left-56 top-[930px]"></div>
    `;
  }
  getFirstElement();

   // Display second data from API
   function getSecondElement() {
    const image = document.getElementById("firstImg");
    // let imageHtml = image.innerHTML;
    // console.log(imgUrl);
    // console.log(image.innerHTML);
    let active = data.posts[0].isActive;
    // console.log(active);
    if(active === false){
        const act = document.getElementsByClassName("active");
        act.classList.remove("hidden");
    }
    image.innerHTML = `
        <img class="w-1/6 relative rounded-2xl" src="${imgUrl}">
        <div class="rounded-full bg-[#10B981] border absolute w-[18px] h-[18px] left-56 top-[930px]"></div>
        <div class="active hidden rounded-full bg-[#FF3434] border absolute w-[18px] h-[18px] left-56 top-[930px]"></div>
    `;
  }
  getFirstElement();
}

getPostData();
