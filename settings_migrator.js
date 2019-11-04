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
/* ==== 亚伦南部 ======================================================================================== */
        {huntingZoneId:   2, templateId: 1271, name: "[阿卡尼亞領地]阿勒坤(西部砍伐區)"},
        {huntingZoneId:   3, templateId: 1271, name: "[阿卡尼亞領地]阿勒坤(遺忘森林)"},
        {huntingZoneId:   5, templateId: 1271, name: "[阿卡尼亞領地]阿勒坤(候季安保護區)"},
        {huntingZoneId:   6, templateId: 1271, name: "[阿卡尼亞領地]阿勒坤(咆哮侵略地)"},
        {huntingZoneId:   7, templateId: 1271, name: "[阿卡尼亞領地]阿勒坤(永恆盆地)"},
        {huntingZoneId:   4, templateId: 1271, name: "[東部領地]依托羅(爆炎山脈)"},
        {huntingZoneId:   9, templateId: 1271, name: "[東部領地]依托羅(貪婪溪谷)"},
        {huntingZoneId:  10, templateId: 1271, name: "[東部領地]依托羅(蛇之島)"},
        {huntingZoneId:  11, templateId: 1271, name: "[東部領地]依托羅(荒涼海岸)"},
        {huntingZoneId:  12, templateId: 1271, name: "[東部領地]依托羅(絕望之島)"},
        {huntingZoneId:  15, templateId: 1271, name: "[波波利亞領地]波雷塔(狂氣丘陵)"},
        {huntingZoneId:  16, templateId: 1271, name: "[波波利亞領地]波雷塔(凡貝爾丘陵)"},
        {huntingZoneId:  17, templateId: 1271, name: "[波波利亞領地]波雷塔(帕拉諾峽谷)"},
        {huntingZoneId:  23, templateId: 1271, name: "[波波利亞領地]波雷塔(月之湖)"},
        {huntingZoneId:  18, templateId: 1271, name: "[比亞阿鳥雷溫領地]菲亞圖(遺忘巨人之都)"},
        {huntingZoneId:  19, templateId: 1271, name: "[比亞阿鳥雷溫領地]菲亞圖(利卡諾勒曠野)"},
        {huntingZoneId:  21, templateId: 1271, name: "[比亞阿鳥雷溫領地]菲亞圖(蜥蜴王巢穴)"},
        {huntingZoneId:  24, templateId: 1271, name: "[比亞阿鳥雷溫領地]菲亞圖(黃金之路)"},
/* ==== 夏拉南部 ======================================================================================== */
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
/* ==== 夏拉北部 ======================================================================================== */
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
/* ===== 亚伦北部 ======================================================================================= */
        {huntingZoneId: 172, templateId: 1271, name: "[巴拉卡尼亞領地]巴雷谷(原始之地)"},
        {huntingZoneId: 181, templateId: 1271, name: "[巴拉卡尼亞領地]巴雷谷(古代巴拉卡遺跡)"},
        {huntingZoneId: 182, templateId: 1271, name: "[巴拉卡尼亞領地]巴雷谷(巴拉卡尼亞丘陵地)"},
        {huntingZoneId: 183, templateId: 1278, name: "[巴拉卡尼亞領地]巴雷谷(伊露卡近郊)"},
        {huntingZoneId: 191, templateId: 1271, name: "[巴拉卡尼亞領地]巴雷谷(帝國之地)"},
/* ==== 保護領地 ======================================================================================== */
        {huntingZoneId:  13, templateId: 1271, name: "[巴其溫保護領地]巴勒圖(黎明庭園)"},
/* ==== 直辖領地 ======================================================================================== */
        {huntingZoneId:  63, templateId: 1278, name: "[直辖领地]貝拉昆(貝利卡近郊)"},
        {huntingZoneId:  72, templateId: 1278, name: "[直辖领地]阿爾魯瑪(爾雷曼西亞近郊)"},
        {huntingZoneId:  84, templateId: 1278, name: "[直辖领地]凱依德拉(凱亞多勒近郊)"},
/* ==== 神秘商店 ======================================================================================== */
        {huntingZoneId:  63, templateId: 1271, name: "神秘商店(貝利卡-1)"},
        {huntingZoneId:  63, templateId: 1279, name: "神秘商店(貝利卡-2)"},
        {huntingZoneId:  72, templateId: 1271, name: "神秘商店(爾雷曼西亞)"},
        {huntingZoneId:  84, templateId: 1271, name: "神秘商店(凱亞多勒)"},
        {huntingZoneId: 183, templateId: 1271, name: "神秘商店(伊露卡)"},
/* ==== 交付哥布林 ====================================================================================== */
        {huntingZoneId:  63, templateId: 1276, logTime: 0, name: "1-交付哥布林(貝)"},
        {huntingZoneId:  63, templateId: 1284,             name: "1-交付哥布林(貝)"},
        {huntingZoneId:  84, templateId: 1276, logTime: 0, name: "2-交付哥布林(凱)"},
        {huntingZoneId:  72, templateId: 1276, logTime: 0, name: "3-交付哥布林(爾)"},
        {huntingZoneId: 183, templateId: 1276, logTime: 0, name: "4-交付哥布林(伊)"},
/* ==== 世界BOSS ======================================================================================== */
        {huntingZoneId:  26, templateId: 5001, logTime: 0, name: "奧勒曇(生命溪谷)"},
        {huntingZoneId:  39, templateId:  501, logTime: 0, name: "哈迦叻(拓荒村莊)"},
        {huntingZoneId:  51, templateId: 4001, logTime: 0, name: "蓋洛司(希望村莊)"},
/* ==== 空岛稀有 ======================================================================================== */
        {huntingZoneId: 2020, templateId: 1100, name: "空岛-高階高龍追擊者"},
        {huntingZoneId: 2020, templateId: 1101, name: "空岛-高階高龍戰術支援家"},
        {huntingZoneId: 2020, templateId: 1102, name: "空岛-高階高龍制壓者"},
        {huntingZoneId: 2020, templateId: 1200, name: "空岛-精銳那伽神官"},
        {huntingZoneId: 2020, templateId: 1201, name: "空岛-精銳那伽騎士"},
        {huntingZoneId: 2020, templateId: 1202, name: "空岛-精銳那伽執行官"},
        {huntingZoneId: 2020, templateId: 1300, name: "空岛-馬努克"},
        {huntingZoneId: 2020, templateId: 1400, name: "空岛-埃席爾洛普"},
        {huntingZoneId: 2020, templateId: 1500, name: "空岛-傑梅西斯"},
        {huntingZoneId: 2020, templateId: 1600, name: "空岛-紅色苔蘚螃蟹"},
        {huntingZoneId: 2020, templateId: 1601, name: "空岛-獨眼食腐獸"},
        {huntingZoneId: 2020, templateId: 1700, name: "空岛-佩奇斯"}
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
