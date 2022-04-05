
// 西瓜视频组件
<template>
  <div style="width: 100%; height: 100%" :id="id"></div>
</template>
<script setup>
import { onMounted, watch } from "vue";
import Player from "xgplayer";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    default: () => "https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4",
  },
  poster: {
    type: String,
    default: () => "http://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
  },
  playsinline: {
    type: Boolean,
    default: true,
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  }
});

watch(
  () => props.videoUrl,
  (newUrl) => {
    initPlayer();
  },
  {
    deep: true,
  }
);

onMounted(() => {
  initPlayer();
});

// 初始化西瓜视频
const initPlayer = () => {
  let player = new Player({
    id: props.id,
    url: props.videoUrl,
    poster: props.poster,
    playsinline: props.playsinline,
    height: props.height,
    width: props.width,
    thumbnail: {
      pic_num: 44,
      width: 160,
      height: 90,
      col: 10,
      row: 10,
      urls: ["//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo-thumbnail.jpg"],
    },
    danmu: {
      comments: [
        {
          duration: 15000,
          id: "1",
          start: 3000,
          txt: "长弹幕长弹幕长弹幕长弹幕长弹幕",
          style: {
            //弹幕自定义样式
            color: "#ff9500",
            fontSize: "20px",
            border: "solid 1px #ff9500",
            borderRadius: "50px",
            padding: "5px 11px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        },
      ],
      area: {
        start: 0,
        end: 1,
      },
    },
    whitelist: [""],
  });
  //  超清、高清、标清 分别对应的地址
  player.emit('resourceReady', [{ name: '超清', url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4' }, { name: '高清', url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-480p.mp4' }, { name: '标清', url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4' }]);
};
</script>
<style scoped>
</style>