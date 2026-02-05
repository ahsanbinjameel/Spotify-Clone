 const LoadCollectionData = async(CollectionCategories) => {

     const Media = document.getElementById("Media");
     CollectionCategories.forEach(Category => {
         const CollectionCategory = document.createElement("div")
         CollectionCategory.classList.add("CollectionCategory");
         const CollectionHeading = document.createElement("h1");
         CollectionHeading.classList.add("CollectionHeading");
         CollectionHeading.innerText = Category.CategoryHeading;
         CollectionCategory.appendChild(CollectionHeading)
         const CollectionList = document.createElement("div");
         CollectionList.classList.add("CollectionList");
         Category.CollectionList.forEach(listItem => {

             const Collection = `<div class="Collection">
                        <img src="${listItem.ImagePath}" alt="Category Image">
                        <p class="Title">${listItem.Title}</p>
                        <p class="Description">${listItem.Description}</p>
                    </div>`
             CollectionList.innerHTML += Collection;
         })


         Media.appendChild(CollectionCategory);
         CollectionCategory.appendChild(CollectionList);



     })

 }

 const fetchCollectionCategories = async() => {
     const res = await fetch('http://localhost:4000/GetCollectionCategories')
     return res.json()
 }

 const init = async() => {
     const data = await fetchCollectionCategories();
     await LoadCollectionData(data);

 }

 init()