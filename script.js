const translations = {
    fa: {
        pack_title: "پک ماینکرافت ویژه",
        download: "دانلود پک"
    },
    en: {
        pack_title: "Special Minecraft Pack",
        download: "Download Pack"
    }
};

function changeLanguage(lang) {
    // تغییر جهت سایت
    document.documentElement.dir = (lang === 'fa') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // تغییر متون
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        element.textContent = translations[lang][key];
    });
}
