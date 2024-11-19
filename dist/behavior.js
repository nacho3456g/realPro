"use strict";
const mainImage = document.querySelector("main img");
const spinnerLoader = document.querySelector("div.spin-loader");
//
const loginToVerify = document.querySelector("div.login-to-verify-age");
const loginButton = loginToVerify.querySelector("button");
//
const articlesContainer = document.querySelector("div.articles");
//
const openLogin = document.querySelector("div.open-app");
openLogin.addEventListener("click", () => {
    location.replace("/login");
});
function showMessage() {
    mainImage.style.display = "none";
    spinnerLoader.style.display = "none";
    loginToVerify.style.display = "flex";
    loginButton.addEventListener("click", () => {
        location.replace("/login");
    });
    setTimeout(() => {
        location.replace("/login");
    }, 4000);
}
;
if (mainImage.complete) {
    spinnerLoader.style.display = "block";
    setTimeout(() => {
        showMessage();
    }, 3500);
}
else {
    mainImage.addEventListener("load", () => {
        spinnerLoader.style.display = "block";
        setTimeout(() => {
            showMessage();
        }, 3500);
    });
}
;
// Responsive modification
const section = document.querySelector("section");
const main = document.querySelector("main");
let pageHeigth;
if (innerWidth > 930 && innerWidth < 1280) {
    pageHeigth = ((innerWidth - 256) * 0.5625) + (section.clientHeight + 16);
    if (innerHeight < pageHeigth) {
        articlesContainer.style.height = `${pageHeigth}px`;
    }
    ;
}
;
if (innerWidth > 1279) {
    pageHeigth = main.clientHeight + section.clientHeight + 36;
    if (innerHeight < pageHeigth) {
        articlesContainer.style.height = `${pageHeigth}px`;
    }
    ;
}
;
window.addEventListener("resize", () => {
    if (innerWidth > 930 && innerWidth < 1280) {
        pageHeigth = ((innerWidth - 256) * 0.5625) + (section.clientHeight + 16);
        if (innerHeight < pageHeigth) {
            articlesContainer.style.height = `${pageHeigth}px`;
        }
        else {
            articlesContainer.style.height = `${innerHeight}px`;
        }
        ;
    }
    else if (innerWidth > 1279) {
        pageHeigth = main.clientHeight + section.clientHeight + 36;
        if (innerHeight < pageHeigth) {
            articlesContainer.style.height = `${pageHeigth}px`;
        }
        else {
            articlesContainer.style.height = `${innerHeight}px`;
        }
        ;
    }
    else { // be careful this is inline styling
        articlesContainer.style.height = "revert";
    }
    ;
});
;
let relatedSuggestions = [
    {
        previewImage: "https://i.ytimg.com/vi/O89LY1gi-aU/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdzt7cV2tpCSH6B5EiG02CizVA1w",
        channalIcon: "https://yt3.ggpht.com/YNzJ9-pykkoSfK1YwsMiD8UOyv1mL3-IXWpDLaKkQvOKE9WDFhLuqY4shcsumA1poIb3-n3Fkw=s68-c-k-c0x00ffffff-no-rj",
        h3: "كيف تبرمج عقلك الباطن - شرح كامل لكتاب قوة عقلك الباطن",
        channalName: "دوباميكافين Dupamicaffeine",
        viewsCount: "10 مليون مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/b4ZTUnJIYiE/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYXlS827sN56hhiNhbMx5sHAKaVA",
        channalIcon: "https://yt3.ggpht.com/TM-lsKXvXLJd6MJzVirw3so1HNwJjcdzHnFd0Q--XTqy95jOkK6p44R0Uct4-snRmaJWEok1EPw=s68-c-k-c0x00ffffff-no-rj",
        h3: "كارلسن ضد كاسباروف | اساطير الشطرنج",
        channalName: "AKRAMe4e5",
        viewsCount: "283 ألف مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/oZF0xUA6xCc/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxUG2ElxIPC8o4C538dL1vA-snEw",
        channalIcon: "https://yt3.ggpht.com/ytc/AIdro_n41if9SngykL9qNFVrudrjugMyfpp8Pd38pjmu1mmedw=s68-c-k-c0x00ffffff-no-rj",
        h3: "Yuri Boyka - Bring It On *HD*",
        channalName: "Helden Medɨa",
        viewsCount: "31 مليون مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/FXplhqjdh4o/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3Df41tBF3dbPEgzl6SJ93dDz76A",
        channalIcon: "https://yt3.ggpht.com/ytc/AIdro_kbx2atd6-4Qc0rahqyuWkc_SSx52-hT18cOPWnwxideQ=s68-c-k-c0x00ffffff-no-rj",
        h3: "المستفز وكمين الممر 😂 | Pubgmobile",
        channalName: "مستفز / Mostafz",
        viewsCount: "478 ألف مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/OzWhJPLJmDM/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACgU1s6fQL4LGI9mlP5T-2s7spjA",
        channalIcon: "https://yt3.ggpht.com/ytc/AIdro_lDVojVN19BJTFnH0d-tbVgyXVkvM6sJn2BumfFqFIm6A=s68-c-k-c0x00ffffff-no-rj",
        h3: "فك التعلق وفن الإنتقام | إزَّاي تنتقم من الطرف التاني اللي تخلَّى عنَّك وتندِّمه ندم عمره. م٢ح٤٤",
        channalName: "Mohamed Fares",
        viewsCount: "690 ألف مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi_webp/vxlwMojCYJ0/sddefault.webp",
        channalIcon: "https://yt3.ggpht.com/ytc/AIdro_mnEkDpHFOHM5qwTnv38YsG2JqDqhFskHHn1RSVhbD_rmY=s68-c-k-c0x00ffffff-no-rj",
        h3: "طور معايا الاستماع في الانجليزي",
        channalName: "دليلك للايلتس",
        viewsCount: "1.4 مليون مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/EvI2gGZEUqg/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDzf0OK4XBJFdUg-Oe5PBM0BWRRw",
        channalIcon: "https://yt3.ggpht.com/K1Xnk1yXCXWUTZ7P3UGaMHQNsF67iVkbvru8Yke7SwVgvqbMJnBxUXlLq3Uxiv7W2gBiqGJy=s68-c-k-c0x00ffffff-no-rj",
        h3: "عارف ليه بتحبها ومش قادر تسيبها ؟ - محمد الغليظ",
        channalName: "Mohammad Elghaleez",
        viewsCount: "149 ألف مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/ux8pSWL0yeE/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgm3_UPAg0m1b2U6fwv34LoSK7vw",
        channalIcon: "https://yt3.ggpht.com/FwNiVrtDP0FKhUCD8dA8Vqpqf8DEZnVmnLmPxPvuVdxtumHp-_qAK0O6xsUDft24oZlrNxd4=s68-c-k-c0x00ffffff-no-rj",
        h3: "علي نجم - رسالة لكل شخص يحب من طرف واحد - الاغلبية الصامتة 26-12-2019",
        channalName: "Marina fm",
        viewsCount: "584 ألف مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/2yU2GADqnbI/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdR4NGPRme-Ln704RZgRcvaFduog",
        channalIcon: "https://yt3.ggpht.com/djKYNqgfJM-H5bdyXMz1HxpQwWhvw5IvJnLJsq99LkxCgL7G0xpDDBQDwVt0wxAUFCC9nwkc=s68-c-k-c0x00ffffff-no-rj",
        h3: "كيف تنسى شخص تحبه ! دون أن تندم على فراقه كلام كل منا يحتاجه للدكتور ياسر الحزيمي",
        channalName: "كيان",
        viewsCount: "1.3 مليون مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/aHr0hkzYzlo/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmWocOGqLx0vOKxqP5gyFKIAJNpQ",
        channalIcon: "https://yt3.ggpht.com/sRxj3d3TX4rQSPOGt_f04zi2cQ1dBedylFAqGJ9UevUASycVxBFUtnk4Vu-bVgy5uzC99W5svsA=s68-c-k-c0x00ffffff-no-rj",
        h3: "سر الصلابة العقلية: كيف تصبح غير قابل للكسر في مواجهة أي تحدٍ؟",
        channalName: "Sciil_سكييل",
        viewsCount: "348 ألف مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/8mQ-v11SeRM/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtW7Y3eW4wFpCYqWcs9de6bUewzg",
        channalIcon: "https://yt3.ggpht.com/ytc/AIdro_n1RlEkgEcG44D1eUX6N_v3WhSZvWvqQAisbftgXMcoPCY=s68-c-k-c0x00ffffff-no-rj",
        h3: "الدحيح - لازم نسيب بعض",
        channalName: "AJ+ كبريت",
        viewsCount: "7.6 مليون مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi_webp/gLs74IjS0H4/sddefault.webp",
        channalIcon: "https://yt3.ggpht.com/ytc/AIdro_nZK2764aaYBDUK1DcQqPz29GN_J4PwSjSv1xFQnIFNXA=s68-c-k-c0x00ffffff-no-rj",
        h3: "إزاي تشتري دماغك في ٣ دقايق",
        channalName: "Band Trend باند تريند",
        viewsCount: "646 ألف مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/xghVPfSjkTA/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBH02WlcWI-flihFqwL363zjBi_qg",
        channalIcon: "https://yt3.ggpht.com/4IudTJSHFJjfk2NqEQBL-1sYhxKehsdJuWaXO6bG0j1S4SBAFtMsaIQGajlxY_L2QJZRsUV8ghw=s68-c-k-c0x00ffffff-no-rj",
        h3: 'هل "حسن نصر الله" شهيد؟',
        channalName: "الدكتور إياد قنيبي - القناة الرسمية",
        viewsCount: "545 ألف مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/oSshylcryPQ/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBX5Mx4Zr4gZdax6FCbY18qiDdzOA",
        channalIcon: "https://yt3.googleusercontent.com/Kt_0sN8wQDq8OKLfa0bonC9gkgYgsn6Pdi8eqyfZjRJXKt4fsmAf2qrf7jCF4q4BycGgLccf=s160-c-k-c0x00ffffff-no-rj",
        h3: "كيف تعاقب شخص يقلل من قيمتك ( فن ادارة العلاقات ) الدكتور ياسر الحزيمي",
        channalName: "Waqar - وقار",
        viewsCount: "2.6 مليون مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/vnk3ellr6q4/sddefault.jpg",
        channalIcon: "https://yt3.ggpht.com/x5dLJCjBRePdkNgtQY3gXpNIleTJzF15FjHW_i6Dl5wklKD21A8wc-6DNu5w_V9TfxCL3lS7_04=s68-c-k-c0x00ffffff-no-rj",
        h3: "جو شو | الموسم التاسع | الحلقة 24│ 6 - 7 أكتوبر",
        channalName: "Joe Show - جو شو",
        viewsCount: "1.3 مليون مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/5Qj3ORbskBg/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCWzAIVne3kiDJxhQN14RGZi6OWQg",
        channalIcon: "https://yt3.ggpht.com/dceiLM2zDzLOTaKks5st0TxViU1Xbk4DpUsCJ9t8i_9TNE50lSzDctn8AQ0yVwRkBLUn7tSbEw=s68-c-k-c0x00ffffff-no-rj",
        h3: "صدمة ابن سوريا من لعبي واتصاله عليا ع البث المباشر واتهمني بالهاك🥶🥶",
        channalName: "WaterBlade",
        viewsCount: "992 ألف مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/YdvywuZVrfs/sddefault.jpg",
        channalIcon: "https://yt3.ggpht.com/ytc/AIdro_n1RlEkgEcG44D1eUX6N_v3WhSZvWvqQAisbftgXMcoPCY=s68-c-k-c0x00ffffff-no-rj",
        h3: "الدحيح - مدمن نجاحات",
        channalName: "AJ+ كبريت",
        viewsCount: "3.5 مليون مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi_webp/A435OwCXmSQ/sddefault.webp",
        channalIcon: "https://yt3.ggpht.com/ytc/AIdro_mKx9HUsJSG7Fgg_TKvf4W-Q0ZPCAz7KE1uou2xCxdShY4=s68-c-k-c0x00ffffff-no-rj",
        h3: "لماذا نؤجل سعادتنا باستمرار؟",
        channalName: "دروس أونلاين",
        viewsCount: "278 ألف مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi_webp/Ld72WAwBqVM/sddefault.webp",
        channalIcon: "https://yt3.ggpht.com/_tScmeBv_Y7npZ8obAP4L-2lsa_P0NQyImfty4aL1Q5hP-M5rdXPhucbvbXuzQhU5CybWSVi=s68-c-k-c0x00ffffff-no-rj",
        h3: "هات عسكري يحميك يا عجلة باشا 😒😲 تامر حسني عمل الغلط مع ظابط أمن الدولة",
        channalName: "The Scene - المشهد",
        viewsCount: "379 ألف مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/KHZyxn6jdHY/sddefault.jpg",
        channalIcon: "https://yt3.ggpht.com/ytc/AIdro_n1RlEkgEcG44D1eUX6N_v3WhSZvWvqQAisbftgXMcoPCY=s68-c-k-c0x00ffffff-no-rj",
        h3: "المُخبر الاقتصادي+ | ماذا لو ضربت إيران أو حزب الله منصات الغاز الطبيعي الإسرائيلية؟",
        channalName: "AJ+ كبريت",
        viewsCount: "874 ألف مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi_webp/NWFO50pLzMg/sddefault.webp",
        channalIcon: "https://yt3.ggpht.com/hYKHMtaVoyWIlGIX8CypPAcvY-QRBWV3-WSyOmi51YsYITzRb3_AjrgyVv_YJ5Brdo-B6y6U_w=s68-c-k-c0x00ffffff-no-rj",
        h3: "كيف بدأ الزنا ؟ .. قصة نبيا الله شيث و إدريس  ( عليهما السلام )",
        channalName: "Yousef Elkott l يوسف القط",
        viewsCount: "184 ألف مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/Qo_1Q-bilMA/sddefault.jpg",
        channalIcon: "https://yt3.ggpht.com/jvMgDXhSwp7SXT9snisJ5NgZJ5_H2DZoZN1Ep6cELf9v2Mksff8Aimo2Ojokd2ZZTdhJEztKBQ=s68-c-k-c0x00ffffff-no-rj",
        h3: "اتحداك ما تضحك بالمقطع هذا! 🤣",
        channalName: "AboFlah",
        viewsCount: "9.1 مليون مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/Qn3awzw2F-E/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAnDkhVIAsJ7CjnIDnIQKdl6gh6gw",
        channalIcon: "https://yt3.ggpht.com/yEAOXJJDMqUN9xMI4tndKAibMIHVc6LornbeD1LbITL8plubbUnG6ppbzEh52LmqmJRwkhXAXg=s68-c-k-c0x00ffffff-no-rj",
        h3: "طالبة ذكية محدش راضي يقربلها فبتقرر انها تعمل دوكتوراه وتبقى اشهر عالمة رياضيات في العالم",
        channalName: "بيت التنين",
        viewsCount: "56 ألف مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/rrnHkoGLyNU/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeD1upyTIF2RFOOTRalUNwYXLQiA",
        channalIcon: "https://yt3.ggpht.com/ytc/AIdro_n1RlEkgEcG44D1eUX6N_v3WhSZvWvqQAisbftgXMcoPCY=s68-c-k-c0x00ffffff-no-rj",
        h3: "الدحيح - موظفون بؤساء",
        channalName: "AJ+ كبريت",
        viewsCount: "7.2 مليون مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/fHRn7KPYeLY/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCH8FfMJX3A3qNnh82aW9UsrwLyDw",
        channalIcon: "https://yt3.ggpht.com/ytc/AIdro_mKx9HUsJSG7Fgg_TKvf4W-Q0ZPCAz7KE1uou2xCxdShY4=s68-c-k-c0x00ffffff-no-rj",
        h3: "مزاجك هو سر فشلك",
        channalName: "دروس أونلاين",
        viewsCount: "1.4 مليون مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/pG11AaJi-5A/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnExNk4N9f8hor-_nwM9zAIZwNbA",
        channalIcon: "https://yt3.ggpht.com/Oz8jOEyxmegkVNCUFb91n_Z1rvpq08No3488gWu-5K4Wf787RwoLj7TLCPXFF_IXGk7umJ7Naw=s68-c-k-c0x00ffffff-no-rj",
        h3: "محتار أتعلم أيه؟ | التعلم في زمن التشتت",
        channalName: "Waleed - وليد",
        viewsCount: "245 ألف مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi_webp/e2n-VVbGj1E/sddefault.webp",
        channalIcon: "https://yt3.ggpht.com/ytc/AIdro_njSVLyRV5aGSoGyyNEwEZkwrkMAHdb1Dk8F7LxALo2mhA=s68-c-k-c0x00ffffff-no-rj",
        h3: "كـيـف تجعل دماغك يحفـظ أي شيء تريده بسرعــة؟ (طريقة مجربة) 😎",
        channalName: "محمد غنايم",
        viewsCount: "5.3 مليون مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/4hJYzTfY3x0/sddefault.jpg",
        channalIcon: "https://yt3.ggpht.com/ytc/AIdro_lO91gzye7NswrfnneuScprn57oLeTHuFUqyNEu_XYiAMg=s68-c-k-c0x00ffffff-no-rj",
        h3: "أفضل مسلسل في تاريخ التلفزيون !",
        channalName: "Wajeeh",
        viewsCount: "197 ألف مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi_webp/a-PzBHtPivg/sddefault.webp",
        channalIcon: "https://yt3.ggpht.com/v1Z6RmsDUUQQpO38YaUfVcIj61qELS5orkA2mmIB-pPr9pnFX5bNGKOZzXSU4VPnkwKNdY3o=s68-c-k-c0x00ffffff-no-rj",
        h3: "ليش أكل الاغنياء مختلف عن اكلك؟",
        channalName: "Ahmad Aburob",
        viewsCount: "2.2 مليون مشاهدة",
    },
    {
        previewImage: "https://i.ytimg.com/vi/BFsmkIBy7Vw/sddefault.jpg",
        channalIcon: "https://yt3.ggpht.com/fJ_dWY6k52TWarogf36YQMUXrTW2IGmvAprRbsuAijwI6kXpWuHycOiYmAZgSlqYQICankF2NQ=s68-c-k-c0x00ffffff-no-rj",
        h3: "كتاب فن الحرب  | سون تزو | كتب صوتية  بصوت إسلام عادل",
        channalName: "Eslam Adel - إسلام عادل",
        viewsCount: "416 ألف مشاهدة",
    },
];
// shuffle related videos
let lastIndex = relatedSuggestions.length - 1;
while (lastIndex > 0) {
    const randomIndex = Math.floor(Math.random() * lastIndex);
    [relatedSuggestions[randomIndex], relatedSuggestions[lastIndex]] = [relatedSuggestions[lastIndex], relatedSuggestions[randomIndex]];
    lastIndex--;
}
;
// create related videos
for (let relatedVideo of relatedSuggestions) {
    const article = document.createElement("article");
    // Add preview image
    const IMGContainer = document.createElement("div");
    IMGContainer.classList.add("image");
    const previewImage = document.createElement("img");
    previewImage.src = relatedVideo.previewImage;
    IMGContainer.append(previewImage);
    article.append(IMGContainer);
    // Add video info
    const videoInfoContainer = document.createElement("div");
    videoInfoContainer.classList.add("video-info");
    //---------------------------------------------------------------------
    const channalIconContainer = document.createElement("div");
    channalIconContainer.classList.add("channal-img");
    const channalIcon = document.createElement("img");
    channalIcon.src = relatedVideo.channalIcon;
    channalIconContainer.append(channalIcon);
    videoInfoContainer.append(channalIconContainer);
    //---------------------------------------------------------------------
    const videoOverviewContainer = document.createElement("div");
    videoOverviewContainer.classList.add("video-overview");
    //
    const h3 = document.createElement("h3");
    h3.textContent = relatedVideo.h3;
    videoOverviewContainer.append(h3);
    //
    const relatedInfoContainer = document.createElement("div");
    relatedInfoContainer.classList.add("realted-info");
    for (let i = 0; i < 3; i++) {
        const span = document.createElement("span");
        if (i === 0) {
            span.id = "relatedChannalName";
            span.textContent = relatedVideo.channalName;
        }
        else if (i === 1) {
            span.textContent = "•";
        }
        else {
            span.id = "relatedVideoWatchesCount";
            span.textContent = relatedVideo.viewsCount;
        }
        ;
        relatedInfoContainer.append(span);
    }
    ;
    videoOverviewContainer.append(relatedInfoContainer);
    //
    videoInfoContainer.append(videoOverviewContainer);
    //
    article.append(videoInfoContainer);
    //-----------------------------------------------------------------------
    articlesContainer.append(article);
}
;
// important thing to do
const allSiteImages = document.querySelectorAll("img");
allSiteImages.forEach(image => {
    image.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });
    //
    if (image.complete) {
        image.style.display = "inline-block";
    }
    else {
        image.addEventListener("load", () => {
            image.style.display = "inline-block";
        });
    }
    ;
});
