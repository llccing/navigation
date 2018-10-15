<template>
  <div class="about-timer">

    <div class="show">
      <h2 style="text-align: center;">正计时</h2>
      <div class="show-time" :style="{'font-size': `${fontSize}px`}">
        <h1>
          <span>{{showMinutes}}</span>
          <span class="point">:</span>
          <span>{{showSeconds}}</span>
        </h1>
      </div>
      <div class="btn-wrap">
        <el-button-group>
          <el-button v-if="!doing" type="primary" @click="startTime">开始</el-button>
          <el-button v-else type="primary" @click="pauseTime">暂停</el-button>
          <el-button @click="resetTime">重置</el-button>
          <el-button @click="fontSizePlus" type="info" icon="el-icon-plus"></el-button>
          <el-button @click="fontSizeMinus" type="info" icon="el-icon-minus"></el-button>
          <el-button @click="toIndex" type="info" icon="el-icon-menu"></el-button>
        </el-button-group>

      </div>
    </div>

    <audio style="display: none;" id="audioEle" controls preload="auto">
      <source src="../../assets/timer.alert.mp3" /> sorry，您的浏览器不支持audio标签，您可以试试Chrome浏览器。
    </audio>
  </div>
</template>
<script>
export default {
  name: 'timer',
  data() {
    return {
      timeInterval: '',
      minutes: 0,
      seconds: 0,
      // 是否在计时中
      doing: false,
      fontSize: 100,
    }
  },
  methods: {
    // 开始计时
    startTime() {
      this.doing = !this.doing

      if (!this.minutes) {
        this.minutes = 0
      }
      if (!this.seconds) {
        this.seconds = 0
      }

      let totalSeconds = this.minutes * 60 + Number.parseInt(this.seconds)

      this.timeInterval = setInterval(() => {
        totalSeconds++
        this.minutes = Number.parseInt(totalSeconds / 60, 10)
        this.seconds = totalSeconds % 60
      }, 1000)
    },

    // 暂停计时
    pauseTime() {
      this.doing = !this.doing
      if (!this.doing) {
        clearInterval(this.timeInterval)
      }
    },

    // 重置时间
    resetTime() {
      this.minutes = 0
      this.seconds = 0
      this.doing = false
      clearInterval(this.timeInterval)
    },

    fontSizePlus() {
      this.fontSize += 10
    },
    fontSizeMinus() {
      this.fontSize -= 10
    },
    toIndex(){
      this.$router.push('/')
    }
  },
  computed: {
    showMinutes() {
      if (Number.parseInt(this.minutes) < 10) {
        return `0${this.minutes}`
      }
      return this.minutes
    },
    showSeconds() {
      if (Number.parseInt(this.seconds) < 10) {
        return `0${this.seconds}`
      }
      return this.seconds
    },
  },

  mounted() {
    let audioEle = document.getElementById('audioEle')
    document.addEventListener('touchstart', function() {
      audioEle.muted = true
      audioEle.play()

      audioEle.addEventListener('ended', function() {
        audioEle.muted = false
      })
    })
  },
}
</script>
<style>
.about-timer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.wrap {
  width: 600px;
  margin: 0 auto;
  text-align: center;
  text-align: -webkit-center;
  margin-top: 200px;
}

table tr td {
  text-align: center;
  font-size: 24px;
}
.el-input__inner {
  font-size: 24px;
}

.show {
  background: #000;
  color: #fff;
  font-weight: 600;
  font-size: 48px;
  position: absolute;
  bottom: 0;
  top: 0;
  margin: 0 auto;
  width: 100%;
  text-align: center;
}

.show-time {
  margin-top: 100px;
}

.show-time .point {
  position: relative;
  bottom: 5px;
}

.show-time {
  font-size: 120px;
}

@keyframes blink {
  50% {
    color: transparent;
  }
}

.btn-wrap {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 100%;
  text-align: right;
}
</style>
