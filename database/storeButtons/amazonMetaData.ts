const amazonMetaData = [
{
label: "Dark",
content: `<div class="flex w-fit cursor-pointer items-center justify-center gap-6 rounded-[10px] bg-gray-900 py-5 pl-8 pr-10 hover:bg-gray-800">
<svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_906_266)">
    <path d="M0.961261 27.5438C1.07772 27.3576 1.25908 27.3443 1.51299 27.5058C7.30708 30.8498 13.6128 32.5313 20.4244 32.5313C24.97 32.5313 29.4544 31.682 33.8854 30.0005L34.3856 29.7782C34.6052 29.6813 34.7579 29.6186 34.8514 29.5711C35.2123 29.4305 35.4738 29.5008 35.6876 29.7782C35.8824 30.0499 35.8327 30.3083 35.4967 30.5382C35.0901 30.8384 34.5422 31.188 33.8931 31.5737C31.9134 32.7498 29.6874 33.6599 27.2265 34.3116C24.8791 34.9398 22.4601 35.2642 20.0293 35.2768C16.423 35.2768 13.0038 34.6498 9.77935 33.3958C6.59829 32.1566 3.66799 30.3563 1.12926 28.0815C0.968898 27.9656 0.890625 27.8478 0.890625 27.7319C0.890625 27.6578 0.92117 27.5913 0.968898 27.5248L0.961261 27.5438ZM11.4212 17.6847C11.4212 16.0887 11.8164 14.7302 12.6029 13.5959C13.3933 12.4711 14.4681 11.618 15.8541 11.0385C17.1255 10.5046 18.6509 10.1265 20.4932 9.89469C21.1155 9.82439 22.1369 9.73129 23.5477 9.61919V9.03019C23.5477 7.56149 23.3874 6.56209 23.0743 6.05859C22.5932 5.37649 21.8334 5.03069 20.7776 5.03069H20.4913C19.7276 5.10479 19.0671 5.33849 18.5077 5.75839C17.9463 6.1873 17.5631 6.80678 17.431 7.49879C17.3374 7.97379 17.1026 8.23409 16.7418 8.30819L12.7232 7.80659C12.3242 7.70969 12.1294 7.52159 12.1294 7.18719C12.1294 7.11689 12.1409 7.04659 12.1638 6.95349C12.5628 4.90529 13.5288 3.37959 15.0656 2.38589C16.6196 1.40929 18.4104 0.839289 20.4645 0.723389H21.3255C23.9582 0.723389 26.0391 1.40929 27.5186 2.76779C27.7382 3.00149 27.952 3.24279 28.1677 3.52399C28.3586 3.78809 28.5266 4.02559 28.6144 4.24029C28.7347 4.45119 28.8569 4.76279 28.9275 5.14279C29.0249 5.54749 29.0955 5.81159 29.1433 5.95219C29.1872 6.11559 29.2406 6.42719 29.2654 6.92879C29.2769 7.42659 29.296 7.70779 29.296 7.80469V16.1761C29.296 16.7727 29.3895 17.3199 29.5575 17.8196C29.7255 18.3136 29.8897 18.6765 30.0577 18.8893L30.8748 19.9552C30.9971 20.1241 31.0704 20.3233 31.0867 20.5309C31.0867 20.7247 30.9932 20.8881 30.8042 21.0249C28.8913 22.6912 27.8394 23.5937 27.6752 23.7381C27.4136 23.9528 27.0776 23.9756 26.6729 23.8122C26.379 23.5658 26.0992 23.3031 25.8348 23.0256L25.3423 22.4727C25.2449 22.353 25.0731 22.1421 24.8344 21.8039L24.3572 21.1142C23.0666 22.5202 21.8028 23.4037 20.5352 23.7609C19.7448 23.9984 18.7903 24.1181 17.6162 24.1181C15.8484 24.1181 14.3688 23.5766 13.2195 22.4784C12.0779 21.384 11.5014 19.8393 11.5014 17.8177L11.4193 17.698L11.4212 17.6847ZM17.3985 16.9874C17.3985 17.8899 17.6219 18.6062 18.0763 19.1515C18.5268 19.693 19.1511 19.9647 19.9185 19.9647C19.9854 19.9647 20.0865 19.9495 20.224 19.9305C20.3729 19.9077 20.4359 19.8925 20.4932 19.8925C21.4706 19.6398 22.2152 19.0166 22.7631 18.0267C23.0277 17.5792 23.2203 17.0932 23.3339 16.5865C23.479 16.0773 23.5248 15.6479 23.5458 15.3211C23.5764 15.0057 23.5764 14.4604 23.5764 13.7251V12.8682C22.2343 12.8682 21.2091 12.9613 20.5142 13.1494C18.4848 13.7251 17.452 15.0057 17.452 17.0045L17.3966 16.9741V16.9874H17.3985ZM31.9954 28.1309C32.0432 28.034 32.1157 27.9561 32.2035 27.8592C32.7782 27.4773 33.3414 27.2094 33.8778 27.0688C34.7176 26.8539 35.5774 26.7259 36.4436 26.6869C36.667 26.6679 36.8904 26.6869 37.1042 26.7344C38.1332 26.8313 38.7708 27.0023 38.9694 27.2531C39.0705 27.4013 39.1106 27.616 39.1106 27.8763V28.1138C39.1106 28.9232 38.8873 29.8732 38.4463 30.9676C38.0053 32.062 37.3905 32.9455 36.6078 33.6314C36.4914 33.7245 36.3883 33.772 36.2947 33.772C36.247 33.772 36.1974 33.772 36.1534 33.753C36.0084 33.6827 35.9816 33.563 36.0484 33.3711C36.9094 31.3742 37.3314 29.9758 37.3314 29.1892C37.3314 28.9479 37.2836 28.7579 37.1901 28.6401C36.9629 28.3798 36.3176 28.2278 35.2428 28.2278C34.7794 28.2347 34.3164 28.2594 33.8549 28.3019C33.2764 28.3798 32.7438 28.4501 32.2627 28.5204C32.1214 28.5204 32.0279 28.4938 31.9764 28.4501C31.9286 28.4026 31.9172 28.376 31.942 28.3285C31.942 28.3019 31.9534 28.281 31.9764 28.2278V28.1347L31.9954 28.1309Z" fill="white" />
  </g>
  <defs>
    <clipPath id="clip0_906_266">
      <rect width="40" height="36" fill="white" />
    </clipPath>
  </defs>
</svg>

<div class="flex flex-col text-white">
  <p class="text-sm font-bold">Download on the</p>
  <h1 class="text-xl font-medium tracking-wide">Amazon.com</h1>
</div>
</div>`
},
{
label: "Blue",
content: `<div class="flex w-fit cursor-pointer items-center justify-center gap-6 rounded-[10px] bg-white py-5 pl-8 pr-10 hover:bg-gray-200">
<svg width="40" height="36" viewBox="0 0 40 36" fill="#2563eb" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_906_266)">
    <path d="M0.961261 27.5438C1.07772 27.3576 1.25908 27.3443 1.51299 27.5058C7.30708 30.8498 13.6128 32.5313 20.4244 32.5313C24.97 32.5313 29.4544 31.682 33.8854 30.0005L34.3856 29.7782C34.6052 29.6813 34.7579 29.6186 34.8514 29.5711C35.2123 29.4305 35.4738 29.5008 35.6876 29.7782C35.8824 30.0499 35.8327 30.3083 35.4967 30.5382C35.0901 30.8384 34.5422 31.188 33.8931 31.5737C31.9134 32.7498 29.6874 33.6599 27.2265 34.3116C24.8791 34.9398 22.4601 35.2642 20.0293 35.2768C16.423 35.2768 13.0038 34.6498 9.77935 33.3958C6.59829 32.1566 3.66799 30.3563 1.12926 28.0815C0.968898 27.9656 0.890625 27.8478 0.890625 27.7319C0.890625 27.6578 0.92117 27.5913 0.968898 27.5248L0.961261 27.5438ZM11.4212 17.6847C11.4212 16.0887 11.8164 14.7302 12.6029 13.5959C13.3933 12.4711 14.4681 11.618 15.8541 11.0385C17.1255 10.5046 18.6509 10.1265 20.4932 9.89469C21.1155 9.82439 22.1369 9.73129 23.5477 9.61919V9.03019C23.5477 7.56149 23.3874 6.56209 23.0743 6.05859C22.5932 5.37649 21.8334 5.03069 20.7776 5.03069H20.4913C19.7276 5.10479 19.0671 5.33849 18.5077 5.75839C17.9463 6.1873 17.5631 6.80678 17.431 7.49879C17.3374 7.97379 17.1026 8.23409 16.7418 8.30819L12.7232 7.80659C12.3242 7.70969 12.1294 7.52159 12.1294 7.18719C12.1294 7.11689 12.1409 7.04659 12.1638 6.95349C12.5628 4.90529 13.5288 3.37959 15.0656 2.38589C16.6196 1.40929 18.4104 0.839289 20.4645 0.723389H21.3255C23.9582 0.723389 26.0391 1.40929 27.5186 2.76779C27.7382 3.00149 27.952 3.24279 28.1677 3.52399C28.3586 3.78809 28.5266 4.02559 28.6144 4.24029C28.7347 4.45119 28.8569 4.76279 28.9275 5.14279C29.0249 5.54749 29.0955 5.81159 29.1433 5.95219C29.1872 6.11559 29.2406 6.42719 29.2654 6.92879C29.2769 7.42659 29.296 7.70779 29.296 7.80469V16.1761C29.296 16.7727 29.3895 17.3199 29.5575 17.8196C29.7255 18.3136 29.8897 18.6765 30.0577 18.8893L30.8748 19.9552C30.9971 20.1241 31.0704 20.3233 31.0867 20.5309C31.0867 20.7247 30.9932 20.8881 30.8042 21.0249C28.8913 22.6912 27.8394 23.5937 27.6752 23.7381C27.4136 23.9528 27.0776 23.9756 26.6729 23.8122C26.379 23.5658 26.0992 23.3031 25.8348 23.0256L25.3423 22.4727C25.2449 22.353 25.0731 22.1421 24.8344 21.8039L24.3572 21.1142C23.0666 22.5202 21.8028 23.4037 20.5352 23.7609C19.7448 23.9984 18.7903 24.1181 17.6162 24.1181C15.8484 24.1181 14.3688 23.5766 13.2195 22.4784C12.0779 21.384 11.5014 19.8393 11.5014 17.8177L11.4193 17.698L11.4212 17.6847ZM17.3985 16.9874C17.3985 17.8899 17.6219 18.6062 18.0763 19.1515C18.5268 19.693 19.1511 19.9647 19.9185 19.9647C19.9854 19.9647 20.0865 19.9495 20.224 19.9305C20.3729 19.9077 20.4359 19.8925 20.4932 19.8925C21.4706 19.6398 22.2152 19.0166 22.7631 18.0267C23.0277 17.5792 23.2203 17.0932 23.3339 16.5865C23.479 16.0773 23.5248 15.6479 23.5458 15.3211C23.5764 15.0057 23.5764 14.4604 23.5764 13.7251V12.8682C22.2343 12.8682 21.2091 12.9613 20.5142 13.1494C18.4848 13.7251 17.452 15.0057 17.452 17.0045L17.3966 16.9741V16.9874H17.3985ZM31.9954 28.1309C32.0432 28.034 32.1157 27.9561 32.2035 27.8592C32.7782 27.4773 33.3414 27.2094 33.8778 27.0688C34.7176 26.8539 35.5774 26.7259 36.4436 26.6869C36.667 26.6679 36.8904 26.6869 37.1042 26.7344C38.1332 26.8313 38.7708 27.0023 38.9694 27.2531C39.0705 27.4013 39.1106 27.616 39.1106 27.8763V28.1138C39.1106 28.9232 38.8873 29.8732 38.4463 30.9676C38.0053 32.062 37.3905 32.9455 36.6078 33.6314C36.4914 33.7245 36.3883 33.772 36.2947 33.772C36.247 33.772 36.1974 33.772 36.1534 33.753C36.0084 33.6827 35.9816 33.563 36.0484 33.3711C36.9094 31.3742 37.3314 29.9758 37.3314 29.1892C37.3314 28.9479 37.2836 28.7579 37.1901 28.6401C36.9629 28.3798 36.3176 28.2278 35.2428 28.2278C34.7794 28.2347 34.3164 28.2594 33.8549 28.3019C33.2764 28.3798 32.7438 28.4501 32.2627 28.5204C32.1214 28.5204 32.0279 28.4938 31.9764 28.4501C31.9286 28.4026 31.9172 28.376 31.942 28.3285C31.942 28.3019 31.9534 28.281 31.9764 28.2278V28.1347L31.9954 28.1309Z" fill="#2563eb" />
  </g>
  <defs>
    <clipPath id="clip0_906_266">
      <rect width="40" height="36" fill="#2563eb" />
    </clipPath>
  </defs>
</svg>

<div class="flex flex-col text-blue-600">
  <p class="text-sm font-bold">Download on the</p>
  <h1 class="text-xl font-medium tracking-wide">Amazon.com</h1>
</div>
</div>`
},
{
label: "Light",
content: `<div class="flex w-fit cursor-pointer items-center justify-center gap-6 rounded-[10px] bg-white py-5 pl-8 pr-10 hover:bg-gray-200">
<svg width="40" height="36" viewBox="0 0 40 36" fill="#2563eb" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_906_266)">
    <path d="M0.961261 27.5438C1.07772 27.3576 1.25908 27.3443 1.51299 27.5058C7.30708 30.8498 13.6128 32.5313 20.4244 32.5313C24.97 32.5313 29.4544 31.682 33.8854 30.0005L34.3856 29.7782C34.6052 29.6813 34.7579 29.6186 34.8514 29.5711C35.2123 29.4305 35.4738 29.5008 35.6876 29.7782C35.8824 30.0499 35.8327 30.3083 35.4967 30.5382C35.0901 30.8384 34.5422 31.188 33.8931 31.5737C31.9134 32.7498 29.6874 33.6599 27.2265 34.3116C24.8791 34.9398 22.4601 35.2642 20.0293 35.2768C16.423 35.2768 13.0038 34.6498 9.77935 33.3958C6.59829 32.1566 3.66799 30.3563 1.12926 28.0815C0.968898 27.9656 0.890625 27.8478 0.890625 27.7319C0.890625 27.6578 0.92117 27.5913 0.968898 27.5248L0.961261 27.5438ZM11.4212 17.6847C11.4212 16.0887 11.8164 14.7302 12.6029 13.5959C13.3933 12.4711 14.4681 11.618 15.8541 11.0385C17.1255 10.5046 18.6509 10.1265 20.4932 9.89469C21.1155 9.82439 22.1369 9.73129 23.5477 9.61919V9.03019C23.5477 7.56149 23.3874 6.56209 23.0743 6.05859C22.5932 5.37649 21.8334 5.03069 20.7776 5.03069H20.4913C19.7276 5.10479 19.0671 5.33849 18.5077 5.75839C17.9463 6.1873 17.5631 6.80678 17.431 7.49879C17.3374 7.97379 17.1026 8.23409 16.7418 8.30819L12.7232 7.80659C12.3242 7.70969 12.1294 7.52159 12.1294 7.18719C12.1294 7.11689 12.1409 7.04659 12.1638 6.95349C12.5628 4.90529 13.5288 3.37959 15.0656 2.38589C16.6196 1.40929 18.4104 0.839289 20.4645 0.723389H21.3255C23.9582 0.723389 26.0391 1.40929 27.5186 2.76779C27.7382 3.00149 27.952 3.24279 28.1677 3.52399C28.3586 3.78809 28.5266 4.02559 28.6144 4.24029C28.7347 4.45119 28.8569 4.76279 28.9275 5.14279C29.0249 5.54749 29.0955 5.81159 29.1433 5.95219C29.1872 6.11559 29.2406 6.42719 29.2654 6.92879C29.2769 7.42659 29.296 7.70779 29.296 7.80469V16.1761C29.296 16.7727 29.3895 17.3199 29.5575 17.8196C29.7255 18.3136 29.8897 18.6765 30.0577 18.8893L30.8748 19.9552C30.9971 20.1241 31.0704 20.3233 31.0867 20.5309C31.0867 20.7247 30.9932 20.8881 30.8042 21.0249C28.8913 22.6912 27.8394 23.5937 27.6752 23.7381C27.4136 23.9528 27.0776 23.9756 26.6729 23.8122C26.379 23.5658 26.0992 23.3031 25.8348 23.0256L25.3423 22.4727C25.2449 22.353 25.0731 22.1421 24.8344 21.8039L24.3572 21.1142C23.0666 22.5202 21.8028 23.4037 20.5352 23.7609C19.7448 23.9984 18.7903 24.1181 17.6162 24.1181C15.8484 24.1181 14.3688 23.5766 13.2195 22.4784C12.0779 21.384 11.5014 19.8393 11.5014 17.8177L11.4193 17.698L11.4212 17.6847ZM17.3985 16.9874C17.3985 17.8899 17.6219 18.6062 18.0763 19.1515C18.5268 19.693 19.1511 19.9647 19.9185 19.9647C19.9854 19.9647 20.0865 19.9495 20.224 19.9305C20.3729 19.9077 20.4359 19.8925 20.4932 19.8925C21.4706 19.6398 22.2152 19.0166 22.7631 18.0267C23.0277 17.5792 23.2203 17.0932 23.3339 16.5865C23.479 16.0773 23.5248 15.6479 23.5458 15.3211C23.5764 15.0057 23.5764 14.4604 23.5764 13.7251V12.8682C22.2343 12.8682 21.2091 12.9613 20.5142 13.1494C18.4848 13.7251 17.452 15.0057 17.452 17.0045L17.3966 16.9741V16.9874H17.3985ZM31.9954 28.1309C32.0432 28.034 32.1157 27.9561 32.2035 27.8592C32.7782 27.4773 33.3414 27.2094 33.8778 27.0688C34.7176 26.8539 35.5774 26.7259 36.4436 26.6869C36.667 26.6679 36.8904 26.6869 37.1042 26.7344C38.1332 26.8313 38.7708 27.0023 38.9694 27.2531C39.0705 27.4013 39.1106 27.616 39.1106 27.8763V28.1138C39.1106 28.9232 38.8873 29.8732 38.4463 30.9676C38.0053 32.062 37.3905 32.9455 36.6078 33.6314C36.4914 33.7245 36.3883 33.772 36.2947 33.772C36.247 33.772 36.1974 33.772 36.1534 33.753C36.0084 33.6827 35.9816 33.563 36.0484 33.3711C36.9094 31.3742 37.3314 29.9758 37.3314 29.1892C37.3314 28.9479 37.2836 28.7579 37.1901 28.6401C36.9629 28.3798 36.3176 28.2278 35.2428 28.2278C34.7794 28.2347 34.3164 28.2594 33.8549 28.3019C33.2764 28.3798 32.7438 28.4501 32.2627 28.5204C32.1214 28.5204 32.0279 28.4938 31.9764 28.4501C31.9286 28.4026 31.9172 28.376 31.942 28.3285C31.942 28.3019 31.9534 28.281 31.9764 28.2278V28.1347L31.9954 28.1309Z" fill="#000000" />
  </g>
  <defs>
    <clipPath id="clip0_906_266">
      <rect width="40" height="36" fill="#2563eb" />
    </clipPath>
  </defs>
</svg>

<div class="flex flex-col text-black">
  <p class="text-sm font-bold">Download on the</p>
  <h1 class="text-xl font-medium tracking-wide">Amazon.com</h1>
</div>
</div>`
}
]

export default amazonMetaData;