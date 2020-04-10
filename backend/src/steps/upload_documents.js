const MeiliSearch = require("meilisearch");

(async () => {
  try {
    const config = {
      host: 'http://127.0.0.1:7700'
    };

    const meili = new MeiliSearch(config);

    const decathlon = require("../../decathlon.json");

    const index = await meili.getIndex("decathlon");

    await index.addDocuments(decathlon);

  } catch (e) {
    console.log("Meili error: ", e.message);
  }
})();
