const data = [
  [
    {
      id: 1,
      name: 'oxxxymiron',
      theSongTitle: 'Где нас нет',
      sound:
        'https://www.dropbox.com/s/59z1ccf1stkkmek/4176-gd_mirvok.ru.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/an2i2shtog1p9a8/owsvd2ihdfe.jpg__1563286799__94718__vid544497e.jpg?dl=1',
      description: `Russian hip-hop artist and former executive director of Booking Machine. Co-founder and former member of Vagabund label.`,
    },
    {
      id: 2,
      name: 'Noize MC',
      theSongTitle: 'Устрой дестрой',
      sound:
        'https://www.dropbox.com/s/s9acnv5wp169etf/Rington_Noize_MC_-_Ustroj_destroj_Mnogo_Repa_%28mp3.mn%29.mp3?dl=1',
      image: 'https://www.dropbox.com/s/wvcyzdpyonh1big/89c86d0.png?dl=1',
      description: `Russian musician. In his tracks he combines recitative with rock compositions  
       `,
    },
    {
      id: 3,
      name: 'Lumen',
      theSongTitle: 'Государство',
      sound: 'https://www.dropbox.com/s/t16lid3pf1ioa7t/gosudarstvo.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/72a8cl616hu4cqw/37618edf83c806a55520e70b12bfa295.jpg?dl=1',
      description: `Russian rock band from Ufa, founded in 1998.`,
    },
    {
      id: 4,
      name: 'Anacondaz',
      theSongTitle: 'Ангел',
      sound:
        'https://www.dropbox.com/s/azfrxzu9iwttejv/Anacondaz_-_Angel_Rington_%28mp3.mn%29.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/eajp317pec79wty/5bc061394adf0-620-anac.jpg?dl=1',
      description: `Russian rap-rock group, formed in Astrakhan in 2009. It is a sextet and has six studio albums and three mini-albums.`,
    },
    {
      id: 5,
      name: 'Скриптонит',
      theSongTitle: 'Веселей',
      sound:
        'https://www.dropbox.com/s/ehfusx34ksxms8y/skriptonit_veselej-namobilu.com.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/jt1kic8bt9rx071/2018-04-30_10-24-19__a49c7cce-4c60-11e8-8a62-5b07c766889f.jpg?dl=1',
      description: `Kazakh rapper and music producer, founder of Musica36 label. For the first time loudly declared himself in 2013 with a video clip for the song "VBVVCTND", a year and a half later he released his debut album "House with Normal Phenomena", which became one of the most successful Russian-language rap albums of 2015.`,
    },
    {
      id: 6,
      name: 'Пошлая Молли',
      theSongTitle: 'Whenever Wherever',
      sound:
        'https://www.dropbox.com/s/ywcjbcbaihu9eiq/poshlaya-molli-feat.-katya-kischuk-mishka.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/spz84ylkekp453g/Poshlaya-Molli-LOL-1.jpg?dl=1',
      description: `Ukrainian pop / rock / indie group, founded by a musician from the city of Zmiyov, Kharkiv region, Kirill Timoshenko, better known under the pseudonym Kirill Bledny.
      The group is one of the most prominent representatives of synth punk. in Ukraine, combining pop-punk with electronic music.`,
    },
  ],
  [
    {
      id: 1,
      name: 'AC/DC',
      theSongTitle: 'Highway to Hell ',
      sound:
        'https://www.dropbox.com/s/kset5ujpkpq5htl/acdc_highway_to_hell-namobilu.com.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/1lgb17ff671l7fh/highwayhellcover1.jpg?dl=1',
      description: `An Australian rock band formed in Sydney in November 1973 by Scottish natives, brothers Malcolm and Angus Young.`,
    },
    {
      id: 2,
      name: 'Nirvana',
      theSongTitle: 'Smells Like Teen Spirit',
      sound:
        'https://www.dropbox.com/s/ncjdee4ciu80xzo/Nirvana_Smells_Like_Teen_Spirit.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/a37gsy91bv4tkcw/1521359341_nirvananew600.jpg?dl=1',
      description: `An American rock band formed by vocalist and guitarist Kurt Cobain and bassist Christ Novoselic in Aberdeen, Washington in 1987. The group has changed several drummers; drummer Dave Grohl played the longest with the group, joining Cobain and Novoselic in 1990. 
       `,
    },
    {
      id: 3,
      name: 'Scorpions',
      theSongTitle: 'Rock You Like A Hurricane',
      sound:
        'https://www.dropbox.com/s/i3uv503vud8jka1/musiclist_scorpions-rock-you-like-a-hurricane.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/t3uyc1s5j2mu9ol/scorpions-v-nashih-serdcah.jpg?dl=1',
      description: `Is a German English-language rock band formed in 1965 in Hanover . The band's style is characterized by both classical hard rock and lyrical guitar ballads. `,
    },
    {
      id: 4,
      name: 'Red Hot Chili Peppers',
      theSongTitle: 'Сalifornication',
      sound:
        'https://www.dropbox.com/s/zx37o3am82a8tpj/red-hot-chili-peppers-californication.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/ynrn20011rpbv23/300px-Red_Hot_Chili_Peppers_2012-07-02_001.jpg?dl=1',
      description: `Is an American rock band formed in 1983 in California by vocalist Anthony Kiedis, bassist Michael Balzari (better known as Flea), guitarist Hillel Slovak and drummer Jack Irons. Has 7 Grammy Awards.`,
    },
    {
      id: 5,
      name: 'Green Day',
      theSongTitle: 'Boulevard Of Broken Dreams',
      sound:
        'https://www.dropbox.com/s/b3ygyrmhzegzy5d/green_day_boulevard_of_broken_dreams.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/qj7yp9o4mpekgkv/91d4f964de0dda463589838972fa8602.jpg?dl=1',
      description: `Is an American punk rock band founded in 1986. Consists of three members: Billie Joe Armstrong (vocals, guitar), Mike Durnt (bass, backing vocals) and Tre Cool (drums).`,
    },
    {
      id: 6,
      name: 'System Of A Down',
      theSongTitle: 'Aerials ',
      sound:
        'https://www.dropbox.com/s/g9cwcgk2o9z62j1/System_Of_A_Down_Aerials_Ringtone_%28by%20Fringster.com%29.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/kg64i3bwermb9el/system-of-a-down.jpg?dl=1',
      description: `Is an Armenian-American rock group formed in Los Angeles in 1992 by Serge Tankian and Daron Malakian under the name Soil, and in 1995 adopted its current name.`,
    },
  ],
  [
    {
      id: 1,
      name: 'Eminem',
      theSongTitle: 'Lose Yourself',
      sound:
        'https://www.dropbox.com/s/0jr7xwcu4und2yj/eminem-emeniem_-_lose-yourself.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/re0kg2ou4130ul7/250px-Eminem_%28cropped%29.jpg?dl=1',
      description: `American rapper, music producer, composer and actor. In addition to his solo career, Eminem was also in the group D12 and the hip-hop duo Bad Meets Evil.`,
    },
    {
      id: 2,
      name: 'Snoop Dogg',
      theSongTitle: 'Wiggle',
      sound:
        'https://www.dropbox.com/s/qhvflx7jgfuohpm/Jason_Derulo_feat_Snoop_Dogg_Wiggle.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/zyb54g90byflk70/604-snoop-dogg.jpg?dl=1',
      description: `American rapper, producer and actor. Snoop Dogg began his career in 1992 after meeting DJ and producer Dr. Dre. Snoop is best known as an MC in the West Coast hip-hop scene and one of Dr. Dre.
       `,
    },
    {
      id: 3,
      name: '50 Cent',
      theSongTitle: 'In Da Club',
      sound:
        'https://www.dropbox.com/s/y7ps4f7z5259gsp/50_Cent_In_Da_Club_Ringtone_%28by%20Fringster.com%29.mp3?dl=1',
      image: 'https://www.dropbox.com/s/3g73s98z5hzj1a3/50-cent.jpg?dl=1',
      description: `Is an American rapper, actor, writer, boxing promoter and producer who came to fame with the release of the albums Get Rich or Die Tryin 'and The Massacre. 50 Cent has had success with both albums, selling over 40 million copies worldwide.`,
    },
    {
      id: 4,
      name: 'JAY-Z',
      theSongTitle: 'La La La',
      sound:
        'https://www.dropbox.com/s/p95empvjdl837nk/Jayz_La_La_La_Excuse_Me_Miss_Again_Ringtone_%28by%20Fringster.com%29.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/f2tqvs4z4sriwa2/jay-z-what-they-gonna-do-part-ii-la-la-la-excuse-me-miss-again-stop.jpg?dl=1',
      description: `American rapper, songwriter, music producer, executive producer, and entrepreneur. In 2017, he became the first rapper to be honored in the Songwriters Hall of Fame, and in 2018 received the Salute to Industry Icons Commemorative Award at 60 th Grammy ceremony`,
    },
    {
      id: 5,
      name: 'Kanye West',
      theSongTitle: 'Stronger',
      sound:
        'https://www.dropbox.com/s/cy14hzsc8y9a309/kanye_west_stronger-namobilu.com.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/iwrf360nti4eq8r/shutterstock_9876703de.jpg?dl=1',
      description: `is an American hip hop performer, rapper, producer, composer and designer. He grew up in Chicago, where he was involved with music from a young age. In the late 1990s and early 2000s, he rose to prominence as a producer, taking part in hitting hits for artists such as Jay-Z, Ludacris, Talib Kweli and Alisha Keys.`,
    },
    {
      id: 6,
      name: 'Drake',
      theSongTitle: `God's Plan`,
      sound:
        'https://www.dropbox.com/s/y9v7kca6gdigc2r/drake_gods_plan-namobilu.com.mp3?dl=1',
      image: 'https://www.dropbox.com/s/sfds9lqhpf04au5/Drake.jpg?dl=1',
      description: `Canadian rapper, singer, songwriter, music producer, actor and entrepreneur. He received his first recognition as an actor in the teenage television series Degrassi: The Next Generation.`,
    },
  ],
  [
    {
      id: 1,
      name: 'Lady Gaga',
      theSongTitle: 'Bad Romance',
      sound:
        'https://www.dropbox.com/s/m6qta1o5f2ijl80/2520_lady_gaga-bad_r.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/g8upwszxukak8lx/Lady_Gaga_SAG_2019.jpg?dl=1',
      description: `American singer, songwriter, producer, philanthropist, designer and actress. 
      She began her career with performing in clubs, and by the end of 2007, 
      producer Vincent Herbert signed the singer to Streamline Records, 
      an offshoot of Interscope Records. `,
    },
    {
      id: 2,
      name: 'Enrique Iglesias',
      theSongTitle: 'Bailando',
      sound:
        'https://www.dropbox.com/s/oue45cdqvzprro9/1409407526_enrique_iglesias_-_bailando_.mp3?dl=1',
      image: 'https://www.dropbox.com/s/0sr1xlkqpxexp94/o.1983.jpg?dl=1',
      description: `Spanish singer, songwriter, producer and actor. 
      Iglesias started his career under the pseudonym "Enrique Martínez" 
      and worked for the inconspicuous Mexican label "FonoMusic". 
       `,
    },
    {
      id: 3,
      name: 'Britney Spears',
      theSongTitle: 'Toxic',
      sound:
        'https://www.dropbox.com/s/k07hg3b0y8fuiwp/britney-spears-toxic.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/04i4hp0b46fo2b2/54ef51d27a0be8663dfa14f1c4df4eb2asdasdasd5a51f3a89c11b7.69330503-650x433-54ef51d27a0be8663dfa14f1c4df4eb2.jpg?dl=1',
      description: `American pop singer, actress, dancer, songwriter, Grammy Award Winner for 
      Best Dance Recording. Her debut album ... Baby One More Time made her worldwide acclaim,
       and her self-titled single topped the Billboard Hot 100. `,
    },
    {
      id: 4,
      name: 'Justin Timberlake',
      theSongTitle: 'What Goes Around...Comes Around ...',
      sound:
        'https://www.dropbox.com/s/asm9v8otxdambx9/justin-timberlake-what-goes-around-comes-around.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/5j8s1qime7aepi7/rabstol_net_justin_timberlake_12-e1507880176212.jpg?dl=1',
      description: `American singer, songwriter, composer, producer, dancer and actor. 
      Winner of four Emmy awards and nine Grammy awards. Justin Timberlake rose to fame as 
      one of the lead singer of boy band 'N Sync.`,
    },
    {
      id: 5,
      name: 'Rihanna',
      theSongTitle: 'Umbrella',
      sound:
        'https://www.dropbox.com/s/3i375r058dsapow/Rihanna_Umbrella.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/79pzuswo1x51rwx/51455f0a67d558693545e232bff3c597.jpg?dl=1',
      description: `Barbadian singer, actress, music producer, fashion designer and philanthropist. 
      She moved to the United States at the age of 16 to pursue a singing career. She later signed 
      to Def Jam Recordings.`,
    },
    {
      id: 6,
      name: 'Shakira',
      theSongTitle: 'Whenever Wherever',
      sound:
        'https://www.dropbox.com/s/a6pbbt4l82wm490/shakira_whenever_wherever-namobilu.com.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/7hvkz8ui146xrjv/1478366909_shakira_tango_video_versija.jpg?dl=1',
      description: `Is a Colombian singer, songwriter, dancer, 
      music producer, choreographer and model. She is widely recognized as the most successful Latin 
      American artist, having achieved success by the early 2000s in both the Hispanic and English-speaking
       music markets.`,
    },
  ],

  [
    {
      id: 1,
      name: 'Louis Armstrong',
      theSongTitle: 'What A Wonderful World',
      sound: 'https://www.dropbox.com/s/rp3zyebzfojaw05/20503.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/bmks207r9e1hw95/Louis-Armstrong.jpg?dl=1',
      description: `American jazz trumpeter, vocalist and ensemble leader.`,
    },
    {
      id: 2,
      name: 'Frank Sinatra',
      theSongTitle: 'Theme from New York, New York',
      sound:
        'https://www.dropbox.com/s/m72mylfoqyzgwga/Frank_Sinatra_New_York_New_York_Ringtone_%28by%20Fringster.com%29.mp3?dl=1',
      image: 'https://www.dropbox.com/s/ehy6rkp05qeqrh7/frank-sinatra.jpg?dl=1',
      description: `American film actor, film director, producer, showman, singer (kruner). He has become a Grammy laureate eleven times. He was famous for his romantic style of singing and the velvet timbre of his voice.". 
       `,
    },
    {
      id: 3,
      name: 'Ray Charles ',
      theSongTitle: 'Hit the Road Jack Remastered',
      sound:
        'https://www.dropbox.com/s/0mug11pf50ef3vw/Ray_Charles_Hit_The_Road_Jack_Ray_Charles_Hit_The_Road_Jack_Ringtone_%28by%20Fringster.com%29.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/nxfq2qwjv3wypfw/Ray_Charles_%281967%29.png?dl=1',
      description: `American pop singer (baritone) and pianist. He sang in various styles, especially famous as a performer in the styles of soul and rhythm and blues. In the United States, he is considered one of the most significant "True American" musicians of the post-war period.`,
    },
    {
      id: 4,
      name: 'Richard Cheese',
      theSongTitle: 'Creep',
      sound:
        'https://www.dropbox.com/s/rucsnkio3j70dri/creep-radiohead.mp3?dl=1',
      image: 'https://www.dropbox.com/s/4zr91l70axv8r4o/800x800bb.jpeg?dl=1',
      description: `American singer, frontman of the band "Richard Cheese and Lounge Against the Machine" from Los Angeles (California). The group is known for its humorous cover versions of songs by famous pop and rock musicians, performed in a manner reminiscent of the style of Frank Sinatra, Dean Martin and Tony Bennett.`,
    },
    {
      id: 5,
      name: 'Nicki Parrott',
      theSongTitle: 'Bei Mir Bist Du Shoen',
      sound:
        'https://www.dropbox.com/s/f7bb1fk2k5zls66/nicki-parrott-bei-mir-bist-du-schoen.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/4bvkbuqfyis1k9b/13950207512_28e4788d3a_b.jpg?dl=1',
      description: `is a jazz vocalist and bass player from Australia.`,
    },
    {
      id: 6,
      name: 'Ella Fitzgerald',
      theSongTitle: `You're the Top`,
      sound: 'https://www.dropbox.com/s/kaf41fg7ofka2dw/youre-the-top.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/6iuf0k42b1zzw94/600x337_ella_fitz.jpg?dl=1',
      description: `American singer, one of the greatest vocalists in the history of jazz music ("first lady of jazz", "first lady of songs"), owner of a three-octave range of voices, master of scat and vocal improvisation.`,
    },
  ],
  [
    {
      id: 1,
      name: 'Ludwig van Beethoven',
      theSongTitle: 'Fur Elise',
      sound:
        'https://www.dropbox.com/s/4tg3fgimsq7548l/Bethoven_-_K_Elize_%28ringon.site%29.mp3?dl=1',
      image:
        'https://www.dropbox.com/s/8tlaybj7s8loqa7/906727875_0_133_915_648_600x0_80_0_0_b77dfb259db49fdaf7ba4abf771c874f.jpg?dl=1',
      description: `German composer, pianist and conductor, the last representative of the "Viennese classical school".`,
    },
    {
      id: 2,
      name: 'Johann Sebastian Bach',
      theSongTitle: 'Scherzo',
      sound:
        'https://www.dropbox.com/s/znkwx6i9s2sezyr/%D0%91%D0%B0%D1%85%20-%20%D0%A8%D1%83%D1%82%D0%BA%D0%B0%20%D0%B8%D0%B7%20%D0%A1%D1%8E%D0%B8%D1%82%D1%8B%20%E2%84%96%202.mp3?dl=1',
      image: 'https://www.dropbox.com/s/lboyv38bt3o9mg6/bah-pre125545.jpg?dl=1',
      description: `German composer, organist, conductor, music teacher.". 
       `,
    },
    {
      id: 3,
      name: 'Petr Ilich Chaykovskiy',
      theSongTitle: 'Waltz of the Flowers',
      sound:
        'https://www.dropbox.com/s/53ot3oym1iowyvn/Petr_Ilich_Chaykovskiy_-_Schelkunchik_Vals_cvetov_%28ringon.site%29.mp3?dl=1',
      image: 'https://www.dropbox.com/s/bkwexzjea4vxtlo/tchaik_2.jpg?dl=1',
      description: `Russian composer, teacher, conductor and music critic.`,
    },
    {
      id: 4,
      name: 'Frederic Francois Chopin',
      theSongTitle: 'Waltz, Op. 64: No. 2 in C-Sharp Minor',
      sound:
        'https://www.dropbox.com/s/8byvtlyak1r2dga/f.-chopin-waltz-in-c-sharp-minor-op.-g4.mp3?dl=1',
      image: 'https://www.dropbox.com/s/dhe55jb2hpmiyqo/p01bqdpx.jpg?dl=1',
      description: `Polish composer and pianist of French-Polish descent, one of the leading representatives of Western European musical romanticism, the founder of the Polish national school of composition.`,
    },
    {
      id: 5,
      name: 'Wolfgang Amadeus Mozart',
      theSongTitle: 'Symphony No:40',
      sound:
        'https://www.dropbox.com/s/candg9tjrnk4wvu/1308049830_mocart-simfoniya-no.-40-col-minor-molto-allegro.mp3?dl=1',
      image: 'https://www.dropbox.com/s/nee628b1fy9ma4t/Mozart.jpg?dl=1',
      description: `Austrian composer and virtuoso musician. One of the most popular classical composers, Mozart has had a great influence on world music culture.`,
    },
    {
      id: 6,
      name: 'Antonio Lucio Vivaldi',
      theSongTitle: 'The Four Seasons - Summer in G Minor ',
      sound:
        'https://www.dropbox.com/s/s81rghu7bujnsln/vivaldi-summer_from_the_4_season.mp3?dl=1',
      image: 'https://www.dropbox.com/s/o8dddesoekt40i0/m1000x1000.png?dl=1',
      description: `Italian composer, violin virtuoso, teacher, conductor, Catholic priest. Vivaldi is considered one of the largest representatives of the Italian violin art of the 18th century, during his lifetime he was widely recognized throughout Europe.`,
    },
  ],
];
const category = [
  'in Russian',
  'Rock',
  'Hip - hop',
  'Pop',
  'Jazz',
  'Classical',
];
export { data, category };
