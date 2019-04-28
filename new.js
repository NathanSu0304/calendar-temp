var c = new Date();
var cyear=c.getFullYear();
var cmonth=c.getMonth();
var rmonth=c.getMonth()+1;
var cdate=c.getDate(); //days in current month


function prev()
{
    if(rmonth>1)
    {
        rmonth=rmonth-1;
    }
    if(rmonth===1)
    {
        rmonth==12;
        cyear=cyear-1;
    }
    clearAll();
    Day();
    yearMon();
}
function next()
{
    if(rmonth<12)
    {
        rmonth=rmonth+1;
    }
    if(rmonth===12)
    {
        rmonth=1;
        cyear=cyear+1;
    }
    clearAll();
    Day();
    yearMon();

}
function clearAll()
{
    var daterow=document.getElementById("subtitle");
    var child=document.getElementsByClassName("weekday");
    var length=child.length;
    for(var i=7;i<length;i++)
    {
        daterow.removeChild(child[i]);
    }

}
function yearMon()
{
    document.getElementById("yearMonth").innerHTML=cyear+"-"+rmonth;
}

function Month()
{
    if(cmonth!=2)
    {
        if (cmonth === 4 || cmonth === 6 || cmonth === 9 || cmonth === 11)
            allday=30;
        else
            allday=31;
    }
    else
    {
        if (cyear%4===0&&cyear%100!==0||cyear%400===0)
            allday=29;
        else
            allday=28;

    }
}
function Day()
{
    yearMon();
    Month();
    var firstday=new Date(cyear,rmonth-1,1);
    var xingqi=firstday.getDay();
    var daterow=document.getElementById("subtitle");
    if(xingqi != 0)
    {
        for(var i=0;i<xingqi;i++)
            {
                var dayelement=document.createElement("div");
                dayelement.className="weekday";
                dayelement.innerHTML="";
                daterow.appendChild(dayelement);
            }
    }
    for(var j=1;j<=allday;j++)
    {
        var dayelement=document.createElement("div");
                    dayelement.className="weekday";
                    dayelement.innerHTML=j;
        if(cdate==j)
            dayelement.style.color="red";
        daterow.appendChild(dayelement);
    }
}







/*var dat = new Date(); //当前时间 
   var nianD = dat.getFullYear();//当前年份 
   var yueD = dat.getMonth(); //当前月 
   var tianD = dat.getDate(); //当前天 这保存的年月日 是为了 当到达当前日期 有对比 
     

function add(){ 
    document.getElementById('cal-wrap').innerHTML = nianD +"-"+yueD; 
    //document.getElementById('cal-wrap').innerText = tianD; 
    var nian = dat.getFullYear();//当前年份 
    var yue = dat.getMonth(); //当前月 
    var tian = dat.getDate(); //当前天 
    var arr=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]; 
    //document.getElementById('nian').innerText = nian; 
    //document.getElementById('yue').innerText = arr[yue]; 
}
window.onload=add;
*/
/*var weeks = ['SUN','MON','TUE','WED','THU','FRI','SAT',],
    monthDays = [31,28,31,30,31,30,31,31,30,31,30,31],
    pastMleft ={
        0:6,1:7,2:1,3:2,4:3,5:4,6:5
    };
var time = new Date(),
    thisY = time.getFullYear(),
    thisM = time.getMonth(),
    thisD = time.getDate();
function cal(){
    monthDays[1] = (thisY%400 == 0 || (thisY%4 == 0 && thisY%100 == 0 ))?29:28
    var pastM = thisM - 1,realM = thisM + 1;
    var firstDW = new Date(thisY,thisM,1).getDay(),
        thisMD = monthDays[thisM],
        pastMD = pastMleft[firstDW];
        nextMD = 42-thisMD-pastMD;
        pastM = pastM < 0?11:pastM
    var lists = [];
    var pastM_lastD = monthDays[pastM];
    lists.push(`<div class="cal-title">
        </div>`)
    for(var i=0,l=weeks.length; i<l; i++)
        lists.push('<span class="week">'+ weeks[i] +'</span>')
    for(var i=0; i < pastMD; i++)
        lists.push('<span class="past">'+ (pastM_lastD-pastMD+i+1) +'</span>')
    for(var i=1; i <= thisMD; i++){
        var str = i==thisD?'today':i<thisD?'now':'fur'
        lists.push('<span class="'+ str +'">'+ i +'</span>')
    }
    for(var i=0; i < nextMD; i++)
        lists.push('<span class="next">'+ (i+1) +'</span>')
    $('#cal-wrap').html(lists.join(' '))  

}
window.onload = cal;*/