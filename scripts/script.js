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
          <div id="status" class="rounded-full border absolute w-[15px] h-[15px] left-[212px] top-[965px]"></div>
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
              <p class="font-inter text-[#12132d99] pb-4 border-b-4 border-dotted">${data.posts[0].description}</p>
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
              <div class="pl-36 readButton">
              <svg width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs>
                <clipPath id="clip57_425">
                  <rect id="email 1" width="28.000000" height="28.000000" fill="white" fill-opacity="0"/>
                </clipPath>
              </defs>
              <rect id="email 1" width="28.000000" height="28.000000" fill="#FFFFFF" fill-opacity="0"/>
              <g clip-path="url(#clip57_425)">
                <path id="Vector" d="M13.9998 0C6.26807 0 0.00012207 6.26819 0.00012207 13.9999C0.00012207 21.7314 6.26807 28 13.9998 28C21.7315 28 27.9999 21.7314 27.9999 13.9999C27.9999 6.26819 21.7315 0 13.9998 0ZM14.0001 4.91736L22.2847 10.0835L5.71545 10.0835L14.0001 4.91736ZM22.3879 18.333L22.3871 18.333C22.3871 19.1616 21.7155 19.833 20.887 19.833L7.11313 19.833C6.28452 19.833 5.61307 19.1615 5.61307 18.333L5.61307 10.4122C5.61307 10.3246 5.62201 10.2394 5.63657 10.1556L13.5521 15.0914C13.5618 15.0974 13.5721 15.1016 13.5821 15.1072C13.5926 15.1129 13.6032 15.1185 13.6139 15.1239C13.6698 15.1527 13.7274 15.176 13.7863 15.1912C13.7923 15.1929 13.7984 15.1936 13.8044 15.1949C13.869 15.2102 13.9344 15.2197 13.9998 15.2197L14.0003 15.2197C14.0007 15.2197 14.0012 15.2197 14.0012 15.2197C14.0665 15.2197 14.132 15.2104 14.1965 15.1949C14.2026 15.1935 14.2087 15.1929 14.2148 15.1912C14.2735 15.176 14.3309 15.1527 14.3871 15.1239C14.3978 15.1185 14.4084 15.1129 14.4189 15.1072C14.4288 15.1016 14.4392 15.0974 14.4489 15.0914L22.3644 10.1556C22.379 10.2394 22.3879 10.3243 22.3879 10.4122L22.3879 18.333Z" fill="#10B981" fill-opacity="1.000000" fill-rule="nonzero"/>
              </g>
            </svg>
              </div>
            </div>
          </div>
    `;
    if (active === false) {
      const act = document.getElementById("status");
      // console.log(act);
      act.classList.add("bg-[#FF3434]");
    } else {
      const act = document.getElementById("status");
      // console.log(act.classList);
      act.classList.add("bg-[#10B981]");
      // console.log(act.classList);
    }
  }
  getFirstElement();

  // Display second data from API
  function getSecondElement() {
    const image = document.getElementById("secondElement");
    const imgUrl = data.posts[1].image;
    let active = data.posts[1].isActive;
    // console.log(active);

    image.innerHTML = `
        <div class="w-1/6">
          <img class="w-1/2 relative rounded-2xl" src="${imgUrl}">
          <div id="secondStatus" class="rounded-full active border absolute w-[15px] h-[15px] left-[212px] top-[1240px]"></div>
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
              <p class="font-inter text-[#12132d99] pb-4 border-b-4 border-dotted">${data.posts[1].description}</p>
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
              <div class="pl-36 readButton">
              <svg width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs>
                <clipPath id="clip57_425">
                  <rect id="email 1" width="28.000000" height="28.000000" fill="white" fill-opacity="0"/>
                </clipPath>
              </defs>
              <rect id="email 1" width="28.000000" height="28.000000" fill="#FFFFFF" fill-opacity="0"/>
              <g clip-path="url(#clip57_425)">
                <path id="Vector" d="M13.9998 0C6.26807 0 0.00012207 6.26819 0.00012207 13.9999C0.00012207 21.7314 6.26807 28 13.9998 28C21.7315 28 27.9999 21.7314 27.9999 13.9999C27.9999 6.26819 21.7315 0 13.9998 0ZM14.0001 4.91736L22.2847 10.0835L5.71545 10.0835L14.0001 4.91736ZM22.3879 18.333L22.3871 18.333C22.3871 19.1616 21.7155 19.833 20.887 19.833L7.11313 19.833C6.28452 19.833 5.61307 19.1615 5.61307 18.333L5.61307 10.4122C5.61307 10.3246 5.62201 10.2394 5.63657 10.1556L13.5521 15.0914C13.5618 15.0974 13.5721 15.1016 13.5821 15.1072C13.5926 15.1129 13.6032 15.1185 13.6139 15.1239C13.6698 15.1527 13.7274 15.176 13.7863 15.1912C13.7923 15.1929 13.7984 15.1936 13.8044 15.1949C13.869 15.2102 13.9344 15.2197 13.9998 15.2197L14.0003 15.2197C14.0007 15.2197 14.0012 15.2197 14.0012 15.2197C14.0665 15.2197 14.132 15.2104 14.1965 15.1949C14.2026 15.1935 14.2087 15.1929 14.2148 15.1912C14.2735 15.176 14.3309 15.1527 14.3871 15.1239C14.3978 15.1185 14.4084 15.1129 14.4189 15.1072C14.4288 15.1016 14.4392 15.0974 14.4489 15.0914L22.3644 10.1556C22.379 10.2394 22.3879 10.3243 22.3879 10.4122L22.3879 18.333Z" fill="#10B981" fill-opacity="1.000000" fill-rule="nonzero"/>
              </g>
            </svg>
              </div>
            </div>
          </div>
    `;
    if (active === false) {
      const act = document.getElementById("secondStatus");
      // console.log(act);
      act.classList.add("bg-[#FF3434]");
    } else {
      const act = document.getElementById("secondStatus");
      // console.log(act.classList);
      act.classList.add("bg-[#10B981]");
      // console.log(act.classList);
    }
  }
  getSecondElement();

  // Display third data from API
  function getThirdElement() {
    const image = document.getElementById("thirdElement");
    const imgUrl = data.posts[2].image;
    let active = data.posts[2].isActive;
    // console.log(active);

    image.innerHTML = `
        <div class="w-1/6">
          <img class="w-1/2 relative rounded-2xl" src="${imgUrl}">
          <div id="thirdStatus" class="rounded-full active border absolute w-[15px] h-[15px] left-[210px] top-[1515px]"></div>
        </div>
        <div class="">
            <!-- Description -->
            <div class="flex gap-6">
              <!-- Music and Author area -->
              <p>#${data.posts[2].category}</p>
              <p>Author : ${data.posts[2].author.name}</p>
            </div>
            <!-- Title and others -->
            <div>
              <h5 class="text-[#12132D] font-mulish font-bold text-xl pb-4">${data.posts[2].title}</h5>
              <p class="font-inter text-[#12132d99] pb-4 border-b-4 border-dotted">${data.posts[2].description}</p>
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
            <p>${data.posts[2].comment_count}</p>
            </div>
              <div class="flex gap-4 items-center">
              <svg width="22.500000" height="15.500000" viewBox="0 0 22.5 15.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs/>
              <path id="Vector" d="M9.60009 9.3999C10.0377 9.83752 10.6312 10.0834 11.25 10.0834C11.8688 10.0834 12.4623 9.83752 12.8999 9.3999C13.3375 8.96228 13.5833 8.3689 13.5833 7.75C13.5833 7.1311 13.3375 6.53772 12.8999 6.1001C12.4623 5.66248 11.8688 5.41663 11.25 5.41663C10.6312 5.41663 10.0377 5.66248 9.60009 6.1001C9.1625 6.53772 8.91667 7.1311 8.91667 7.75C8.91667 8.3689 9.1625 8.96228 9.60009 9.3999ZM11.25 14.75C7.05 14.75 3.55 12.4166 0.75 7.75C3.55 3.08337 7.05 0.75 11.25 0.75C15.45 0.75 18.95 3.08337 21.75 7.75C18.95 12.4166 15.45 14.75 11.25 14.75Z" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round"/>
            </svg>
            <p>${data.posts[2].view_count}</p>
              </div>
              <div class="flex gap-4 items-center">
              <svg width="22.500000" height="22.500000" viewBox="0 0 22.5 22.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs/>
              <path id="Vector" d="M1.54926 15.2682C2.07694 16.5421 2.85036 17.6996 3.82538 18.6746C4.80039 19.6497 5.95791 20.4231 7.23183 20.9507C8.50574 21.4784 9.87112 21.75 11.25 21.75C12.6289 21.75 13.9943 21.4784 15.2682 20.9507C16.5421 20.4231 17.6996 19.6497 18.6746 18.6746C19.6496 17.6996 20.4231 16.5421 20.9507 15.2682C21.4784 13.9943 21.75 12.6289 21.75 11.25C21.75 9.87109 21.4784 8.50574 20.9507 7.23181C20.4231 5.95789 19.6496 4.80042 18.6746 3.82544C17.6996 2.85034 16.5421 2.0769 15.2682 1.54932C13.9943 1.02161 12.6289 0.75 11.25 0.75C9.87112 0.75 8.50574 1.02161 7.23183 1.54932C5.95791 2.0769 4.80039 2.85034 3.82538 3.82544C2.85036 4.80042 2.07694 5.95789 1.54926 7.23181C1.02159 8.50574 0.75 9.87109 0.75 11.25C0.75 12.6289 1.02159 13.9943 1.54926 15.2682ZM11.25 5.41663L11.25 11.25L7.16666 11.25" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
            </svg>
            <p>${data.posts[2].posted_time} min</p>
              </div>
              <div class="pl-36 readButton">
              <svg width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs>
                <clipPath id="clip57_425">
                  <rect id="email 1" width="28.000000" height="28.000000" fill="white" fill-opacity="0"/>
                </clipPath>
              </defs>
              <rect id="email 1" width="28.000000" height="28.000000" fill="#FFFFFF" fill-opacity="0"/>
              <g clip-path="url(#clip57_425)">
                <path id="Vector" d="M13.9998 0C6.26807 0 0.00012207 6.26819 0.00012207 13.9999C0.00012207 21.7314 6.26807 28 13.9998 28C21.7315 28 27.9999 21.7314 27.9999 13.9999C27.9999 6.26819 21.7315 0 13.9998 0ZM14.0001 4.91736L22.2847 10.0835L5.71545 10.0835L14.0001 4.91736ZM22.3879 18.333L22.3871 18.333C22.3871 19.1616 21.7155 19.833 20.887 19.833L7.11313 19.833C6.28452 19.833 5.61307 19.1615 5.61307 18.333L5.61307 10.4122C5.61307 10.3246 5.62201 10.2394 5.63657 10.1556L13.5521 15.0914C13.5618 15.0974 13.5721 15.1016 13.5821 15.1072C13.5926 15.1129 13.6032 15.1185 13.6139 15.1239C13.6698 15.1527 13.7274 15.176 13.7863 15.1912C13.7923 15.1929 13.7984 15.1936 13.8044 15.1949C13.869 15.2102 13.9344 15.2197 13.9998 15.2197L14.0003 15.2197C14.0007 15.2197 14.0012 15.2197 14.0012 15.2197C14.0665 15.2197 14.132 15.2104 14.1965 15.1949C14.2026 15.1935 14.2087 15.1929 14.2148 15.1912C14.2735 15.176 14.3309 15.1527 14.3871 15.1239C14.3978 15.1185 14.4084 15.1129 14.4189 15.1072C14.4288 15.1016 14.4392 15.0974 14.4489 15.0914L22.3644 10.1556C22.379 10.2394 22.3879 10.3243 22.3879 10.4122L22.3879 18.333Z" fill="#10B981" fill-opacity="1.000000" fill-rule="nonzero"/>
              </g>
            </svg>
              </div>
            </div>
          </div>
    `;
    if (active === false) {
      const act = document.getElementById("thirdStatus");
      // console.log(act);
      act.classList.add("bg-[#FF3434]");
    } else {
      const act = document.getElementById("thirdStatus");
      // console.log(act.classList);
      act.classList.add("bg-[#10B981]");
      // console.log(act.classList);
    }
  }
  getThirdElement();

  // Display fourth data from API
  function getFourthElement() {
    const image = document.getElementById("fourthElement");
    // console.log(image);
    const imgUrl = data.posts[3].image;
    let active = data.posts[3].isActive;
    // console.log(active);

    image.innerHTML = `
        <div class="w-1/6">
          <img class="w-1/2 relative rounded-2xl" src="${imgUrl}">
          <div id="fourthStatus" class="rounded-full active border absolute w-[15px] h-[15px] left-[210px] top-[1815px]"></div>
        </div>
        <div class="">
            <!-- Description -->
            <div class="flex gap-6">
              <!-- Music and Author area -->
              <p>#${data.posts[3].category}</p>
              <p>Author : ${data.posts[3].author.name}</p>
            </div>
            <!-- Title and others -->
            <div>
              <h5 class="text-[#12132D] font-mulish font-bold text-xl pb-4">${data.posts[3].title}</h5>
              <p class="font-inter text-[#12132d99] pb-4 border-b-4 border-dotted">${data.posts[3].description}</p>
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
            <p>${data.posts[3].comment_count}</p>
            </div>
              <div class="flex gap-4 items-center">
              <svg width="22.500000" height="15.500000" viewBox="0 0 22.5 15.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs/>
              <path id="Vector" d="M9.60009 9.3999C10.0377 9.83752 10.6312 10.0834 11.25 10.0834C11.8688 10.0834 12.4623 9.83752 12.8999 9.3999C13.3375 8.96228 13.5833 8.3689 13.5833 7.75C13.5833 7.1311 13.3375 6.53772 12.8999 6.1001C12.4623 5.66248 11.8688 5.41663 11.25 5.41663C10.6312 5.41663 10.0377 5.66248 9.60009 6.1001C9.1625 6.53772 8.91667 7.1311 8.91667 7.75C8.91667 8.3689 9.1625 8.96228 9.60009 9.3999ZM11.25 14.75C7.05 14.75 3.55 12.4166 0.75 7.75C3.55 3.08337 7.05 0.75 11.25 0.75C15.45 0.75 18.95 3.08337 21.75 7.75C18.95 12.4166 15.45 14.75 11.25 14.75Z" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round"/>
            </svg>
            <p>${data.posts[3].view_count}</p>
              </div>
              <div class="flex gap-4 items-center">
              <svg width="22.500000" height="22.500000" viewBox="0 0 22.5 22.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs/>
              <path id="Vector" d="M1.54926 15.2682C2.07694 16.5421 2.85036 17.6996 3.82538 18.6746C4.80039 19.6497 5.95791 20.4231 7.23183 20.9507C8.50574 21.4784 9.87112 21.75 11.25 21.75C12.6289 21.75 13.9943 21.4784 15.2682 20.9507C16.5421 20.4231 17.6996 19.6497 18.6746 18.6746C19.6496 17.6996 20.4231 16.5421 20.9507 15.2682C21.4784 13.9943 21.75 12.6289 21.75 11.25C21.75 9.87109 21.4784 8.50574 20.9507 7.23181C20.4231 5.95789 19.6496 4.80042 18.6746 3.82544C17.6996 2.85034 16.5421 2.0769 15.2682 1.54932C13.9943 1.02161 12.6289 0.75 11.25 0.75C9.87112 0.75 8.50574 1.02161 7.23183 1.54932C5.95791 2.0769 4.80039 2.85034 3.82538 3.82544C2.85036 4.80042 2.07694 5.95789 1.54926 7.23181C1.02159 8.50574 0.75 9.87109 0.75 11.25C0.75 12.6289 1.02159 13.9943 1.54926 15.2682ZM11.25 5.41663L11.25 11.25L7.16666 11.25" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
            </svg>
            <p>${data.posts[3].posted_time} min</p>
              </div>
              <div class="pl-36 readButton">
              <svg width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs>
                <clipPath id="clip57_425">
                  <rect id="email 1" width="28.000000" height="28.000000" fill="white" fill-opacity="0"/>
                </clipPath>
              </defs>
              <rect id="email 1" width="28.000000" height="28.000000" fill="#FFFFFF" fill-opacity="0"/>
              <g clip-path="url(#clip57_425)">
                <path id="Vector" d="M13.9998 0C6.26807 0 0.00012207 6.26819 0.00012207 13.9999C0.00012207 21.7314 6.26807 28 13.9998 28C21.7315 28 27.9999 21.7314 27.9999 13.9999C27.9999 6.26819 21.7315 0 13.9998 0ZM14.0001 4.91736L22.2847 10.0835L5.71545 10.0835L14.0001 4.91736ZM22.3879 18.333L22.3871 18.333C22.3871 19.1616 21.7155 19.833 20.887 19.833L7.11313 19.833C6.28452 19.833 5.61307 19.1615 5.61307 18.333L5.61307 10.4122C5.61307 10.3246 5.62201 10.2394 5.63657 10.1556L13.5521 15.0914C13.5618 15.0974 13.5721 15.1016 13.5821 15.1072C13.5926 15.1129 13.6032 15.1185 13.6139 15.1239C13.6698 15.1527 13.7274 15.176 13.7863 15.1912C13.7923 15.1929 13.7984 15.1936 13.8044 15.1949C13.869 15.2102 13.9344 15.2197 13.9998 15.2197L14.0003 15.2197C14.0007 15.2197 14.0012 15.2197 14.0012 15.2197C14.0665 15.2197 14.132 15.2104 14.1965 15.1949C14.2026 15.1935 14.2087 15.1929 14.2148 15.1912C14.2735 15.176 14.3309 15.1527 14.3871 15.1239C14.3978 15.1185 14.4084 15.1129 14.4189 15.1072C14.4288 15.1016 14.4392 15.0974 14.4489 15.0914L22.3644 10.1556C22.379 10.2394 22.3879 10.3243 22.3879 10.4122L22.3879 18.333Z" fill="#10B981" fill-opacity="1.000000" fill-rule="nonzero"/>
              </g>
            </svg>
              </div>
            </div>
          </div>
    `;
    if (active === false) {
      const act = document.getElementById("fourthStatus");
      // console.log(act);
      act.classList.add("bg-[#FF3434]");
    } else {
      const act = document.getElementById("fourthStatus");
      // console.log(act.classList);
      act.classList.add("bg-[#10B981]");
      // console.log(act.classList);
    }
  }
  getFourthElement();

  // Display fifth data from API
  function getFifthElement() {
    const element = document.getElementById("fifthElement");
    // console.log(element);
    const imgUrl = data.posts[4].image;
    // console.log(imgUrl);
    let active = data.posts[4].isActive;
    // console.log(active);

    element.innerHTML = `
        <div class="w-1/6">
          <img class="w-1/2 relative rounded-2xl" src="${imgUrl}">
          <div id="fifthStatus" class="rounded-full active border absolute w-[15px] h-[15px] left-[210px] top-[2090px]"></div>
        </div>
        <div class="">
            <!-- Description -->
            <div class="flex gap-6">
              <!-- Music and Author area -->
              <p>#${data.posts[4].category}</p>
              <p>Author : ${data.posts[4].author.name}</p>
            </div>
            <!-- Title and others -->
            <div>
              <h5 class="text-[#12132D] font-mulish font-bold text-xl pb-4">${data.posts[4].title}</h5>
              <p class="font-inter text-[#12132d99] pb-4 border-b-4 border-dotted">${data.posts[4].description}</p>
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
            <p>${data.posts[4].comment_count}</p>
            </div>
              <div class="flex gap-4 items-center">
              <svg width="22.500000" height="15.500000" viewBox="0 0 22.5 15.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs/>
              <path id="Vector" d="M9.60009 9.3999C10.0377 9.83752 10.6312 10.0834 11.25 10.0834C11.8688 10.0834 12.4623 9.83752 12.8999 9.3999C13.3375 8.96228 13.5833 8.3689 13.5833 7.75C13.5833 7.1311 13.3375 6.53772 12.8999 6.1001C12.4623 5.66248 11.8688 5.41663 11.25 5.41663C10.6312 5.41663 10.0377 5.66248 9.60009 6.1001C9.1625 6.53772 8.91667 7.1311 8.91667 7.75C8.91667 8.3689 9.1625 8.96228 9.60009 9.3999ZM11.25 14.75C7.05 14.75 3.55 12.4166 0.75 7.75C3.55 3.08337 7.05 0.75 11.25 0.75C15.45 0.75 18.95 3.08337 21.75 7.75C18.95 12.4166 15.45 14.75 11.25 14.75Z" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round"/>
            </svg>
            <p>${data.posts[4].view_count}</p>
              </div>
              <div class="flex gap-4 items-center">
              <svg width="22.500000" height="22.500000" viewBox="0 0 22.5 22.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs/>
              <path id="Vector" d="M1.54926 15.2682C2.07694 16.5421 2.85036 17.6996 3.82538 18.6746C4.80039 19.6497 5.95791 20.4231 7.23183 20.9507C8.50574 21.4784 9.87112 21.75 11.25 21.75C12.6289 21.75 13.9943 21.4784 15.2682 20.9507C16.5421 20.4231 17.6996 19.6497 18.6746 18.6746C19.6496 17.6996 20.4231 16.5421 20.9507 15.2682C21.4784 13.9943 21.75 12.6289 21.75 11.25C21.75 9.87109 21.4784 8.50574 20.9507 7.23181C20.4231 5.95789 19.6496 4.80042 18.6746 3.82544C17.6996 2.85034 16.5421 2.0769 15.2682 1.54932C13.9943 1.02161 12.6289 0.75 11.25 0.75C9.87112 0.75 8.50574 1.02161 7.23183 1.54932C5.95791 2.0769 4.80039 2.85034 3.82538 3.82544C2.85036 4.80042 2.07694 5.95789 1.54926 7.23181C1.02159 8.50574 0.75 9.87109 0.75 11.25C0.75 12.6289 1.02159 13.9943 1.54926 15.2682ZM11.25 5.41663L11.25 11.25L7.16666 11.25" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
            </svg>
            <p>${data.posts[4].posted_time} min</p>
              </div>
              <div class="pl-36 readButton">
              <svg width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs>
                <clipPath id="clip57_425">
                  <rect id="email 1" width="28.000000" height="28.000000" fill="white" fill-opacity="0"/>
                </clipPath>
              </defs>
              <rect id="email 1" width="28.000000" height="28.000000" fill="#FFFFFF" fill-opacity="0"/>
              <g clip-path="url(#clip57_425)">
                <path id="Vector" d="M13.9998 0C6.26807 0 0.00012207 6.26819 0.00012207 13.9999C0.00012207 21.7314 6.26807 28 13.9998 28C21.7315 28 27.9999 21.7314 27.9999 13.9999C27.9999 6.26819 21.7315 0 13.9998 0ZM14.0001 4.91736L22.2847 10.0835L5.71545 10.0835L14.0001 4.91736ZM22.3879 18.333L22.3871 18.333C22.3871 19.1616 21.7155 19.833 20.887 19.833L7.11313 19.833C6.28452 19.833 5.61307 19.1615 5.61307 18.333L5.61307 10.4122C5.61307 10.3246 5.62201 10.2394 5.63657 10.1556L13.5521 15.0914C13.5618 15.0974 13.5721 15.1016 13.5821 15.1072C13.5926 15.1129 13.6032 15.1185 13.6139 15.1239C13.6698 15.1527 13.7274 15.176 13.7863 15.1912C13.7923 15.1929 13.7984 15.1936 13.8044 15.1949C13.869 15.2102 13.9344 15.2197 13.9998 15.2197L14.0003 15.2197C14.0007 15.2197 14.0012 15.2197 14.0012 15.2197C14.0665 15.2197 14.132 15.2104 14.1965 15.1949C14.2026 15.1935 14.2087 15.1929 14.2148 15.1912C14.2735 15.176 14.3309 15.1527 14.3871 15.1239C14.3978 15.1185 14.4084 15.1129 14.4189 15.1072C14.4288 15.1016 14.4392 15.0974 14.4489 15.0914L22.3644 10.1556C22.379 10.2394 22.3879 10.3243 22.3879 10.4122L22.3879 18.333Z" fill="#10B981" fill-opacity="1.000000" fill-rule="nonzero"/>
              </g>
            </svg>
              </div>
            </div>
          </div>
    `;
    if (active === false) {
      const act = document.getElementById("fifthStatus");
      // console.log(act);
      act.classList.add("bg-[#FF3434]");
    } else {
      const act = document.getElementById("fifthStatus");
      // console.log(act.classList);
      act.classList.add("bg-[#10B981]");
      // console.log(act.classList);
    }
  }
  getFifthElement();

  // Display sixth data from API
  function getSixthElement() {
    const element = document.getElementById("sixthElement");
    // console.log(element);
    const imgUrl = data.posts[5].image;
    // console.log(imgUrl);
    let active = data.posts[5].isActive;
    // console.log(active);

    element.innerHTML = `
        <div class="w-1/6">
          <img class="w-1/2 relative rounded-2xl" src="${imgUrl}">
          <div id="sixthStatus" class="rounded-full active border absolute w-[15px] h-[15px] left-[210px] top-[2385px]"></div>
        </div>
        <div class="">
            <!-- Description -->
            <div class="flex gap-6">
              <!-- Music and Author area -->
              <p>#${data.posts[5].category}</p>
              <p>Author : ${data.posts[5].author.name}</p>
            </div>
            <!-- Title and others -->
            <div>
              <h5 class="text-[#12132D] font-mulish font-bold text-xl pb-4">${data.posts[5].title}</h5>
              <p class="font-inter text-[#12132d99] pb-4 border-b-4 border-dotted">${data.posts[5].description}</p>
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
            <p>${data.posts[5].comment_count}</p>
            </div>
              <div class="flex gap-4 items-center">
              <svg width="22.500000" height="15.500000" viewBox="0 0 22.5 15.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs/>
              <path id="Vector" d="M9.60009 9.3999C10.0377 9.83752 10.6312 10.0834 11.25 10.0834C11.8688 10.0834 12.4623 9.83752 12.8999 9.3999C13.3375 8.96228 13.5833 8.3689 13.5833 7.75C13.5833 7.1311 13.3375 6.53772 12.8999 6.1001C12.4623 5.66248 11.8688 5.41663 11.25 5.41663C10.6312 5.41663 10.0377 5.66248 9.60009 6.1001C9.1625 6.53772 8.91667 7.1311 8.91667 7.75C8.91667 8.3689 9.1625 8.96228 9.60009 9.3999ZM11.25 14.75C7.05 14.75 3.55 12.4166 0.75 7.75C3.55 3.08337 7.05 0.75 11.25 0.75C15.45 0.75 18.95 3.08337 21.75 7.75C18.95 12.4166 15.45 14.75 11.25 14.75Z" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round"/>
            </svg>
            <p>${data.posts[5].view_count}</p>
              </div>
              <div class="flex gap-4 items-center">
              <svg width="22.500000" height="22.500000" viewBox="0 0 22.5 22.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs/>
              <path id="Vector" d="M1.54926 15.2682C2.07694 16.5421 2.85036 17.6996 3.82538 18.6746C4.80039 19.6497 5.95791 20.4231 7.23183 20.9507C8.50574 21.4784 9.87112 21.75 11.25 21.75C12.6289 21.75 13.9943 21.4784 15.2682 20.9507C16.5421 20.4231 17.6996 19.6497 18.6746 18.6746C19.6496 17.6996 20.4231 16.5421 20.9507 15.2682C21.4784 13.9943 21.75 12.6289 21.75 11.25C21.75 9.87109 21.4784 8.50574 20.9507 7.23181C20.4231 5.95789 19.6496 4.80042 18.6746 3.82544C17.6996 2.85034 16.5421 2.0769 15.2682 1.54932C13.9943 1.02161 12.6289 0.75 11.25 0.75C9.87112 0.75 8.50574 1.02161 7.23183 1.54932C5.95791 2.0769 4.80039 2.85034 3.82538 3.82544C2.85036 4.80042 2.07694 5.95789 1.54926 7.23181C1.02159 8.50574 0.75 9.87109 0.75 11.25C0.75 12.6289 1.02159 13.9943 1.54926 15.2682ZM11.25 5.41663L11.25 11.25L7.16666 11.25" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
            </svg>
            <p>${data.posts[5].posted_time} min</p>
              </div>
              <div class="pl-36 readButton">
              <svg width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs>
                <clipPath id="clip57_425">
                  <rect id="email 1" width="28.000000" height="28.000000" fill="white" fill-opacity="0"/>
                </clipPath>
              </defs>
              <rect id="email 1" width="28.000000" height="28.000000" fill="#FFFFFF" fill-opacity="0"/>
              <g clip-path="url(#clip57_425)">
                <path id="Vector" d="M13.9998 0C6.26807 0 0.00012207 6.26819 0.00012207 13.9999C0.00012207 21.7314 6.26807 28 13.9998 28C21.7315 28 27.9999 21.7314 27.9999 13.9999C27.9999 6.26819 21.7315 0 13.9998 0ZM14.0001 4.91736L22.2847 10.0835L5.71545 10.0835L14.0001 4.91736ZM22.3879 18.333L22.3871 18.333C22.3871 19.1616 21.7155 19.833 20.887 19.833L7.11313 19.833C6.28452 19.833 5.61307 19.1615 5.61307 18.333L5.61307 10.4122C5.61307 10.3246 5.62201 10.2394 5.63657 10.1556L13.5521 15.0914C13.5618 15.0974 13.5721 15.1016 13.5821 15.1072C13.5926 15.1129 13.6032 15.1185 13.6139 15.1239C13.6698 15.1527 13.7274 15.176 13.7863 15.1912C13.7923 15.1929 13.7984 15.1936 13.8044 15.1949C13.869 15.2102 13.9344 15.2197 13.9998 15.2197L14.0003 15.2197C14.0007 15.2197 14.0012 15.2197 14.0012 15.2197C14.0665 15.2197 14.132 15.2104 14.1965 15.1949C14.2026 15.1935 14.2087 15.1929 14.2148 15.1912C14.2735 15.176 14.3309 15.1527 14.3871 15.1239C14.3978 15.1185 14.4084 15.1129 14.4189 15.1072C14.4288 15.1016 14.4392 15.0974 14.4489 15.0914L22.3644 10.1556C22.379 10.2394 22.3879 10.3243 22.3879 10.4122L22.3879 18.333Z" fill="#10B981" fill-opacity="1.000000" fill-rule="nonzero"/>
              </g>
            </svg>
              </div>
            </div>
          </div>
    `;
    if (active === false) {
      const act = document.getElementById("sixthStatus");
      // console.log(act);
      act.classList.add("bg-[#FF3434]");
    } else {
      const act = document.getElementById("sixthStatus");
      // console.log(act.classList);
      act.classList.add("bg-[#10B981]");
      // console.log(act.classList);
    }
  }
  getSixthElement();

  // A function for adding article to the read list
  function readList() {
    const getButton = document.getElementsByClassName("readButton");
    // console.log(getButton);
    for (let our of getButton) {
      const desiredText =
        our.parentNode.parentNode.childNodes[7].childNodes[1].innerText;
      const viewCount = our.parentNode.childNodes[3].childNodes[3].innerText;
      our.addEventListener("click", function () {
        function createReadList() {
          const getList = document.getElementById("readArea");
          getList.innerHTML = `
            <div class="flex px-4">
              <p>${desiredText}</p>
              <div class="flex items-center">
              <svg width="22.500000" height="15.500000" viewBox="0 0 22.5 15.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs/>
              <path id="Vector" d="M9.60009 9.3999C10.0377 9.83752 10.6312 10.0834 11.25 10.0834C11.8688 10.0834 12.4623 9.83752 12.8999 9.3999C13.3375 8.96228 13.5833 8.3689 13.5833 7.75C13.5833 7.1311 13.3375 6.53772 12.8999 6.1001C12.4623 5.66248 11.8688 5.41663 11.25 5.41663C10.6312 5.41663 10.0377 5.66248 9.60009 6.1001C9.1625 6.53772 8.91667 7.1311 8.91667 7.75C8.91667 8.3689 9.1625 8.96228 9.60009 9.3999ZM11.25 14.75C7.05 14.75 3.55 12.4166 0.75 7.75C3.55 3.08337 7.05 0.75 11.25 0.75C15.45 0.75 18.95 3.08337 21.75 7.75C18.95 12.4166 15.45 14.75 11.25 14.75Z" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round"/>
            </svg>
                ${viewCount}
              </div>
            </div>
          `;
        }
        createReadList();
      });
    }
  }
  readList();
}

getPostData();

async function getLatestPost() {
  const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
  const data = await res.json();
  // console.log(data);

  // First post data from API
  
}

getLatestPost();
