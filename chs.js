/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "(Some achievements are a work in progress.)": "（一些成就正在进行中。）",
    "Buy Max": "购买最大",
    "Can't Touch This": "不能碰这个",
    "Click spamming": "点击垃圾邮件",
    "Compact Claustrophobia": "紧凑型幽闭恐惧症",
    "Complete all challenges and skip to Break Infinity": "完成所有挑战并跳到 打破无限",
    "Complete all challenges.": "完成所有挑战。",
    "A long time later": "很久以后",
    "Age of Automation": "自动化时代",
    "Age of Shifting": "转变时代",
    "Antibroken": "防碎",
    "Antichallenged": "反挑战",
    "antimatter": "反物质",
    "Antimatter Apocalypse": "反物质启示录",
    "Antimatter Dimensions": "反物质维度",
    "antimatter per second.": "反物质每秒。",
    "antimatter.": "反物质。",
    "Autobuyers": "自动购买者",
    "Boosting to the max": "提升到最大",
    "Break Infinity.": "打破无限。",
    "Cost starts scaling at 1e308 antimatter.": "成本从 1e308 反物质开始扩展。",
    "Crunched": "嘎吱嘎吱的",
    "Decrementy Hell": "递减地狱",
    "Deja Vu": "似曾相识",
    "Didn't need it": "不需要它",
    "Didn't need it either": "也不需要",
    "Dimensions": "维度",
    "Enter Challenge 2 after completing all other challenges (except the ultimate challenge).": "完成所有其他挑战（终极挑战除外）后进入挑战 2。",
    "Enter challenge 3 after completing Challenge 4.": "完成挑战 4 后进入挑战 3。",
    "Enter the Ultimate Challenge after completing all challenges.": "完成所有挑战后进入终极挑战。",
    "Exponential Solar Power": "指数太阳能",
    "Fix Infinity. [UNIMPLEMENTED]": "修复无穷大。 [未实现]",
    "Gain your first Galactic Points.": "获得你的第一个银河积分。",
    "Get 1e1024 antimatter. Reward: A sense of accomplishment, and 1 Infinity Point.": "得到 1e1024 反物质。奖励：成就感，1无限点。",
    "Get 6 iron atoms. Reward: Additional +1 to Star Power.": "获得 6 个铁原子。奖励：额外+1星力。",
    "Get above 9e999 antimatter.": "获得高于 9e999 的反物质。",
    "Get at least 1 Booster Power/second. Reward: Booster Power/second is 10% more effective.": "获得至少 1 助推器功率/秒。奖励：助推器功率/秒的效果提高 10%。",
    "Get over 1e200 antimatter.": "获得超过 1e200 的反物质。",
    "Get your best booster run time under 400ms.": "获得低于 400 毫秒的最佳助推器运行时间。",
    "Get your booster gain per second to 0.000 BP/s. Reward: Booster gain minimum is always 0.001 BPS.": "将您的助推器每秒增益提高到 0.000 BP/s。奖励：助推器增益最小值始终为 0.001 BPS。",
    "Get your first iron (Fe) atom.": "得到你的第一个铁 (Fe) 原子。",
    "Get your Star Power to >= ^2 (outside of the Boostless challenge). Reward: Additional +1 to Star Power.": "让你的 Star Power >= ^2（在 Boostless 挑战之外）。奖励：额外+1星力。",
    "GP is based on your antimatter amount. log10(AM/1e512)": "GP 是基于你的反物质数量。日志10(AM/1e512)",
    "HAHA FUNNY AD REFERENCE LAUGH": "哈哈有趣的广告参考笑声",
    "Half Life 3 CONFIRMED!": "半条命3确认！",
    "Have 1 billion Booster Points. Reward: All Antimatter Dimensions are 10% more effective.": "拥有 1 万亿助推器点数。奖励：所有反物质维度的效率提高 10%。",
    "Have 1.79e308 Antimatter.": "拥有 1.79e308 反物质。",
    "Have 1.79e308 matter.": "有 1.79e308 个垫子。",
    "Have all the Autobuyer upgrades.": "拥有所有 自动购买器 升级。",
    "Have all the Shift upgrades from Booster Dimensions.": "从 Booster Dimensions 获得所有 Shift 升级。",
    "Have exactly 99 8th Animatter Dimensions. Reward: 8th Dimensions are 10% stronger.": "正好有 99 个第 8 动画维度。奖励：第 8 维度增强 10%。",
    "I hate this mechanic": "我讨厌这个机械师",
    "I still hate this mechanic": "我还是讨厌这个机械师",
    "Increase tickspeed by 1.125x.": "将滴答速度提高 1,125 倍。",
    "Iron Age": "铁器时代",
    "Ironic": "讽刺的",
    "Layer saves": "层级存档",
    "Layer Saves": "层级存档",
    "Lazy Bastard": "懒惰的混蛋",
    "Let your booster run time exceed 1 hour.": "让您的助推器运行时间超过 1 小时。",
    "Let your Decrementy exceed e1e12. [UNIMPLEMENTED]": "让你的 递减 超过 e1e12。 [未实现]",
    "Let your merge/sec exceed your spawn rate/sec.": "让您的合并/秒超过您的生成率/秒。",
    "Like watching a video on garbage wifi": "就像在垃圾wifi上看视频一样",
    "NaN% to Infinity": "NaN% 到无穷大",
    "Not a luck related achievement": "不是运气相关的成就",
    "NOTE: You can't get this after the last milestone.": "注意：在最后一个里程碑之后，您将无法获得此信息。",
    "On second thought": "转念一想",
    "Perform a Booster Reset.": "执行助推器重置。",
    "Professional Speedrunner": "专业速跑者",
    "Reach 1e512 to unlock Galaxy Points.": "到达 1e512 以解锁银河积分。",
    "Requires 20 4th Dimensions.": "需要 20 个第四维度。",
    "Reset Booster Dimensions and Antimatter Dimensions for GP.": "重置 GP 的助推器尺寸和反物质尺寸。",
    "Reset to gain a x2.0 boost on 1st -> 2nd Dimensions.": "重置以在 1-> 2nd 维度上获得 x2.0 提升。",
    "Skip to Booster Layer": "跳到助推器层",
    "Skip to Galaxy Layer": "跳到银河层",
    "Skip to Infinity Layer": "跳到无限层",
    "Super explosion": "超级爆炸",
    "That's a lot": "好多啊",
    "That's not how it works": "这不是它的工作原理",
    "The 9th Dimension is a lie": "第九维度是谎言",
    "1st Dimension": "第 1 维度",
    "2nd Dimension": "第 2 维度",
    "3rd Dimension": "第 3 维度",
    "You are getting": "你获得 ",
    "Autobuyer": "自动购买器",
    "Tickspeed Autobuyer": "Tick速度 自动购买器",
    "This section is for debugging purposes.": "此部分用于调试目的。",
    "Boost in under 1 minute": "在 1分钟 内加速",
    "Boost in under 1 second": "在 1秒 内加速",
    "Boost in under 10 minutes": "在 10分钟 内加速",
    "Boost in under 15 seconds": "在 15秒 内加速",
    "Boost in under 2 seconds": "在 2 秒 内加速",
    "Boost in under 5 minutes": "在 5分钟 内加速",
    "Boosters": "助推器",
    "Galaxies": "星系",
    "Infinity": "无限",
    "The Boosting Era": "助推时代",
    "This is just AD but worse": "这只是广告，但更糟",
    "Buy a 1st Antimatter Dimension.": "购买第 1 反物质维度。",
    "Buy a 2nd Antimatter Dimension.": "购买第 2 反物质维度。",
    "Buy a 3rd Antimatter Dimension.": "购买第 3 反物质维度。",
    "Buy an 8th Antimatter Dimension.": "购买第 8 反物质维度。",
    "Click to disable.": "单击以禁用。",
    "Click to enable.": "单击以启用。",
    "Disabled": "已禁用",
    "Enabled": "已启用",
    "L4D: Left 4 Dimensions": "L4D：左 4 维",
    "To Infinity?": "到无穷远？",
    "Trigger a supernova.": "触发超新星。",
    "We COULD afford 9!": "我们买得起 9！",
    "We couldn't afford 9": "我们买不起 9",
    "You got past the Big Wall": "你越过了大墙",
    "You gotta start somewhere": "你必须从某个地方开始",
    "You've really nerfed this challenge": "你真的削弱了这个挑战",
    "Animated buttons: OFF": "动画按钮：关闭",
    "Animated buttons: ON": "动画按钮：打开",
    "Booster Point gain is based on your 8th dimensions.": "助推器点增益基于您的第 8 维度。",
    "Galaxy grid: Elements": "银河网格：元素",
    "Galaxy grid: Numbers": "银河网格：数字",
    "stop": "停止",
    "super square rooted": "超级平方根",
    "The Booster Layer is disabled.": "助推器层被禁用。",
    "The Galaxy Layer is disabled.": "星系 层被禁用。",
    "The Galaxy Layer's atomic grid is now 2x2.": "星系层 的原子网格现在是 2x2。",
    "The Galaxy Layer's starting generation speed is 100x faster, but drops exponentially.": "星系层 的起始生成速度快了 100 倍，但呈指数下降。",
    "The multiplier increases with each higher atom,": "乘数随着每个更高的原子而增加，",
    "the scaling nerf based on the log10 of your current BP.": "基于当前 BP 的 log10 的缩放 nerf。",
    "the scaling nerf based on the log100 of your current multiplier.": "基于当前乘数的 log100 的缩放 nerf。",
    "The Ultimate Challenge": "终极挑战",
    "There is exponentially rising matter which divides the power of all your Antimatter Dimensions.": "有呈指数增长的物质将你们所有反物质维度的力量分开。",
    "There is raising decrementy that divides ALL production multipliers. Each challenge completion nerfs this raise. When Decrementy reaches 1.79e308, it will explode exponentially. Galaxy points are gained": "所有生产乘数都在增加递减量。每个挑战完成都会削弱这次加薪。当 Decrementy 达到 1.79e308 时，会呈指数级爆发。获得银河点数",
    "times.": "次。",
    "To be continued...": "未完待续...",
    "True AD": "真正的广告",
    "Unlock autobuyers for Booster Power Upgrades.": "为 助推器力量升级 解锁 自动购买器。",
    "Unlock autobuyers for Booster Upgrades.": "为助推器升级解锁自动购买者。",
    "Unlock autobuyers for Galaxy Upgrades.": "解锁银河升级的自动购买者。",
    "Unlock autobuyers for Supernovas and Supernovas do not reset your atomic grid.": "为超新星和超新星解锁自动购买者不会重置您的原子网格。",
    "Unlock the power to Break Infinity.": "解锁打破无限的力量。",
    "Upgrades": "升级",
    "Use the arrow keys or the mouse to move / merge the atoms around.": "使用箭头键或鼠标移动/合并周围的原子。",
    "x/((power - cap)": "x/((功率-上限)",
    "x/(√(power - cap))": "x/(√(功率 - 上限))",
    "x1e10 to all Antimatter Dimensions.": "x1e10 到所有反物质维度。",
    "You can only merge using the arrow keys. The grid is 5x5.": "您只能使用箭头键合并。网格为 5x5。",
    "You have infinitied": "你已经无限",
    "you lose.": "你输了。",
    "Your current star boosts ADs by": "您当前的明星将广告提升",
    "Your current star's power is": "你现在的明星实力是",
    "Achievement bonus is raised to the power of 1.5.": "成就奖励提高到 1.5 次方。",
    "after": "之后",
    "All 6 Booster Upgrades are unlocked, but you can only buy 2 of them. x10 to BP gain.": "所有 6 个助推器升级均已解锁，但您只能购买其中 2 个。 x10 到 BP 增益。",
    "All buyables are 1,000x cheaper, and unlock a new one.": "所有可购买的东西都便宜 1,000 倍，并解锁一个新的。",
    "Animated buttons: OFF": "动画按钮：关闭",
    "Antimatter Dimensions gain a multiplier based on time played.": "反物质维度根据播放时间获得乘数。",
    "at Iron (Fe).": "在铁 (Fe)。",
    "Atoms start 1 tier later.": "原子稍后开始 1 层。",
    "Auto: OFF": "自动：关闭",
    "Auto: ON": "自动：打开",
    "Boost generation by 35%.": "将发电量提高 35%。",
    "Boost merge rate by 35%.": "将合并率提高 35%。",
    "Boost or Nerf": "增强或削弱",
    "Booster and Galaxy layers are disabled.": "助推器和银河层被禁用。",
    "Booster Point gain is based on your 8th dimensions.": "助推器点增益基于您的第 8 维度。",
    "Booster Points per second.": "每秒助推器点数。",
    "Booster Points.": "助推器点。",
    "Booster Power per second.": "每秒助推器功率。",
    "Booster Power.": "助推器电源。",
    "Boostless": "无增压",
    "BP generation is based on your": "BP 生成基于您的",
    "BPS gains a multiplier": "BPS 获得了乘数",
    "Break": "打破",
    "but will": "但会",
    "Challenge completions raise the base atom by": "挑战完成提高基础原子",
    "Challenges": "挑战",
    "Compact Universe": "紧凑宇宙",
    "Complete milestones to get rewards!": "完成里程碑以获得奖励！",
    "\n                Your booster power multiplies all dimensions by": "\n 你的助推器力量将所有维度乘以",
    "([total fusion power]": "（[总融合功率]",
    "(At 100 times the speed).": "（以 100 倍的速度）。",
    "[star power]": "【星力】",
    "/sec": "/秒",
    "/sec (MAX)": "/秒（最大）",
    "+10% chance to spawn another atom.": "+10% 几率产生另一个原子。",
    "Galaxy Points (GP).": "星系点数 (GP)。",
    "Maxed Out": "最大化",
    "Merge rate:": "合并率：",
    "Spawn rate:": "生成率：",
    "1st Dimensions instead.": "代替第 1 维度。",
    "Dimensional Shifts and boosts reset nothing (except boosts to shifts).": "维度转换和提升不会重置任何内容（转换提升除外）。",
    "Drought": "干旱",
    "Gain 100% BP per second and keep your Booster Milestones.": "每秒获得 100% BP 并保持您的助推器里程碑。",
    "Gain 100% of GP gain per second.": "每秒获得 100% 的 GP 增益。",
    "Gain x2 more IP.": "获得 x2 更多 IP。",
    "Galaxial shifts reset nothing and unlock 2 more Galaxy Upgrades.": "星系转变不会重置任何内容并解锁另外 2 个星系升级。",
    "Galaxies can produce atoms beyond iron.": "星系可以产生铁以外的原子。",
    "GP generation starts at 1e100 AM.": "GP 生成从凌晨 1 点 100 分开始。",
    "If it reaches 1.79e308,": "如果达到 1.79e308，",
    "Infinity Studies": "无限研究",
    "instantly.": "即刻。",
    "Keep your \"Autobuyers Buy Max\" upgrade.": "保持您的“自动购买器购买最大”升级。",
    "Locked until next update": "锁定直到下次更新",
    "per completion.": "每次完成。",
    "Play the true original version of Antimatter Dimensions.": "玩真正的原始版本的反物质维度。",
    "Reduce Booster Upgrade cost by *0.1.": "将助推器升级成本降低 *0.1。",
    "Reduce Galaxy Upgrade cost by *0.1.": "将 星系 升级成本降低 *0.1。",
    "Reduce the AD cost scaling.": "降低 AD 成本比例。",
    "Reward:": "奖励：",
    "Speed": "速度",
    "Starless": "无星",
    "Dimensional Autobuyers will now buy max.": "维度自动购买器 现在将购买最多。",
    "Keep 50% of your Booster Power on reset.": "保留 50% 的 助推器力量 处于重置状态。",
    "Keep all Dimension Shifts on reset.": "保持所有维度转换处于重置状态。",
    "Keep the first Dimension Shift on reset.": "保持第一个 维度偏移 处于重置状态。",
    "Keep the second Dimension Shift on reset.": "保持第二个维度移位重置。",
    "Keep the third Dimension Shift on reset.": "保持第三个维度移位复位。",
    "Power": "力量",
    "Reduce the power scaling penalty even more.": "进一步降低功率缩放损失。",
    "Reduce the power scaling penalty.": "减少功率缩放损失。",
    "Reward: Remove the booster cap": "奖励：移除助推器帽",
    "Reward: BP gain * 5": "奖励：BP增益*5",
    "Reward: BPS * 10, Booster cap * 10": "奖励：BPS * 10，助推器上限 * 10",
    "Gain 10x as much BP per 8th dimensions.": "每 8 个维度获得 10 倍的 BP。",
    "10, Booster cap * 10": "10, 提升上限 * 10",
    "Antimatter.": " 反物质。",
    "Dimensional Sacrifice (locked)": "维度牺牲（未解锁）",
    "Galaxy Autobuyer": "星系自动购买器",
    "True Antimatter Dimensions": "真反物质维度",
    "Dimensional Sacrifice": "维度牺牲",
    "all": "全部",
    "Antimatter Dimensions by": "反物质维度 ",
    "It's dividing": "它除以 ",
    "matter.": "物质。",
    "There is": "有",
    "The universe has exploded due to excess matter.": "宇宙因物质过剩而爆炸。",
    "Exit Challenge": "退出挑战",
    "Restart Challenge": "重新挑战",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'A': 'A',
    'i': 'i',
    'S': 'S',
    'B': 'B',
    'G': 'G',
    'I': 'I',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Complete challenge ": "完成挑战 ",
    "Dimensional Shift ": "维度偏移 ",
    "Your achievements boost Antimatter Dimensions by x": "你的成就将反物质维度提升 x",
    "Supernovas ": "超新星 ",
    "Currently ": "当前 ",
    "Currently: ": "当前：",
    "(Currently: ": "(当前: ",
    "(best time < ": "（最佳时间<",
    "Reward: BPS * ": "奖励：BPS *",
    "Antimatter Galaxies ": "反物质星系 ",
    "Dimensional Boost ": "维度提升 ",
    "Increase tickspeed by ": "将Tick速度提高 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    " Dimension Autobuyer": " 维度自动购买器",
    " to True Infinity": " 到真无限",
    " true": " 真",
    " True": " 真",
    " Dimension Antimatter Punch": " 维度反物质冲击",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^x([\d\.]+) \-\> x([\d\.]+)$/,
    /^([\d\.]+)$/,
    /^\/([\d\.]+)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^x([\d\.]+) K$/,
    /^x([\d\.]+) No$/,
    /^x([\d\.]+) Sp$/,
    /^x([\d\.]+) Qt$/,
    /^x([\d\.]+) Sx$/,
    /^x([\d\.]+) Dc$/,
    /^x([\d\.]+) Oc$/,
    /^x([\d\.]+) T$/,
    /^x([\d\.]+) M$/,
    /^x([\d\.]+) B$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Sp$/,
    /^([\d\.]+) Qd$/,
    /^([\d\.]+) Dc$/,
    /^([\d\.]+) Sx$/,
    /^([\d\.]+) Oc$/,
    /^([\d\.]+) Qt$/,
    /^([\d\.]+) No$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You need (.+) antimatter to unlock this.$/, '你需要 $1 反物质来解锁它。'],
    [/^Buy a (.+)th Antimatter Dimension.$/, '购买第 $1 反物质维度。'],
    [/^You gain (.+) BP per second.$/, '你每秒获得 $1 BP。'],
    [/^You gain (.+) GP per second.$/, '你每秒获得 $1 GP。'],
    [/^You are getting (.+) points per second.$/, '你每秒获得 $1 点数。'],
    [/^Explode your current star, giving a (.+) boost on Star Power.$/, '引爆你当前的星星，使星力增加 $1。'],
    [/^x(.+) to Booster Power.\n(.+)Multiplicative.\n(.+)Currently x(.+).\n(.+)\n(.+)Cost: (.+) BP$/, 'x$1 到 助推器力量。\n$2乘法。\n$3当前 x$4。\n$5\n$6成本：$7 BP'],
    [/^Double the booster point gain per 8th dimensions.\n(.+)Currently (.+) per 10 8th.\n(.+)\n(.+)Cost: (.+) BP$/, '每 8 维将助推器点增益加倍。\n$1目前每 10个 第 8 维度 $2。\n$3\n$4成本：$5 BP'],
    [/^Gain (.+) of your BP gain per second.\n(.+)Currently (.+)\n(.+)\((.+) \/ sec\).\n(.+)\n(.+)Cost: (.+) BP$/, '每秒获得 $1 的 BP 增益。\n$2目前 $3\n$4（$5 \/ 秒）。\n$6\n$7成本：$8 BP'],
    [/^Increase the booster multiplier effectiveness by (.+).\n(.+)Currently x \* (.+).\n(.+)\n(.+)Cost: (.+) BP$/, '将助推器乘数效率提高 $1。\n$2目前 x \* $3。\n$4\n$5成本：$6 BP'],
    [/^Increase the booster power cap by (.+).\n(.+)Currently (.+).\n(.+)\n(.+)Disabled$/, '将助推器功率上限提高 $1。\n$2目前为 $3。\n$4\n$5已禁用'],
    [/^Increase the booster power gain by (.+).\n(.+)Currently (.+)\/sec.\n(.+)\n(.+)Cost: (.+) BP$/, '将助推器功率增益提高 $1。\n$2目前为 $3\/秒。\n$4\n$5成本：$6 BP'],
    [/^Requires (.+)th Dimensions$/, '要求 $1 维度'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) antimatter$/, '下一个在 $1 反物质'],
    [/^Next (.+) \-\> (.+)$/, '下一个 $1 \-\> $2'],
	[/^Tickspeed: (.+) \/ sec$/, 'Tick速度：$1 \/ 秒'],
	[/^\((.+)\/sec\)$/, '（$1\/秒）'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+)\% to Infinity$/, '$1\% 到无限  '],
    [/^([\d\.]+)th Dimension$/, '第 $1 维度'],
    [/^([\d\.]+) Antimatter is a lot$/, '$1 反物质有很多'],
    [/^([\d\.]+) degrees to infinity$/, '$1 度到无限'],
    [/^([\d\.]+) new atoms.$/, '$1 新原子。'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) Antimatter$/, '$1e$2 反物质'],
    [/^([\d\.]+)e([\d\.,]+) True Antimatter$/, '$1e$2 真反物质'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) Iron atom$/, '$1 铁原子'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+)$/, '成本：$1'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);