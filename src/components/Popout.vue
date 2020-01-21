<template>
    <article>
      <div class="addAlert">
        <!-- <input type="text" placeholder="型号" v-model="skuVal"> -->
        <p><slot name="username"></slot><input type="text" placeholder="型号"></p>
        <!-- <input type="text" placeholder="产品名" v-model="nameVal"> -->
        <p><slot name="password"></slot><input type="text" placeholder="产品名"></p>
        <!-- <input type="text" placeholder="价格" v-model="priceVal"> -->
        <p><slot name="verify"></slot><input type="text" placeholder="价格"><p>
        <div class="button">
          <input type="button" value="确定" @click="increase()">
          <input type="button" value="取消" @click="addShow()">
        </div>
      </div>
    </article>
</template>
<style scoped>
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
  .addAlert>p {width: 80%;}
  .addAlert>p>input[type="text"] {
    width: 100%;
    height: 20px;
    padding: 5px;
    margin-bottom: 15px;
    border: 1px solid #00000060;
    border-radius: 5px;
  }
  .addAlert>p>input[type="text"]:focus {
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
