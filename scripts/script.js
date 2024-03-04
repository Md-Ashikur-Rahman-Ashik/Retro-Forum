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
    const image = document.getElementById("firstElement");
    // let imageHtml = image.innerHTML;
    // console.log(imgUrl);
    // console.log(image.innerHTML);
    let active = data.posts[0].isActive;
    // console.log(active);

    image.innerHTML = `
        <div class="w-1/6">
          <img class="w-1/2 relative rounded-2xl" src="${imgUrl}">
          <div id="status" class="rounded-full border absolute w-[15px] h-[15px] left-[200px] top-[965px]"></div>
        </div>
        <div class="">
            <!-- Description -->
            <div class="flex gap-6">
              <!-- Music and Author area -->
              <p>#${data.posts[0].category}</p>
              <p>Author : ${data.posts[0].author.name}</p>
            </div>
            <!-- Title and others -->
            <div>
              <h5 class="text-[#12132D] font-mulish font-bold text-xl pb-4">${data.posts[0].title}</h5>
              <p class="font-inter text-[#12132d99] pb-4 border-b-4 border-dotted">It’s one thing to subject yourself to ha Halloween costume mishap because, hey that’s your prerogative</p>
            </div>
            <!-- Icons -->
            <div class="pt-4 flex gap-4">
              <div class="flex items-center gap-4">
              <svg width="22.500000" height="21.333374" viewBox="0 0 22.5 21.3334" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs/>
              <path id="Vector" d="M6.58334 6.58337L15.9167 6.58337M6.58334 11.25L13.5833 11.25M4.25 17.0834C3.32174 17.0834 2.4315 16.7146 1.77512 16.0582C1.11875 15.4019 0.75 14.5116 0.75 13.5834L0.75 4.25C0.75 3.32178 1.11875 2.43152 1.77512 1.77515C2.4315 1.11877 3.32174 0.75 4.25 0.75L18.25 0.75C19.1783 0.75 20.0685 1.11877 20.7249 1.77515C21.3812 2.43152 21.75 3.32178 21.75 4.25L21.75 13.5834C21.75 14.5116 21.3812 15.4019 20.7249 16.0582C20.0685 16.7146 19.1783 17.0834 18.25 17.0834L14.75 17.0834L11.25 20.5834L7.75 17.0834L4.25 17.0834Z" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round"/>
            </svg>
            <p>${data.posts[0].comment_count}</p>
            </div>
              <div class="flex gap-4 items-center">
              <svg width="22.500000" height="15.500000" viewBox="0 0 22.5 15.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs/>
              <path id="Vector" d="M9.60009 9.3999C10.0377 9.83752 10.6312 10.0834 11.25 10.0834C11.8688 10.0834 12.4623 9.83752 12.8999 9.3999C13.3375 8.96228 13.5833 8.3689 13.5833 7.75C13.5833 7.1311 13.3375 6.53772 12.8999 6.1001C12.4623 5.66248 11.8688 5.41663 11.25 5.41663C10.6312 5.41663 10.0377 5.66248 9.60009 6.1001C9.1625 6.53772 8.91667 7.1311 8.91667 7.75C8.91667 8.3689 9.1625 8.96228 9.60009 9.3999ZM11.25 14.75C7.05 14.75 3.55 12.4166 0.75 7.75C3.55 3.08337 7.05 0.75 11.25 0.75C15.45 0.75 18.95 3.08337 21.75 7.75C18.95 12.4166 15.45 14.75 11.25 14.75Z" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round"/>
            </svg>
            <p>${data.posts[0].view_count}</p>
              </div>
              <div class="flex gap-4 items-center">
              <svg width="22.500000" height="22.500000" viewBox="0 0 22.5 22.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs/>
              <path id="Vector" d="M1.54926 15.2682C2.07694 16.5421 2.85036 17.6996 3.82538 18.6746C4.80039 19.6497 5.95791 20.4231 7.23183 20.9507C8.50574 21.4784 9.87112 21.75 11.25 21.75C12.6289 21.75 13.9943 21.4784 15.2682 20.9507C16.5421 20.4231 17.6996 19.6497 18.6746 18.6746C19.6496 17.6996 20.4231 16.5421 20.9507 15.2682C21.4784 13.9943 21.75 12.6289 21.75 11.25C21.75 9.87109 21.4784 8.50574 20.9507 7.23181C20.4231 5.95789 19.6496 4.80042 18.6746 3.82544C17.6996 2.85034 16.5421 2.0769 15.2682 1.54932C13.9943 1.02161 12.6289 0.75 11.25 0.75C9.87112 0.75 8.50574 1.02161 7.23183 1.54932C5.95791 2.0769 4.80039 2.85034 3.82538 3.82544C2.85036 4.80042 2.07694 5.95789 1.54926 7.23181C1.02159 8.50574 0.75 9.87109 0.75 11.25C0.75 12.6289 1.02159 13.9943 1.54926 15.2682ZM11.25 5.41663L11.25 11.25L7.16666 11.25" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
            </svg>
            <p>${data.posts[0].posted_time} min</p>
              </div>
            </div>
          </div>
    `;
    if (active === false) {
      const act = document.getElementById("status");
      console.log(act);
      act.classList.add("bg-[#FF3434]");
    }else{
      const act = document.getElementsById("status");
      console.log(act);
      act.classList.add("bg-[#10B981]")
    }
  }
  getFirstElement();

  // Display first data from API
  function getSecondElement() {
    const image = document.getElementById("secondElement");
    // let imageHtml = image.innerHTML;
    // console.log(imgUrl);
    // console.log(image.innerHTML);
    let active = data.posts[1].isActive;
    console.log(active);

    image.innerHTML = `
        <div class="w-1/6">
          <img class="w-1/2 relative rounded-2xl" src="${imgUrl}">
          <div class="rounded-full active border absolute w-[15px] h-[15px] left-[200px] top-[965px]"></div>
        </div>
        <div class="">
            <!-- Description -->
            <div class="flex gap-6">
              <!-- Music and Author area -->
              <p>#${data.posts[1].category}</p>
              <p>Author : ${data.posts[1].author.name}</p>
            </div>
            <!-- Title and others -->
            <div>
              <h5 class="text-[#12132D] font-mulish font-bold text-xl pb-4">${data.posts[1].title}</h5>
              <p class="font-inter text-[#12132d99] pb-4 border-b-4 border-dotted">It’s one thing to subject yourself to ha Halloween costume mishap because, hey that’s your prerogative</p>
            </div>
            <!-- Icons -->
            <div class="pt-4 flex gap-4">
              <div class="flex items-center gap-4">
              <svg width="22.500000" height="21.333374" viewBox="0 0 22.5 21.3334" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs/>
              <path id="Vector" d="M6.58334 6.58337L15.9167 6.58337M6.58334 11.25L13.5833 11.25M4.25 17.0834C3.32174 17.0834 2.4315 16.7146 1.77512 16.0582C1.11875 15.4019 0.75 14.5116 0.75 13.5834L0.75 4.25C0.75 3.32178 1.11875 2.43152 1.77512 1.77515C2.4315 1.11877 3.32174 0.75 4.25 0.75L18.25 0.75C19.1783 0.75 20.0685 1.11877 20.7249 1.77515C21.3812 2.43152 21.75 3.32178 21.75 4.25L21.75 13.5834C21.75 14.5116 21.3812 15.4019 20.7249 16.0582C20.0685 16.7146 19.1783 17.0834 18.25 17.0834L14.75 17.0834L11.25 20.5834L7.75 17.0834L4.25 17.0834Z" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round"/>
            </svg>
            <p>${data.posts[1].comment_count}</p>
            </div>
              <div class="flex gap-4 items-center">
              <svg width="22.500000" height="15.500000" viewBox="0 0 22.5 15.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs/>
              <path id="Vector" d="M9.60009 9.3999C10.0377 9.83752 10.6312 10.0834 11.25 10.0834C11.8688 10.0834 12.4623 9.83752 12.8999 9.3999C13.3375 8.96228 13.5833 8.3689 13.5833 7.75C13.5833 7.1311 13.3375 6.53772 12.8999 6.1001C12.4623 5.66248 11.8688 5.41663 11.25 5.41663C10.6312 5.41663 10.0377 5.66248 9.60009 6.1001C9.1625 6.53772 8.91667 7.1311 8.91667 7.75C8.91667 8.3689 9.1625 8.96228 9.60009 9.3999ZM11.25 14.75C7.05 14.75 3.55 12.4166 0.75 7.75C3.55 3.08337 7.05 0.75 11.25 0.75C15.45 0.75 18.95 3.08337 21.75 7.75C18.95 12.4166 15.45 14.75 11.25 14.75Z" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round"/>
            </svg>
            <p>${data.posts[1].view_count}</p>
              </div>
              <div class="flex gap-4 items-center">
              <svg width="22.500000" height="22.500000" viewBox="0 0 22.5 22.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs/>
              <path id="Vector" d="M1.54926 15.2682C2.07694 16.5421 2.85036 17.6996 3.82538 18.6746C4.80039 19.6497 5.95791 20.4231 7.23183 20.9507C8.50574 21.4784 9.87112 21.75 11.25 21.75C12.6289 21.75 13.9943 21.4784 15.2682 20.9507C16.5421 20.4231 17.6996 19.6497 18.6746 18.6746C19.6496 17.6996 20.4231 16.5421 20.9507 15.2682C21.4784 13.9943 21.75 12.6289 21.75 11.25C21.75 9.87109 21.4784 8.50574 20.9507 7.23181C20.4231 5.95789 19.6496 4.80042 18.6746 3.82544C17.6996 2.85034 16.5421 2.0769 15.2682 1.54932C13.9943 1.02161 12.6289 0.75 11.25 0.75C9.87112 0.75 8.50574 1.02161 7.23183 1.54932C5.95791 2.0769 4.80039 2.85034 3.82538 3.82544C2.85036 4.80042 2.07694 5.95789 1.54926 7.23181C1.02159 8.50574 0.75 9.87109 0.75 11.25C0.75 12.6289 1.02159 13.9943 1.54926 15.2682ZM11.25 5.41663L11.25 11.25L7.16666 11.25" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
            </svg>
            <p>${data.posts[1].posted_time} min</p>
              </div>
            </div>
          </div>
    `;
    if (active === false) {
      const act = document.getElementsByClassName("active");
      console.log(act[0].classList);
      act.classList.add("bg-[#FF3434]");
      // console.log(act.classList());
    }
    else{
      const act = document.getElementsByClassName("active");
      act.classList.add("bg-[#10B981]")
    }
  }
  getSecondElement();
}

getPostData();
