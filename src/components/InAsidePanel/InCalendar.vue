<template>
  <div id="InCalendar">
    <div class="date">{{yAm}}</div>
    <table>
      <tr>
        <th>日</th>
        <th>一</th>
        <th>二</th>
        <th>三</th>
        <th>四</th>
        <th>五</th>
        <th>六</th>
      </tr>
      <tr v-for="(row,i) in weekDay" :key="i">
        <td v-for="(col,j) in row" :key="j" :class="col.class">{{col.day}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      weekDay:[],
      yAm:''
    }
  },
  mounted(){
    this.weekDay=[];
    this.currentDate();
  },
  methods:{
    currentDate(){
      var currentDate=new Date();
      var y=currentDate.getFullYear();
      var m=currentDate.getMonth()+1;
      var d=currentDate.getDate();
      var w=currentDate.getDay();

      this.yAm=y+'/'+m;
      //初始化当月一号
      var initString=y+'/'+m+'/1';
      var initDate=new Date(initString);
      var initDay=initDate.getDay();
      var nowDayNo=this.getDayNo(y,m);

      //上个月
      var lastMonth=0;
      if(m==1){
       y=y-1; 
       lastMonth=12;
      }else{
       lastMonth=m-1;
      }
      var lastDayNo=this.getDayNo(y,lastMonth);

      this.fillWeekDay(initDay,nowDayNo,lastDayNo,d)

    },
    //得到m月份的天数
    getDayNo(y,m){
      var dayNo=0;
      switch(m){
        case 1:
          dayNo=31;
          break;
        case 2:
          if(this.isLeapYear(y)){
            dayNo=29; 
          }else{
            dayNo=28; 
          }
          break;
        case 3:
          dayNo=31;
          break;
        case 4:
          dayNo=30;
          break;
        case 5:
          dayNo=31;
          break;
        case 6:
          dayNo=30;
          break;
        case 7:
          dayNo=31;
          break;
        case 8:
          dayNo=31;
          break;
        case 9:
          dayNo=30;
          break;
        case 10:
          dayNo=31;
          break;
        case 11:
          dayNo=30;
          break;
        case 12:
          dayNo=31;
          break;
      }
      return dayNo;
    },
    //判断是否是闰年
    isLeapYear(y){
      if(y%4==0&&y%100!=0||y%400==0){
        return true;
      }else{
        return false;
      }
    },
    //填充日历
    fillWeekDay(initDay,nowDayNo,lastDayNo,today){
      var arr=[];
      var next=6-initDay;
      var last=initDay-1;
      var day=1;
      var lastMDay=0;
      var nextMDay=0;
      for(let i=0;i<=next;i++){
        var dayObj={};
        dayObj.day=day;
        if(day==today)
          dayObj.class='active today';
        else
          dayObj.class='active';

        arr.push(dayObj);
        day++;
      }
      for(let i=0;i<=last;i++){
        var dayObj={};
        dayObj.day=lastDayNo;
        dayObj.class='unactive';

        arr.unshift(dayObj);
        lastDayNo--;
      }

      while(day<=nowDayNo){
        var dayObj={};
        dayObj.day=day;
        if(day==today)
          dayObj.class='active today';
        else
          dayObj.class='active';

        arr.push(dayObj);
        day++;
      }

      var over=7-arr.length%7;
      var nextMDay=1;
      for(let i=0;i<over;i++){
        var dayObj={};
        dayObj.day=nextMDay;
        dayObj.class='unactive';

        arr.push(dayObj);
        nextMDay++;
      }

      if(arr.length/7==5){
        for(let i=0;i<=6;i++){
          var dayObj={};
          dayObj.day=nextMDay;
          dayObj.class='unactive';

          arr.push(dayObj);
          nextMDay++;
        }
      }

      var fIndex=0;
      for(let i=0;i<arr.length/7;i++){
        var fArr=[];
        for(let j=0;j<7;j++){
          fArr.push(arr[fIndex]);
          fIndex++;
        }
        this.weekDay.push(fArr);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#InCalendar{
  padding:8px 16px;
  font-size: 14px;
  font-family: $MengAi;
  font-weight:bold;
  .date{
    padding:0 12px 8px;
    text-align: center;
  }
  table{
    width:100%;
    cursor: pointer;
    tr{
      display: flex;
      justify-content: space-between;
      &:not(:first-child){
        margin-top:15px;
      }
      td{
        width: 20px;
        height:20px;
        position: relative;
        text-align: center;
      }
      .active{
        color:$my_orange;
      }
      .unactive{
        color:$my_gray2;
      }
      .active.today{
        color:$my_violet;
        &::after{
          content:'';
          display: inline-block;
          width: 40px;
          height: 40px;
          position: absolute;
          bottom:-5px;
          left:50%;
          margin-left:-20px;
          background: url('../../assets/image/fire.png') no-repeat center center;
          background-size:contain;
        }
      }
    }
  }
}
</style>
