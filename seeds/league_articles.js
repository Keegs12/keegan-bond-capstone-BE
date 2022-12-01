/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("league_articles").del();
    await knex("league_articles").insert([
        {
            id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
            article_title:
                "LCK 2022/23 ROSTER SHUFFLE TRACKER & FREE AGENCY BREAKDOWN",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in accumsan lacus. Pellentesque et diam sit amet nulla aliquet vulputate. Donec in nisi ut ipsum auctor feugiat in ut est. Pellentesque eu ante magna. Donec fermentum feugiat dui eu accumsan. Sed leo urna, faucibus eu viverra sed, vulputate non odio. Donec ornare eros vel felis fringilla, vitae viverra orci pretium. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta porttitor diam id lobortis. Maecenas non dolor finibus nunc ultrices semper. Etiam finibus efficitur elit, quis efficitur eros venenatis nec. Nunc non ligula non arcu pulvinar tincidunt. Quisque arcu turpis, semper a enim ut, consectetur porttitor lacus. Ut euismod lorem non nisi pharetra, ut semper lacus ornare.Donec tempus nec enim at vulputate. Suspendisse lobortis turpis nec libero mollis, nec dapibus sapien luctus. Donec ut lorem in erat venenatis aliquam. Quisque laoreet nibh id dolor condimentum, vitae efficitur lorem tempus. Curabitur justo sapien, pharetra et mauris id, ornare congue neque. Duis et dolor mollis, iaculis tellus in, dictum ligula. Nullam eu finibus tortor. Aliquam vel volutpat lorem. Vestibulum in purus vel velit condimentum tincidunt id ac urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae velit et sapien mattis venenatis.Donec dapibus venenatis gravida. Cras id felis maximus, facilisis ligula ac, fermentum lorem. Aliquam nisi nulla, cursus vitae lacus nec, gravida faucibus eros. Nunc euismod finibus justo non tempus. Nullam accumsan purus vitae lorem tristique, ut cursus odio ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas bibendum sagittis magna. Aliquam ultrices, dolor sed laoreet ultrices, sem neque lacinia nulla, non viverra lectus sapien quis nunc. Vestibulum ac euismod diam.",
            image: "https://cdn.oneesports.gg/cdn-data/2022/08/LeagueOfLegends_2022_LCKSummerPlayoffs_GenGRuler_T1Faker_featured.jpg",
        },
        {
            id: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
            article_title:
                "LCS 2022/23 ROSTERS SHUFFLE TRACKER & ROSTER BREAKDOWNS",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in accumsan lacus. Pellentesque et diam sit amet nulla aliquet vulputate. Donec in nisi ut ipsum auctor feugiat in ut est. Pellentesque eu ante magna. Donec fermentum feugiat dui eu accumsan. Sed leo urna, faucibus eu viverra sed, vulputate non odio. Donec ornare eros vel felis fringilla, vitae viverra orci pretium. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta porttitor diam id lobortis. Maecenas non dolor finibus nunc ultrices semper. Etiam finibus efficitur elit, quis efficitur eros venenatis nec. Nunc non ligula non arcu pulvinar tincidunt. Quisque arcu turpis, semper a enim ut, consectetur porttitor lacus. Ut euismod lorem non nisi pharetra, ut semper lacus ornare.Donec tempus nec enim at vulputate. Suspendisse lobortis turpis nec libero mollis, nec dapibus sapien luctus. Donec ut lorem in erat venenatis aliquam. Quisque laoreet nibh id dolor condimentum, vitae efficitur lorem tempus. Curabitur justo sapien, pharetra et mauris id, ornare congue neque. Duis et dolor mollis, iaculis tellus in, dictum ligula. Nullam eu finibus tortor. Aliquam vel volutpat lorem. Vestibulum in purus vel velit condimentum tincidunt id ac urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae velit et sapien mattis venenatis.Donec dapibus venenatis gravida. Cras id felis maximus, facilisis ligula ac, fermentum lorem. Aliquam nisi nulla, cursus vitae lacus nec, gravida faucibus eros. Nunc euismod finibus justo non tempus. Nullam accumsan purus vitae lorem tristique, ut cursus odio ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas bibendum sagittis magna. Aliquam ultrices, dolor sed laoreet ultrices, sem neque lacinia nulla, non viverra lectus sapien quis nunc. Vestibulum ac euismod diam.",
            image: "https://clutchpoints.com/_next/image?url=https%3A%2F%2Fwp.clutchpoints.com%2Fwp-content%2Fuploads%2F2022%2F11%2FTSM_Imports_Latin_American_Player_for_LCS_2023_Season.jpg&w=3840&q=75",
        },
        {
            id: "90ac3319-70d1-4a51-b91d-ba6c2464408c",
            article_title:
                "LEC 2023 ROSTER MOVES & RUMORS | DISCUSSION W/ NYMAERA",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in accumsan lacus. Pellentesque et diam sit amet nulla aliquet vulputate. Donec in nisi ut ipsum auctor feugiat in ut est. Pellentesque eu ante magna. Donec fermentum feugiat dui eu accumsan. Sed leo urna, faucibus eu viverra sed, vulputate non odio. Donec ornare eros vel felis fringilla, vitae viverra orci pretium. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta porttitor diam id lobortis. Maecenas non dolor finibus nunc ultrices semper. Etiam finibus efficitur elit, quis efficitur eros venenatis nec. Nunc non ligula non arcu pulvinar tincidunt. Quisque arcu turpis, semper a enim ut, consectetur porttitor lacus. Ut euismod lorem non nisi pharetra, ut semper lacus ornare.Donec tempus nec enim at vulputate. Suspendisse lobortis turpis nec libero mollis, nec dapibus sapien luctus. Donec ut lorem in erat venenatis aliquam. Quisque laoreet nibh id dolor condimentum, vitae efficitur lorem tempus. Curabitur justo sapien, pharetra et mauris id, ornare congue neque. Duis et dolor mollis, iaculis tellus in, dictum ligula. Nullam eu finibus tortor. Aliquam vel volutpat lorem. Vestibulum in purus vel velit condimentum tincidunt id ac urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae velit et sapien mattis venenatis.Donec dapibus venenatis gravida. Cras id felis maximus, facilisis ligula ac, fermentum lorem. Aliquam nisi nulla, cursus vitae lacus nec, gravida faucibus eros. Nunc euismod finibus justo non tempus. Nullam accumsan purus vitae lorem tristique, ut cursus odio ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas bibendum sagittis magna. Aliquam ultrices, dolor sed laoreet ultrices, sem neque lacinia nulla, non viverra lectus sapien quis nunc. Vestibulum ac euismod diam.",

            image: "https://www.esports.net/wp-content/uploads/2022/11/nymaera-LEC-rosters.jpg",
        },
    ]);
};
