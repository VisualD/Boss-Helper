const DefaultSettings = {
    "enabled":  true,
    "alerted":  true, // 屏中警告提示
    "notice":   true, // 团长通知提示
    "messager": true, // 公告消息记录
    "marker":   true, // 光柱提示物标记
    "itemId":  98260, // 古龍貝勒古斯的頭
    "bosses": [
        {huntingZoneId: 1023, templateId:     3000, name: "(Ивент)Тень Дуриона"},
        {huntingZoneId: 1023, templateId: 20150805, name: "(Ивент)Тень Дуриона"},
        {huntingZoneId: 1023, templateId: 88888888, name: "(Ивент)Сундук с сокровищами"},
        {huntingZoneId: 1023, templateId: 88888889, name: "(Ивент)Сундук с сокровищами"},
        {huntingZoneId: 1023, templateId:   160341, name: "(Ивент)Дед Мороз"},
        {huntingZoneId: 1023, templateId: 99999997, name: "(Ивент)Толстый Санта"},
        {huntingZoneId: 1023, templateId: 99999998, name: "(Ивент)Крошечный Санта"},
        {huntingZoneId: 1023, templateId: 99999991, name: "(Ивент)Кайман"},
        {huntingZoneId: 1023, templateId: 99999992, name: "(Ивент)Кайман"},
        {huntingZoneId: 1023, templateId: 99999999, name: "(Ивент)Кайман"},
        {huntingZoneId:  183, templateId:     6002, name: "(Ивент)Airdrop"},
/* ==== South Arun ======================================================================================== */
        {huntingZoneId:   2, templateId: 1271, name: "[Acardia Entryway]Arcun(Lumbertown)"},
        {huntingZoneId:   3, templateId: 1271, name: "[Acardia Entryway]Arcun(Oblivion Woods)"},
        {huntingZoneId:   5, templateId: 1271, name: "[Acardia Entryway]Arcun(Tuwangi Mire)"},
        {huntingZoneId:   6, templateId: 1271, name: "[Acardia Entryway]Arcun(Valley of Titans)"},
        {huntingZoneId:   7, templateId: 1271, name: "[Acardia Entryway]Arcun(Небесные холмы)"},
        {huntingZoneId:   4, templateId: 1271, name: "[Allemantheia]Eteral(Fyrmount)"},
        {huntingZoneId:   9, templateId: 1271, name: "[Allemantheia]Eteral(Ascension Valley)"},
        {huntingZoneId:  10, templateId: 1271, name: "[Allemantheia]Eteral(Serpentis Isle)"},
        {huntingZoneId:  11, templateId: 1271, name: "[Allemantheia]Eteral([Jagged Coast)"},
        {huntingZoneId:  12, templateId: 1271, name: "[Allemantheia]Eteral(Mistmoor Island)"},
        {huntingZoneId:  15, templateId: 1271, name: "[Popolion]Foretta(Cliffs of Insanity)"},
        {huntingZoneId:  16, templateId: 1271, name: "[Popolion]Foretta(Vale of the Fang)"},
        {huntingZoneId:  17, templateId: 1271, name: "[Popolion]Foretta(Paraanon Ravine)"},
        {huntingZoneId:  23, templateId: 1271, name: "[Popolion]Foretta(Lake of Tears)"},
        {huntingZoneId:  18, templateId: 1271, name: "[Tulufan]Viadu(Colossal Ruins)"},
        {huntingZoneId:  19, templateId: 1271, name: "[Tulufan]Viadu(Freeholds)"},
        {huntingZoneId:  21, templateId: 1271, name: "[Tulufan]Viadu(Basilisk Crag)"},
        {huntingZoneId:  24, templateId: 1271, name: "[Tulufan]Viadu(Aurum Road)"},
/* ==== South Shara ======================================================================================== */
        {huntingZoneId:  26, templateId: 1271, name: "[艾賽尼亞領地]艾沙特(生命溪谷)"},
        {huntingZoneId:  27, templateId: 1271, name: "[艾賽尼亞領地]艾沙特(艾賽尼亞丘陵地)"},
        {huntingZoneId:  28, templateId: 1271, name: "[艾賽尼亞領地]艾沙特(汙染森林)"},
        {huntingZoneId:  29, templateId: 1271, name: "[艾賽尼亞領地]艾沙特(古代森林)"},
        {huntingZoneId:  30, templateId: 1271, name: "[倍里達斯特別地區]貝勒沙(太陽庭院)"},
        {huntingZoneId:  31, templateId: 1271, name: "[威斯多尼亞領地]斯托蘭(冰凍海岸)"},
        {huntingZoneId:  32, templateId: 1271, name: "[威斯多尼亞領地]斯托蘭(暴君高原)"},
        {huntingZoneId:  34, templateId: 1271, name: "[威斯多尼亞領地]斯托蘭(寒冰凍原)"},
        {huntingZoneId:  35, templateId: 1271, name: "[比亞艾雷尼溫領地]巴亞斯(古龍峽谷)"},
        {huntingZoneId:  36, templateId: 1271, name: "[比亞艾雷尼溫領地]巴亞斯(驅逐者溪谷)"},
        {huntingZoneId:  38, templateId: 1271, name: "[比亞艾雷尼溫領地]巴亞斯(古代戰爭廢墟)"},
        {huntingZoneId:  40, templateId: 1271, name: "[潘諾尼亞領地]潘奈巴(隔離區)"},
        {huntingZoneId:  41, templateId: 1271, name: "[潘諾尼亞領地]潘奈巴(野蠻溪谷)"},
/* ==== North of Shara ======================================================================================== */
        {huntingZoneId:  45, templateId: 1271, name: "[洛斯堤里奇亞領]洛堤卡(青空溪谷)"},
        {huntingZoneId:  47, templateId: 1271, name: "[洛斯堤里奇亞領]洛堤卡(堤勒凱伊森林)"},
        {huntingZoneId:  48, templateId: 1271, name: "[黑坎特別地區]海勒昆(卡諾比亞前線)"},
        {huntingZoneId:  49, templateId: 1271, name: "[洛斯卡伊阿納領地]洛卡農(卡勒古內雅)"},
        {huntingZoneId:  50, templateId: 1271, name: "[洛斯卡伊阿納領地]洛卡農(阿勒古內雅)"},
        {huntingZoneId:  51, templateId: 1271, name: "[洛斯阿爾卡笛亞領地]洛亞昆(阿爾卡笛亞峽谷)"},
        {huntingZoneId:  52, templateId: 1271, name: "[洛斯阿爾卡笛亞領地]洛亞昆(遺忘者雪原)"},
        {huntingZoneId:  54, templateId: 1271, name: "[希巴尼亞領地]希爾貝塔(妖精森林)"},
        {huntingZoneId:  55, templateId: 1271, name: "[希巴尼亞領地]希爾貝塔(暗影森林)"},
        {huntingZoneId:  56, templateId: 1271, name: "[希巴尼亞領地]希爾貝塔(黑暗森林)"},
        {huntingZoneId:  57, templateId: 1271, name: "[希巴尼亞領地]希爾貝塔(阿梅納夸特拉)"},
/* ===== North of Arun ======================================================================================= */
        {huntingZoneId: 172, templateId: 1271, name: "[Странствующий торговец]Варэку(Дикарский Предел)"},
        {huntingZoneId: 181, templateId: 1271, name: "[Странствующий торговец]Варэку(Экс-Прима)"},
        {huntingZoneId: 182, templateId: 1271, name: "[Странствующий торговец]Варэку(Долина Источников)"},
        {huntingZoneId: 183, templateId: 1278, name: "[Странствующий торговец]Варэку(Окрестности Верхнего Дозора)"},
        {huntingZoneId: 191, templateId: 1271, name: "[Странствующий торговец]Варэку(Аркс-Умбра)"},
/* ==== Island of Dawn ======================================================================================== */
        {huntingZoneId:  13, templateId: 1271, name: "[Странствующий торговец]Бардун(Остров Зари)"},
/* ==== 直辖領地 ======================================================================================== */
        {huntingZoneId:  63, templateId: 1278, name: "Веракун(Окрестности Велики)"},
        {huntingZoneId:  72, templateId: 1278, name: "Аллума(Аллемантея)"},
        {huntingZoneId:  84, templateId: 1278, name: "Кай Тера(Кайатор окр.)"},
/* ==== Secret store ======================================================================================== */
        {huntingZoneId:  63, templateId: 1271, name: "Тайный Магазин(Велика-1)"},
        {huntingZoneId:  63, templateId: 1279, name: "Тайный Магазин(Велика-2)"},
        {huntingZoneId:  72, templateId: 1271, name: "Тайный Магазин(Аллемантея)"},
        {huntingZoneId:  84, templateId: 1271, name: "Тайный Магазин(Кайатор)"},
        {huntingZoneId: 183, templateId: 1271, name: "Тайный Магазин(Верхний Дозор)"},
/* ==== Goblin Starc ====================================================================================== */
        {huntingZoneId:  63, templateId: 1276, logTime: 0, name: "1-Гоблин ответственнвый за доставку(Велика)"},
        {huntingZoneId:  63, templateId: 1284,             name: "1-Гоблин ответственнвый за доставку(Велика)"},
        {huntingZoneId:  84, templateId: 1276, logTime: 0, name: "2-Гоблин ответственнвый за доставку(Кайатор)"},
        {huntingZoneId:  72, templateId: 1276, logTime: 0, name: "3-Гоблин ответственнвый за доставку(Аллемантея)"},
        {huntingZoneId: 183, templateId: 1276, logTime: 0, name: "4-Гоблин ответственнвый за доставку(Окрестности Верхнего дозора)"},
/* ==== Raid BOSS ======================================================================================== */
        {huntingZoneId:  26, templateId: 5001, logTime: 0, name: "Блаженное озеро(Ортан)"},
        {huntingZoneId:  39, templateId:  501, logTime: 0, name: "Арахнея(Хазар)"},
        {huntingZoneId:  51, templateId: 4001, logTime: 0, name: "Долина пиков(Кэлос)"},
/* ==== World BOSS ======================================================================================== */
        {huntingZoneId: 10,   templateId: 99,   name: "(Остров Серпентис)Божественный грабитель"},
        {huntingZoneId: 4,    templateId: 5011, name: "(Фирмаунт)Бурный канаш"},
        {huntingZoneId: 38,   templateId: 35,   name: "(Каньон Сиенна)Никсаррас"},
        {huntingZoneId: 57,   templateId: 33,   name: "(Амена-Кватла)Бетсаэль"},
        {huntingZoneId: 51,   templateId: 7011, name: "(Долина пиков)Линифи"},
        {huntingZoneId: 52,   templateId: 9050, name: "(Долина Проклятых)Юнарас"},
/* ==== Escodor elite mobs ======================================================================================== */
        {huntingZoneId: 2020, templateId: 1100, name: "Эскодор-Элитный высший дракон-преследователь"},
        {huntingZoneId: 2020, templateId: 1101, name: "Эскодор-Элитный высший дракон-советник"},
        {huntingZoneId: 2020, templateId: 1102, name: "Эскодор-Элитный высший дракон-покоритель"},
        {huntingZoneId: 2020, templateId: 1200, name: "Эскодор-Элитный наг-жрец"},
        {huntingZoneId: 2020, templateId: 1201, name: "Эскодор-Элитный наг-рыцарь"},
        {huntingZoneId: 2020, templateId: 1202, name: "Эскодор-Элитный наг-пристав"},
        {huntingZoneId: 2020, templateId: 1300, name: "Эскодор-Манук"},
        {huntingZoneId: 2020, templateId: 1400, name: "Эскодор-Аксилоп"},
        {huntingZoneId: 2020, templateId: 1500, name: "Эскодор-Джемезис"},
        {huntingZoneId: 2020, templateId: 1600, name: "Эскодор-Взбешенный красный лишайник"},
        {huntingZoneId: 2020, templateId: 1601, name: "Эскодор-Циклоп"},
        {huntingZoneId: 2020, templateId: 1700, name: "Эскодор-Бэкис"}
    ]
};

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
    if (from_ver === undefined) {
        // Migrate legacy config file
        return Object.assign(Object.assign({}, DefaultSettings), settings);
    } else if (from_ver === null) {
        // No config file exists, use default settings
        return DefaultSettings;
    } else {
        // Migrate from older version (using the new system) to latest one
        if (from_ver + 1 < to_ver) { // Recursively upgrade in one-version steps
            settings = MigrateSettings(from_ver, from_ver + 1, settings);
            return MigrateSettings(from_ver + 1, to_ver, settings);
        }
        // If we reach this point it's guaranteed that from_ver === to_ver - 1, so we can implement
        // a switch for each version step that upgrades to the next version. This enables us to
        // upgrade from any version to the latest version without additional effort!
        switch (to_ver) {
            default:
                let oldsettings = settings
                settings = Object.assign(DefaultSettings, {});
                for (let option in oldsettings) {
                    if (option == "bosses") continue
                    if (settings[option]) {
                        settings[option] = oldsettings[option]
                    }
                }
                break;
        }
        return settings;
    }
}
