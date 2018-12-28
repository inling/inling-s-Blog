<template>
  <div id="InCalendar">
    <div class="date">2018/12/28</div>
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
      <tr>
        <th>25</th>
        <th>26</th>
        <th>27</th>
        <th>28</th>
        <th>29</th>
        <th>30</th>
        <th>1</th>
      </tr>
      <tr>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
        <th>6</th>
        <th>7</th>
        <th>8</th>
      </tr>
      <tr>
        <th>9</th>
        <th>10</th>
        <th>11</th>
        <th>12</th>
        <th>13</th>
        <th>14</th>
        <th>15</th>
      </tr>
      <tr>
        <th>16</th>
        <th>17</th>
        <th>18</th>
        <th>19</th>
        <th>20</th>
        <th>21</th>
        <th>22</th>
      </tr>
      <tr>
        <th>23</th>
        <th>24</th>
        <th>25</th>
        <th>26</th>
        <th>27</th>
        <th>28</th>
        <th>29</th>
      </tr>
       <tr>
        <th>30</th>
        <th>31</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
      </tr>

    </table>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  }
}
</script>

<style lang="scss" scoped>
#InCalendar{
  padding:8px 16px;
  font-size: 14px;
  font-family: $MengAi;
  .date{
    padding:0 12px 6px;
    text-align: center;
  }
  table{
    width:100%;
    tr{
      display: flex;
      justify-content: space-between;
      &:not(:first-child){
        margin-top:15px;
      }
    }
  }
}
</style>
