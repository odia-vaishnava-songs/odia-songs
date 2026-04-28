-- Insert or update song data
INSERT INTO songs (
    id, title, title_odia, title_english, category, type, description, author, published, status, structured_content
) VALUES (
    'song-madanamohanatanu', 
    'ମଦନ ମୋହନ ତନୁ (Tanum Madana Mohana)', 
    'ମଦନ ମୋହନ ତନୁ', 
    'Tanum Madana Mohana', 
    'Songs', 
    'html', 
    'ଶ୍ରୀଲ ବୃନ୍ଦାବନ ଦାସ ଠାକୁରଙ୍କ ରଚିତ', 
    'ଶ୍ରୀଲ ବୃନ୍ଦାବନ ଦାସ ଠାକୁର',
    true, 
    'COMPLETED',
    $
{
    "verses": [
        {
            "id": 1,
            "lyric": "ମଦନ ମୋହନ ତନୁ ଗୌରାଙ୍ଗ ସୁନ୍ଦର ।\nଲଲାଟେ ତିଳକ ଶୋଭା ଉର୍ଦ୍ଧେ ମନୋହର ।।",
            "translation": "ଶ୍ରୀ ଗୌରାଙ୍ଗ ମହାପ୍ରଭୁଙ୍କ ସୁନ୍ଦର ଶରୀର କାମଦେବଙ୍କ ଅପେକ୍ଷା ମଧ୍ୟ ଅଧିକ ମନୋହର। ତାଙ୍କ କପାଳରେ ଅତ୍ୟନ୍ତ ସୁନ୍ଦର ଭାବେ ବୈଷ୍ଣବ ତିଳକ ଶୋଭା ପାଉଛି।",
            "wordMeanings": [
                {
                    "word": "ମଦନ-ମୋହନ",
                    "meaning": "କାମଦେବଙ୍କୁ ମଧ୍ୟ ମୋହିତ କରୁଥିବା"
                },
                {
                    "word": "ତନୁ",
                    "meaning": "ଶରୀର"
                },
                {
                    "word": "ଗୌରାଙ୍ଗ ସୁନ୍ଦର",
                    "meaning": "ସୁନ୍ଦର ଗୌରାଙ୍ଗ ମହାପ୍ରଭୁ"
                },
                {
                    "word": "ଲଲାଟେ",
                    "meaning": "ମଥାରେ/କପାଳରେ"
                },
                {
                    "word": "ତିଳକ ଶୋଭେ",
                    "meaning": "ତିଳକ ଶୋଭା ପାଉଛି"
                },
                {
                    "word": "ଉର୍ଦ୍ଧ୍ୱେ ମନୋହର",
                    "meaning": "ଉର୍ଦ୍ଧ୍ୱପୁଣ୍ଡ୍ର ତିଳକ ଯାହା ଅତ୍ୟନ୍ତ ମନୋହର"
                }
            ]
        },
        {
            "id": 2,
            "lyric": "ତ୍ରିକଚ୍ଛ ବସନ ଶୋଭେ କୁଟିଳ କୁନ୍ତଳ ।\nଆୟତ ନୟନ ଦୁଇ ପରମ ଚଞ୍ଚଳ ।।",
            "translation": "ସେ ତ୍ରିକଚ୍ଛ ଶୈଳୀରେ ଅତି ସୁନ୍ଦର ବସ୍ତ୍ର ପରିଧାନ କରିଛନ୍ତି। ତାଙ୍କ କେଶଗୁଡ଼ିକ କୁଞ୍ଚୁକୁଞ୍ଚିଆ ଏବଂ ତାଙ୍କର ଦୁଇଟି ଆଖି ସ୍ୱଭାବତଃ ଅତ୍ୟନ୍ତ ଚଞ୍ଚଳ।",
            "wordMeanings": [
                {
                    "word": "ତ୍ରି-କଚ୍ଛ ବସନ",
                    "meaning": "ତିନି ଜାଗାରେ ଖୋସା ଯାଇଥିବା ବସ୍ତ୍ର (ଧୋତି)"
                },
                {
                    "word": "ଶୋଭେ",
                    "meaning": "ସୁଶୋଭିତ"
                },
                {
                    "word": "କୁଟିଳ-କୁନ୍ତଳ",
                    "meaning": "କୁଞ୍ଚୁକୁଞ୍ଚିଆ କେଶ"
                },
                {
                    "word": "ପ୍ରାକୃତ ନୟନ",
                    "meaning": "ସ୍ୱାଭାବିକ ଆଖି"
                },
                {
                    "word": "ଦୁଇ",
                    "meaning": "ଦୁଇଟି"
                },
                {
                    "word": "ପରମ ଚଞ୍୍ଚଳ",
                    "meaning": "ଅତ୍ୟନ୍ତ ଚଞ୍ଚଳ"
                }
            ]
        },
        {
            "id": 3,
            "lyric": "ଶୁକ୍ଳ ଯଜ୍ଞସୂତ ଶୋଭେ ବେଡ଼ିୟା ଶରୀରେ ।\nସୂକ୍ଷ୍ମରୂପେ ଅନନ୍ତ ଯେ ହେନ କଳେବରେ ।।",
            "translation": "ତାଙ୍କ ଶରୀରରେ ଧଳା ରଙ୍ଗର ଯଜ୍ଞୋପବୀତ ଶୋଭା ପାଉଛି। ସ୍ୱୟଂ ଶେଷନାଗ ବା ଅନନ୍ତ ଦେବ ଏକ ସୂକ୍ଷ୍ମ ରୂପ ଧାରଣ କରି ତାଙ୍କ ଶରୀରରେ ପଇତା ରୂପରେ ବିରାଜମାନ କରିଛନ୍ତି।",
            "wordMeanings": [
                {
                    "word": "ଶୁକ୍ଳ-ଯଜ୍ଞ-ସୂତ୍ର",
                    "meaning": "ଧଳା ରଙ୍ଗର ଯଜ୍ଞୋପବୀତ (ପଇତା)"
                },
                {
                    "word": "ଶୋଭେ",
                    "meaning": "ଶୋଭା ପାଉଛି"
                },
                {
                    "word": "ବେଡ଼ିୟା ଶରୀରେ",
                    "meaning": "ଶରୀରକୁ ବେଢ଼ି ରହିଛି"
                },
                {
                    "word": "ସୂକ୍ଷ୍ମ-ରୂପେ",
                    "meaning": "ସୂକ୍ଷ୍ମ ରୂପ ଧାରଣ କରି"
                },
                {
                    "word": "ଅନନ୍ତ ଯେ",
                    "meaning": "ଅନନ୍ତ ଦେବ"
                },
                {
                    "word": "ହେନ କଳେବର",
                    "meaning": "ଏହିପରି ଶରୀର"
                }
            ]
        },
        {
            "id": 4,
            "lyric": "ଅଧରେ ତାମ୍ବୁଳ ହାସେ ଅଧର ଚାପିୟା ।\nଯାଉ ବୃନ୍ଦାବନ ଦାସ ସେ ରୂପ ନିଛିୟା ।।",
            "translation": "ତାଙ୍କ ଓଠରେ ପାନ ରହିଛି ଏବଂ ସେ ଏକ ମୃଦୁ ହସ ଚାପି ରଖିଛନ୍ତି। କବି ବୃନ୍ଦାବନ ଦାସ ପ୍ରଭୁଙ୍କର ଏହି ଅତ୍ୟନ୍ତ ମନୋହର ରୂପକୁ ବାରମ୍ବାର ବନ୍ଦନା ଓ ଆଳତି କରୁଛନ୍ତି।",
            "wordMeanings": [
                {
                    "word": "ଅଧରେ ତାମ୍ବୁଳ",
                    "meaning": "ଓଠରେ ପାନ"
                },
                {
                    "word": "ହାସେ",
                    "meaning": "ହସ"
                },
                {
                    "word": "ଅଧର ଚାପିୟା",
                    "meaning": "ଓଠରେ ଚାପି ରଖି"
                },
                {
                    "word": "ଯାଗ",
                    "meaning": "କବି ବନ୍ଦନା କରନ୍ତି"
                },
                {
                    "word": "ବୃନ୍ଦାବନ ଦାସ",
                    "meaning": "କବି ବୃନ୍ଦାବନ ଦାସ"
                },
                {
                    "word": "ସେ-ରୂପ ନିଛିୟା",
                    "meaning": "ସେହି ରୂପକୁ ଆଳତି/ବନ୍ଦନା କରନ୍ତି"
                }
            ]
        }
    ]
}

)
ON CONFLICT (id) DO UPDATE SET 
    title = EXCLUDED.title,
    title_odia = EXCLUDED.title_odia,
    title_english = EXCLUDED.title_english,
    description = EXCLUDED.description,
    author = EXCLUDED.author,
    published = EXCLUDED.published,
    status = EXCLUDED.status,
    structured_content = EXCLUDED.structured_content;