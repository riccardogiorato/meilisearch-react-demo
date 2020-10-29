const MeiliSearch = require("meilisearch");

(async () => {
  try {
    const config = {
      host: 'http://127.0.0.1:7700'
    };

    const meili = new MeiliSearch(config);

    await meili.createIndex("decathlon", { primaryKey: "id" });
    
  } catch (e) {
    console.log("Meili error: ", e.message);
  }
})();
