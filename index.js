Survey
.StylesManager
.applyTheme("modern");

var json = {
title: "词汇量测试",
showProgressBar: "bottom",
showTimerPanel: "top",
// maxTimeToFinishPage: 19,
//maxTimeToFinish: 25000,
firstPageIsStarted: true,
startSurveyText: "开始做测试",

pages: [
    {
        questions: [
            {
                type: "html",
                html: `<p style='margin: 6pt 0mm 0mm;font-family: "Times New Roman", serif;text-align: center;line-height: 16pt;'><strong><span style="font-size:19px;font-family: DengXian;">词汇测试说明</span></strong></p>
                <p style='margin: 6pt 0mm 0mm;font-family: "Times New Roman", serif;text-align: center;line-height: 16pt;'><span style="font-size:15px;font-family: DengXian;">（</span><span style="font-size:15px;font-family: DengXian;">30</span><span style='font-size:15px;font-family: "ＭＳ 明朝";'>〜</span><span style='font-size:15px;font-family: "ＭＳ 明朝";'>45</span><span style='font-size:15px;font-family: "ＭＳ 明朝";'>分</span><span style="font-size:15px;font-family: SimSun;">钟</span><span style="font-size:15px;font-family: DengXian;">）</span></p>
                <p style='margin: 6pt 0mm 0mm;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:15px;font-family: DengXian;">接下来一共有</span><span style="font-size:15px;font-family: DengXian;">125</span><span style="font-size:15px;font-family: DengXian;">道</span><span style="font-size:15px;font-family: DengXian;">题目，每题</span><span style="font-size:15px;font-family: DengXian;">考察</span><span style="font-size:15px;font-family: DengXian;">1</span><span style="font-size:15px;font-family: DengXian;">个</span><span style="font-size:15px;font-family: DengXian;">词汇。这些词汇之间难易度的跨度较大，既有简单的词汇，也有非常困难的词汇。并且，每位考生的出题顺序是随机的（并非按照难易度排序）。请您耐心做到最后一题，并点击&ldquo;提交&rdquo;。<strong><span style="color: rgb(47, 84, 150);">测试结尾会告知本次测验的得分以及您掌握的大致的词汇量。</span></strong></span></p>
                <p style='margin: 6pt 0mm 0mm;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:15px;font-family: DengXian;">&nbsp;</span></p>
                <p style='margin: 6pt 0mm 0mm;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:15px;font-family: DengXian;color: rgb(47, 84, 150);">本套测试题</span><span style="font-size:15px;font-family: DengXian;">一共有<strong>两种题型</strong>。</span></p>
                <p style='margin: 6pt 0mm 0mm;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:15px;font-family: DengXian;">类型1：考察 <strong><span style="color: rgb(83, 129, 53);">单词</span>&nbsp;</strong>的含义</span></p>
                <p style='margin: 6pt 0mm 0.0001pt 17.85pt;font-family: "Times New Roman", serif;line-height: 16pt;'><strong><u><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>　&nbsp; &nbsp;&nbsp;</span></u></strong><span style="font-size:13px;font-family: HGP教科書体, serif;">:</span><span style="font-size:13px;font-family: HGP教科書体, serif;">　それは</span><strong><u><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>　&nbsp; &nbsp;&nbsp;</span></u></strong><span style="font-size:13px;font-family: HGP教科書体, serif;">。</span></p>
                <p style='margin: 0mm 0mm 0mm 18pt;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:13px;font-family: HGP教科書体, serif;">A</span><span style="font-size:13px;font-family: HGP教科書体, serif;">&nbsp;</span><span style="font-size:13px;font-family: HGP教科書体, serif;">不听</span></p>
                <p style='margin: 0mm 0mm 0mm 18pt;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:13px;font-family: HGP教科書体, serif;">B</span><span style="font-size:13px;font-family: HGP教科書体, serif;">&nbsp;</span><span style="font-size:13px;font-family: HGP教科書体, serif;">不知道</span></p>
                <p style='margin: 0mm 0mm 0mm 18pt;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:13px;font-family: HGP教科書体, serif;">C&nbsp;</span><span style="font-size:13px;font-family: HGP教科書体, serif;">做不到</span></p>
                <p style='margin: 0mm 0mm 0mm 18pt;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:13px;font-family: HGP教科書体, serif;">D&nbsp;</span><span style="font-size:13px;font-family: HGP教科書体, serif;">不一</span><span style="font-size:13px;font-family: SimSun;">样</span></p>
                <p style='margin: 0mm 0mm 0mm 18pt;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:13px;font-family: HGP教科書体, serif;">我不知道</span><span style="font-size:13px;font-family: SimSun;">这</span><span style="font-size:13px;font-family: HGP教科書体, serif;">个</span><span style="font-size:13px;font-family: SimSun;">词</span></p>
                <p style='margin: 6pt 0mm 0mm;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:15px;font-family: DengXian;">类型</span><span style="font-size:15px;font-family: DengXian;">2</span><span style="font-size:15px;font-family: DengXian;">：考察 <strong><span style="color: rgb(83, 129, 53);">含单词在内的下划线部分</span>&nbsp;</strong>的含义</span></p>
                <p style='margin: 6pt 0mm 0.0001pt 17.85pt;font-family: "Times New Roman", serif;line-height: 16pt;'><strong><u><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>　</span></u></strong><strong><u><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>&nbsp; &nbsp;&nbsp;</span></u></strong><span style="font-size:13px;font-family: HGP教科書体, serif;">:</span><span style="font-size:13px;font-family: HGP教科書体, serif;">　<u>それは</u></span><strong><u><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>　&nbsp; &nbsp;&nbsp;</span></u></strong><span style="font-size:13px;font-family: HGP教科書体, serif;">。</span></p>
                <p style='margin: 0mm 0mm 0mm 18pt;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:13px;font-family: HGP教科書体, serif;">A&nbsp;</span><span style="font-size:13px;font-family: HGP教科書体, serif;">那个不听</span></p>
                <p style='margin: 0mm 0mm 0mm 18pt;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:13px;font-family: HGP教科書体, serif;">B&nbsp;</span><span style="font-size:13px;font-family: HGP教科書体, serif;">那个不一</span><span style="font-size:13px;font-family: SimSun;">样</span></p>
                <p style='margin: 0mm 0mm 0mm 18pt;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:13px;font-family: HGP教科書体, serif;">C&nbsp;</span><span style="font-size:13px;font-family: HGP教科書体, serif;">那个做不到</span></p>
                <p style='margin: 0mm 0mm 0mm 18pt;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:13px;font-family: HGP教科書体, serif;">D&nbsp;</span><span style="font-size:13px;font-family: HGP教科書体, serif;">那个不知道</span></p>
                <p style='margin: 0mm 0mm 0mm 18pt;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:13px;font-family: HGP教科書体, serif;">我不知道</span><span style="font-size:13px;font-family: SimSun;">这</span><span style="font-size:13px;font-family: HGP教科書体, serif;">个</span><span style="font-size:13px;font-family: SimSun;">词</span></p>
                <p style='margin: 6pt 0mm 0mm;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:15px;font-family: DengXian;">&nbsp;</span></p>
                <p style='margin: 6pt 0mm 0mm;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:15px;font-family: DengXian;color: rgb(68, 114, 196);">每道题目中，</span><span style="font-size:15px;font-family: DengXian;">您都会听到一段</span><span style="font-size:15px;font-family: DengXian;">录</span><span style="font-size:15px;font-family: DengXian;">音。</span><span style="font-size:15px;font-family: DengXian;">录</span><span style="font-size:15px;font-family: DengXian;">音的内容为</span><strong><span style="font-size:15px;font-family: DengXian;">题</span></strong><strong><span style="font-size:15px;font-family: DengXian;">干部分</span></strong><span style="font-size:15px;font-family: DengXian;">（该题考察的</span><strong><span style="font-size:15px;font-family: DengXian;">单词</span></strong><span style="font-size:15px;font-family: DengXian;">+</span><span style="font-size:15px;font-family: DengXian;">使用了</span><span style="font-size:15px;font-family: DengXian;">该单词的一个<strong>例句</strong></span><span style="font-size:15px;font-family: DengXian;">）。请注意：</span><span style="font-size:15px;font-family: DengXian;">该题</span><u><span style="font-size:15px;font-family: DengXian;">考察的</span></u><u><span style="font-size:15px;font-family: DengXian;">单词</span></u><span style="font-size:15px;font-family: DengXian;">和<u>例句中</u></span><u><span style="font-size:15px;font-family: DengXian;">该单词</span></u><u><span style="font-size:15px;font-family: DengXian;">部分</span></u><span style="font-size:15px;font-family: DengXian;">将<strong>不会以文字形式</strong></span><strong><span style="font-size:15px;font-family: DengXian;">显</span></strong><strong><span style="font-size:15px;font-family: DengXian;">示</span></strong><span style="font-size:15px;font-family: DengXian;">出来。</span></p>
                <p style='margin: 6pt 0mm 0mm;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:15px;font-family: DengXian;">&nbsp;</span></p>
                <p style='margin: 6pt 0mm 0mm;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:15px;font-family: DengXian;">每</span><span style="font-size:15px;font-family: DengXian;">题</span><span style="font-size:15px;font-family: DengXian;">都有</span><span style="font-size:15px;font-family: DengXian;">5</span><span style="font-size:15px;font-family: DengXian;">个</span><span style="font-size:15px;font-family: DengXian;">选项</span><span style="font-size:15px;font-family: DengXian;">，请从前</span><span style="font-size:15px;font-family: DengXian;">4</span><span style="font-size:15px;font-family: DengXian;">个选项（</span><span style="font-size:15px;font-family: DengXian;">A</span><span style="font-size:15px;font-family: DengXian;">～</span><span style="font-size:15px;font-family: DengXian;">D</span><span style="font-size:15px;font-family: DengXian;">）中选出与<strong>单词</strong>或<strong>下划线部分</strong>的含义<strong><u>最接近的一项</u></strong>。当您完全不知道</span><span style="font-size:15px;font-family: DengXian;">该单词或该划线部分的含义时</span><span style="font-size:15px;font-family: DengXian;">，</span><span style="font-size:15px;font-family: DengXian;">请选择</span><span style="font-size:15px;font-family: DengXian;">最后一个</span><span style="font-size:15px;font-family: DengXian;">选项</span><span style="font-size:15px;font-family: DengXian;">&ldquo;我不知道</span><span style="font-size:15px;font-family: DengXian;">这</span><span style="font-size:15px;font-family: DengXian;">个</span><span style="font-size:15px;font-family: DengXian;">词</span><span style="font-size:15px;font-family: DengXian;">&rdquo;。</span></p>
                <p style='margin: 6pt 0mm 0mm;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:15px;font-family: DengXian;">&nbsp;</span></p>
                <p style='margin: 6pt 0mm 0mm;font-family: "Times New Roman", serif;line-height: 16pt;'><span style="font-size:15px;font-family: DengXian;">请</span><span style="font-size:15px;font-family: DengXian;">不要在某一道</span><span style="font-size:15px;font-family: DengXian;">题</span><span style="font-size:15px;font-family: DengXian;">上</span><span style="font-size:15px;font-family: DengXian;">犹豫过多的时间。</span><span style="font-size:15px;font-family: DengXian;">每道</span><span style="font-size:15px;font-family: DengXian;">题</span><span style="font-size:15px;font-family: DengXian;">的做</span><span style="font-size:15px;font-family: DengXian;">题时间<span style="color: rgb(68, 114, 196);">上限为</span></span><strong><span style="font-size:15px;font-family: DengXian;color: rgb(68, 114, 196);">20</span></strong><strong><span style="font-size:15px;font-family: DengXian;color: rgb(68, 114, 196);">秒</span></strong><span style="font-size:15px;font-family: DengXian;">（包括播放录音的时间），完成选择后请点击&ldquo;下一题&rdquo;。请注意：①若</span><span style="font-size:15px;font-family: DengXian;">20</span><span style="font-size:15px;font-family: DengXian;">秒内没有点击&ldquo;</span><span style="font-size:15px;font-family: DengXian;">下一题</span><span style="font-size:15px;font-family: DengXian;">&rdquo;，页面将会<strong>自动跳转</strong>到下一题，</span><span style="font-size:15px;font-family: DengXian;">②&nbsp;</span><span style="font-size:15px;font-family: DengXian;">页面一旦跳转后，将<strong>无法回退</strong>到上一页面，所以每道题请看清题目和选项后再作答</span><span style="font-size:15px;font-family: DengXian;">。</span></p>`,
            }

        ]
    },  
    
],
completedHtml: "<h4>恭喜你答对了<b>{questionCount}</b>道中<b>{correctedAnswers}</b>道问题</h4>"
};
//打乱顺序方法
const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
//获取数据
var data = JSON.parse(jsondata);
data = Object.values(data)[0]
//生成例题
function mliti(number=0) {
    array = [{
        // maxTimeToFinish: 19,
        questions: [
        {
            type:"html",
            html:"<h1>例题1：</h1><audio src=\"audio/0.mp3\" autoplay controls></audio></div></br>"+data[number]['text'],
        },
        {
            type: "radiogroup",
            title:"请选择中文意思",
            name: ""+data[number]['target']+"",
            choices: [
                ""+data[number]['A']+"", ""+data[number]['B']+"", ""+data[number]['C']+"", ""+data[number]['D']+"", ""+data[number]['E']+""],
            correctAnswer: ""+data[number][data[number]['correct']]+""
        }
    ]
    }]
    return array[0];
}
var litiArray=[ 
]
litiArray.push(mliti());
//生成例题讲解
function mlitijiangjie(number=0) {
    array = [{
        // maxTimeToFinish: 19,
        questions: [
        {
            type:"html",
            html:`
            <p style='margin: 6pt 0mm 0mm;font-family: "Times New Roman", serif;line-height: 16pt;'><strong><span style="font-size:19px;font-family: SimSun;">讲</span></strong><strong><span style='font-size:19px;font-family: "ＭＳ ゴシック";'>解</span></strong><strong><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>（正式</span></strong><strong><span style="font-size:15px;font-family: SimSun;">测试</span></strong><strong><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>没有</span></strong><strong><span style="font-size:15px;font-family: SimSun;">讲</span></strong><strong><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>解）</span></strong></p>
<p style='margin: 6pt 0mm 0mm;font-family: "Times New Roman", serif;line-height: 16pt;'><strong><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>&nbsp;</span></strong></p>
<p style='margin: 6pt 0mm 0mm;font-family: "Times New Roman", serif;line-height: 16pt;'><strong><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>您听到</span></strong><strong><span style="font-size:15px;font-family: SimSun;">录</span></strong><strong><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>音是</span></strong></p>
<p style='margin: 6pt 0mm 0mm;font-family: "Times New Roman", serif;line-height: 16pt;'><strong><u><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>ちがいます</span></u></strong><strong><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>：それは<u>ちがいます</u><em>。</em></span></strong></p>
<p style='margin: 6pt 0mm 0mm;font-family: "Times New Roman", serif;line-height: 16pt;'><strong><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>&nbsp;</span></strong></p>
<p style='margin: 6pt 0mm 0mm;font-family: "Times New Roman", serif;line-height: 16pt;'><strong><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>所以，正确选项是：&ldquo;</span></strong><strong><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>D&nbsp;</span></strong><strong><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>不一样&rdquo;</span></strong></p>
<p style='margin: 6pt 0mm 0mm;font-family: "Times New Roman", serif;line-height: 16pt;'><strong><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>如果您不知道</span></strong><strong><span style="font-size:15px;font-family: SimSun;color: rgb(68, 114, 196);">这</span></strong><strong><span style='font-size:15px;font-family: "ＭＳ ゴシック";color: rgb(68, 114, 196);'>个</span></strong><strong><span style="font-size:15px;font-family: SimSun;">词</span></strong><strong><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>的</span></strong><strong><span style="font-size:15px;font-family: SimSun;">话</span></strong><strong><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>，可以</span></strong><strong><span style="font-size:15px;font-family: SimSun;">选择</span></strong><strong><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>&ldquo;我不知道</span></strong><strong><span style="font-size:15px;font-family: SimSun;">这</span></strong><strong><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>个</span></strong><strong><span style="font-size:15px;font-family: SimSun;">词</span></strong><strong><span style='font-size:15px;font-family: "ＭＳ ゴシック";'>&rdquo;</span></strong></p>
            `
        }
    ]
    }]
    return array[0];
}
var litijiangjieArray=[ 
]
litijiangjieArray.push(mlitijiangjie());

