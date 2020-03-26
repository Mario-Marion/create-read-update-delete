<template>
<div>
    <a @click.once.self = "doSomething">{{message}}</a>
    <div v-if="awesome">{{fullName}}</div>
    <div v-else>Oh no 😢</div>
    <div >{{demo}}</div>
    <div>
      <p class="option">
        <span  v-if="judge">
        <label for="every">
          <p><input type="checkbox" id="every" :checked="option" @click="CheckAll()">选中所有</p>
        </label>
        <button @click="addShow()">添加</button>
        <input type="button" value="删除" @click="everyDele()" />
        <input type="button" value="查看删除数据" @click="deleHistory()">
        </span>
        <span v-else>
        <label for="every">
          <p><input type="checkbox" id="every" :checked="option" @click="CheckAll()">选中所有</p>
        </label>
        <input type="button" value="恢复" @click="recover()" />
        <input type="button" value="返回" @click="viewData()">
        </span>
      </p>
      <ul id='about_ul'>
        <li v-for="(value,index) of arr" :key="value.product_id">
          <label :key="value.product_id" :for="index">
            <p class="itemInfo">
              <input type="checkbox" :checked="arrIds.indexOf(value.product_id)>-1" @click="checkOne(value.product_id)" :id="index" /><br>
              型号：<input type="text" v-model="value[Object.keys(value)[1]]" @change="skuContent(value.sku, index)"><br>
              产品名：<input type="text" v-model="value[Object.keys(value)[2]]" @change="nameContent(index)"><br>
              价格：<input type="text" v-model="value[Object.keys(value)[3]]" @change="priceContent(index)"><br>
            </p>
          </label>
          <input type="button" value="删除" @click="dele(value.sku)"/>
        </li>
      </ul>
    </div>
    <article v-show="show">
      <div class="addAlert">
        <input type="text" placeholder="型号" v-model="skuVal">
        <input type="text" placeholder="产品名" v-model="nameVal">
        <input type="text" placeholder="价格" v-model="priceVal">
        <div class="button">
          <input type="button" value="确定" @click="increase()">
          <input type="button" value="取消" @click="addShow()">
        </div>
      </div>
    </article>
    <p>{{practice}}</p>
