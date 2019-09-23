const DefaultSettings = {
    "enabled":  true,
    "alerted":  true, // 屏中警告提示
    "notice":   true, // 团长通知提示
    "messager": true, // 公告消息记录
    "marker":   true, // 光柱提示物标记
    "itemId":  98260, // 古龍貝勒古斯的頭
    "bosses": [
        // {huntingZoneId: 10,   templateId: 99,   name: "(蛇岛)莎夏拉克"},
        // {huntingZoneId: 4,    templateId: 5011, name: "(爆炎)暴风喀纳什"},
        // {huntingZoneId: 38,   templateId: 35,   name: "(古代)溃斯格连"},
        // {huntingZoneId: 57,   templateId: 33,   name: "(孵化)卡恰斯坦"},
        // {huntingZoneId: 51,   templateId: 7011, name: "(蜘蛛)拉其奴亚"},
        // {huntingZoneId: 52,   templateId: 9050, name: "(蜥蜴)史内格斗司"},

        {huntingZoneId: 1023, templateId: 3000,     name: "(活動)杜利溫的幻影"},
        {huntingZoneId: 1023, templateId: 20150805, name: "(活動)杜利溫的幻影"},

        {huntingZoneId: 1023, templateId: 88888888, name: "(活動)寶物箱"},
        {huntingZoneId: 1023, templateId: 88888889, name: "(活動)寶物箱"},

        {huntingZoneId: 1023, templateId: 160341,   name: "(活動)聖誕老人"},
        {huntingZoneId: 1023, templateId: 99999997, name: "(活動)貪心鬼聖誕老人"},
        {huntingZoneId: 1023, templateId: 99999998, name: "(活動)小氣鬼聖誕老人"},

        {huntingZoneId: 1023, templateId: 99999991, name: "(活動)偷蛋賊西奴斯"},
        {huntingZoneId: 1023, templateId: 99999992, name: "(活動)偷蛋賊西奴斯"},
        {huntingZoneId: 1023, templateId: 99999999, name: "(活動)偷蛋賊西奴斯"},

        {huntingZoneId: 183,  templateId: 6002, name: "(活動)空投"},

        {huntingZoneId: 26,   templateId: 5001, name: "奧勒曇(生命溪谷)", killedTime: null, nextTime: null},
        {huntingZoneId: 39,   templateId: 501,  name: "哈迦叻(拓荒村莊)", killedTime: null, nextTime: null},
        {huntingZoneId: 51,   templateId: 4001, name: "蓋洛司(希望村莊)", killedTime: null, nextTime: null},

        // 贝里卡
{huntingZoneId:   2,   templateId: 1271, name: "[城镇 2-1271] 阿勒坤(西部砍伐區)"},
{huntingZoneId:   3,   templateId: 1271, name: "[城镇 3-1271] 阿勒坤(遺忘森林)"},
{huntingZoneId:   5,   templateId: 1271, name: "[城镇 5-1271] 阿勒坤(候季安保護區)"}, // 候季安濕地
{huntingZoneId:   6,   templateId: 1271, name: "[城镇 6-1271] 阿勒坤(咆哮侵略地)"},
{huntingZoneId:   7,   templateId: 1271, name: "[城镇 7-1271] 阿勒坤(永恆盆地)"}, // 學識丘陵

        {huntingZoneId:   4,   templateId: 1271, name: "[東部領地]依托羅(爆炎山脈)"},
        {huntingZoneId:   9,   templateId: 1271, name: "[東部領地]依托羅(貪婪溪谷)"}, // 貪欲的黃金神殿
        {huntingZoneId:  10,   templateId: 1271, name: "[東部領地]依托羅(蛇之島)"},
        {huntingZoneId:  11,   templateId: 1271, name: "[東部領地]依托羅(荒涼海岸)"}, // 海賊巢窟
        {huntingZoneId:  12,   templateId: 1271, name: "[東部領地]依托羅(絕望之島)"}, // 迷霧之島

        {huntingZoneId:  15,   templateId: 1271, name: "[波波利亞領地]波雷塔(狂氣丘陵)"}, // 狂怒丘陵
        {huntingZoneId:  16,   templateId: 1271, name: "[波波利亞領地]波雷塔(凡貝爾丘陵)"},
        {huntingZoneId:  17,   templateId: 1271, name: "[波波利亞領地]波雷塔(帕拉諾峽谷)"},
        {huntingZoneId:  23,   templateId: 1271, name: "[波波利亞領地]波雷塔(月之湖)"},

        {huntingZoneId:  18,   templateId: 1271, name: "[比亞阿鳥雷溫領地]菲亞圖(遺忘巨人之都)"},
        {huntingZoneId:  19,   templateId: 1271, name: "[比亞阿鳥雷溫領地]菲亞圖(利卡諾勒曠野)"}, // 叛亂曠野
        {huntingZoneId:  21,   templateId: 1271, name: "[比亞阿鳥雷溫領地]菲亞圖(蜥蜴王巢穴)"},
        {huntingZoneId:  24,   templateId: 1271, name: "[比亞阿鳥雷溫領地]菲亞圖(黃金之路)"},

        // 尔雷曼西亚
        {huntingZoneId:  26,   templateId: 1271, name: "[艾赛尼亚领地]艾沙特(生命溪谷)"},
        {huntingZoneId:  27,   templateId: 1271, name: "[艾赛尼亚领地]艾沙特(艾賽尼亞丘陵地)"}, // 艾賽尼亞丘陵地帶
        {huntingZoneId:  28,   templateId: 1271, name: "[艾赛尼亚领地]艾沙特(汙染森林)"},
        {huntingZoneId:  29,   templateId: 1271, name: "[艾赛尼亚领地]艾沙特(古代森林)"},

{huntingZoneId:  30,   templateId: 1271, name: "[城镇 30-1271] 貝勒沙(太陽庭院)"}, // 眾神戰場

        {huntingZoneId:  31,   templateId: 1271, name: "[威斯多尼亞領地]斯托蘭(冰凍海岸)"}, // 暴風海岸
        {huntingZoneId:  32,   templateId: 1271, name: "[威斯多尼亞領地]斯托蘭(暴君高原)"},
        {huntingZoneId:  34,   templateId: 1271, name: "[威斯多尼亞領地]斯托蘭(寒冰凍原)"},

{huntingZoneId:  35,   templateId: 1271, name: "[城镇 35-1271] 巴亞斯(古龍峽谷)"}, // 掠奪荒野
{huntingZoneId:  36,   templateId: 1271, name: "[城镇 36-1271] 巴亞斯(驅逐者溪谷)"}, // 驅逐者之塔
{huntingZoneId:  38,   templateId: 1271, name: "[城镇 37-1271] 巴亞斯(古代戰爭廢墟)"},

{huntingZoneId:  40,   templateId: 1271, name: "[城镇 40-1271] 潘奈巴(隔離區)"},
{huntingZoneId:  41,   templateId: 1271, name: "[城镇 41-1271] 潘奈巴(野蠻溪谷)"},

        // 凯亚多勒
{huntingZoneId:  45,   templateId: 1271, name: "[城镇 45-1271] 洛堤卡(青空溪谷)"}, // 傀儡要塞
{huntingZoneId:  47,   templateId: 1271, name: "[城镇 47-1271] 洛堤卡(堤勒凱伊森林)"},

{huntingZoneId:  48,   templateId: 1271, name: "[城镇 48-1271] 海勒昆(卡諾比亞前線)"}, // 馬納安神殿

{huntingZoneId:  49,   templateId: 1271, name: "[城镇 49-1271] 洛卡農(卡勒古內雅)"},
{huntingZoneId:  50,   templateId: 1271, name: "[城镇 50-1271] 洛卡農(阿勒古內雅)"},

{huntingZoneId:  51,   templateId: 1271, name: "[城镇 51-1271] 洛亞昆(阿爾卡笛亞峽谷)"}, // 野獸高原
{huntingZoneId:  52,   templateId: 1271, name: "[城镇 52-1271] 洛亞昆(遺忘者雪原)"}, // 使者戰場

        {huntingZoneId:  54,   templateId: 1271, name: "[希巴尼亞領地]希爾貝塔(妖精森林)"},
        {huntingZoneId:  55,   templateId: 1271, name: "[希巴尼亞領地]希爾貝塔(暗影森林)"},
        {huntingZoneId:  56,   templateId: 1271, name: "[希巴尼亞領地]希爾貝塔(黑暗森林)"},
        {huntingZoneId:  57,   templateId: 1271, name: "[希巴尼亞領地]希爾貝塔(阿梅納夸特拉)"},

        // 伊露卡
{huntingZoneId: 172,   templateId: 1271, name: "[城镇 172-1271] 巴雷谷(原始之地)"},
{huntingZoneId: 181,   templateId: 1271, name: "[城镇 181-1271] 巴雷谷(古代巴拉卡遺跡)"},
{huntingZoneId: 182,   templateId: 1271, name: "[城镇 182-1271] 巴雷谷(巴拉卡尼亞丘陵地)"},
{huntingZoneId: 191,   templateId: 1271, name: "[城镇 191-1271] 巴雷谷(帝國之地)"},
{huntingZoneId: 183,   templateId: 1278, name: "[都市 183-1278] 巴雷谷(伊露卡)"},

{huntingZoneId: 183,   templateId: 1271, name: "[都市 183-1271] 約翰度(伊露卡)"},

        // 直辖
        {huntingZoneId:  63,   templateId: 1271, name: "[貝利卡神秘商店]彼得佩依(貝利卡)"},
{huntingZoneId:  63,   templateId: 1278, name: "[都市  63-1278] 貝拉昆(貝利卡)"},

{huntingZoneId:  72,   templateId: 1271, name: "[都市 72-1271] 修墨斯克(爾雷曼西亞)"},
{huntingZoneId:  72,   templateId: 1278, name: "[都市 72-1278] 阿爾魯瑪(爾雷曼西亞)"},

{huntingZoneId:  84,   templateId: 1271, name: "[都市 84-1271] 凱爾門拉依特(凱亞多勒)"},
{huntingZoneId:  84,   templateId: 1278, name: "[都市 84-1278] 凱依德拉(凱亞多勒)"},

        // 特殊
        {huntingZoneId:  13,   templateId: 1271, name: "[巴其溫保護領地]巴勒圖(黎明庭園)"}
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