//生成每道题
function mq(number) {
    array = [{
        maxTimeToFinish: 19,
        questions: [
        {
            type:"html",
            html:"<audio src=\"audio/"+data[number]['nom']+".mp3\" autoplay controls></audio></div></br>"+data[number]['text'],
        },
        {
            type: "radiogroup",
            title:"请选择中文意思",
            name: ""+data[number]['target']+"",
            choices: [
                ""+data[number]['A']+"", ""+data[number]['B']+"", ""+data[number]['C']+"", ""+data[number]['D']+"", ""+data[number]['E']+""],
            correctAnswer: ""+data[number][data[number]['correct']]+""
        }
    ]
    }]
    return array[0];
}
function mr(){
    array = [{
        maxTimeToFinish: 20,
        questions: [
        {
            type:"html",
            html:"休息20秒",
        },
    ]
    }]
    return array[0];
}
//第一组题
var questionQ1Array=[ 
]
//添加题
for (let i = 1; i < 26; i++) {
    questionQ1Array.push(mq(i));
  }

//打乱第一组
questionQ1Array = shuffle(questionQ1Array);
//第二组题
var questionQ2Array=[ 
]
//添加题
for (let i = 26; i < 51; i++) {
    questionQ2Array.push(mq(i));
  }

//打乱第二组
questionQ2Array = shuffle(questionQ2Array);
//第三组题
var questionQ3Array=[ 
]
//添加题
for (let i = 51; i < 76; i++) {
    questionQ3Array.push(mq(i));
  }