</div>
</template>
<script>
// import popout from '@/components/Popout.vue'
export default {
  data () {
    return {
      url: 'http://www.baidu.com',
      Message: 'where are you?',
      firstName: 'do you',
      lastName: 'speak chinese?',
      value: 'asd',
      demo: '',
      awesome: false,
      arr: ' ',
      id: '3',
      practice: {},
      option: false,
      skuVal: '',
      nameVal: '',
      priceVal: '',
      show: false,
      judge: true,
      arrIds: []
    }
  },
  // 请求查询列表数据
  created () {
    this.viewData()
  },
  methods: {
    doSomething () {
      alert(this.value)
    },
    // 显示未删除数据
    viewData () {
      this.option = false
      this.judge = true
      this.axios.get('').then((response) => {
        console.log(response.data)
        this.arr = response.data
      })
    },
    // 查看历史删除数据
    deleHistory () {
      this.option = false
      this.judge = !this.judge
      this.axios.get('history').then((response) => {
        console.log(response.data)
        this.arr = response.data
      })
    },
    // 请求添加数据
    increase () {
      console.log(typeof this.skuVal)
      if (this.skuVal === '' || Number(this.skuVal) === 0 || this.skuVal.charAt(0) === ' ') {
        alert('型号不能为空、不能为数值、前面不能加空格！')
      } else if (isNaN(this.nameVal) === false || Number(this.skuVal) === 0 || this.nameVal.charAt(0) === ' ') {
        alert('产品名不能为空、不能为数值、前面不能加空格！')
      } else if (isNaN(this.priceVal) === false && this.priceVal > 0) {
        this.axios.get('index.php/add',
          {
            params: {
              skuVal: this.skuVal,
              nameVal: this.nameVal,
              priceVal: this.priceVal
            }
          })
          .then((response) => {
            console.log('添加成功!')
            this.arr = response.data
            this.skuVal = ''
            this.nameVal = ''
            this.priceVal = ''
            this.addShow()
          }).catch((error) => {
            console.log('添加失败!' + error)
          })
      } else {
        alert('价格必须为有效数值且大于0!')
      }
    },
    // 请求删除数据
    dele (en) {
      let option = confirm(' 确定删除此数据吗？')
      if (option === true) {
        // this.arr.splice(a, 1)
        this.axios.get('index.php/dele',
          {
            params: {
              ID: en
            }
          })
          .then((response) => {
            console.log('删除成功!')
            console.log(response)
            this.arr = response.data
          }).catch((error) => {
            console.log('删除失败!' + error)
          })
      } else {}
    },
    // 修改数据内容
    skuContent (en, index) {
      console.log('触发：修改型号')
      console.log(en)
      if (en === '' || Number(en) === 0 || en.charAt(0) === ' ') {
        alert('型号不能为空、不能为数值、前面不能加空格！')
        this.axios.get('').then((response) => {
          this.arr = response.data
        })
      } else {
        this.axios.get('index.php/updata',
          {
            params: {
              sku: en,
              product_id: this.arr[index].product_id
            }
          })
          .then((response) => {
            console.log('修改成功!')
            this.arr = response.data
          }).catch((error) => {
            console.log('修改失败!' + error)
          })
      }
    },
    nameContent (index) {
      let value = this.arr[index].name
      if (isNaN(value) === false || Number(value) === 0 || value.charAt(0) === ' ') {
        alert('产品名不能为空、不能为数值、前面不能加空格！')
        this.axios.get('').then((response) => {
          this.arr = response.data
        })
      } else {
        this.axios.get('index.php/updataName',
          {
            params: {
              product_id: this.arr[index].product_id,
              name: value
            }
          })
          .then((response) => {
            console.log('修改成功!')
            this.arr = response.data
          }).catch((error) => {
            console.log('修改失败!' + error)
          })
      }
    },
    priceContent (index) {
      let value = this.arr[index].specials_price
      console.log(value)
      if (isNaN(value) === false && value > 0) {
        this.axios.get('index.php/updataPrice',
          {
            params: {
              product_id: this.arr[index].product_id,
              price: value
            }
          })
          .then((response) => {
            console.log('修改成功!')
            this.arr = response.data
          }).catch((error) => {
            console.log('修改失败!' + error)
          })
      } else {
        alert('价格不能为空且必须为数值')
        this.axios.get('').then((response) => {
          this.arr = response.data
        })
      }
    },
    // 请求删除所有选中状态的数据
    everyDele () {
      this.option = false
      this.axios.get('index.php/everyDele',
        {
          params: {
            product_id: this.arrIds
          }
        })
        .then((response) => {
          console.log('修改成功!')
          this.arrIds = []
          this.arr = response.data
        }).catch((error) => {
          console.log('修改失败!' + error)
        })
    },
    // 恢复删除数据
    recover () {
      this.option = false
      this.axios.get('index.php/recover',
        {
          params: {
            product_id: this.arrIds
          }
        })
        .then((response) => {
          console.log('修改成功!')
          this.arrIds = []
          this.arr = response.data
        }).catch((error) => {
          console.log('修改失败!' + error)
        })
    },
    // 显示和隐藏添加数据的弹窗
    addShow () {
      this.show = !this.show
    },
    // 点击改变checked状态,并储存进arrIds
    CheckAll () {
      this.option = !this.option
      if (this.option) {
        this.arrIds = []
        for (var i = 0; i < this.arr.length; i++) {
          this.arrIds.push(this.arr[i].product_id)
        }
      } else {
        this.arrIds = []
      }
      console.log(this.arrIds)
    },
    checkOne (arrId) {
      let indindex = this.arrIds.indexOf(arrId)
      if (indindex > -1) {
        this.arrIds.splice(indindex, 1)
      } else {
        this.arrIds.push(arrId)
      }
      console.log(this.arrIds)
    }
  },
  computed: {
    message () {
      var arr = this.Message.split(' ')
      return arr.map(function (e) {
        return e.slice(0, 1).toUpperCase() + e.slice(1)
      }).join(' ')
    },
    fullName: {
      get () {
        return this.firstName + ' ' + this.lastName
      },
      set (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  mounted () {
    this.fullName = 'John Doe'
    this.value = 123
    this.practice = Object.assign({}, this.practice, {
      id: 27,
      favoriteColor: 'Vue Green'
    })
  },
  watch: {
    value: function (newValue, oldValue) {
      this.demo = oldValue + ' ' + newValue
    }
  }
}
</script>
<style scoped>
  .about {height: 100%;}
  .option {
    max-width: 500px;
    margin: 10px auto 0 auto;
    text-align: left;
    padding: 10px;
    border: dashed saddlebrown 1px;
    border-bottom: none;
    user-select: none;
  }
  .option>span {
    display: flex;
    border: solid saddlebrown 1px;
    flex-flow: row wrap;
  }
  .option>span>label:hover {
    cursor: pointer;
  }
  .option>span>input,.option>span>button {
    min-width: 50px;
    height: 35px;
    margin: 5px 10px;
  }
  .option>span>input:last-of-type {
    min-width: 90px;
  }
  .option>span>input:hover,.option>span>button:hover,#about_ul>li>input:hover {
    cursor: pointer;
    border: 0;
    box-shadow: 0 0 0 1px skyblue;
    background-color: yellowgreen;
  }
  #about_ul {
    max-width: 500px;
    max-height: 500px;
    margin: 0 auto;
    padding: 10px;
    text-align: left;
    border: dashed saddlebrown 1px;
    list-style-type: none;
    user-select:none;
    overflow: hidden;
    overflow-y: scroll;
  }
  #about_ul::-webkit-scrollbar {
    display: none;
  }
  #about_ul>li {
    border: solid saddlebrown 1px;
    margin-bottom: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  #about_ul>li:nth-last-of-type(1){
    margin-bottom: 0;
  }
  #about_ul>li:hover {
    box-shadow: 0 0 0 4px skyblue;
  }
  #about_ul>li>input {
    height: 50px;
    flex: 1;
    margin-right: 10px;
    flex-basis: 20px;
  }
  #about_ul>li>label,.option>span>label {
    padding: 10px;
    display: inline-block;
    width: 100%;
    flex: 5;
  }
  #about_ul>li>label:hover {
    cursor: pointer;
  }
  #about_ul>li>label>p {
    max-width: 450px;
  }
  .itemInfo>input[type="text"]{
    box-sizing: border-box;
    padding: 7px;
    margin-top: 5px;
    border: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .itemInfo>input[type="text"]:focus{
    outline: 0;
    border-radius: 5px;
    box-shadow: 0 0 0 3px skyblue;
  }
  .itemInfo>img {
    height: 50px;
    width: 50px;
  }
  article {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: #00000060;
    user-select: none;
  }
  .addAlert {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    min-width: 200px;
    min-height: 220px;
    max-width: 300px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .addAlert>input[type="text"] {
    width: 80%;
    height: 20px;
    padding: 5px;
    margin-bottom: 15px;
    border: 1px solid #00000060;
    border-radius: 5px;
  }
  .addAlert>input[type="text"]:focus {
    outline: 0;
    box-shadow: 0px 0px 0px 1px black;
  }
  .button {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .button>input {
    border: 0;
    height: 40px;
    width: 60px;
    margin-right: 20px;
    border-radius: 5px;
  }
  .button>input:hover {
    cursor: pointer;
    background-color: skyblue;
  }
  .button>input:focus {
    outline: 0;
    box-shadow: 0px 0px 0px 1px black;
  }
</style>
