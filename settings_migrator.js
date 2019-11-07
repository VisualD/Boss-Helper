const DefaultSettings = {
    "enabled":  true,
    "alerted":  true, // 屏中警告提示
    "notice":   true, // 团长通知提示
    "messager": true, // 公告消息记录
    "marker":   true, // 光柱提示物标记
    "itemId":  98260, // 古龍貝勒古斯的頭
    "bosses": [
        {huntingZoneId: 1023, templateId:     3000, name: "(Event)Dakuryon's Shade"},
        {huntingZoneId: 1023, templateId: 20150805, name: "(Event)Dakuryon's Shade"},
        {huntingZoneId: 1023, templateId: 88888888, name: "(Event)Treasure Chest"},
        {huntingZoneId: 1023, templateId: 88888889, name: "(Event)Treasure Chest"},
        {huntingZoneId: 1023, templateId:   160341, name: "(Event)Sante Glaus"},
        {huntingZoneId: 1023, templateId: 99999997, name: "(Event)Fat Santa"},
        {huntingZoneId: 1023, templateId: 99999998, name: "(Event)Tiny Santa"},
        {huntingZoneId: 1023, templateId: 99999991, name: "(Event)Caiman"},
        {huntingZoneId: 1023, templateId: 99999992, name: "(Event)Caiman"},
        {huntingZoneId: 1023, templateId: 99999999, name: "(Event)Caiman"},
        {huntingZoneId:  183, templateId:     6002, name: "(Event)Airdrop"},
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
        {huntingZoneId: 172, templateId: 1271, name: "[Wandering Merchant]Varrek(Savage Reach)"},
        {huntingZoneId: 181, templateId: 1271, name: "[Wandering Merchant]Varrek(Ex Prima)"},
        {huntingZoneId: 182, templateId: 1271, name: "[Wandering Merchant]Varrek(Spring Valley)"},
        {huntingZoneId: 183, templateId: 1278, name: "[Wandering Merchant]Varrek(Highwatch Outskirts)"},
        {huntingZoneId: 191, templateId: 1271, name: "[Wandering Merchant]Varrek(Arx Umbra)"},
/* ==== Island of Dawn ======================================================================================== */
        {huntingZoneId:  13, templateId: 1271, name: "[Mystery Merchant]Vardung(Island of Dawn)"},
/* ==== 直辖領地 ======================================================================================== */
        {huntingZoneId:  63, templateId: 1278, name: "Veracun(Velika outskirts)"},
        {huntingZoneId:  72, templateId: 1278, name: "Alluman(Allemantheia outskirts)"},
        {huntingZoneId:  84, templateId: 1278, name: "Kaidera(Kaiator outskirts)"},
/* ==== Secret store ======================================================================================== */
        {huntingZoneId:  63, templateId: 1271, name: "Secret store(Velika-1)"},
        {huntingZoneId:  63, templateId: 1279, name: "Secret store(Velika-2)"},
        {huntingZoneId:  72, templateId: 1271, name: "Secret store(Allemantheia)"},
        {huntingZoneId:  84, templateId: 1271, name: "Secret store(Kaiator)"},
        {huntingZoneId: 183, templateId: 1271, name: "Secret store(Highwatch)"},
/* ==== Goblin Starc ====================================================================================== */
        {huntingZoneId:  63, templateId: 1276, logTime: 0, name: "1-Starc Goblin(Velika)"},
        {huntingZoneId:  63, templateId: 1284,             name: "1-Starc Goblin(Velika)"},
        {huntingZoneId:  84, templateId: 1276, logTime: 0, name: "2-Starc Goblin(Kaiator)"},
        {huntingZoneId:  72, templateId: 1276, logTime: 0, name: "3-Starc Goblin(Allemantheia)"},
        {huntingZoneId: 183, templateId: 1276, logTime: 0, name: "4-Starc Goblin(Highwatch Outskirts)"},
/* ==== Raid BOSS ======================================================================================== */
        {huntingZoneId:  26, templateId: 5001, logTime: 0, name: "Blessing Basin(Ortan)"},
        {huntingZoneId:  39, templateId:  501, logTime: 0, name: "Arachnaea(Hazard)"},
        {huntingZoneId:  51, templateId: 4001, logTime: 0, name: "Vale of Spires(Cerrus)"},
/* ==== World BOSS ======================================================================================== */
        {huntingZoneId: 10,   templateId: 99,   name: "(Serpentis Isle)Divine Reaver"},
        {huntingZoneId: 4,    templateId: 5011, name: "(Fyrmount)Tempest Kanash"},
        {huntingZoneId: 38,   templateId: 35,   name: "(Sienna Canyon)Nyxarras"},
        {huntingZoneId: 57,   templateId: 33,   name: "(Amena Quatla)Betsael"},
        {huntingZoneId: 51,   templateId: 7011, name: "(Vale of Spires)Linyphi"},
        {huntingZoneId: 52,   templateId: 9050, name: "(Plain of the Damned)Yunaras Snaggletooth"},
/* ==== Escodor elite mobs ======================================================================================== */
        {huntingZoneId: 2020, templateId: 1100, name: "Escodor-Supreme Draakon Pursuer"},
        {huntingZoneId: 2020, templateId: 1101, name: "Escodor-Draakon Guard-Captain"},
        {huntingZoneId: 2020, templateId: 1102, name: "Escodor-Supreme Draakon Dominator"},
        {huntingZoneId: 2020, templateId: 1200, name: "Escodor-Elite Naga Priest"},
        {huntingZoneId: 2020, templateId: 1201, name: "Escodor-	Elite Naga Knight"},
        {huntingZoneId: 2020, templateId: 1202, name: "Escodor-Elite Naga Executioner"},
        {huntingZoneId: 2020, templateId: 1300, name: "Escodor-Manuk"},
        {huntingZoneId: 2020, templateId: 1400, name: "Escodor-Axcellob"},
        {huntingZoneId: 2020, templateId: 1500, name: "Escodor-Zemces"},
        {huntingZoneId: 2020, templateId: 1600, name: "Escodor-Red-Flecked Crab"},
        {huntingZoneId: 2020, templateId: 1601, name: "Escodor-	Thorny Eyestalker"},
        {huntingZoneId: 2020, templateId: 1700, name: "Escodor-Vekes"}
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
