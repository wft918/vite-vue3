<template>
  <div class="container" id="container">
    <div class="top" id="top"></div>
    <div class="verticalResize" id="verticalResize"></div>
    <div class="bot" id="bot">
      <div class="bot-lt" id="bot-lt"></div>
      <div class="horizontalResize" id="horizontalResize"></div>
      <div class="bot-rt" id="bot-rt"></div>
    </div>
  </div>
</template>
<script setup>
  import { onMounted } from 'vue'

  onMounted(() => {
    Draw()
  })

  
  const Draw = () => {
    // 垂直拖拽
    const container = document.getElementById('container')
    const top = document.getElementById('top')
    const bot = document.getElementById('bot')
    const verticalResize = document.getElementById('verticalResize')
    verticalResize.onmousedown = (event) => {
      verticalResize.style.backgroundColor = 'pink'
      container.onmousemove = (event) => {
        event = event || window.event
        top.style.height = event.clientY - container.getBoundingClientRect().top - 1 + 'px'
        bot.style.height = container.getBoundingClientRect().bottom - event.clientY - 1 + 'px'
        verticalResize.style.top = top.style.height
      }
      container.onmouseup = () => {
        container.onmousemove = null
        container.onmouseup = null
        verticalResize.style.backgroundColor = 'yellow'
      }
    }
    //  底部水平拖拽
    const botLt = document.getElementById('bot-lt')
    const botRt = document.getElementById('bot-rt')
    const horizontalResize = document.getElementById('horizontalResize')
    horizontalResize.onmousedown = (event) => {
      horizontalResize.style.backgroundColor = 'pink'
      bot.onmousemove = (event) => {
        event = event || window.event
        botLt.style.width = event.clientX - container.getBoundingClientRect().left - 1 + 'px'
        botRt.style.width = container.getBoundingClientRect().right - event.clientX - 1 + 'px'
        horizontalResize.style.left = botLt.style.width
      }
      bot.onmouseup = () => {
        bot.onmousemove = null
        bot.onmouseup = null
        horizontalResize.style.backgroundColor = 'red'
      }
    }
  }
</script>
<style scoped>
  .container {
    width: 500px;
    height: 500px;
    margin: 100px 0 0 200px;
    border: 1px solid blue;
    position: relative;
  }

  .top {
    width: 100%;
    height: calc(25% - 2px);
  }

  .verticalResize {
    width: 100%;
    height: 2px;
    position: absolute;
    background-color: yellow;
    cursor: s-resize;
    z-index: 99;
  }

  .bot {
    width: 100%;
    height: 75%;
    position: relative;
    display: flex;
  }

  .bot-lt {
    width: calc(25% - 2px);
    height: 100%;
  }

  .horizontalResize {
    width: 2px;
    height: 100%;
    position: absolute;
    left: 24.4%;
    background-color: red;
    cursor: w-resize;
    z-index: 99;
  }

  .bot-rt {
    width: 75%;
    height: 100%;
  }
</style>