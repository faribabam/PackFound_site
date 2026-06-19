// دیتا بیس پک‌ها
const packs = [
    {
        id: "pack1",
        name: { fa: "نات انی‌مور ۳۲ایکس", en: "Not Anymore 32x" },
        desc: { fa: "پک قرمز تیره برای افزایش اف‌پی‌اس", en: "Dark red pack for fps boost" },
        price: "50,000 Toman"
    }
];

// تابع تغییر زبان
function changeLanguage(lang) {
    document.documentElement.dir = (lang === 'fa') ? 'rtl' : 'ltr';
    
    // تغییر متن‌ها
    packs.forEach(pack => {
        const titleEl = document.getElementById(pack.id + "-title");
        const descEl = document.getElementById(pack.id + "-desc");
        
        if(titleEl) titleEl.textContent = pack.name[lang];
        if(descEl) descEl.textContent = pack.desc[lang];
    });
}
