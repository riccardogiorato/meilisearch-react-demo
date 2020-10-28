const MeiliSearch = require("meilisearch");

(async () => {
  try {
    const config = {
      host: 'http://127.0.0.1:7700'
    };

    const meili = new MeiliSearch(config);
    
    await meili.isHealthy()
    await meili.createIndex('decathlon', { primaryKey: "id" }); 
    
    const decathlon = require("../decathlon.json");
    const index = await meili.getIndex("decathlon");
    
    await index.addDocuments(decathlon);
    const newSettings = {
      rankingRules: [
        "typo",
        "words",
        "proximity",
        "attribute",
        "wordsPosition",
        "exactness",
        "desc(creation_date)"
      ]
    };

    await index.updateSettings(newSettings);

    console.dir(await index.getSettings());
  } catch (e) {
    console.error(e);
    console.log("Meili error: ", e.message);
  }
})();
