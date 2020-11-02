export default function useProductGroups(data) {
  const productGroups = [
    {
      groupIdent: "Kava",
      groupName: "KÁVA",
      icon: require("@/assets/fa-icons/coffee-duotone.svg"),
      // icon: `<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="coffee" class="svg-inline--fa fa-coffee fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M559.76 480H48.36c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z" opacity="0.4"></path><path class="fa-primary" fill="currentColor" d="M512.06 32h-392a23.94 23.94 0 0 0-24 24v232a96 96 0 0 0 96 96h192a96 96 0 0 0 96-96h32a128 128 0 0 0 0-256zm0 192h-32V96h32a64 64 0 0 1 0 128z"></path></g></svg>`,
      priority: 1
    },
    {
      groupIdent: "Teple_Napoje",
      groupName: "TEPLÉ NÁPOJE",
      icon: require("@/assets/fa-icons/mug-hot-duotone.svg"),
      // icon: `<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="mug-hot" class="svg-inline--fa fa-mug-hot fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M139.3 67.3a94.83 94.83 0 0 1-26.4-53.5A16.11 16.11 0 0 0 96.8 0H80.4a16.31 16.31 0 0 0-16.3 18 145.36 145.36 0 0 0 40.6 84.4 81.22 81.22 0 0 1 22.4 44.1 16.23 16.23 0 0 0 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18a130.72 130.72 0 0 0-36.6-74.7zM287.9 142a130.72 130.72 0 0 0-36.6-74.7 94.83 94.83 0 0 1-26.4-53.5A16.11 16.11 0 0 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18a145.36 145.36 0 0 0 40.6 84.4 81.22 81.22 0 0 1 22.4 44.1 16.23 16.23 0 0 0 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18z" opacity="0.4"></path><path class="fa-primary" fill="currentColor" d="M400 192H32a32 32 0 0 0-32 32v192a96 96 0 0 0 96 96h192a96 96 0 0 0 96-96h16a112 112 0 0 0 0-224zm0 160h-16v-96h16a48 48 0 0 1 0 96z"></path></g></svg>`,
      priority: 5
    },
    {
      groupIdent: "Studene_Napoje",
      groupName: "STUDENÉ NÁPOJE",
      icon: require("@/assets/fa-icons/glass-whiskey-rocks-duotone.svg"),
      // icon: `<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="glass-whiskey-rocks" class="svg-inline--fa fa-glass-whiskey-rocks fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M119.6 415.59l.06.4h273.06v-.31l.07-.43L427.66 192H84.49l35 223.15zM327.43 233.7l46.87 46.89a33.19 33.19 0 0 1 0 46.89l-46.87 46.89a33.14 33.14 0 0 1-46.86 0l-46.87-46.89a33.19 33.19 0 0 1 0-46.89l46.87-46.89a33.15 33.15 0 0 1 46.86 0zM128 256a32 32 0 0 1 32-32h64a31.86 31.86 0 0 1 16.47 4.55L211.07 258a65.24 65.24 0 0 0 0 92.13L213 352h-53a32 32 0 0 1-32-32z" opacity="0.4"></path><path class="fa-primary" fill="currentColor" d="M442.63 96l-49.77 319.22-.07.43v.31H119.73l-.06-.4-.07-.44L69.42 96h373.21M480 32H32A32 32 0 0 0 .32 68.51l56 356.58A64 64 0 0 0 119.71 480h273a64.07 64.07 0 0 0 63.4-54.91l55.57-356.58A32 32 0 0 0 480 32z"></path></g></svg>`,
      priority: 10
    },
    {
      groupIdent: "Koktejly_Nealkoho",
      groupName: "KOKTEJLY nealkoholické",
      icon: require("@/assets/fa-icons/cocktail-duotone.svg"),
      // icon: `<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="cocktail" class="svg-inline--fa fa-cocktail fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M208 280.27L264.28 224H151.72zM432 0c-62.6 0-115.34 40.2-135.17 96h52.53C366 67.45 396.63 48 432 48a96 96 0 0 1 0 192 95 95 0 0 1-39.32-8.64l-35.26 35.26A144 144 0 1 0 432 0z" opacity="0.4"></path><path class="fa-primary" fill="currentColor" d="M408.75 170.05c15.52-15.52 4.53-42.05-17.42-42.05H24.69c-22 0-32.94 26.53-17.42 42.05L176 338.78V464h-56a40 40 0 0 0-40 40 8 8 0 0 0 8 8h240a8 8 0 0 0 8-8 40 40 0 0 0-40-40h-56V338.78zM208 280.27L119.73 192h176.55z"></path></g></svg>`,
      priority: 15
    },
    {
      groupIdent: "Koktejly",
      groupName: "KOKTEJLY",
      icon: require("@/assets/fa-icons/glass-martini-alt-duotone.svg"),
      // icon: `<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="glass-martini-alt" class="svg-inline--fa fa-glass-martini-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M256 213.13L154.84 112h202.27z" opacity="0.4"></path><path class="fa-primary" fill="currentColor" d="M405.12 64L256 213.13 106.84 64h298.28m73.06-64H33.78C3.73 0-11.32 36.34 10 57.6l214 214V464h-56a40 40 0 0 0-40 40 8 8 0 0 0 8 8h240a8 8 0 0 0 8-8 40 40 0 0 0-40-40h-56V271.64l214-214C523.28 36.34 508.23 0 478.18 0z"></path></g></svg>`,
      priority: 20
    },
    {
      groupIdent: "Vino",
      groupName: "VÍNO",
      icon: require("@/assets/fa-icons/wine-glass-alt-duotone.svg"),
      // icon: `<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="wine-glass-alt" class="svg-inline--fa fa-wine-glass-alt fa-w-9" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512"><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M64.38,198.37,70.69,128H217.36l6.3,70.36a79.63,79.63,0,0,1-15.28,55.26,81,81,0,0,1-46.83,30.85,77.47,77.47,0,0,1-35,0,81,81,0,0,1-46.83-30.85,79.76,79.76,0,0,1-15.35-55.25Z" opacity="0.4"></path><path class="fa-primary" fill="currentColor" d="M211.63,64l12,134.36a79.63,79.63,0,0,1-15.28,55.26,81,81,0,0,1-46.83,30.85,77.47,77.47,0,0,1-35,0A81,81,0,0,1,79.7,253.62a79.76,79.76,0,0,1-15.29-55.26L76.42,64H211.63M255.74,0H32.31a15.85,15.85,0,0,0-15.7,14.55L.61,192.66A144.67,144.67,0,0,0,112,346.82V464H72a40,40,0,0,0-40,40,8,8,0,0,0,8,8H248a8,8,0,0,0,8-8,40,40,0,0,0-40-40H176V346.81A144.67,144.67,0,0,0,287.39,192.65l-16-178.1A15.85,15.85,0,0,0,255.74,0Z"></path></g></svg>`,
      priority: 25
    },
    {
      groupIdent: "Pivo",
      groupName: "PIVO",
      icon: require("@/assets/fa-icons/beer-light.svg"),
      // icon: `<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="beer" class="svg-inline--fa fa-beer fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M384 96h-32V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h256c26.51 0 48-21.49 48-48v-22.112l60.621-30.311C434.443 368.666 448 346.731 448 322.334V160c0-35.29-28.71-64-64-64zm-64 336c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h256c8.822 0 16 7.178 16 16v352zm96-109.666c0 12.199-6.778 23.166-17.689 28.622L352 374.112V128h32c17.645 0 32 14.355 32 32v162.334zM192 144v224c0 8.837-7.164 16-16 16s-16-7.163-16-16V144c0-8.837 7.164-16 16-16s16 7.163 16 16zm-64 0v224c0 8.837-7.164 16-16 16s-16-7.163-16-16V144c0-8.837 7.164-16 16-16s16 7.163 16 16zm128 0v224c0 8.837-7.163 16-16 16s-16-7.163-16-16V144c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path></svg>`,
      priority: 30
    },
    {
      groupIdent: "Dezerty",
      groupName: "DEZERTY",
      icon: require("@/assets/fa-icons/pie-duotone.svg"),
      // icon: `<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="pie" class="svg-inline--fa fa-pie fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M88.75 426.08l-31-92.88c32.91-6.57 51.26-23.5 59.6-29.2h.22c10.17 7 36.21 32 85.34 32 50.09 0 78-27 85.28-32h.08c10.11 7 36.2 32 85.26 32s75.13-25.06 85.25-32h.06c7 4.8 26.35 22.58 59.46 29.2l-31 92.88A32 32 0 0 1 456.94 448H119.07a32 32 0 0 1-30.32-21.92z" opacity="0.4"></path><path class="fa-primary" fill="currentColor" d="M544 240c-6.44 0-10.37-1.2-14.47-3.52C494.93 136.17 400.07 64 288 64S81 136.21 46.45 236.55c-4.07 2.28-8 3.45-14.45 3.45a32 32 0 0 0 0 64c32 0 50-13.47 61.92-22.39 9.08-6.8 12.83-9.61 23.53-9.61s14.47 2.81 23.55 9.61c11.91 8.92 29.89 22.39 61.91 22.39s50-13.48 61.88-22.41c9-6.78 12.8-9.59 23.45-9.59s14.39 2.81 23.44 9.59c11.89 8.92 29.86 22.41 61.86 22.41s49.95-13.48 61.84-22.41c9.05-6.78 12.8-9.59 23.44-9.59s14.34 2.81 23.38 9.58C494.06 290.52 512 304 544 304a32 32 0 0 0 0-64zm-337.69-88.84l-16 32c-9.44 18.83-38.17 4.79-28.62-14.31l16-32c9.53-18.85 38.09-4.63 28.62 14.31zM304 176c0 21.17-32 21.18-32 0v-32c0-21.17 32-21.18 32 0zm81.69 7.16l-16-32c-9.48-18.95 19.13-33.19 28.62-14.31l16 32c9.53 19.05-19.17 33.15-28.62 14.31z"></path></g></svg>`,
      priority: 35
    },
    {
      groupIdent: "Slane_pokrmy",
      groupName: "SLANÉ POKRMY",
      icon: require("@/assets/fa-icons/sandwich-duotone.svg"),
      // icon: `<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="sandwich" class="svg-inline--fa fa-sandwich fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M512 271.07v32.14c0 .47 0 .93-.08 1.4a16.27 16.27 0 0 1-17.78 14.6c-28.52-2.6-45.94-11.36-60.41-18.6S408.54 288 384.12 288s-35 5.3-49.64 12.62c-17.26 8.63-38.7 19.38-78.26 19.38s-61.08-10.73-78.34-19.38C163.2 293.3 152.58 288 128.11 288S93 293.3 78.36 300.63s-31.93 16-60.51 18.59c-.47 0-.94.07-1.41.08A16.26 16.26 0 0 1 0 303.22v-32.14a15.93 15.93 0 0 1 14.1-15.79c15.16-1.67 24.16-6.17 35.67-11.91C67 234.73 88.53 224 128.11 224s61.08 10.75 78.36 19.38C221.14 250.7 231.8 256 256.22 256s35-5.3 49.64-12.62c17.26-8.63 38.72-19.38 78.26-19.38s61 10.75 78.27 19.39c11.51 5.73 20.43 10.22 35.51 11.9a15.94 15.94 0 0 1 14.1 15.78z" opacity="0.4"></path><path class="fa-primary" fill="currentColor" d="M480 352h-64l-96 48-96-48H32a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32zm0-320H32A32 32 0 0 0 0 64v96a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32z"></path></g></svg>`,
      priority: 40
    }
  ]
  function getProductGroup(identifier) {
    const productGroup = productGroups.filter(
      group => group.groupIdent == identifier
    )[0]
    return {
      gr: identifier,
      grName: productGroup.groupName,
      icon: productGroup.icon,
      grIndex: productGroup.priority
    }
  }

  const groupSortObj = []
  let groupObj
  let groupSet = []

  data.value.coNabizime.forEach(product => {
    groupObj = getProductGroup(product.skupinaProduku)
    groupSortObj.push(groupObj)
  })
  groupSortObj.sort((a, b) => {
    if (a.grIndex > b.grIndex) {
      return 1
    }
    if (a.grIndex < b.grIndex) {
      return -1
    }
    return 0
  })
  groupSet = groupSortObj
    .map(e => e["grIndex"])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter(e => groupSortObj[e])
    .map(e => groupSortObj[e])
  return groupSet
}
