 const LoadCollectionData = (categories) => {
    const Media = document.getElementById("Media");
    if (!Media) throw new Error("#Media not found");

    const fragment = document.createDocumentFragment();

    categories.forEach(category => {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "CollectionCategory";

        const heading = document.createElement("h1");
        heading.className = "CollectionHeading";
        heading.textContent = category.CategoryHeading;

        const listDiv = document.createElement("div");
        listDiv.className = "CollectionList";

        category.CollectionList.forEach(item => {
            const collection = document.createElement("div");
            collection.className = "Collection";
            

            const img = document.createElement("img");
            img.src = item.ImagePath;
            img.alt = "Category Image";

            const title = document.createElement("p");
            title.className = "Title";
            title.textContent = item.Title;

            const desc = document.createElement("p");
            desc.className = "Description";
            desc.textContent = item.Description;

            collection.append(img, title, desc);
            listDiv.appendChild(collection);
        });

        categoryDiv.append(heading, listDiv);
        fragment.appendChild(categoryDiv);
    });

    Media.appendChild(fragment);
};


const fetchCollectionCategories = async () => {
    const res = await fetch('http://localhost:4000/GetCollectionCategories');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
};


 const init = async() => {
     const data = await fetchCollectionCategories();
     LoadCollectionData(data);

 }

 init();