-- BULK IMPORT OF MISSING SONGS --

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-jayaradhadhava', 'ଜୟ ରାଧା-ମାଧବ (Jaya Rādhā Mādhava)', 'ଜୟ ରାଧା-ମାଧବ', 'Jaya Radha Madhava', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-gitamahatmya', 'ଗୀତା ମାହାତ୍ମ୍ୟ (Gītā Māhātmya)', '', '', 'Adi Sankaracarya', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-bhuliyatomare', 'ଭୁଲିୟା ତୋମାରେ (Bhuliyā tomāre)', '', '', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-amijamunapuline', 'ଆମି ଯମୁନା ପୁଲିନେ (Āmi Jamunā Puline)', '', '', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-aparadhaphalemama', 'ଅପରାଧ ଫଳେ ମମ (Aparādha Phale Mama)', '', '', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-tuwapademinotimor', 'ତୁୟା ପଦେ ମିନତି ମୋର (Tuwā Pade Minoti Mor)', '', '', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-tumisarveswaresvaravrajendrakumar', 'ତୁମି ସର୍ବେଶ୍ଵରେଶ୍ଵର (Tumi Sarveswareswara)', 'ତୁମି ସର୍ବେଶ୍ୱରେଶ୍ବର ବ୍ରଜେନ୍ଦ୍ର କୁମାର', 'Tumi Sarveswareswara Vrajendra Kumar', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-durlabhamanavajanma', 'ଦୁର୍ଲଭ ମାନବ ଜନ୍ମ (Durlabha Mānava Janma)', '', '', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-vidyaravilase', 'ଵିଦ୍ୟାର ଵିଲାସେ (Vidyara Vilase)', 'ଵିଦ୍ୟାର ଵିଲାସେ', 'Vidyara Vilase', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-ohevaisnavathakura', 'ଓହେ ବୈଷ୍ଣବ ଠାକୁର (Ohe Vaisnava Thakura)', 'ଓହେ ବୈଷ୍ଣବ ଠାକୁର', 'Ohe Vaisnava Thakura', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-nitainamhate', 'ନିତାଇ ନାମ ହାଟେ (Nitai Nam Hate)', 'ନିତାଇ ନାମ ହାଟେ', 'Nitai Nam Hate O Ke Jabire Bhai', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-naradamuni', 'ନାରଦ ମୁନି (Narada Muni)', 'ନାରଦ ମୁନି ବାଜାୟ ବୀଣା', 'Narada Muni Bajay Vina', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-yasomatinandana', 'ଯଶୋମତୀ ନନ୍ଦନ (Yasomati Nandana)', 'ଯଶୋମତି ନନ୍ଦନ', 'Yasomati Nandana', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-vibhavarisesa', 'ବିଭାବରୀ ଶେଷ (Vibhavari Sesa)', 'ବିଭାବରୀ ଶେଷ', 'Vibhavari Sesa', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-suddhabhakatacaranarenu', 'ଶୁଦ୍ଧ ଭକତ (Suddha Bhakata Carana Renu)', 'ଶୁଦ୍ଧ ଭକତ-ଚରଣ ରେଣୁ', 'Suddha Bhakata Carana Renu', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-srikrsnacaitanyaprabhujive', 'ଶ୍ରୀକୃଷ୍ଣ ଚୈତନ୍ୟ ପ୍ରଭୁ (Sri Krsna Caitanya Prabhu)', 'ଶ୍ରୀକୃଷ୍ଣଚୈତନ୍ୟ ପ୍ରଭୁ ଜୀବେ ଦୟାକରି', 'Sri Krsna Caitanya Prabhu Jive Doya Kori', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-radhakrsnabolbol', 'ରାଧା-କୃଷ୍ଣ ବୋଲ ବୋଲ (Rādhā-Kṛṣṇa Bol Bol)', '', '', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-sarvasvatomarcarene', 'ସର୍ବସ୍ବ ତୋମାର (Sarvasva Tomar Carane)', 'ସର୍ବସ୍ବ ତୋମାର, ଚରଣେ', 'Sarvasva Tomar Carane', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-prabhutavapadayuge', 'ପ୍ରଭୁ ତବ ପଦଯୁଗେ (Prabhu Tava Pada Yuge)', 'ପ୍ରଭୁ ତବ ପଦଯୁଗେ', 'Prabhu Tava Pada Yuge', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('gita-chapter-15', 'ଅଧ୍ୟାୟ ୧୫ - ପୁରୁଷୋତ୍ତମ ଯୋଗ (Puruṣottama Yoga)', 'ପୁରୁଷୋତ୍ତମ ଯୋଗ', 'Chapter 15: Puruṣottama Yoga', 'Vyasadeva', 'Gita', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('gita-chapter-16', 'ଅଧ୍ୟାୟ ୧୬ - ଦୈବାସୁରସମ୍ପଦବିଭାଗ ଯୋଗ (Daivāsura-saṃpad-vibhāga Yoga)', 'ଦୈବାସୁରସମ୍ପଦବିଭାଗ ଯୋଗ', 'Chapter 16: Daivāsura-saṃpad-vibhāga Yoga', 'Vyasadeva', 'Gita', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('gita-chapter-17', 'ଅଧ୍ୟାୟ ୧୭ - ଶ୍ରଦ୍ଧାତ୍ରୟବିଭାଗ ଯୋଗ (Śraddhā-traya-vibhāga Yoga)', 'ଶ୍ରଦ୍ଧାତ୍ରୟବିଭାଗ ଯୋଗ', 'Chapter 17: Śraddhā-traya-vibhāga Yoga', 'Vyasadeva', 'Gita', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('gita-chapter-18', 'ଅଧ୍ୟାୟ ୧୮ - ମୋକ୍ଷସନ୍ନ୍ୟାସ ଯୋଗ (Mokṣa-sannyasa Yoga)', 'ମୋକ୍ଷସନ୍ନ୍ୟାସ ଯୋଗ', 'Chapter 18: Mokṣa-sannyasa Yoga', 'Vyasadeva', 'Gita', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-gopinatpart2', 'ଗୋପୀନାଥ (Part 2): ଘୁଚାଓ ସଂସାର୍ (Gopinath Part 2)', 'ଗୋପୀନାଥ (Part 2): ଘୁଚାଓ ସଂସାର୍', 'Gopinath Part 2 (Ghuchao Sansar)', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-gopinatpart3', 'ଗୋପୀନାଥ (Part 3): ଆମାର ଉପାୟ ନାହି (Gopinath Part 3)', 'ଗୋପୀନାଥ (Part 3): ଆମାର ଉପାୟ ନାହି', 'Gopinath Part 3 (Amar Upaya Nai)', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-gurudevakrpabindu', 'ଗୁରୁଦେବ କୃପା ବିନ୍ଦୁ ଦିଆ (Gurudev! Krpa Bindu Diya)', 'ଗୁରୁଦେବ କୃପା ବିନ୍ଦୁ ଦିଆ', 'Gurudev! Krpa Bindu Diya', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-gurudevaborokrpakori', 'ଗୁରୁଦେବ ବଡ଼ କୃପା କରି (Gurudev! Boro Krpa Kori)', 'ଗୁରୁଦେବ ବଡ଼ କୃପା କରି', 'Gurudev! Boro Krpa Kori', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-kabesrichaitanyamore', 'କବେ ଶ୍ରී ଚୈତନ୍ୟ ମୋରେ (Kabe Sri Chaitanya More)', 'କବେ ଶ୍ରୀ ଚୈତନ୍ୟ ମୋରେ', 'Kabe Sri Chaitanya More', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-kijanikibale', 'କି ଜାନି କି ବଲେ (Ki Jani Ki Bale)', 'କି ଜାନି କି ବଲେ', 'Ki Jani Ki Bale', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-bhajabhakatavatsala', 'ଭଜ ଭକତ-ବତ୍ସଲ (Bhaja Bhakata-Vatsala)', 'ଭଜ ଭକତ-ବତ୍ସଲ', 'Bhaja Bhakata-Vatsala', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-oremanabhalonahilage', 'ଓ ରେ ମନ, ଭାଲ ନାହି ଲାଗେ (Ore Mana Bhalonahi Lage)', 'ଓ ରେ ମନ, ଭାଲ ନାହି ଲାଗେ ଏ ସଂସାର', 'Ore Mana Bhalonahi Lage E Samsar', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-mamamanamandire', 'ମମ ମନ ମନ୍ଦିରେ (Mama Mana Mandire)', 'ମମ ମନ ମନ୍ଦିରେ', 'Mama Mana Mandire', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-manasadehogehoyokichu', 'ମାନସ, ଦେହ, ଗେହ (Manasa Deho Geho)', 'ମାନସ, ଦେହ, ଗେହ', 'Manasa Deho Geho Jo Kichu Mor', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-hariboloharibolo', 'ହରି ବୋଲ ହରି ବୋଲ (Hari bolo Hari bolo)', 'ହରି ବୋଲ ହରି ବୋଲ', 'Hari bolo Hari bolo', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-jivjago', 'ଜୀବ ଜାଗ ଜୀବ ଜାଗ (Jiv Jago Jiv Jago)', 'ଜୀବ ଜାଗ ଜୀବ ଜାଗ', 'Jiv Jago Jiv Jago', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-jayajayaradhakrsna', 'ଜୟ ଜୟ ରାଧାକୃଷ୍ଣ (Jaya Jaya Radha Krsna)', 'ଜୟ ଜୟ ରାଧାକୃଷ୍ଣ', 'Jaya Jaya Radha Krsna', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-kabegourabane', 'କବେ ଗୌର ବନେ (Kabe Goura Bane)', 'କବେ ଗୌର ବନେ', 'Kabe Goura Bane', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-kabehabebolo', 'କବେ ହ’ବେ ବୋଲୋ (Kabe Ha\', 'କବେ ହ’ବେ ବୋଲୋ', 'Kabe Ha\', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-amitodurjanaati', 'ଆମି ତୋ\', 'ଆମି ତୋ\', 'Ami To\', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-asalokathabolte', 'ଆସଲୋ କଥା ବୋଲ୍ତେ (Asalo Katha Bolte)', 'ଆସଲୋ କଥା ବୋଲ୍ତେ', 'Asalo Katha Bolte', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-bhalegauragadadhara', 'ଭାଲେ ଗୌରା-ଗଦାଧରୈର ଆରତି (Bhale Gaura Gadadharer Arati)', 'ଭାଲେ ଗୌରା-ଗଦାଧରୈର ଆରତି', 'Bhale Gaura Gadadharer Arati', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-gurudevevrajavane', 'ଗୁରୁଦେବେ ବ୍ରଜ-ବନେ (Gurudeve Vraja Vane)', 'ଗୁରୁଦେବେ ବ୍ରଜ-ବନେ', 'Gurudeve Vraja Vane', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-hariharikabemora', 'ହରି ହରି କବେ ମୋର (Hari Hari Kabe Mora)', 'ହରି ହରି କବେ ମୋର', 'Hari Hari Kabe Mora', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-kabehabehenodasa', 'କବେ ହ’ବେ ହେନୋ ଦଶା (Kabe Habe Heno Dasa)', 'କବେ ହ’ବେ ହେନୋ ଦଶା', 'Kabe Habe Heno Dasa', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-kabemuivaishnava', 'କବେ ମୁଇ ବୈଷ୍ଣବ ଚିନିବୋ (Kabe Mui Vaishnava Cinibo)', 'କବେ ମୁଇ ବୈଷ୍ଣବ ଚିନିବୋ', 'Kabe Mui Vaishnava Cinibo', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-kalikukkurakadan', 'କଳି କୁକ୍କୁର କଦନ (Kali Kukkura Kadan)', 'କଳି କୁକ୍କୁର କଦନ', 'Kali Kukkura Kadan', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-kenoharekrsnanam', 'କେନୋ ହରେ କୃଷ୍ଣ ନାମ (Keno Hare Krsna Nam)', 'କେନୋ ହରେ କୃଷ୍ଣ ନାମ', 'Keno Hare Krsna Nam', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-kesavatuwajagata', 'କେଶବ! ତୁୱା ଜଗତ ବିଚିତ୍ର (Kesava Tuwa Jagata Vicitra)', 'କେଶବ! ତୁୱା ଜଗତ ବିଚିତ୍ର', 'Kesava Tuwa Jagata Vicitra', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-nijakarmadosephale', 'ନିଜ କର୍ମ ଦୋଷ ଫଲେ (Nija Karma Dose Phale)', 'ନିଜ କର୍ମ ଦୋଷ ଫଲେ', 'Nija Karma Dose Phale', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-prapanceporiyagati', 'ହରି ହେ! ପ୍ରପଞ୍ଚେ ପୋଡ଼ିୟା (Prapance Poriya Agati)', 'ହରି ହେ! ପ୍ରପଞ୍ଚେ ପୋଡ଼ିୟା', 'Prapance Poriya Agati', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-radhakundatata', 'ରାଧା-କୁଣ୍ଡ-ତଟ-କୁଞ୍ଜ-କୁଟୀର (Radha Kunda Tata Kunja Kutir)', 'ରାଧା-କୁଣ୍ଡ-ତଟ-କୁଞ୍ଜ-କୁଟୀର', 'Radha Kunda Tata Kunja Kutir', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-srikrsnakirtane', 'ଶ୍ରୀ-କୃଷ୍ଣ-କୀର୍ତ୍ତନେ ଯଦି ମାନସ ତୋହାର (Sri Krsna Kirtane Jadi Manasa Tohar)', 'ଶ୍ରୀ-କୃଷ୍ଣ-କୀର୍ତ୍ତନେ ଯଦି ମାନସ ତୋହାର', 'Sri Krsna Kirtane Jadi Manasa Tohar', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-yaditeharipada', 'ଯଦି ତେ ହରି-ପାଦ-ସରୋଜ-ସୁଧା (Yadi Te Hari Pada Saroja Sudha)', 'ଯଦି ତେ ହରି-ପାଦ-ସରୋଜ-ସୁଧା', 'Yadi Te Hari Pada Saroja Sudha', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

INSERT INTO songs (id, title, title_odia, title_english, author, category, published)
VALUES ('song-borosukherkhabar', 'ବଡ଼ ସୁଖେର ଖବର ଗାଇ (Boro Sukher Khabor Gai)', 'ବଡ଼ ସୁଖେର ଖବର ଗାଇ', 'Boro Sukher Khabor Gai', 'Bhaktivinoda Thakura', 'Songs', true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, title_odia = EXCLUDED.title_odia, title_english = EXCLUDED.title_english;

