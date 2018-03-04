<template>
  <div :class="$style.component">
    <div :class="$style.header">{{ list.name }}</div>
    <div
      v-if="cards.length"
      :class="$style['card-container']">
      <card
        v-for="(card, index) in cards"
        :key="index"
        :card="card" />
    </div>
    <div
      v-show="!showAddCard" 
      :class="$style['add-text']"
      @click="toggleAddCard()">
      Add a card...
    </div>
    <div
      v-show="showAddCard"
      :class="$style['add-content']">
      <textarea
        v-model="cardContent"
        :class="$style.textarea"
        ref="textarea">
      </textarea>
      <button
        :class="$style.button"
        @click="addCard()">
        Add
      </button>
      <div
        :class="$style.close"
        @click="toggleAddCard()">
        &#10005;
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Board/Card'

export default {
  name: 'list',
  components: {
    Card
  },
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showAddCard: false,
      cards: [],
      cardContent: ''
    }
  },
  methods: {
    toggleAddCard () {
      this.showAddCard = !this.showAddCard

      if (this.showAddCard) {
        setTimeout(() => {
          this.$refs.textarea.focus()
        }, 0)
      }
    },
    addCard () {
      if (this.cardContent.trim().length) {
        this.cards.push(this.cardContent)
        this.cardContent = ''
      }
    }
  }
}
</script>

<style module>
.component {
  background: #e2e4e6;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  width: 270px;
  margin-right: 10px;
}

.header {
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 700;
  color: #333;
  box-sizing: border-box;
  height: 35px;
}

.add-text {
  color: #838c91;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 10px;
}

.add-text:hover {
  background-color: #cdd2d4;
  color: #4d4d4d;
  text-decoration: underline;
}

.add-content {
  padding: 0px 10px 8px 10px;
}

.textarea {
  border: none;
  outline: none;
  box-shadow: none;
  width: 100%;
  overflow: hidden;
  word-wrap: break-word;
  resize: none;
  height: 60px;
  margin-bottom: 5px;
  border-radius: 3px;
  color: #333;
  font-size: 14px;
  padding: 5px;
}

.button {
  padding: 8px 16px;
  font-weight: 700;
  outline: none;
  border: none;
  background-color: #5aac44;
  color: #fff;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
}

.button:hover {
  background: #519839 100%;
}

.close {
  color: #999;
  display: inline-block;
  font-size: 1.3em;
  vertical-align: middle;
  font-weight: 600;
  cursor: pointer;
  margin-left: 5px;
}

.close:hover {
  color: #4d4d4d;
}

.card-container {
  padding: 8px 10px 0 10px;
  margin-bottom: 5px;
}
</style>
