// pages/maintain/maintain.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    curNav: 3,
    curIndex: 0,
    show2: false,
    iconSlement: false,
    btnDisable: true,
    shopNums: 0,
    moneyNums: 0,
    curenNmaes: '',
    shoppingCart: [],
    navLeft: [],
    cateItems: [{
        cate_id: 1,
        cate_name: "更换机油",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: 'FUCHS福斯泰坦超级全合成 0W-40 SN 1L 汽车发动机机油',
            image: "../../images/jiyourunhuayou.jpg",
            pice: 69
          },
          {
            child_id: 2,
            name: 'FUCHS福斯超级全合成5W-40 SN 4L 抑制烧机油 厂家直供',
            image: "../../images/fangdonglengqueye.jpg",
            pice: 199
          },
          {
            child_id: 3,
            name: 'CASTROL嘉实多磁护5W-40 SN 4L 全合成汽油机油 ',
            image: "../../images/chacheyouzhidongye.jpg",
            pice: 219
          },
          {
            child_id: 4,
            name: 'SHELL壳牌灰壳喜力机油 5W-40 SN 4L 全合成汽油机油',
            image: "../../images/zhulizhuanxiangyou.jpg",
            pice: 239
          },
          {
            child_id: 5,
            name: 'CASTROL嘉实多液钛EDGE极护 0W-40 4L 全合成汽油机油',
            image: "../../images/shoudongdangbiansuxiangyou.jpg",
            pice: 290
          },
          {
            child_id: 6,
            name: 'MOBIL美孚1号 0W-40 SN 0.946L 全合成汽油机油 进口机油',
            image: "../../images/zidongdangbiansuxiangyou.jpg",
            pice: 49
          },
          {
            child_id: 7,
            name: 'MOTUL摩特H-TECH Prime/ H-TECH Multi Standar5W-40 4L',
            image: "../../images/qianchasuqiyou.jpg",
            pice: 173
          }

        ]
      },
      {
        cate_id: 2,
        cate_name: "更换机油虑芯",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '汉格斯特H314W机油滤A1A3(进口)尚酷高尔夫6帕萨特途观新甲壳虫',
            image: "../../images/jiyourunhuayou.jpg",
            pice: 76
          },
          {
            child_id: 2,
            name: '曼牌 W712/94 机油滤清器  奥迪 A1/A3 大众 尚酷/甲壳虫/高尔夫 西雅特伊比飒',
            image: "../../images/fangdonglengqueye.jpg",
            pice: 82
          },
          {
            child_id: 3,
            name: '奥迪A1 A3 尚酷 新甲壳虫 汉格斯特机油滤清器滤芯H314W01',
            image: "../../images/chacheyouzhidongye.jpg",
            pice: 94
          },

        ]
      },
      {
        cate_id: 3,
        cate_name: "更换空调滤芯",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '曼牌 W712/94 机油滤清器  奥迪 A1/A3 大众 尚酷/甲壳虫/高尔夫 西雅特伊比飒',
            pice: 82,
            image: "../../images/jiyoulvqingqi.jpg"
          },
          {
            child_id: 2,
            name: '曼牌 W712/94 机油滤清器  奥迪 A1/A3 大众 尚酷/甲壳虫/高尔夫 西雅特伊比飒',
            pice: 82,
            image: "../../images/kongqilvqingqi.jpg"
          },
          {
            child_id: 3,
            name: '曼牌 W712/94 机油滤清器  奥迪 A1/A3 大众 尚酷/甲壳虫/高尔夫 西雅特伊比飒',
            pice: 82,
            image: "../../images/kongdiaolvqingqi.jpg"
          },
          {
            child_id: 4,
            name: '曼牌 W712/94 机油滤清器  奥迪 A1/A3 大众 尚酷/甲壳虫/高尔夫 西雅特伊比飒',
            pice: 82,
            image: "../../images/ranyoulvqingqi.jpg"
          },
          {
            child_id: 5,
            name: '曼牌 W712/94 机油滤清器  奥迪 A1/A3 大众 尚酷/甲壳虫/高尔夫 西雅特伊比飒',
            pice: 82,
            image: "../../images/xudianchidianping.jpg"
          },
          {
            child_id: 6,
            name: '曼牌 W712/94 机油滤清器  奥迪 A1/A3 大众 尚酷/甲壳虫/高尔夫 西雅特伊比飒',
            pice: 82,
            image: "../../images/xudianchidianping.jpg"
          },
          {
            child_id: 7,
            name: '曼牌 W712/94 机油滤清器  奥迪 A1/A3 大众 尚酷/甲壳虫/高尔夫 西雅特伊比飒',
            pice: 82,
            image: "../../images/yuguapian.jpg"
          },
          {
            child_id: 8,
            name: '曼牌 W712/94 机油滤清器  奥迪 A1/A3 大众 尚酷/甲壳虫/高尔夫 西雅特伊比飒',
            pice: 82,
            image: "../../images/chachepian.jpg"
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: "更换燃油滤芯",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '曼牌 WK5014 燃油滤清器 别克 君越',
            image: "../../images/qiyoutianjiaji.jpg",
            pice: 49
          },
          {
            child_id: 21,
            name: '索菲玛（SOFIMA） S0891B 汽油/燃油滤清器 老款君越2.4/3.0/陆尊3.0',
            image: "../../images/fadongjikangmobaohuji.jpg",
            pice: 45
          }
        ]
      },
      {
        cate_id: 5,
        cate_name: "更换空气滤芯",
        ishaveChild: true,
        children: [{
            child_id: 10,
            name: '曼牌 C27008 空气滤清器  别克 新世纪（02年前）/老君威/老君越（09年前））',
            image: "../../images/sanyuancuihuaqingxi.jpg",
            pice: 62
          },
          {
            child_id: 11,
            name: '博世AF2254 君威/君越/新世纪 空气滤清器 空滤 空气格',
            image: "../../images/ranshaoshiqingxiji.jpg",
            pice: 29.9
          },
          {
            child_id: 12,
            name: '索菲玛S0608A适用于别克新世纪 君越 君威 空气滤清器',
            image: "../../images/youluqingxiji.jpg",
            pice: 26
          },
        ]
      },
      {
        cate_id: 6,
        cate_name: "更换防冻液",
        ishaveChild: true,
        children: [{
            child_id: 10,
            name: '福斯万能防冻液冰点-45度（黄色） 4L  不分颜色随意添加',
            image: "../../images/sanyuancuihuaqingxi.jpg",
            pice: 69
          },
          {
            child_id: 10,
            name: '美国原装进口爱温无水冷却液汽车防冻液发动机冷却水终身免换',
            image: "../../images/fangdong_01.jpg",
            pice: 499
          },
          {
            child_id: 10,
            name: '加德士防冻液发动机防锈液4L红色-36度',
            image: "../../images/fangdong_02.png",
            pice: 65
          },
          {
            child_id: 10,
            name: '美国AMSOIL安索引擎冷却液/防冻液长效无水纯液 黄绿色 力荐',
            image: "../../images/fangdong_03.jpg",
            pice: 458
          },
          {
            child_id: 10,
            name: ' 美国冠军水箱宝/防冻液-45℃红色 所有车型通用 4L',
            image: "../../images/fangdong_04.jpg",
            pice: 55
          },
          {
            child_id: 10,
            name: '壳牌防冻液/冷却液//水箱宝 正品全效4L -30度红色 ',
            image: "../../images/fangdong_01.jpg",
            pice: 63
          },
          {
            child_id: 10,
            name: '正品壳牌防冻液-45℃ 4L 红色车用水箱宝 行货 ',
            image: "../../images/fangdong_01.jpg",
            pice: 68
          }
        ]
      },
      {
        cate_id: 7,
        cate_name: "更换刹车油",
        ishaveChild: true,
        children: [{
            child_id: 10,
            name: ' MOTUL摩特 DOT3&4 BRAKE FLUID 全合成刹车油 500ML',
            image: "../../images/sanyuancuihuaqingxi.jpg",
            pice: 79
          },
          {
            child_id: 11,
            name: '博世（BOSCH）刹车油 制动液 DOT4 HP升级版 1L装 意大利原装进口',
            image: "../../images/ranshaoshiqingxiji.jpg",
            pice: 68
          },
          {
            child_id: 12,
            name: 'BOSCH 博世 DOT4/HZY4 制动液/刹车油 1000ml装',
            image: "../../images/youluqingxiji.jpg",
            pice: 48
          },
          {
            child_id: 13,
            name: '德国巴斯夫（BASF）刹车油/刹车液/制动液 DOT4',
            image: "../../images/huayouqiqingxiji.jpg",
            pice: 79
          }
        ]
      },
      {
        cate_id: 8,
        cate_name: "更换助力油",
        ishaveChild: true,
        children: [{
            child_id: 10,
            name: ' MOTUL摩特 DOT3&4 BRAKE FLUID 全合成刹车油 500ML',
            image: "../../images/sanyuancuihuaqingxi.jpg",
            pice: 110
          },
          {
            child_id: 11,
            name: '博世（BOSCH）刹车油 制动液 DOT4 HP升级版 1L装 意大利原装进口',
            image: "../../images/ranshaoshiqingxiji.jpg",
            pice: 70
          },

        ]
      },
      {
        cate_id: 9,
        cate_name: "更换火花塞",
        ishaveChild: true,
        children: [{
            child_id: 10,
            name: ' MOTUL摩特 DOT3&4 BRAKE FLUID 全合成刹车油 500ML',
            image: "../../images/sanyuancuihuaqingxi.jpg",
            pice: 355
          },
          {
            child_id: 11,
            name: '博世（BOSCH）刹车油 制动液 DOT4 HP升级版 1L装 意大利原装进口',
            image: "../../images/ranshaoshiqingxiji.jpg",
            pice: 32
          },
        ]
      },
      {
        cate_id: 10,
        cate_name: "更换变速油箱",
        ishaveChild: true,
        children: [{
            child_id: 10,
            name: ' MOTUL摩特 DOT3&4 BRAKE FLUID 全合成刹车油 500ML',
            image: "../../images/sanyuancuihuaqingxi.jpg",
            pice: 79
          },
          {
            child_id: 11,
            name: '博世（BOSCH）刹车油 制动液 DOT4 HP升级版 1L装 意大利原装进口',
            image: "../../images/ranshaoshiqingxiji.jpg",
            pice: 125
          },
          {
            child_id: 12,
            name: 'BOSCH 博世 DOT4/HZY4 制动液/刹车油 1000ml装',
            image: "../../images/youluqingxiji.jpg",
            pice: 99
          },
          {
            child_id: 13,
            name: '德国巴斯夫（BASF）刹车油/刹车液/制动液 DOT4',
            image: "../../images/huayouqiqingxiji.jpg",
            pice: 955
          }
        ]
      },
      {
        cate_id: 11,
        cate_name: "前差速器/前桥油",
        ishaveChild: true,
        children: [{
            child_id: 10,
            name: ' MOTUL摩特 DOT3&4 BRAKE FLUID 全合成刹车油 500ML',
            image: "../../images/sanyuancuihuaqingxi.jpg",
            pice: 79
          },
          {
            child_id: 11,
            name: '博世（BOSCH）刹车油 制动液 DOT4 HP升级版 1L装 意大利原装进口',
            image: "../../images/ranshaoshiqingxiji.jpg",
            pice: 125
          },
          {
            child_id: 12,
            name: 'BOSCH 博世 DOT4/HZY4 制动液/刹车油 1000ml装',
            image: "../../images/youluqingxiji.jpg",
            pice: 99
          },
          {
            child_id: 13,
            name: '德国巴斯夫（BASF）刹车油/刹车液/制动液 DOT4',
            image: "../../images/huayouqiqingxiji.jpg",
            pice: 955
          }
        ]
      },
      {
        cate_id: 12,
        cate_name: "后差速器/后桥油",
        ishaveChild: true,
        children: [{
            child_id: 10,
            name: ' MOTUL摩特 DOT3&4 BRAKE FLUID 全合成刹车油 500ML',
            image: "../../images/sanyuancuihuaqingxi.jpg",
            pice: 79
          },
          {
            child_id: 11,
            name: '博世（BOSCH）刹车油 制动液 DOT4 HP升级版 1L装 意大利原装进口',
            image: "../../images/ranshaoshiqingxiji.jpg",
            pice: 125
          },
          {
            child_id: 12,
            name: 'BOSCH 博世 DOT4/HZY4 制动液/刹车油 1000ml装',
            image: "../../images/youluqingxiji.jpg",
            pice: 99
          },
          {
            child_id: 13,
            name: '德国巴斯夫（BASF）刹车油/刹车液/制动液 DOT4',
            image: "../../images/huayouqiqingxiji.jpg",
            pice: 955
          }
        ]
      },
      {
        cate_id: 13,
        cate_name: "分动箱油",
        ishaveChild: true,
        children: [{
            child_id: 10,
            name: ' MOTUL摩特 DOT3&4 BRAKE FLUID 全合成刹车油 500ML',
            image: "../../images/sanyuancuihuaqingxi.jpg",
            pice: 79
          },
          {
            child_id: 11,
            name: '博世（BOSCH）刹车油 制动液 DOT4 HP升级版 1L装 意大利原装进口',
            image: "../../images/ranshaoshiqingxiji.jpg",
            pice: 125
          },
          {
            child_id: 12,
            name: 'BOSCH 博世 DOT4/HZY4 制动液/刹车油 1000ml装',
            image: "../../images/youluqingxiji.jpg",
            pice: 99
          },
          {
            child_id: 13,
            name: '德国巴斯夫（BASF）刹车油/刹车液/制动液 DOT4',
            image: "../../images/huayouqiqingxiji.jpg",
            pice: 955
          }
        ]
      },
      {
        cate_id: 14,
        cate_name: "更换刹车片",
        ishaveChild: true,
        children: [{
            child_id: 10,
            name: ' MOTUL摩特 DOT3&4 BRAKE FLUID 全合成刹车油 500ML',
            image: "../../images/sanyuancuihuaqingxi.jpg",
            pice: 79
          },
          {
            child_id: 11,
            name: '博世（BOSCH）刹车油 制动液 DOT4 HP升级版 1L装 意大利原装进口',
            image: "../../images/ranshaoshiqingxiji.jpg",
            pice: 125
          },
          {
            child_id: 12,
            name: 'BOSCH 博世 DOT4/HZY4 制动液/刹车油 1000ml装',
            image: "../../images/youluqingxiji.jpg",
            pice: 99
          },
          {
            child_id: 13,
            name: '德国巴斯夫（BASF）刹车油/刹车液/制动液 DOT4',
            image: "../../images/huayouqiqingxiji.jpg",
            pice: 955
          }
        ]
      },
      {
        cate_id: 23,
        cate_name: "更换电瓶",
        ishaveChild: true,
        children: [{
            child_id: 10,
            name: ' MOTUL摩特 DOT3&4 BRAKE FLUID 全合成刹车油 500ML',
            image: "../../images/sanyuancuihuaqingxi.jpg",
            pice: 79
          },
          {
            child_id: 11,
            name: '博世（BOSCH）刹车油 制动液 DOT4 HP升级版 1L装 意大利原装进口',
            image: "../../images/ranshaoshiqingxiji.jpg",
            pice: 125
          },
          {
            child_id: 12,
            name: 'BOSCH 博世 DOT4/HZY4 制动液/刹车油 1000ml装',
            image: "../../images/youluqingxiji.jpg",
            pice: 99
          },
          {
            child_id: 13,
            name: '德国巴斯夫（BASF）刹车油/刹车液/制动液 DOT4',
            image: "../../images/huayouqiqingxiji.jpg",
            pice: 955
          }
        ]
      },
      {
        cate_id: 15,
        cate_name: "气节门清洗",
        ishaveChild: true,
        children: [{
            child_id: 10,
            name: ' MOTUL摩特 DOT3&4 BRAKE FLUID 全合成刹车油 500ML',
            image: "../../images/sanyuancuihuaqingxi.jpg",
            pice: 79
          },
          {
            child_id: 11,
            name: '博世（BOSCH）刹车油 制动液 DOT4 HP升级版 1L装 意大利原装进口',
            image: "../../images/ranshaoshiqingxiji.jpg",
            pice: 125
          },
          {
            child_id: 12,
            name: 'BOSCH 博世 DOT4/HZY4 制动液/刹车油 1000ml装',
            image: "../../images/youluqingxiji.jpg",
            pice: 99
          },
          {
            child_id: 13,
            name: '德国巴斯夫（BASF）刹车油/刹车液/制动液 DOT4',
            image: "../../images/huayouqiqingxiji.jpg",
            pice: 955
          }
        ]
      },
      {
        cate_id: 16,
        cate_name: "进气道清洗",
        ishaveChild: true,
        children: [{
            child_id: 10,
            name: ' MOTUL摩特 DOT3&4 BRAKE FLUID 全合成刹车油 500ML',
            image: "../../images/sanyuancuihuaqingxi.jpg",
            pice: 79
          },
          {
            child_id: 11,
            name: '博世（BOSCH）刹车油 制动液 DOT4 HP升级版 1L装 意大利原装进口',
            image: "../../images/ranshaoshiqingxiji.jpg",
            pice: 125
          },
          {
            child_id: 12,
            name: 'BOSCH 博世 DOT4/HZY4 制动液/刹车油 1000ml装',
            image: "../../images/youluqingxiji.jpg",
            pice: 99
          },
          {
            child_id: 13,
            name: '德国巴斯夫（BASF）刹车油/刹车液/制动液 DOT4',
            image: "../../images/huayouqiqingxiji.jpg",
            pice: 955
          }
        ]
      },
      {
        cate_id: 17,
        cate_name: "机油道道清洗",
        ishaveChild: true,
        children: [{
            child_id: 10,
            name: ' MOTUL摩特 DOT3&4 BRAKE FLUID 全合成刹车油 500ML',
            image: "../../images/sanyuancuihuaqingxi.jpg",
            pice: 79
          },
          {
            child_id: 11,
            name: '博世（BOSCH）刹车油 制动液 DOT4 HP升级版 1L装 意大利原装进口',
            image: "../../images/ranshaoshiqingxiji.jpg",
            pice: 125
          },
          {
            child_id: 12,
            name: 'BOSCH 博世 DOT4/HZY4 制动液/刹车油 1000ml装',
            image: "../../images/youluqingxiji.jpg",
            pice: 99
          },
          {
            child_id: 13,
            name: '德国巴斯夫（BASF）刹车油/刹车液/制动液 DOT4',
            image: "../../images/huayouqiqingxiji.jpg",
            pice: 955
          }
        ]
      },
      {
        cate_id: 18,
        cate_name: "燃油室清洗",
        ishaveChild: true,
        children: [{
            child_id: 10,
            name: ' MOTUL摩特 DOT3&4 BRAKE FLUID 全合成刹车油 500ML',
            image: "../../images/sanyuancuihuaqingxi.jpg",
            pice: 79
          },
          {
            child_id: 11,
            name: '博世（BOSCH）刹车油 制动液 DOT4 HP升级版 1L装 意大利原装进口',
            image: "../../images/ranshaoshiqingxiji.jpg",
            pice: 125
          },
          {
            child_id: 12,
            name: 'BOSCH 博世 DOT4/HZY4 制动液/刹车油 1000ml装',
            image: "../../images/youluqingxiji.jpg",
            pice: 99
          },
          {
            child_id: 13,
            name: '德国巴斯夫（BASF）刹车油/刹车液/制动液 DOT4',
            image: "../../images/huayouqiqingxiji.jpg",
            pice: 955
          }
        ]
      },
      {
        cate_id: 19,
        cate_name: "喷油嘴清洗",
        ishaveChild: true,
        children: [{
            child_id: 10,
            name: ' MOTUL摩特 DOT3&4 BRAKE FLUID 全合成刹车油 500ML',
            image: "../../images/sanyuancuihuaqingxi.jpg",
            pice: 79
          },
          {
            child_id: 11,
            name: '博世（BOSCH）刹车油 制动液 DOT4 HP升级版 1L装 意大利原装进口',
            image: "../../images/ranshaoshiqingxiji.jpg",
            pice: 125
          },
          {
            child_id: 12,
            name: 'BOSCH 博世 DOT4/HZY4 制动液/刹车油 1000ml装',
            image: "../../images/youluqingxiji.jpg",
            pice: 99
          },
          {
            child_id: 13,
            name: '德国巴斯夫（BASF）刹车油/刹车液/制动液 DOT4',
            image: "../../images/huayouqiqingxiji.jpg",
            pice: 955
          }
        ]
      },
      {
        cate_id: 20,
        cate_name: "清洗三元",
        ishaveChild: true,
        children: [{
            child_id: 10,
            name: ' MOTUL摩特 DOT3&4 BRAKE FLUID 全合成刹车油 500ML',
            image: "../../images/sanyuancuihuaqingxi.jpg",
            pice: 79
          },
          {
            child_id: 11,
            name: '博世（BOSCH）刹车油 制动液 DOT4 HP升级版 1L装 意大利原装进口',
            image: "../../images/ranshaoshiqingxiji.jpg",
            pice: 125
          },
          {
            child_id: 12,
            name: 'BOSCH 博世 DOT4/HZY4 制动液/刹车油 1000ml装',
            image: "../../images/youluqingxiji.jpg",
            pice: 99
          },
          {
            child_id: 13,
            name: '德国巴斯夫（BASF）刹车油/刹车液/制动液 DOT4',
            image: "../../images/huayouqiqingxiji.jpg",
            pice: 955
          }
        ]
      },
      {
        cate_id: 21,
        cate_name: "玻璃水",
        ishaveChild: true,
        children: [{
            child_id: 10,
            name: ' MOTUL摩特 DOT3&4 BRAKE FLUID 全合成刹车油 500ML',
            image: "../../images/sanyuancuihuaqingxi.jpg",
            pice: 79
          },
          {
            child_id: 11,
            name: '博世（BOSCH）刹车油 制动液 DOT4 HP升级版 1L装 意大利原装进口',
            image: "../../images/ranshaoshiqingxiji.jpg",
            pice: 125
          },
          {
            child_id: 12,
            name: 'BOSCH 博世 DOT4/HZY4 制动液/刹车油 1000ml装',
            image: "../../images/youluqingxiji.jpg",
            pice: 99
          },
          {
            child_id: 13,
            name: '德国巴斯夫（BASF）刹车油/刹车液/制动液 DOT4',
            image: "../../images/huayouqiqingxiji.jpg",
            pice: 955
          }
        ]
      },
    ],
    nameItems: []
  },
  switchRightTab: function(e) {
    // 获取item项的id，和数组的下标值
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    let that = this;
    // 根据主分类获取品牌列表
    wx.request({
      url: `${app.globalData.url}home/brand_bytype`,
      method: 'POST',
      data: {
        id: id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: (res) => {
        that.setData({
          nameItems: res.data.data
        })
      }
    })
    // 把点击到的某一项，设为当前index
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  // 点击切换
  checkcarLoad(e) {
    wx.navigateTo({
      url: '../checkcar/checkcar',
    })
  },
  // 加入购物车
  addShopping(e) {
    let that = this;
    let id = e.currentTarget.dataset.id;
    let cateItems = that.data.cateItems;
    let curNav = that.data.curNav;
    let moneyNums = that.data.moneyNums;
    let shoppingCart = that.data.shoppingCart;
    for (let i = 0; i < cateItems.length; i++) {
      if (cateItems[i].cate_id == curNav) {
        for (let j = 0; j < cateItems[i].children.length; j++) {
          if (cateItems[i].children[j].child_id == id) {
            if (that.data.shopNums <= 100) {
              let shopNum = ++that.data.shopNums;
              let moneyNum = cateItems[i].children[j].pice;
              let ArrayIndexOf = that.ArrayIndexOf(shoppingCart, id);
              if (ArrayIndexOf == -1) {
                cateItems[i].children[j].num = 1;
                shoppingCart.push(cateItems[i].children[j])
              } else {
                shoppingCart[ArrayIndexOf].num = shoppingCart[ArrayIndexOf].num + 1;
              }
              that.setData({
                shopNums: shopNum,
                shoppingCart: shoppingCart,
                moneyNums: moneyNums + moneyNum,
                iconSlement: true,
                btnDisable: false
              })
            }
          }
        }
      }
    }
  },
  openPopup2: function openPopup2(e) {
    var show = e.currentTarget.dataset.show;
    this.setData({
      show2: show
    });
  },
  handleShow2: function handleShow2() {
    let that = this;
    wx.showModal({
      title: '提示',
      content: '真的要清空吗？',
      success: function(res) {
        if (res.confirm) {
          that.setData({
            show2: false
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  ArrayIndexOf: function(arr, value) {
    // 检测value在arr中出现的位置
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].child_id === value) {
        return i;
      }
    }
    return -1;
  },
  // add++
  prevNum(e) {
    const that = this;
    const shoppingCartI = that.data.shoppingCart;
    let curenIdex = e.currentTarget.dataset.index;
    let num = shoppingCartI[curenIdex].num;
    let pice = shoppingCartI[curenIdex].pice;
    let shopNums = that.data.shopNums;
    let moneyNums = that.data.moneyNums;
    // console.log(num * pice + pice);
    num = num + 1;
    shoppingCartI[curenIdex].num = num;
    that.setData({
      shoppingCart: that.data.shoppingCart,
      shopNums: ++shopNums,
      moneyNums: moneyNums + pice
    });
  },
  // down--
  nextNum(e) {
    const that = this;
    const shoppingCartI = that.data.shoppingCart;
    let curenIdex = e.currentTarget.dataset.index;
    let pice = shoppingCartI[curenIdex].pice;
    let shopNums = that.data.shopNums;
    let num = shoppingCartI[curenIdex].num;
    if (num == 1) {
      return false;
    }
    num = num - 1;
    shoppingCartI[curenIdex].num = num;
    this.setData({
      shoppingCart: that.data.shoppingCart,
      shopNums: --shopNums,
      moneyNums: that.data.moneyNums + (-pice)
    });
  },
  goSlement(e) {
    wx.navigateTo({
      url: '../settlement/settlement',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    let car_id = options.curentId; //汽车品牌编号
    let curenName = options.curenName;
    that.setData({
      curenNmaes: curenName
    })
    // 获取商品主分类列表
    wx.request({
      url: `${app.globalData.url}home/type_list`,
      method: 'POST',
      success: (res) => {
        let cateItems = that.data.cateItems;
        that.setData({
          navLeft: res.data.data,
        })
      }
    })
    // 根据主分类获取品牌列表
    wx.request({
      url: `${app.globalData.url}home/brand_bytype`,
      method: 'POST',
      data: {
        id: 3
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: (res) => {
        that.setData({
          nameItems: res.data.data
        })
      }
    })
    // 根据汽车型号获取适用商品列表
    wx.request({
      url: `${app.globalData.url}goods/goods_bycar`,
      method: 'POST',
      data:{
        type_id:3,
        car_id: car_id,
        brand_id:0
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success:(res)=>{
        console.log(res.data.data);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    let that = this;
    app.globalData.carCheck = that.data.curenNmaes
    wx.switchTab({
      url: '../index/index',
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

})