//打乱第三组
questionQ3Array = shuffle(questionQ3Array);
//第四组题
var questionQ4Array=[ 
]
//添加题
for (let i = 76; i < 101; i++) {
    questionQ4Array.push(mq(i));
  }

//打乱第四组
questionQ4Array = shuffle(questionQ4Array);
//第五组题
var questionQ5Array=[ 
]
//添加题
for (let i = 101;i < 125 ; i++) {
    questionQ5Array.push(mq(i));
  }

//打乱第五组
questionQ5Array = shuffle(questionQ5Array);
//添加题到框架
Array.prototype.push.apply(json.pages, litiArray);
Array.prototype.push.apply(json.pages, litijiangjieArray);
Array.prototype.push.apply(json.pages, questionQ1Array);
Array.prototype.push.apply(json.pages, [mr()]);
Array.prototype.push.apply(json.pages, questionQ2Array);
Array.prototype.push.apply(json.pages, [mr()]);
Array.prototype.push.apply(json.pages, questionQ3Array);
Array.prototype.push.apply(json.pages, [mr()]);
Array.prototype.push.apply(json.pages, questionQ4Array);
Array.prototype.push.apply(json.pages, [mr()]);
Array.prototype.push.apply(json.pages, questionQ5Array);

//---------------------



//---------------------

window.survey = new Survey.Model(json);
survey
.onComplete
.add(function (sender) {
    document
        .querySelector('#surveyResult')
        .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
});
survey.locale = "zh-cn";
var app = new Vue({
el: '#surveyElement',
data: {
    survey: survey
}
});