const MeiliSearch = require("meilisearch");

(async () => {
  try {
    const config = {
      host: 'http://127.0.0.1:7700'
    };

    const meili = new MeiliSearch(config);

    const index = await meili.getIndex("decathlon");

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

  } catch (e) {
    console.log("Meili error: ", e.message);
  }
})();
