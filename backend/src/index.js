const MeiliSearch = require("meilisearch");

(async () => {
  try {
    const config = {
      host: 'http://127.0.0.1:7700'
    };

    const meili = new MeiliSearch(config);

    //const indexDelete = await meili.getIndex("decathlon");
    //indexDelete.deleteIndex();

    await meili.createIndex({ uid: "decathlon", primaryKey: "id" });

    const decathlon = require("../decathlon.json");

    const index = await meili.getIndex("decathlon");

    function chunkArrayInGroups(arr, size) {
      var myArray = [];
      for(var i = 0; i < arr.length; i += size) {
        myArray.push(arr.slice(i, i+size));
      }
      return myArray;
    }

    const groups = chunkArrayInGroups(decathlon,20)

    for(let i=0;i< groups.length;i++)
    await index.addDocuments(groups[i]);

    const newSettings = {
      rankingRules: [
        "typo",
        "words",
        "proximity",
        "attribute",
        "wordsPosition",
        "exactness",
        "desc(creation_date)"
      ],
      searchableAttributes: ["name", "vendor", "category", "tags"],
      displayedAttributes: [
        "name",
        "vendor",
        "category",
        "tags",
        "images",
        "url"
      ]
    };

    await index.updateSettings(newSettings);

    console.dir(await index.getSettings());
  } catch (e) {
    console.log("Meili error: ", e.message);
  }
})();
